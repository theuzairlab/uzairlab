"use client"
import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Facebook, Github, Instagram, Linkedin, Youtube } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const navigationLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  const socialLinks = [
    {
      link: "https://www.linkedin.com/in/uzairullah-",
      icon: <Linkedin />
    },
    {
      link: "https://github.com/theuzairlab",
      icon: <Github />
    },
    {
      link: "https://web.facebook.com/profile.php?id=100035006707888",
      icon: <Facebook />
    },
    {
      link: "https://www.youtube.com/@uzairslab",
      icon: <Youtube />
    },
    {
      link: "https://www.instagram.com/uzairullah397/",
      icon: <Instagram />
    },
  ]

  return (
    <footer className='bg-[#0f0f0f] text-white py-16'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12 mb-12'>
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='space-y-4'
          >
            <Link href="/">
              <h2 className='text-2xl font-bold'>Uzair's <span className='text-[#C9F31D]'>Lab</span></h2>
            </Link>
            <p className='text-gray-400'>
              Transforming ideas into reality through innovative web solutions and cutting-edge technology.
            </p>
            <div className='flex space-x-4'>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='text-gray-400 hover:text-[#C9F31D] transition-colors'
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='space-y-4'
          >
            <h3 className='text-xl font-semibold mb-6'>Quick Links</h3>
            <nav className='grid grid-cols-2 gap-4'>
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className='text-gray-400 hover:text-[#C9F31D] transition-colors'
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className='space-y-4'
          >
            <h3 className='text-xl font-semibold mb-6'>Newsletter</h3>
            <p className='text-gray-400'>Subscribe to stay updated with my latest projects and tech insights.</p>
            <form className="flex flex-col sm:flex-row gap-2 w-full">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-[#C9F31D] text-white w-full"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-[#C9F31D] text-black font-medium rounded-lg hover:bg-[#d4ff33] transition-colors w-full sm:w-auto"
              >
                Subscribe
              </button>
            </form>

          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className='pt-8 mt-8 border-t border-gray-800 text-center text-gray-400'
        >
          <p>© {currentYear} Uzair's Lab. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer 