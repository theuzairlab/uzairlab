"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'
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
    content: "Uzair did an amazing job building our e-commerce site. From the design to the tech behind it, everything turned out exactly how we wanted. He’s super professional and easy to work with.",
    rating: 5,
    location: "Peshawar, Pakistan"
  }
]

const TestimonialCard = ({ testimonial }: { testimonial: any }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 rounded-xl p-6 relative border border-gray-800"
    >
      <div className="absolute top-6 right-6 text-[#C9F31D]">
        <Quote className="w-8 h-8 opacity-50" />
      </div>

      <div className="flex items-center gap-4 mb-6">
        <div className="relative w-16 h-16 rounded-full overflow-hidden">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white">{testimonial.name}</h4>
          <p className="text-[#C9F31D] text-sm">{testimonial.role}</p>
          <p className="text-gray-400 text-sm">{testimonial.company}</p>
        </div>
      </div>

      <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>

      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-800">
        <div className="flex items-center">
          {[...Array(testimonial.rating)].map((_, i) => (
            <svg
              key={i}
              className="w-4 h-4 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <span className="text-gray-400 text-sm">{testimonial.location}</span>
      </div>
    </motion.div>
  )
}

const Testimonials = () => {
  const [currentPage, setCurrentPage] = useState(0)
  const testimonialsPerPage = 2
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
          className="text-center mb-12"
        >
          <p className="text-lg font-bold text-slate-400">Testimonials</p>
          <h2 className="text-5xl font-normal mt-2">Client <span className="text-[#C9F31D]">Feedback</span></h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Hear what my clients have to say about their experience working with me and the results we achieved together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {currentTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prevPage}
            className="p-2 rounded-full bg-gray-900 text-white hover:bg-[#C9F31D] hover:text-black transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <div className="flex gap-2">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === currentPage ? 'w-6 bg-[#C9F31D]' : 'bg-gray-700'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextPage}
            className="p-2 rounded-full bg-gray-900 text-white hover:bg-[#C9F31D] hover:text-black transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400">
            Want to share your experience? <span className="text-[#C9F31D]"><Link href="#contact">Get in touch</Link></span>
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Testimonials 