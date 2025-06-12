"use client"
import React, { useState } from 'react'
import MovingLines from '../MovingLines'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiChevronRight, FiSend } from 'react-icons/fi'
import { Facebook, Github, Instagram, Linkedin, Youtube } from 'lucide-react'
import { toast } from 'react-hot-toast'
import ScheduleMeeting from '../ScheduleMeeting'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      toast.success('Message sent successfully!')
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    } catch (error) {
      toast.error('Failed to send message. Please try again.')
      console.error('Error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="relative w-full min-h-screen bg-[#131313] text-white py-20">
      <MovingLines />
      <div className="relative z-10 w-full flex flex-col items-center justify-start gap-8">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='w-full max-w-6xl px-4 text-center'
        >
          <p className="text-lg font-bold text-slate-400">Get in Touch</p>
          <h2 className="text-5xl font-normal mt-2 mb-4">Contact <span className="text-[#C9F31D]">Me</span></h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? I'm always open to discussing new ideas, 
            collaborations, or freelance opportunities.
          </p>
        </motion.div>

        <div className="w-full max-w-6xl px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className='bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800'
          >
            <h3 className="text-2xl font-semibold mb-6">Send Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-[#C9F31D] text-white placeholder-gray-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Your Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-[#C9F31D] text-white placeholder-gray-500"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Discussion"
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-[#C9F31D] text-white placeholder-gray-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-[#C9F31D] text-white placeholder-gray-500 resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-4 bg-[#C9F31D] text-black font-medium rounded-lg hover:bg-[#d4ff33] transition-colors flex items-center justify-center gap-2 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                <FiSend className="w-5 h-5" />
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>

          {/* Right Column - Contact Info & Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Quick Call Button */}
            <motion.button
              onClick={() => setIsScheduleModalOpen(true)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full p-6 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-[#C9F31D] transition-colors flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gray-800 rounded-lg text-[#C9F31D] group-hover:bg-[#C9F31D] group-hover:text-black transition-colors">
                  <FiPhone className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-medium text-gray-300">Book a Quick Call</h4>
                  <p className="text-gray-400">Schedule a 15-30 minute discussion</p>
                </div>
              </div>
              <FiChevronRight className="w-6 h-6 text-gray-400 group-hover:text-[#C9F31D] transition-colors" />
            </motion.button>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              <div className="p-6 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gray-800 rounded-lg text-[#C9F31D]">
                    <FiMail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-300">Email</h4>
                    <a href="mailto:uzairullah397@gmail.com" className="text-gray-400 hover:text-[#C9F31D] transition-colors">
                      uzairullah397@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gray-800 rounded-lg text-[#C9F31D]">
                    <FiMapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-300">Location</h4>
                    <p className="text-gray-400">Islamabad, Pakistan</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-medium text-gray-300 mb-4">Connect with Me</h4>
              <div className="flex gap-4 flex-wrap">
                {[
                  { icon: <Linkedin className="w-5 h-5" />, link: "https://www.linkedin.com/in/uzairullah-", label: "LinkedIn" },
                  { icon: <Github className="w-5 h-5" />, link: "https://github.com/theuzairlab", label: "GitHub" },
                  { icon: <Youtube className="w-5 h-5" />, link: "https://www.youtube.com/@uzairslab", label: "YouTube" },
                  { icon: <Facebook className="w-5 h-5" />, link: "https://web.facebook.com/profile.php?id=100035006707888", label: "Facebook" },
                  { icon: <Instagram className="w-5 h-5" />, link: "https://www.instagram.com/uzairullah397/", label: "Instagram" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-[#C9F31D] transition-colors text-gray-400 hover:text-[#C9F31D] flex items-center gap-2"
                  >
                    {social.icon}
                    <span className="sr-only">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Calendly Modal */}
      <ScheduleMeeting 
        isOpen={isScheduleModalOpen}
        onClose={() => setIsScheduleModalOpen(false)}
      />
    </div>
  )
}

export default Contact 