const axios = require("axios");
const {POST, getManagementApiToken, getauth0userDetails, updateUserAppMetadata} = require("./route"); // Adjust the path to your module
const { getSession } = require("@auth0/nextjs-auth0");
const Stripe = require("stripe");
import { lock } from './route'; 
const { NextRequest, NextResponse } = require("next/server");

jest.mock("axios");
jest.mock("@auth0/nextjs-auth0");
jest.mock("stripe");
jest.mock("next-auth/react", () => ({
  getSession: jest.fn(),
}));


const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);



jest.mock('stripe', () => {
  const stripeMock = {
    customers: {
      create: jest.fn().mockResolvedValue({ id: 'cus_testId' }),
    },
  };
  return jest.fn(() => stripeMock);
});

// Mock implementation of stripe
const mockStripe = new Stripe('test_key');

describe("getManagementApiToken", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    lock.clear();
  });

  it("should return an access token on success", async () => {
    axios.post.mockResolvedValueOnce({
      data: {
        access_token: "test-access-token",
      },
    });

    const token = await getManagementApiToken();

    expect(axios.post).toHaveBeenCalledWith(
      `https://${process.env.AUTH0_DOMAIN}/oauth/token`,
      {
        client_id: process.env.AUTH0_CLIENT_ID,
        client_secret: process.env.AUTH0_CLIENT_SECRET,
        audience: `https://${process.env.AUTH0_DOMAIN}/api/v2/`,
        grant_type: "client_credentials",
      }
    );
    expect(token).toBe("test-access-token");
  });

  it("should throw an error if the response is invalid", async () => {
    axios.post.mockResolvedValueOnce({
      data: {},
    });

    await expect(getManagementApiToken()).rejects.toThrow(
      "Invalid response from Auth0"
    );
  });

  it("should throw an error if the API call fails", async () => {
    axios.post.mockRejectedValueOnce(new Error("API call failed"));

    await expect(getManagementApiToken()).rejects.toThrow("API call failed");
  });
});

describe("getauth0userDetails", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return user details on success", async () => {
    const mockToken = "test-token";
    const mockUserId = "test-user-id";
    const mockUserDetails = { id: mockUserId, name: "Test User" };

    axios.post.mockResolvedValueOnce({
      data: {
        access_token: mockToken,
      },
    });

    axios.get.mockResolvedValueOnce({ data: mockUserDetails });

    const userDetails = await getauth0userDetails(mockUserId);

    expect(axios.post).toHaveBeenCalledWith(
      `https://${process.env.AUTH0_DOMAIN}/oauth/token`,
      {
        client_id: process.env.AUTH0_CLIENT_ID,
        client_secret: process.env.AUTH0_CLIENT_SECRET,
        audience: `https://${process.env.AUTH0_DOMAIN}/api/v2/`,
        grant_type: "client_credentials",
      }
    );

    expect(axios.get).toHaveBeenCalledWith(
      `https://${process.env.AUTH0_DOMAIN}/api/v2/users/${mockUserId}`,
      {
        headers: { Authorization: `Bearer ${mockToken}` },
      }
    );

    expect(userDetails).toEqual(mockUserDetails);
  });

  it("should throw an error if the response is invalid", async () => {
    const mockToken = "test-token";
    const mockUserId = "test-user-id";

    axios.post.mockResolvedValueOnce({
      data: {
        access_token: mockToken,
      },
    });

    axios.get.mockResolvedValueOnce({ data: null });

    await expect(getauth0userDetails(mockUserId)).rejects.toThrow(
      "Invalid response from Auth0"
    );
  });

  it("should throw an error if the API call fails", async () => {
    const mockToken = "test-token";
    const mockUserId = "test-user-id";
    const mockError = new Error("API call failed");

    axios.post.mockResolvedValueOnce({
      data: {
        access_token: mockToken,
      },
    });

    axios.get.mockRejectedValueOnce(mockError);

    await expect(getauth0userDetails(mockUserId)).rejects.toThrow(
      "API call failed"
    );
  });
});

describe("updateUserAppMetadata", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return updated app_metadata on success", async () => {
    const mockToken = "test-token";
    const mockUserId = "test-user-id";
    const mockMetadata = { key: "value" };
    const mockResponseData = { id: mockUserId, app_metadata: mockMetadata };

    axios.post.mockResolvedValueOnce({
      data: {
        access_token: mockToken,
      },
    });

    axios.patch.mockResolvedValueOnce({ data: mockResponseData });

    const response = await updateUserAppMetadata(mockUserId, mockMetadata);

    expect(axios.post).toHaveBeenCalledWith(
      `https://${process.env.AUTH0_DOMAIN}/oauth/token`,
      {
        client_id: process.env.AUTH0_CLIENT_ID,
        client_secret: process.env.AUTH0_CLIENT_SECRET,
        audience: `https://${process.env.AUTH0_DOMAIN}/api/v2/`,
        grant_type: "client_credentials",
      }
    );

    expect(axios.patch).toHaveBeenCalledWith(
      `https://${process.env.AUTH0_DOMAIN}/api/v2/users/${mockUserId}`,
      { app_metadata: mockMetadata },
      { headers: { Authorization: `Bearer ${mockToken}` } }
    );

    expect(response).toEqual(mockResponseData);
  });

  it("should throw an error if the response is invalid", async () => {
    const mockToken = "test-token";
    const mockUserId = "test-user-id";
    const mockMetadata = { key: "value" };

    axios.post.mockResolvedValueOnce({
      data: {
        access_token: mockToken,
      },
    });

    axios.patch.mockResolvedValueOnce({ data: null });

    await expect(
      updateUserAppMetadata(mockUserId, mockMetadata)
    ).rejects.toThrow("Error updating app_metadata");
  });

  it("should throw an error if the API call fails", async () => {
    const mockToken = "test-token";
    const mockUserId = "test-user-id";
    const mockMetadata = { key: "value" };
    const mockError = new Error("API call failed");

    axios.post.mockResolvedValueOnce({
      data: {
        access_token: mockToken,
      },
    });

    axios.patch.mockRejectedValueOnce(mockError);

    await expect(
      updateUserAppMetadata(mockUserId, mockMetadata)
    ).rejects.toThrow("API call failed");
  });
});

