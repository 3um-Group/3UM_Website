"use client";
import React, { useState, useCallback } from "react";

const NewsLetter: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  const HUBSPOT_PORTAL_ID = process.env.HUBSPOT_PORTAL_ID;
  const HUBSPOT_FORM_ID = process.env.HUBSPOT_FORM_ID;


  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) {
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fields: [
              {
                name: "email",
                value: email,
              },
            ],
            context: {
              pageUri: window.location.href,
              pageName: document.title,
            },
          }),
        }
      );

      if (response.ok) {
        setShowModal(true);
        setEmail("");
      } else {
        const errorData = await response.json();
        console.error("HubSpot API error:", errorData);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [email]);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="mt-6">
      <h5 className="font-heading-size-100 font-extrabold text-gray-50">
        Supercharge your inbox
      </h5>
      <p className="font-paragraph-size-200 pb-3 pt-1 font-medium">
        Sign up for our developer newsletter.
      </p>
      <form className="flex items-center space-x-4" onSubmit={handleSubmit}>
        <input
          className="block w-2/3 px-5 py-3 outline-none border rounded shadow-sm text-gray-300 border-[#3c3c3c] bg-[#121212] focus:border-white focus:ring-1 focus:ring-white"
          type="email"
          placeholder="Your e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          className="group relative w-1/3 rounded-lg bg-gray-100 text-gray-700 px-4 py-3 transition-all hover:text-gray-500"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? "Subscribing..." : "Subscribe"}
        </button>
      </form>

      {showModal && (
       <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[9999]" onClick={closeModal}>
       <div className="w-96 h-48 border rounded-lg p-5 shadow bg-white" onClick={(e) => e.stopPropagation()}>
         <h2 className="text-lg text-center text-gray-600 leading-relaxed mt-3">
           Successfully Subscribed To Our Developer Newsletter !!!
         </h2>
         <div className="flex justify-center items-center mt-3">
           <button
             className="w-32 py-2 bg-3UM-color hover:bg-black text-white text-sm font-medium rounded-md"
             onClick={closeModal}
           >
             OK
           </button>
         </div>
       </div>
     </div>
     
      )}
    </div>
  );
};

export default NewsLetter;
