"use client"
import Link from "next/link";
import React, { JSX, useEffect, useState } from "react";
import MovingLines from "../MovingLines";
import ParticleBackground from "../ParticleBackground";

const HeroSection = () => {

    const [rotatedText, setRotatedText] = useState<JSX.Element[]>([]);

    useEffect(() => {
        const originalText = "I'm a Full Stack Developer, AI Integration Specialist, SaaS Developer & Innovator.";
        setRotatedText(
            originalText.split("").map((char, i) => (
                <b key={i} style={{ transform: `rotate(${i * 4.3}deg)` }}>{char}</b>
            ))
        );
    }, []);

    return (
        <div className="relative bg-[#131313] text-white min-h-screen overflow-auto overflow-x-hidden px-6 md:px-10 lg:px-20 flex items-center">
            <MovingLines />
            <ParticleBackground />

            <div className="flex flex-col md:flex-row items-center justify-center mt-0 md:mt-24 sm:mt-52 text-center md:text-left w-full">
                {/* Left Section */}
                <div className="w-full md:w-1/2 mb-14 mt-72 sm:mt-0 md:mb-0 flex flex-col items-center md:items-start">
                    <h4 className="text-xl md:text-5xl opacity-50 pb-3 md:pb-6">Hello, I'm</h4>
                    <h1 className="text-3xl md:text-7xl font-semibold text-[#c9f31d] pb-3 md:pb-6">Uzair Ullah.</h1>
                    <h2 className="text-2xl md:text-6xl font-semibold text-white opacity-80 pb-1 md:pb-2">Software Developer</h2>
                    <h3 className="text-xl font-medium text-white opacity-80 pb-3 md:pb-6">Building AI-Powered Applications to Simplify Digital Workflows</h3>
                    <p className="text-gray-400 text-sm md:text-lg font-medium  mb-6 md:mb-10 max-w-md md:max-w-lg">
                        I’m Uzair, a software developer with a passion for building intelligent, user-focused web applications. I’ve developed a platform that generates viral short videos from long-form content and helped optimize backend systems for faster performance. My work has improved efficiency for both creators and developers.
                        <br/>
                        I’m skilled in <span className="text-[#c9f31d]">Python</span>, <span className="text-[#1d88f3]">JavaScript (React/Next.js)</span>, <span className="text-[#c9f31d]">FastAPI</span>, and deploying cloud-based solutions.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center">

                        <Link href={'#contact'} className="bg-[#c9f31d] cursor-pointer text-black px-6 py-2 rounded-lg font-semibold z-10"> Get in touch &gt;</Link>

                        <a href="/uzair_cv.pdf" target="_blank" className="text-gray-300 hover:text-[#c9f31d] cursor-pointer transition-all z-10">
                            Download Resume &gt;
                        </a>
                    </div>
                </div>

                {/* Right Section - Image */}
                <div className="heroImg ">
                    <div className="imgBox">
                        <img src="/Uzair.png" alt="heroImage" />
                        <div className="rotateText">
                            <div className="text">
                                <p>{rotatedText}</p>
                            </div>
                            <span><i></i></span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HeroSection;