describe("POST handler", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return 401 if the user is not authenticated", async () => {
    getSession.mockResolvedValueOnce(null);

    const req = new NextRequest("http://localhost/api/createstripecustomer"); 
    const res = await POST(req);

    expect(res.status).toBe(401);
    expect(await res.json()).toEqual({ message: "Not authenticated" }); // Use await with res.json() since it's a promise
  });

  it("should return the existing Stripe customer ID if it exists", async () => {
    const mockSession = {
      user: { sub: "test123", email: "test@example.com" },
    };
    const mockUserDetails = {
      app_metadata: { stripe_customer_id: "cus_12345" },
    };


    const getauth0userDetailsMock = jest.spyOn(require('./route'), 'getauth0userDetails');
    getauth0userDetailsMock.mockResolvedValueOnce(mockUserDetails);
    const getManagementApiTokenMock = jest.spyOn(require('./route'), 'getManagementApiToken');
    getManagementApiTokenMock.mockResolvedValueOnce("test-access-token");


    getSession.mockResolvedValueOnce(mockSession);

    
    axios.post.mockResolvedValueOnce({
      data: { access_token: "test-access-token" },
    });

    axios.get.mockResolvedValueOnce({
      data: mockUserDetails,
    });

    const req = new NextRequest("http://localhost/api/createstripecustomer"); 
    const res = await POST(req);

    expect(await res.json()).toEqual({ stripeCustomerId: "cus_12345" });

  });


  
  it('should return 500 if an error occurs while creating a Stripe customer', async () => {
    const mockSession = { user: { sub: 'test123', email: 'test@example.com' } };
    const mockUserDetails = { app_metadata: {} };

    getSession.mockResolvedValueOnce(mockSession);

    // Mock getauth0userDetails within this test case
    const getauth0userDetailsMock = jest.spyOn(require('./route'), 'getauth0userDetails');
    getauth0userDetailsMock.mockResolvedValueOnce(mockUserDetails);

    // Mock Stripe customer's create method to throw an error
    const stripeMock = {
      customers: {
        create: jest.fn().mockRejectedValueOnce(new Error('Stripe error')),
      },
    };
    Stripe.mockImplementation(() => stripeMock);

    const req = new NextRequest('http://localhost/api/createstripecustomer'); 
    const res = await POST(req);

    expect(res.status).toBe(500);
    expect(await res.json()).toEqual({ message: 'Internal Server Error' });

    // Restore the original implementation
    getauth0userDetailsMock.mockRestore();
  });

  it('should create a new Stripe customer if no existing customer ID is found', async () => {
    const mockSession = { user: { sub: 'test123', email: 'test@example.com' } };
    const mockUserDetails = { app_metadata: {} };

    getSession.mockResolvedValueOnce(mockSession);

    // Mock getauth0userDetails within this test case
    const getauth0userDetailsMock = jest.spyOn(require('./route'), 'getauth0userDetails');
    getauth0userDetailsMock.mockResolvedValueOnce(mockUserDetails);

    // Mock updateUserAppMetadata within this test case
    const updateUserAppMetadataMock = jest.spyOn(require('./route'), 'updateUserAppMetadata');
    updateUserAppMetadataMock.mockResolvedValueOnce({});

    // Simulate the API request
    const req = new NextRequest('http://localhost/api/createstripecustomer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    });
    const res = await POST(req);

    expect(await res.json()).toEqual({ stripeCustomerId: 'cus_testId' });

    // Restore the original implementations
    getauth0userDetailsMock.mockRestore();
    updateUserAppMetadataMock.mockRestore();
  });

  it('should return 429 if user creation is already in progress', async () => {
    const mockSession = { user: { sub: 'test123', email: 'test@example.com' } };
    const mockUserDetails = { app_metadata: {} };

    getSession.mockResolvedValueOnce(mockSession);

    // Mock getauth0userDetails to simulate a user without a Stripe customer ID
    const getauth0userDetailsMock = jest.spyOn(require('./route'), 'getauth0userDetails');
    getauth0userDetailsMock.mockResolvedValueOnce(mockUserDetails);

    // Simulate that the user creation is already in progress
    lock.set('test123', true);

    const req = new NextRequest('http://localhost/api/createstripecustomer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    });

    const res = await POST(req);

    expect(res.status).toBe(429);
    expect(await res.json()).toEqual({ message: 'User creation in progress' });

    // Clean up
    lock.delete('test123');
    getauth0userDetailsMock.mockRestore();
  });
});
