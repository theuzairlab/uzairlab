"use client";
import React, { useState } from "react";
import { Menu, X, Linkedin, Twitter, Facebook, Github, Instagram, ChevronDown } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import LoginModal from "./LoginModal";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const { data: session } = useSession();

  const navigationItems = [
    { name: "Home", href: "home" },
    { name: "About", href: "about" },
    { name: "Experience", href: "experience" },
    { name: "Skills", href: "skills" },
    { name: "Services", href: "services" },
    { name: "Projects", href: "projects" },
    { name: "Contact", href: "contact" }
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close mobile menu if open
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-screen bg-black/60 shadow-lg z-50 flex items-center justify-between px-10 md:px-36 py-3 backdrop-blur-sm">
        <div className="logo_box">
          <a onClick={(e) => handleScroll(e, 'home')} className="logo text-2xl cursor-pointer whitespace-nowrap">Uzair's Lab</a>
        </div>

        <ul className="hidden md:flex space-x-10 text-gray-300">
          {navigationItems.map((item) => (
            <li key={item.name}>
              <a
                href={`#${item.href}`}
                onClick={(e) => handleScroll(e, item.href)}
                className="hover:text-[#C9F31D] transition-all cursor-pointer"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* {!session ? (
          <button
            onClick={() => setLoginModalOpen(true)}
            className="text-[#C9F31D] hover:text-[#d4ff33] transition-all"
          >
            Login
          </button>
        ) : (
          <div className="relative">
            <div 
              className="flex items-center space-x-2 cursor-pointer" 
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <img 
                src={session.user?.image || "/default-avatar.png"} 
                alt={session.user?.name || "user"} 
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="text-white hidden md:inline">{session.user?.name}</span>
              <ChevronDown className="text-white" size={18} />
            </div>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-[#1e1e1e] text-white rounded-lg shadow-lg py-2">
                <div className="px-4 py-2 border-b border-gray-700">
                  <p className="font-medium">{session.user?.name}</p>
                  <p className="text-sm text-gray-400">{session.user?.email}</p>
                </div>
                <button 
                  className="w-full text-left px-4 py-2 hover:bg-gray-700 transition-all"
                  onClick={() => signOut()}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )} */}

        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden text-3xl text-[#C9F31D]"
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
            {navigationItems.map((item) => (
              <li key={item.name}>
                <a
                  href={`#${item.href}`}
                  onClick={(e) => handleScroll(e, item.href)}
                  className="block py-2 hover:text-[#C9F31D] transition-all"
                >
                  {item.name}
                </a>
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
                className="p-3 rounded-full bg-gray-800 hover:bg-[#C9F31D] hover:text-black transition-all"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Login Modal */}
      <LoginModal isOpen={loginModalOpen} onClose={() => setLoginModalOpen(false)} />
    </>
  );
};

export default NavBar;
