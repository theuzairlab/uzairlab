"use client"
import Link from "next/link";
import React, { JSX, useEffect, useState } from "react";
import MovingLines from "../MovingLines";
import ParticleBackground from "../ParticleBackground";

const HeroSection = () => {

    const [rotatedText, setRotatedText] = useState<JSX.Element[]>([]);

    useEffect(() => {
        const originalText = "I'm Frontend Developer, I'm MERN Stack Developer, I'm Desinger and I'm Freelancer.";
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
                    <h2 className="text-2xl md:text-6xl font-semibold text-white opacity-80 pb-3 md:pb-6">Full Stack Developer</h2>
                    <p className="text-gray-400 text-sm md:text-lg font-semibold  mb-6 md:mb-10 max-w-md md:max-w-lg">
                        Unlock the power of digital transformation with my expertise. I build
                        scalable and high-performance web applications tailored to your
                        business needs. Let's bring your vision to life!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center">

                        <Link href={'/contact'} className="bg-[#c9f31d] cursor-pointer text-black px-6 py-2 rounded-lg font-semibold z-50">Hire Me &gt;</Link>

                        <a href="/uzair_cv.pdf" target="_blank" className="text-gray-300 hover:text-[#c9f31d] cursor-pointer transition-all z-50">
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
