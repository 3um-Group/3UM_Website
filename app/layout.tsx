import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Provider from "@/components/Provider";
import HubspotChatbot from "@/components/Hubspot"
import { 
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from "@clerk/nextjs";


import "./globals.css";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "3UM",
  description: "3UM website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        <Provider>
          <body className={inter.className}>
            {children}
            <HubspotChatbot></HubspotChatbot>
          </body>
        </Provider>
      </html>
  );
}
