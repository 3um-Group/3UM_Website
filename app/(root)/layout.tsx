import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { Auth0Provider } from '@auth0/auth0-react';


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <UserProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </UserProvider>
  );
}
