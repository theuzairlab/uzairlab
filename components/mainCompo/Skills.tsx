"use client"
import React from 'react'
import { motion } from 'framer-motion'
import MovingLines from '../MovingLines'

const skillsData = [
  {
    category: "Frontend Development",
    icon: "🎨",
    skills: [
      { name: "React.js", level: 85, color: "#61DAFB" },
      { name: "Next.js", level: 90, color: "#764ABC" },
      { name: "TypeScript", level: 80, color: "#3178C6" },
      { name: "JavaScript ", level: 80, color: "#3178C6" },
      { name: "Tailwind CSS", level: 95, color: "#38B2AC" },
      { name: "HTML5/CSS3", level: 90, color: "#E34F26" },
      { name: "Redux", level: 75, color: "#764ABC" },
      { name: "Framer Motion", level: 75, color: "#764ABC" },
      { name: "Git & GitHub", level: 75, color: "#764ABC" },
    ]
  },
  {
    category: "Backend Development",
    icon: "⚙️",
    skills: [
      { name: "Node.js", level: 85, color: "#339933" },
      { name: "Express.js", level: 80, color: "#000000" },
      { name: "MongoDB", level: 65, color: "#47A248" },
      { name: "PostgreSQL", level: 70, color: "#336791" },
      { name: "MySQL", level: 60, color: "#336791" },
      { name: "REST APIs", level: 90, color: "#FF6C37" },
      { name: "GraphQL", level: 65, color: "#E535AB" },
      { name: "FastAPI", level: 55, color: "#E535AB" },
      { name: "Python", level: 65, color: "#E535AB" },
      { name: "GraphQL", level: 55, color: "#E535AB" }
    ]
  },
  {
    category: "DevOps & Tools",
    icon: "🛠️",
    skills: [
      { name: "Git", level: 85, color: "#F05032" },
      { name: "Docker", level: 70, color: "#2496ED" },
      { name: "AWS", level: 65, color: "#FF9900" },
      { name: "CI/CD", level: 75, color: "#4CAF50" },
      { name: "Linux", level: 40, color: "#FCC624" },
      { name: "Webpack", level: 70, color: "#8DD6F9" },
      { name: "Vercel", level: 75, color: "#764ABC" },
      { name: "Railway", level: 75, color: "#764ABC" },
      { name: "Git & GitHub", level: 75, color: "#764ABC" },
    ]
  },
  {
    category: "API Integrations & Cloud Services",
    icon: "☁️",
    skills: [
      { name: "Stripe API", level: 80, color: "#635BFF" },
      { name: "Resend (Email API)", level: 85, color: "#FF5631" },
      { name: "ImageKit", level: 80, color: "#2EC4B6" },
      { name: "AWS (S3, EC2)", level: 70, color: "#FF9900" },
      { name: "OAuth 2.0 / Social Auth", level: 85, color: "#0078D4" },
      { name: "YouTube Data API", level: 75, color: "#FF0000" },
      { name: "TikTok Publishing API", level: 70, color: "#010101" },
      { name: "Google OAuth", level: 80, color: "#4285F4" },
      { name: "Webhooks & Callbacks", level: 80, color: "#4CAF50" },
      { name: "Vercel Serverless Functions", level: 85, color: "#000000" }
    ]
  }
]

const SkillBar = ({ name, level, color }: { name: string; level: number; color: string }) => {
  return (
    <motion.div 
      className="mb-4"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-gray-300">{name}</span>
        <span className="text-sm font-medium text-[#C9F31D]">{level}%</span>
      </div>
      <div className="w-full bg-gray-800 rounded-full h-2.5">
        <motion.div
          className="h-2.5 rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        />
      </div>
    </motion.div>
  )
}

const SkillCategory = ({ category, icon, skills }: { 
  category: string; 
  icon: string; 
  skills: Array<{ name: string; level: number; color: string }> 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-800"
    >
      <div className="flex items-center gap-2 mb-6">
        <span className="text-2xl">{icon}</span>
        <h3 className="text-xl font-semibold text-white">{category}</h3>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {skills.map((skill, index) => (
          <SkillBar key={index} {...skill} />
        ))}
      </div>
    </motion.div>
  )
}

const Skills = () => {
  return (
    <div className="w-full min-h-screen bg-[#070707] text-white py-20">
      
      
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-lg font-bold text-slate-400">What I Know</p>
          <h2 className="text-5xl font-normal mt-2">My <span className="text-[#C9F31D]">Expertise</span></h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels across different domains of software development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsData.map((category, index) => (
            <SkillCategory key={index} {...category} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400">
            Always learning and expanding my skill set. Currently exploring{" "}
            <span className="text-[#C9F31D]">Web3</span>,{" "}
            <span className="text-[#C9F31D]">Blockchain</span>, and{" "}
            <span className="text-[#C9F31D]">Advanced AI Applications</span>.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Skills