import Footer from "@/components/mainCompo/Footer";
import NavBar from "@/components/Navbar";
import { SessionProvider } from "next-auth/react";

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <SessionProvider>
            <main className="overflow-hidden">
                <NavBar />
                {children}
                <Footer/>
            </main>
        </SessionProvider>
    );
}