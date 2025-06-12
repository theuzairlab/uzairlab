"use client";

import NavBar from "@/components/Navbar";
import Footer from "@/components/mainCompo/Footer";
import { Toaster } from 'react-hot-toast';
import { SessionProvider } from "next-auth/react";

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <SessionProvider>
      <div className="flex min-h-screen flex-col">
        <main className="flex-grow">
          {children}
        </main>
        <Toaster 
          position="bottom-right"
          toastOptions={{
            duration: 5000,
            style: {
              background: '#333',
              color: '#fff',
            },
          }}
        />
      </div>
    </SessionProvider>
  );
} 