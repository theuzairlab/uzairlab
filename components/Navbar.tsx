"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, Linkedin, Twitter, Facebook, Github, Instagram, ChevronDown } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
// import { auth } from "@/auth";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { data: session } = useSession();

  // const session = await auth();

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-screen bg-black/60 shadow-lg z-50 flex items-center justify-between px-10 md:px-36 py-3">
        <div className="logo_box">
          <Link className='logo' href={'/'}>Uzair's Lab</Link>
        </div>

        <ul className="hidden md:flex space-x-10 text-gray-300">
          {["Home", "About", "Services", "Project", "Contact"].map((item) => (
            <li key={item}>
              <Link href={`/${item.toLowerCase()}`} className="hover:text-yellow-400 transition-all">
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {(!session) ? (
          <Link href={"/login"}
            className="text-3xl text-yellow-400"
          >
            Login
          </Link>
        ) : (
          <div className="relative">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setDropdownOpen(!dropdownOpen)}>
              <img src={session?.user?.image || ""} alt={session?.user?.name || "user"} className="w-10 h-10 rounded-full" />
              <span className="text-white">{session?.user?.name || session?.user?.email}</span>
              <ChevronDown className="text-white" size={18} />
            </div>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-black text-white rounded-lg shadow-lg py-2">
                <p className="px-4 py-2">{session?.user?.name}</p>
                <p className="px-4 py-2 text-sm text-gray-400">{session?.user?.email}</p>
                <button className="w-full text-left px-4 py-2 hover:bg-gray-700" onClick={() => signOut()}>Logout</button>
              </div>
            )}
          </div>
        )}

        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden text-3xl text-yellow-400"
        >
          <Menu />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black/70 z-50 transition-transform transform ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="fixed right-0 w-[80%] h-full bg-black text-white p-5">
          <button
            onClick={() => setIsOpen(false)}
            className="text-2xl mb-5 text-gray-400 hover:text-white transition-transform hover:rotate-360"
          >
            <X />
          </button>

          <ul className="flex flex-col space-y-5 text-lg">
            {["Home", "About", "Services", "Project", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  href={`/${item.toLowerCase()}`}
                  className="block py-2 hover:text-yellow-400 transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          {/* Social Links */}
          <div className="flex justify-center space-x-4 mt-10">
            {[
              { icon: <Linkedin />, link: "https://www.linkedin.com/feed/" },
              { icon: <Twitter />, link: "https://twitter.com/home" },
              { icon: <Facebook />, link: "https://www.facebook.com/" },
              { icon: <Instagram />, link: "https://www.instagram.com/uzairuzair40/" },
              { icon: <Github />, link: "https://github.com/Uzairmalik1" },
            ].map(({ icon, link }, index) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-800 hover:bg-yellow-400 hover:text-black transition-all"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes moveText { 
          0%, 10%, 100% {
            background-position: -13rem 0;
          }
          65%, 85% {
            background-position: 0rem 0;
          }
        }

        @keyframes blinkCursor {
  0%, 10%, 100% {
    width: 0;
  }
  65%, 78%, 85% {
    width: 100%;
    opacity: 1;
  }
  75%, 85% {
    opacity: 0;
  }
}

        @keyframes moveCursorText {
          0%, 10%, 100% { width: 0; }
          65%, 78%, 85% { width: 100%; opacity: 1; }
          75%, 85% { opacity: 0; }
        }

        .animate-text {
          animation: moveText 4s linear infinite;
          animation-delay: 1s;
        }

        .animate-cursor {
          animation: moveCursorText 4s linear infinite;
          animation-delay: 1s;
        }
      `}</style>
    </>
  );
};

export default NavBar;
