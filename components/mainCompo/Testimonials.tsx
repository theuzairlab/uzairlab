"use client"
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import MovingLines from '../MovingLines'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import Link from 'next/link'

const testimonials = [
  {
    id: 1,
    name: "Abdul Malik Shakir",
    role: "CTO at Zetasoft Solutions",
    company: "Zetasoft Solutions",
    image: "/malik.jpg",
    content: "Uzair is one of the most reliable and skilled developers I've worked with. His grasp on full-stack and AI development is impressive, and he always brings smart, practical solutions to the table.",
    rating: 5,
    location: "Islamabad, Pakistan"
  },  
  {
    id: 2,
    name: "Taseer Mehboob",
    role: "Founder",
    company: "Andazenu",
    image: "/taseer-1.webp",
    content: "Uzair did an amazing job building our e-commerce site. From the design to the tech behind it, everything turned out exactly how we wanted. He's super professional and easy to work with.",
    rating: 5,
    location: "Peshawar, Pakistan"
  }
]

const TestimonialCard = ({ testimonial }: { testimonial: any }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 relative border border-gray-800 hover:border-[#C9F31D] transition-all duration-300 group backdrop-blur-sm"
    >
      {/* Glowing effect */}
      <div className="absolute inset-0 bg-[#C9F31D] rounded-xl opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
      
      <div className="absolute -top-4 -right-4 text-[#C9F31D] bg-gray-900/80 p-4 rounded-xl border border-gray-800 backdrop-blur-sm">
        <Quote className="w-8 h-8" />
      </div>

      <div className="flex items-center gap-6 mb-8">
        <div className="relative w-20 h-20 rounded-xl overflow-hidden border-2 border-gray-800 group-hover:border-[#C9F31D] transition-colors duration-300">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="text-xl font-semibold text-white group-hover:text-[#C9F31D] transition-colors duration-300">{testimonial.name}</h4>
          <p className="text-[#C9F31D] text-sm font-medium">{testimonial.role}</p>
          <p className="text-gray-400 text-sm">{testimonial.company}</p>
        </div>
      </div>

      <p className="text-gray-300 text-lg leading-relaxed mb-6 italic">"{testimonial.content}"</p>

      <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-800">
        <div className="flex items-center gap-1">
          {[...Array(testimonial.rating)].map((_, i) => (
            <svg
              key={i}
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#C9F31D]" />
          <span className="text-gray-400 text-sm">{testimonial.location}</span>
        </div>
      </div>
    </motion.div>
  )
}

const Testimonials = () => {
  const [currentPage, setCurrentPage] = useState(0)
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
  const testimonialsPerPage = isMobile ? 1 : 2
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage)

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  const currentTestimonials = testimonials.slice(
    currentPage * testimonialsPerPage,
    (currentPage + 1) * testimonialsPerPage
  )

  return (
    <div className="relative w-full min-h-screen bg-[#131313] text-white py-20">
      <MovingLines />
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-lg font-bold text-slate-400">Testimonials</p>
          <h2 className="text-5xl font-normal mt-2 mb-4">Client <span className="text-[#C9F31D]">Feedback</span></h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Hear what my clients have to say about their experience working with me and the results we achieved together.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <AnimatePresence mode="wait">
            {currentTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </AnimatePresence>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center justify-center gap-6"
        >
          <button
            onClick={prevPage}
            className="p-3 rounded-xl bg-gray-900/80 text-white hover:bg-[#C9F31D] hover:text-black transition-all duration-300 border border-gray-800 hover:border-[#C9F31D] backdrop-blur-sm"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <div className="flex gap-3">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === currentPage 
                    ? 'w-8 bg-[#C9F31D]' 
                    : 'w-2 bg-gray-700 hover:bg-gray-600'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextPage}
            className="p-3 rounded-xl bg-gray-900/80 text-white hover:bg-[#C9F31D] hover:text-black transition-all duration-300 border border-gray-800 hover:border-[#C9F31D] backdrop-blur-sm"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 text-lg">
            Want to share your experience?{' '}
            <Link 
              href="#contact" 
              className="text-[#C9F31D] hover:underline transition-all duration-300"
            >
              Get in touch
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Testimonials 