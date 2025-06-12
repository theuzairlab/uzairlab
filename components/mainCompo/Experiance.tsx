"use client"
import React, { useState } from 'react'
import MovingLines from '../MovingLines'
import Image from 'next/image';
import { LuArrowUpRight } from 'react-icons/lu';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { motion } from 'framer-motion';

const experienceData = [
  {
    companyName: 'Zetasoft Solutions',
    slug: 'zetasoft-solutions',
    companyLogo: '/zetasoft.png',
    role: 'Full Stack Web Developer (MERN and Next.js with AI Integration, FastAPI, Python)',
    startDate: 'May 2024',
    currentlyWorking: true,
    endDate: '',
    shortDescription:
      'As a Full Stack Web Developer at Zetasoft, I specialize in MERN stack and Next.js with AI integration, building high-performance web applications.',
    detailedDescription: `At Zetasoft, I leverage MERN stack, Next.js, and AI technologies to build innovative web applications. Since April 2024, I've developed:
    
✅ Editor.ai – AI-powered video editing platform with auto-subtitles and trending highlights.
✅ ECI Training Management System – Online work event platform with session automation.
✅ E-commerce with Stripe – Scalable shopping platform with real-time cart and secure payments.
✅ Blog Management System – SEO-optimized and high-performance content platforms.
✅ Fully Functional Login System – Secure JWT authentication with RBAC.

🚀 Currently working on an AI-driven e-commerce solution with real-time analytics and personalized recommendations.

Want a powerful AI-driven web solution? Let's build the future together! 💡🔥`,
    projects: [
      {
        name: 'Editor.ai',
        link: 'https://github.com/ZetaSoftdev/ReelsCreatorApp',
      },
      {
        name: 'Training Management System',
        link: 'https://github.com/abdulmalikshakir2001/tms',
      },
      {
        name: 'Login System',
        link: 'https://github.com/theuzairlab/login_system',
      },
      {
        name: 'E-commerce Website',
        link: 'https://github.com/theuzairlab/E-commerce_using_nextjs',
      },
      {
        name: 'Blog and Content Management',
        link: 'https://github.com/theuzairlab/blog-nextjs-sanity',
      },
    ],
    techStack: [
      'Next.js',
      'React',
      'Node.js',
      'MongoDB',
      'TypeScript',
      'JavaScript',
      'Tailwind CSS',
      'Express.js',
      'FastAPI',
      'Python',
      'OpenAI API',
      'Whisper API',
      'FFmpeg',
      'REST APIs',
      'OAuth 2.0',
      'JWT Auth',
      'Git & GitHub',
      'Vercel',
      'Docker',
      'CI/CD',
      'Stripe API',
      'ImageKit',
      'Video Processing',
      'PostgreSQL',
      'Prisma ORM',
      'HTML & CSS',
      'Framer Motion'
    ]
    
  },
  {
    companyName: 'Freelance Web Developer & Self-Led Projects',
    slug: 'freelance-web-developer-self-led-projects',
    companyLogo: '/freelance.webp',
    role: 'Freelance Web Developer & Self-Led Projects',
    startDate: 'Jan 2023',
    currentlyWorking: false,
    endDate: ' Apr 2024',
    shortDescription:
      'Built and deployed multiple full-stack applications including AI video editors, e-commerce platforms, and portfolio sites',
    detailedDescription: `Built and deployed multiple full-stack applications including AI video editors, e-commerce platforms, and portfolio sites:

    ✅ Developed scalable web apps using React, Next.js, and REST APIs  
    ✅ Engineered responsive, high-performance user experiences  
    ✅ Designed project architecture and implemented robust database schemas  
    ✅ Deployed applications to cloud platforms with CI/CD workflows  
    ✅ Maintained active GitHub contributions to showcase skills and continuous learning`,
    projects: [
      {
        name: 'Portfolio Website',
        link: 'https://github.com/theuzairlab/teseer-portfolio-web',
      },
      {
        name: 'AI Society Website',
        link: 'https://github.com/theuzairlab/cusitAISociety',
      },
      {
        name: 'Image Slider',
        link: 'https://github.com/theuzairlab/image_slider',
      },
    ],
    techStack: [
      'React',
      'Next.js',
      'Tailwind CSS',
      'JavaScript',
      'TypeScript',
      'Redux',
      'Node.js',
      'Express.js',
      'MongoDB',
      'REST APIs',
      'Git & GitHub',
      'Vercel',
      'Framer Motion',
    ]
  },
  {
    companyName: 'Mindsgigs',
    slug: 'mindsgigs',
    companyLogo: '/mindgigs.png',
    role: 'Full Stack Developer Trainee',
    startDate: 'Oct 2022',
    currentlyWorking: false,
    endDate: 'Mar 2023',
    shortDescription:
      'Completed intensive hands-on training in JavaScript, React, Node.js, and MongoDB.',
    detailedDescription: `During my internship at Mindsgigs, I gained hands-on experience in backend development:

✅ Built RESTful APIs using Node.js and Express
✅ Implemented database schemas and optimized queries 
✅ Developed authentication and authorization systems
✅ Created automated testing suites
✅ Participated in code reviews and team meetings

🌟 Converted internship into a part-time role due to exceptional performance.`,
    projects: [
      
    ],
    techStack: ['React', 'Tailwind CSS', 'JavaScript','Redux', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Git & GitHub', 'Vercel', 'Framer Motion', 'Figma (for design implementation)']
  }
];

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState<number | null>(null);

  return (
    <div className='relative w-full min-h-screen bg-[#131313] text-white py-20'>
      <MovingLines />
      <div className='relative z-10 w-full flex flex-col items-center justify-start gap-10'>
        <div className='w-full max-w-6xl px-4'>
          <p className='text-lg font-bold text-slate-400'>My Resume</p>
          <h3 className='text-5xl font-normal mt-2'>Real <span className='text-[#C9F31D]'>Problem Solutions</span><br /> Experience</h3>
        </div>

        <div className='w-full max-w-6xl px-4 grid grid-cols-1 gap-6'>
          {experienceData.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='bg-gray-900 opacity-85 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:bg-gray-800 border border-gray-800'
            >
              <div className='flex flex-col md:flex-row md:items-center justify-between gap-6'>
                <div className='flex items-start gap-4 w-full'>
                  <div className='relative'>
                    <Image 
                      src={experience.companyLogo} 
                      alt={`${experience.companyName} Logo`} 
                      width={100}
                      height={100}
                      className='rounded-full object-cover'
                    />
                  </div>
                  <div>
                    <h3 className='text-xl font-semibold text-white'>{experience.companyName}</h3>
                    <p className='text-base text-[#C9F31D]'>{experience.role}</p>
                    <p className='text-sm text-slate-200'>
                      <span>{experience.startDate}</span> - <span>{experience.currentlyWorking ? "Present" : experience.endDate}</span>
                    </p>
                  </div>
                </div>
                <div className='flex flex-wrap gap-2'>
                  {experience.techStack.slice(0, 10).map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className='px-3 py-1 text-sm bg-gray-800 text-gray-300 rounded-full border border-gray-700'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <p className='text-gray-300 text-lg mt-4'>{experience.shortDescription}</p>

              <div className='mt-4 flex items-center gap-4'>
                <button 
                  className='bg-[#C9F31D] text-black font-medium py-2 px-4 rounded-lg cursor-pointer hover:bg-[#d4ff33] transition-colors'
                  onClick={() => setSelectedExperience(index)}
                >
                  View Details
                </button>
                {experience.currentlyWorking && (
                  <span className='inline-flex items-center px-3 py-1 rounded-full bg-green-900/30 text-green-400 text-sm'>
                    <span className='w-2 h-2 bg-green-400 rounded-full mr-2'></span>
                    Current Role
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <Dialog open={selectedExperience !== null} onOpenChange={() => setSelectedExperience(null)}>
          <DialogContent className="max-w-3xl bg-[#131313] border-none text-white max-h-[85vh] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
            {selectedExperience !== null && (
              <>
                <DialogHeader>
                  <DialogTitle>
                    <div className='flex items-center gap-4'>
                      <div className='relative w-16 h-16'>
                        <Image 
                          src={experienceData[selectedExperience].companyLogo} 
                          alt={`${experienceData[selectedExperience].companyName} Logo`}
                          fill
                          className='rounded-full object-cover'
                        />
                      </div>
                      <div>
                        <h3 className='text-xl font-semibold text-white'>{experienceData[selectedExperience].companyName}</h3>
                        <p className='text-base text-[#C9F31D]'>{experienceData[selectedExperience].role}</p>
                        <p className='text-sm text-slate-200'>
                          <span>{experienceData[selectedExperience].startDate}</span> - 
                          <span>{experienceData[selectedExperience].currentlyWorking ? " Present" : experienceData[selectedExperience].endDate}</span>
                        </p>
                      </div>
                    </div>
                  </DialogTitle>
                </DialogHeader>
                <div className='mt-4 space-y-4'>
                  <div className='prose prose-invert max-w-none'>
                    <p className='text-gray-300 whitespace-pre-line'>{experienceData[selectedExperience].detailedDescription}</p>
                  </div>
                  <div className='mt-6'>
                    <h4 className='font-semibold text-lg mb-3'>Key Projects</h4>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                      {experienceData[selectedExperience].projects.map((project, index) => (
                        <a
                          key={index}
                          href={project.link}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='flex items-center gap-2 bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors'
                        >
                          <span className='flex-1'>{project.name}</span>
                          <LuArrowUpRight className='text-[#C9F31D]' />
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className='mt-4'>
                    <h4 className='font-semibold text-lg mb-3'>Technologies Used</h4>
                    <div className='flex flex-wrap gap-2'>
                      {experienceData[selectedExperience].techStack.map((tech, index) => (
                        <span
                          key={index}
                          className='px-3 py-1 text-sm bg-gray-800 text-gray-300 rounded-full border border-gray-700'
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}

export default Experience