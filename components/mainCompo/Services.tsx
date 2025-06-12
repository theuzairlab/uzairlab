"use client"
import React from 'react'
import MovingLines from '../MovingLines'
import { motion } from 'framer-motion'
import { Code2, Globe, Cpu, Smartphone, Database, BrainCircuit, ServerCog, Video } from 'lucide-react'

const servicesData = [
  {
    title: "Full Stack Development",
    icon: <Code2 className="w-12 h-12" />,
    description: "End-to-end web application development using modern stacks like MERN and Next.js",
    features: [
      "Custom Web Applications",
      "RESTful API & Database Design",
      "Authentication & Authorization",
      "Performance & SEO Optimization",
      "Third-Party API Integrations"
    ],
    color: "#C9F31D"
  },
  {
    title: "AI Integration",
    icon: <BrainCircuit className="w-12 h-12" />,
    description: "Embed powerful AI capabilities into your apps using OpenAI, Whisper, and other tools",
    features: [
      "ChatGPT/LLM Integration",
      "Video & Image AI Processing",
      "NLP & ML API Integration",
      "Custom AI Workflows",
      "AI-Powered SaaS Tools"
    ],
    color: "#FF6B6B"
  },
  {
    title: "SaaS Development",
    icon: <ServerCog className="w-12 h-12" />,
    description: "Build scalable and maintainable SaaS platforms from scratch with subscription models",
    features: [
      "User & Admin Dashboards",
      "Subscription & Payment Integration",
      "Multi-Tenant Architecture",
      "Email & Notification Systems",
      "Deployment & DevOps"
    ],
    color: "#6A89CC"
  },
  {
    title: "DevOps & Cloud Deployment",
    icon: <Cpu className="w-12 h-12" />,
    description: "Deploy and scale web applications using modern cloud infrastructure",
    features: [
      "CI/CD Pipelines",
      "Docker & Server Setup",
      "Domain & SSL Configuration",
      "Monitoring & Logs",
      "Cloud Platforms (VPS, Vercel, Render)"
    ],
    color: "#6C5CE7"
  },
  {
    title: "React Native Mobile Development",
    icon: <Smartphone className="w-12 h-12" />,
    description: "Cross-platform mobile apps with React Native for both Android and iOS",
    features: [
      "React Native Setup",
      "Shared Logic with Web App",
      "UI/UX Implementation",
      "API Integration",
      "App Store Deployment"
    ],
    color: "#A8E6CF"
  },
  {
    title: "Automation & Media Processing",
    icon: <Video className="w-12 h-12" />,
    description: "Automate workflows and process media content with custom AI and backend solutions",
    features: [
      "Video Editing Automation",
      "Subtitle Generation & Translation",
      "Media Transcoding & Optimization",
      "Background Tasks & Workers",
      "Webhook & Scheduler Integration"
    ],
    color: "#F8B400"
  }
];


const ServiceCard = ({ service, index }: { service: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-gray-900 rounded-xl p-6 hover:shadow-2xl transition-all duration-300 border border-gray-800 group"
    >
      <div className="relative overflow-hidden">
        <div 
          className="p-4 rounded-lg mb-4 inline-block"
          style={{ color: service.color }}
        >
          {service.icon}
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-[#C9F31D] transition-colors">
            {service.title}
          </h3>
          <p className="text-gray-400 mb-4">
            {service.description}
          </p>
        </motion.div>

        <ul className="space-y-2">
          {service.features.map((feature: string, idx: number) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center text-gray-300"
            >
              <div className="w-1.5 h-1.5 rounded-full mr-2" style={{ backgroundColor: service.color }} />
              {feature}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

const Services = () => {
  return (
    <div className="w-full min-h-screen bg-[#131313] text-white py-20 relative overflow-hidden">
      <MovingLines />
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-lg font-bold text-slate-400">What I Offer</p>
          <h2 className="text-5xl font-normal mt-2">My <span className="text-[#C9F31D]">Services</span></h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Comprehensive software development solutions tailored to your needs. From concept to deployment, I deliver high-quality results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
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
            Need a custom solution? <span className="text-[#C9F31D]">Let's discuss your project</span>
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Services