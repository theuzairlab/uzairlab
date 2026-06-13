"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

const navigationItems = [
  { name: "PROJECTS", href: "work" },
  { name: "ARSENAL", href: "stack" },
  { name: "STORY", href: "about" },
  { name: "CONTACT", href: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0a0a0a]/80 backdrop-blur-xl shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 lg:px-16 py-4">
          <a
            href="#home"
            onClick={(e) => handleScroll(e, "home")}
            className="font-display text-xl font-bold text-white cursor-pointer"
          >
            &lt; UZAIR&apos;S<span className="text-accent-green">.LAB</span> /&gt;
          </a>

          <ul className="hidden md:flex items-center gap-8">
            {navigationItems.map((item) => (
              <li key={item.name}>
                <a
                  href={`#${item.href}`}
                  onClick={(e) => handleScroll(e, item.href)}
                  className="text-[#a1a1a1] hover:text-white transition-colors text-sm font-medium relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-green transition-all group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            onClick={(e) => handleScroll(e, "contact")}
            className="hidden md:inline-flex items-center gap-2 bg-accent-green text-[#0a0a0a] px-5 py-2.5 rounded-lg font-semibold text-sm hover:brightness-110 transition-all pulse-scale"
          >
            Let&apos;s Build
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden text-accent-green"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-[85%] max-w-sm bg-[#0a0a0a] border-l border-card p-6 transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            onClick={() => setIsOpen(false)}
            className="text-[#a1a1a1] hover:text-white mb-8"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>

          <ul className="flex flex-col gap-6">
            {navigationItems.map((item) => (
              <li key={item.name}>
                <a
                  href={`#${item.href}`}
                  onClick={(e) => handleScroll(e, item.href)}
                  className="text-2xl font-display font-semibold text-white hover:text-accent-green transition-colors"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            onClick={(e) => handleScroll(e, "contact")}
            className="mt-10 inline-flex items-center gap-2 bg-accent-green text-[#0a0a0a] px-6 py-3 rounded-lg font-semibold"
          >
            Let&apos;s Build
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </>
  );
}
