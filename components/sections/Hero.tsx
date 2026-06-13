"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { containerVariants, itemVariants } from "@/lib/motion";
import ScheduleMeeting from "@/components/ScheduleMeeting";

const floatingTags = [
  { label: "Next.js 15", delay: 0.5, position: "top-4 -left-4 md:-left-8" },
  { label: "LangGraph", delay: 0.6, position: "top-1/4 -right-4 md:-right-12" },
  { label: "FastAPI", delay: 0.7, position: "bottom-1/3 -left-6 md:-left-14" },
  { label: "ClipsGen AI ✓", delay: 0.8, position: "top-1/2 right-0 md:-right-16" },
  { label: "WrenchEx ✓", delay: 0.9, position: "bottom-8 -right-2 md:-right-10" },
];

const stats = [
  { value: 3, suffix: "+", label: "Years building full-stack" },
  { value: 6, suffix: "+", label: "Products shipped to production" },
  { value: 2, suffix: "", label: "AI SaaS products (mine)" },
  { value: null, display: "∞", label: "Config files debugged at 2am" },
];

const headlineWords = [
  { text: "I build products", accent: false },
  { text: "that actually", accent: false },
  { text: "ship.", accent: true },
];

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1500;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Hero() {
  const [scheduleOpen, setScheduleOpen] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center section-padding pt-28 hero-glow overflow-hidden"
    >
      <div className="container-custom w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Text */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-[#a1a1a1] mb-4 font-medium"
            >
              Hey, I&apos;m Uzair —
            </motion.p>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">
              {headlineWords.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.1 }}
                  className={`block ${word.accent ? "text-accent-green" : "text-white"}`}
                >
                  {word.text}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-[#a1a1a1] text-base md:text-lg leading-relaxed max-w-lg mb-8"
            >
              Full-stack engineer specializing in AI-powered SaaS, automation
              systems, and infrastructure. Based in Islamabad, available
              worldwide.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#work"
                className="inline-flex items-center justify-center gap-2 bg-accent-green text-[#0a0a0a] px-6 py-3 rounded-lg font-semibold hover:brightness-110 transition-all pulse-scale"
              >
                See My Work
                <ArrowRight className="w-4 h-4" />
              </a>
              <button
                onClick={() => setScheduleOpen(true)}
                className="inline-flex items-center justify-center gap-2 border border-card text-white px-6 py-3 rounded-lg font-semibold hover:border-accent-green/50 transition-all"
              >
                Book a Call
              </button>
            </motion.div>

            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              href="https://www.upwork.com/freelancers/~018fd5ca5b2fb70adc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 text-sm text-[#a1a1a1] hover:text-accent-green transition-colors"
            >
              <span className="text-accent-green">★</span>
              Profile on Upwork →
            </motion.a>
          </div>

          {/* Right — Photo + Tags */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Accent ring */}
              <div className="absolute inset-0 rounded-full border-2 border-accent-green/30" />
              <div className="absolute inset-3 rounded-full border border-accent-green/10" />

              <div className="absolute inset-6 rounded-full overflow-hidden">
                <Image
                  src="/uzair.jpg"
                  alt="Uzair Ullah"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>

              {floatingTags.map((tag) => (
                <motion.span
                  key={tag.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: tag.delay }}
                  className={`absolute ${tag.position} float-tag px-3 py-1.5 text-xs font-mono rounded-full bg-bg-card border border-accent-green/20 text-[#a1a1a1] whitespace-nowrap z-10`}
                  style={{ animationDelay: `${tag.delay}s` }}
                >
                  {tag.label}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 "
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="card-glow rounded-xl p-5 md:p-6 text-center"
            >
              <p className="font-display text-3xl md:text-4xl font-bold text-accent-green">
                {stat.display ?? (
                  <CountUp target={stat.value!} suffix={stat.suffix} />
                )}
              </p>
              <p className="text-[#6b6b6b] text-xs md:text-sm mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <ScheduleMeeting isOpen={scheduleOpen} onClose={() => setScheduleOpen(false)} />
    </section>
  );
}
