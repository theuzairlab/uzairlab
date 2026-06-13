"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUp, Github, Linkedin, Youtube, Instagram } from "lucide-react";
import { sectionVariants, viewportConfig } from "@/lib/motion";

const quickLinks = [
  { name: "PROJECTS", href: "#work" },
  { name: "ARSENAL", href: "#stack" },
  { name: "STORY", href: "#about" },
  { name: "CONTACT", href: "#contact" },
];

const socialLinks = [
  { icon: Linkedin, link: "https://www.linkedin.com/in/uzairlab", label: "LinkedIn" },
  { icon: Github, link: "https://github.com/theuzairlab", label: "GitHub" },
  { icon: Youtube, link: "https://www.youtube.com/@uzairslab", label: "YouTube" },
  { icon: Instagram, link: "https://www.instagram.com/uzairullah397/", label: "Instagram" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-surface py-6 p-2">
      <div className="container-custom card-glow rounded-2xl px-8 py-12">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 justify-between"
        >
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="font-display text-2xl font-bold text-foreground">
            &lt; UZAIR&apos;S<span className="text-accent-green">.LAB</span> /&gt;
            </Link>
            <p className="text-muted-custom text-sm leading-relaxed max-w-xs">
              Full-stack engineer & product builder. I architect, ship, and own
              products — from DNS to deployment.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, link, label }) => (
                <a
                  key={label}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2.5 rounded-lg card-glow hover:text-accent-green transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">Quick Links</h3>
            <nav className="grid grid-cols-2 gap-3">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-custom hover:text-accent-green transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">Get in Touch</h3>
            <div className="space-y-4 text-sm ">
              <a
                href="mailto:uzairullah397@gmail.com"
                className="block text-muted-custom hover:text-accent-green transition-colors"
              >
                uzairullah397@gmail.com
              </a>
              <a
                href="https://www.upwork.com/freelancers/~018fd5ca5b2fb70adc"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-muted-custom hover:text-accent-green transition-colors"
              >
                Upwork Profile →
              </a>
              <p className="text-dim-custom">Islamabad, Pakistan</p>
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-surface">
          <p className="text-dim-custom text-sm">
            © {currentYear} uzair.lab. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-sm text-muted-custom hover:text-accent-green transition-colors"
          >
            Back to top
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
