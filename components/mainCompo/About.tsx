'use client';
import { motion } from 'framer-motion';
import { Facebook, Github, Instagram, Linkedin, Youtube } from 'lucide-react';
import Link from 'next/link';

const personalInfo = {
  name: "Uzair Ullah",
  email: "uzairullah397@gmail.com",
  phone: "+923059974821",
  address: "Peshawar, Pakistan"
}

const socialLinks = [
  {
    link: "/linkedin",
    icon: <Linkedin />
  },
  {
    link: "/github",
    icon: <Github />
  },
  {
    link: "/facebook",
    icon: <Facebook />
  },
  {
    link: "/youtube",
    icon: <Youtube />
  },
  {
    link: "/youtube",
    icon: <Instagram />
  },
]



const education = [
  {
    title: "BS in Computer Science",
    institute: "Virtual University of Pakistan",
    location: "Peshawar",
    year: { from: "2023", to: "2027" }
  },
  {
    title: "Full Stack Web Development",
    institute: "Mindgigs Software House",
    location: "KPIT Board, Peshawar",
    year: { from: "Jan-2022", to: "April-2027" }
  }
];

const About = () => {
  // const education = await client.fetch(EDUCATION_QUERY);
// console.log(JSON.stringify(education, null, 2))

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-6 md:p-12 bg-[#070707] text-white px-6 md:px-10 lg:px-20">
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

        <h3 className="text-3xl font-semibold mb-1 mt-3"><span className='text-[#C9F31D]'>Edu</span>cation</h3>
        {education.map((edu, index) => (
          <div key={index} className="mb-4 bg-gray-900 p-5 rounded-md w-auto">
            <p className="text-gray-200 text-lg flex justify-between border-b-2 mb-1 border-slate-800"><strong>Title:</strong> {edu.title}</p>
            <p className="text-gray-200 text-lg flex justify-between border-b-2 mb-1 border-slate-800"><strong>Institiute:</strong> {edu.institute}</p>
            <p className="text-gray-200 text-lg flex justify-between border-b-2 mb-1 border-slate-800"><strong>Location:</strong> {edu.location}</p>
            <p className="text-gray-200 text-lg flex justify-between border-b-2 mb-1 border-slate-800"><strong>Year:</strong> {edu.year.from} - {edu.year.to}</p>
          </div>
        ))}

        <div className='flex flex-col sm:flex-row justify-between md:hidden mt-6'>
        <h3 className=" text-3xl font-semibold mb-1">Social <span className='text-[#C9F31D]'>Links</span></h3>
        <div className="flex gap-7 sm:gap-11 mt-2">
          {socialLinks.map((socialLink, index) => (
            <Link href={socialLink.link} key={index} target='_blank' className=' flex items-center justify-center w-[50px] h-[50px] bg-gray-900 rounded-full hover:bg-[#C9F31D] hover:text-black transition-all duration-300 ease-in-out '>{socialLink.icon}</Link>
          ))}
        </div>
        </div>
        
      </motion.div>

      <div className="hidden gap-11 flex-col md:flex">
        {socialLinks.map((socialLink, index) => (
          <Link href={socialLink.link} key={index} target='_blank' className=' flex items-center justify-center w-[50px] h-[50px] bg-gray-900 rounded-full hover:bg-[#C9F31D] hover:text-black transition-all duration-300 ease-in-out '>{socialLink.icon}</Link>
        )
        )}
      </div>

      {/* Right Side - Profile Image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0"
      >
        <img
          src="/uzair-1.jpeg"
          alt="Profile Picture"
          className="w-[30rem] rounded-lg shadow-lg object-cover"
        />
      </motion.div>
    </div>
  );
};

export default About;
