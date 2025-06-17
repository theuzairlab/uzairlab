'use client';
import { motion } from 'framer-motion';
import { Facebook, Github, Instagram, Linkedin, Youtube, ChevronDown, Users, Briefcase, Code2, Award } from 'lucide-react';
import Link from 'next/link';
import * as Collapsible from '@radix-ui/react-collapsible';
import { useState } from 'react';

const personalInfo = {
  name: "Uzair Ullah",
  email: "uzairullah397@gmail.com",
  phone: "+923059974821",
  address: "Islamabad, Pakistan"
}

const socialLinks = [
  {
    link: "https://www.linkedin.com/in/uzairlab",
    icon: <Linkedin />
  },
  {
    link: "https://github.com/theuzairlab",
    icon: <Github />
  },
  {
    link: "https://web.facebook.com/uzairlab",
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

const statsData = [
  {
    title: "Years Experience",
    value: "2+",
    icon: <Briefcase className="w-6 h-6" />,
    description: "Full Stack Development"
  },
  {
    title: "Projects Completed",
    value: "5+",
    icon: <Code2 className="w-6 h-6" />,
    description: "Web Development"
  },
  {
    title: "Clients Served",
    value: "5+",
    icon: <Users className="w-6 h-6" />,
    description: "Worldwide"
  },
  {
    title: "Technologies",
    value: "20+",
    icon: <Award className="w-6 h-6" />,
    description: "Modern Stack"
  }
]

const education = [
  {
    title: "BS in Computer Science",
    institute: "Virtual University of Pakistan",
    location: "Islamabad",
    year: { from: "2023", to: "2027" },
    description: "Studying Computer Science with focus on software development and algorithms."
  },
  {
    title: "Full Stack Web Development",
    institute: "Mindgigs Software House",
    location: "KPIT Board, Peshawar",
    year: { from: "Oct-2022", to: "March-2023" },
    description: "Intensive training in modern web development technologies and practices."
  }
];

const StatCard = ({ stat, index }: { stat: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-[#C9F31D] transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        <div className="p-3 bg-gray-800 rounded-lg text-[#C9F31D]">
          {stat.icon}
        </div>
        <div>
          <h4 className="text-3xl font-bold text-white mb-1">{stat.value}</h4>
          <p className="text-gray-400 text-sm">{stat.title}</p>
          <p className="text-[#C9F31D] text-xs mt-1">{stat.description}</p>
        </div>
      </div>
    </motion.div>
  )
}

const About = () => {
  const [openEducation, setOpenEducation] = useState<number | null>(null);

  return (
    <div className="flex flex-col md:flex-row items-start justify-center min-h-screen p-6 md:p-12 bg-[#070707] text-white px-6 md:px-10 lg:px-20 gap-8">
      {/* Left Side - Personal Information */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full md:w-1/2 p-6 md:p-10 shadow-lg rounded-lg"
      >
        <h2 className="text-lg font-semibold mb-4 text-slate-200">About <span className='text-[#C9F31D]'>Me</span></h2>
        <h1 className='text-3xl font-semibold mb-1'>Personal <span className='text-[#C9F31D]'>Info:</span></h1>
        <div className='grid grid-cols-1 gap-2 bg-gray-900 p-5 rounded-lg'>
          <p className="text-gray-200 text-lg"><strong>Name:</strong> {personalInfo.name}</p>
          <p className="text-gray-200 text-lg"><strong>Email:</strong> {personalInfo.email}</p>
          <p className="text-gray-200 text-lg"><strong>Phone:</strong> {personalInfo.phone}</p>
          <p className="text-gray-200 text-lg"><strong>Location:</strong> {personalInfo.address}</p>
        </div>

        <h3 className="text-3xl font-semibold mb-4 mt-6"><span className='text-[#C9F31D]'>Edu</span>cation</h3>
        <div className="space-y-4">
          {education.map((edu, index) => (
            <Collapsible.Root
              key={index}
              open={openEducation === index}
              onOpenChange={() => setOpenEducation(openEducation === index ? null : index)}
              className="bg-gray-900 rounded-lg overflow-hidden transition-all duration-300 ease-in-out"
            >
              <Collapsible.Trigger className="w-full p-4 flex items-center justify-between text-left hover:bg-gray-800 transition-colors">
                <div>
                  <h4 className="text-lg font-semibold text-[#C9F31D]">{edu.title}</h4>
                  <p className="text-sm text-gray-400">{edu.institute}</p>
                </div>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    openEducation === index ? 'transform rotate-180' : ''
                  }`}
                />
              </Collapsible.Trigger>
              
              <Collapsible.Content className="overflow-hidden transition-all duration-300">
                <div className="p-4 border-t border-gray-800">
                  <div className="space-y-2">
                    <p className="text-gray-300"><strong>Location:</strong> {edu.location}</p>
                    <p className="text-gray-300"><strong>Duration:</strong> {edu.year.from} - {edu.year.to}</p>
                    <p className="text-gray-300 mt-2">{edu.description}</p>
                  </div>
                </div>
              </Collapsible.Content>
            </Collapsible.Root>
          ))}
        </div>

        <div className='flex flex-col sm:flex-row justify-between md:hidden mt-6'>
          <h3 className="text-3xl font-semibold mb-1">Social <span className='text-[#C9F31D]'>Links</span></h3>
          <div className="flex gap-7 sm:gap-11 mt-2">
            {socialLinks.map((socialLink, index) => (
              <Link href={socialLink.link} key={index} target='_blank' className='flex items-center justify-center w-[50px] h-[50px] bg-gray-900 rounded-full hover:bg-[#C9F31D] hover:text-black transition-all duration-300 ease-in-out'>{socialLink.icon}</Link>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Right Side - Stats */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full md:w-1/2"
      >
        <div className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm">
          <h2 className="text-3xl font-semibold mb-6">Professional <span className="text-[#C9F31D]">Stats</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {statsData.map((stat, index) => (
              <StatCard key={index} stat={stat} index={index} />
            ))}
          </div>
          
          {/* Additional Stats or Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 p-4 bg-gray-800 rounded-lg border border-gray-700"
          >
            <h3 className="text-xl font-semibold mb-3">Key <span className="text-[#C9F31D]">Achievements</span></h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-300">
                <div className="w-2 h-2 bg-[#C9F31D] rounded-full"></div>
                Developed 2+ AI-integrated applications
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <div className="w-2 h-2 bg-[#C9F31D] rounded-full"></div>
                Successfully delivered projects for international clients
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <div className="w-2 h-2 bg-[#C9F31D] rounded-full"></div>
                Expertise in modern web technologies and frameworks
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="hidden md:flex gap-6 justify-center mt-8">
          {socialLinks.map((socialLink, index) => (
            <Link href={socialLink.link} key={index} target='_blank' className='flex items-center justify-center w-[50px] h-[50px] bg-gray-900 rounded-full hover:bg-[#C9F31D] hover:text-black transition-all duration-300 ease-in-out'>{socialLink.icon}</Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default About;
