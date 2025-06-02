"use client"
import React, { useState } from 'react'
import MovingLines from '../MovingLines'
import Image from 'next/image';
import { LuArrowUpRight } from 'react-icons/lu';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const experienceData = {
  companyName: 'Zetasoft',
  slug: 'zetasoft',
  companyLogo: '/zetasoft.png',
  role: 'Full Stack Web Developer (MERN and Next.js with AI Integration)',
  startDate: 'April 2024',
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
      link: 'https://github.com/abdulmalikshakir2001/ai_video',
    },
    {
      name: 'Training Management System',
      link: 'https://github.com/abdulmalikshakir2001/tms',
    },
    {
      name: 'Login System',
      link: 'https://github.com/Uzairmalik1/login_system',
    },
    {
      name: 'E-commerce Website',
      link: 'https://github.com/Uzairmalik1/E-commerce_using_nextjs',
    },
    {
      name: 'Blog and Content Management',
      link: 'https://github.com/Uzairmalik1/blog-nextjs-sanity',
    },
  ],
};

const Experiance = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className='w-full h-screen flex flex-col items-center justify-evenly gap-5 bg-[#131313] text-white'>
      <MovingLines />

      <div className='w-full max-w-5xl'>
        <p className='text-lg font-bold text-slate-400'>My Resume</p>
        <h3 className='text-5xl font-normal mt-2'>Real <span className='text-[#C9F31D]'>Problem Solutions</span><br /> Experience</h3>
      </div>

      <div className='w-full max-w-5xl bg-gray-900 opacity-85 rounded-xl p-8 shadow-lg z-10'>
        <div className='flex items-center gap-4 mb-6'>
          <Image src={experienceData.companyLogo} alt='Zetasoft Logo' width={60} height={60} className='rounded-full' />
          <div>
            <h3 className='text-xl font-semibold text-white'>{experienceData.companyName}</h3>
            <p className='text-base text-gray-400'>{experienceData.role}</p>
            <p className='text-sm text-slate-200'><span>{experienceData.startDate}</span> - <span>{experienceData.currentlyWorking ? "Present" : experienceData.endDate}</span></p>
          </div>
        </div>
        <p className='text-gray-300 text-xl'>{experienceData.shortDescription}</p>

        <div className='mt-4'>
          <button className='bg-gray-800 text-base py-1 px-2 rounded-lg cursor-pointer' onClick={() => setShowModal(true)}>Read More</button>
        </div>
      </div>

      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className='max-w-2xl bg-[#131313] border-none text-white'>
          <DialogHeader>
            <DialogTitle className=''>
              <div className='flex items-center gap-4 '>
                <Image src={experienceData.companyLogo} alt='Zetasoft Logo' width={60} height={60} className='rounded-full' />
                <div>
                  <h3 className='text-xl font-semibold text-white'>{experienceData.companyName}</h3>
                  <p className='text-base text-gray-400'>{experienceData.role}</p>
                  <p className='text-sm text-slate-200'><span>{experienceData.startDate}</span> - <span>{experienceData.currentlyWorking ? "Present" : experienceData.endDate}</span></p>
                </div>
              </div>
            </DialogTitle>
          </DialogHeader>
          <p className='text-gray-600'>{experienceData.detailedDescription}</p>
          <div className='mt-1'>
            <p className='font-semibold mb-2'>Key Projects:</p>
            <ul className='list-disc list-inside text-blue-500'>
              {experienceData.projects.map((project, index) => (
                <li key={index} className='flex gap-2 mb-1'>
                  <a href={project.link} target='_blank' rel='noopener noreferrer' className='flex items-center gap-1'>
                    {project.name} <LuArrowUpRight />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Experiance