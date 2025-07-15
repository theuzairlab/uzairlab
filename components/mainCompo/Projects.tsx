"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import MovingLines from '../MovingLines'
import Image from 'next/image'
import { Github, ExternalLink, ChevronRight } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'

const projectsData = [
  {
    id: 1,
    name: "Editor.ai",
    logo: "/Aditur.png",
    screenshot: "/editur-ai.png",
    shortDescription: "This is a video editing platform that I developed using AI technologies for a content automation startup in May 2025",
    fullDescription: `Editur.ai is an intelligent, AI-powered video editing platform that automatically generates short viral clips from long-form videos. It features smart subtitle generation, auto-cropping for social formats, and content scheduling tools.

This platform was developed for Editur.ai, a startup focused on streamlining video content creation for influencers and marketers.

I’m proud of how this project combined my technical and creative skills to help creators save time and grow their audience.

Key Features:
• Automatic subtitle generation with multi-language support
• AI-powered trending moment detection
• Smart scene transition suggestions
• Real-time collaboration tools
• Export in multiple formats`,
    role: "Full Stack Developer & AI Integration Lead",
    technologies: [
      "Next.js",
      "React.js",
      "TailwindCSS",
      "Framer Motion",
      "JavaScript",
      "TypeScript",
      "NextAuth",
      "MongoDB",
      "Redis",
      "Docker",
      "Git & GitHub",
      "FastAPI",
      "Python",
      "Pydantic",
      "Whisper",
      "postgreSQL",
      "FFmpeg",
      "AWS",
      "AWS S3",
      "AWS EC2",
      "OpenAI API",
      "Stripe"
    ],
    liveDemo: "https://editur.ai",
    github: "https://github.com/ZetaSoftdev/ReelsCreatorApp",
    category: "AI & Video"
  },
  {
    id: 2,
    name: "Andazenu (T-Shirt E-Commerce)",
    logo: "/andazenu.png",
    screenshot: "/andazenu-1.png",
    shortDescription: "This is an e-commerce website that I designed and built from scratch for a fashion brand in Pakistan in April 2025",
    fullDescription: `Andazenu is a minimal, mobile-first clothing store featuring custom design, secure checkout, and modern admin tools for order management. The site supports product uploads, sales tracking, and image hosting through ImageKit.

This platform was created for a local fashion brand targeting Gen Z and digital buyers across Pakistan.

It was a rewarding experience to lead both the design and development of this project and help bring the brand’s vision to life.
  
  Key Features:
  • Product browsing with real-time stock updates  
  • AI-powered sorting for trending items  
  • OTP-based Cash on Delivery checkout  
  • Admin dashboard for managing products, orders & inventory  
  • Mobile-first responsive UI with clean design  
  • Image optimization and fast CDN delivery  
  • Role-based authentication and secure routes`,
    role: "Full Stack Developer",
    technologies: [
      "Next.js (App Router)",
      "TypeScript",
      "Prisma ORM",
      "PostgreSQL",
      "Tailwind CSS",
      "Framer Motion",
      "Resend (OTP Emails)",
      "ImageKit",
      "Shadcn UI",
      "Zustand",
      "React Hook Form",
      "React Toastify",
      "Vercel"
    ],
    liveDemo: "https://andazenu.com",
    github: "https://github.com/theuzairlab/andazenu",
    category: "E-Commerce"
  },
  {
    id: 3,
    name: "Teseer Portfolio & Blog",
    logo: "/taseer-logo.png",
    screenshot: "/taseer.png",
    shortDescription: "Minimal developer portfolio and blog powered by Next.js and Sanity CMS",
    fullDescription: `Teseer is a personal portfolio and blogging platform designed to showcase projects, skills, and technical writing. Built with performance, SEO, and clean design in mind, it uses Sanity CMS for dynamic content management and delivers a seamless user experience.
  
  Key Features:
  • Dynamic project and blog management via Sanity CMS  
  • SEO-optimized and mobile-responsive layout  
  • Smooth animations and page transitions  
  • Clean and minimal design aesthetic  
  • Fast image loading with CDN  
  • Real-time CMS previews for blog posts`,
    role: "Full Stack Developer",
    technologies: [
      "Next.js (App Router)",
      "TypeScript",
      "Tailwind CSS",
      "Sanity CMS",
      "Framer Motion",
      "SMTP Email",
      "Vercel"
    ],
    liveDemo: "https://teseer-portfolio.vercel.app/",
    github: "https://github.com/abdulmalikshakir2001/teseer-portfolio",
    category: "Portfolio & Blog"
  }

]

const ProjectCard = ({ project, onSelect }: { project: any; onSelect: (project: any) => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 group cursor-pointer"
      onClick={() => onSelect(project)}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.screenshot || project.logo}
          alt={project.name}
          fill
          className="object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-[#C9F31D] transition-colors">
          {project.name}
        </h3>
        <p className="text-gray-400 mb-4 line-clamp-2">
          {project.shortDescription}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech: string, index: number) => (
            <span
              key={index}
              className="px-2 py-1 text-sm bg-gray-800 text-gray-300 rounded-full"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 text-sm bg-gray-800 text-gray-300 rounded-full">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>

        <div className="flex items-center text-sm text-gray-400">
          <span>View Details</span>
          <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </motion.div>
  )
}

const ProjectDialog = ({ project, isOpen, onClose }: { project: any; isOpen: boolean; onClose: () => void }) => {
  if (!project) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl bg-[#131313] border-none text-white max-h-[85vh] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
        <DialogHeader className="pb-4">
          <DialogTitle>
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16">
                <Image
                  src={project.logo}
                  alt={project.name}
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white">{project.name}</h3>
                <p className="text-[#C9F31D] mt-1">{project.role}</p>
              </div>
            </div>
          </DialogTitle>
        </DialogHeader>

        <div className="mt-6">
          <div className="relative h-96 w-full mb-6 rounded-lg overflow-hidden">
            <Image
              src={project.screenshot}
              alt={`${project.name} Screenshot`}
              fill
              className="object-cover"
            />
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 whitespace-pre-line">{project.fullDescription}</p>
          </div>

          <div className="mt-6">
            <h4 className="font-semibold text-lg mb-3">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech: string, index: number) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm bg-gray-800 text-gray-300 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-4 mt-8 mb-2">
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#C9F31D] text-black px-4 py-2 rounded-lg hover:bg-[#d4ff33] transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <Github className="w-4 h-4" />
              View Code
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null)

  return (
    <div className="w-full min-h-screen bg-[#070707] text-white py-20 relative overflow-hidden">


      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-lg font-bold text-slate-400">My Work</p>
          <h2 className="text-5xl font-normal mt-2">Featured <span className="text-[#C9F31D]">Projects</span></h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A showcase of my best work, featuring full-stack applications, AI integrations, and innovative solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={setSelectedProject}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400">
            Want to see more? Check out my{" "}
            <a
              href="https://github.com/theuzairlab"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C9F31D] hover:underline"
            >
              GitHub profile
            </a>
          </p>
        </motion.div>
      </div>

      <ProjectDialog
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  )
}

export default Projects