"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Quote, ArrowUpLeft, ArrowUpRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { sectionVariants, viewportConfig } from "@/lib/motion";

const testimonials = [
  {
    id: 1,
    name: "Latif Baloch",
    role: "Founder",
    company: "WrenchEX",
    image: "/latef.jpeg",
    content:
      "Uzair did an outstanding job as a Full Stack Developer to develop our marketplace platform. He’s skilled, reliable, and delivers clean, efficient code while solving challenges proactively. Highly recommend working with him.",
    rating: 5,
  },
  {
    id: 2,
    name: "Faizan Ulhaq",
    role: "Lead Generation",
    company: "MKM Studioz",
    image: "/faizan.jpeg",
    content:
      "it was such nice working with Uzair he has great talent creating websites that looks stunning and easy to read",
    rating: 5,
  },
  {
    id: 3,
    name: "Abdul Malik Shakir",
    role: "CTO",
    company: "Zetasoft Solutions",
    image: "/malik.jpg",
    content:
      "Uzair is one of the most reliable and skilled developers I've worked with. His grasp on full-stack and AI development is impressive, and he always brings smart, practical solutions to the table.",
    rating: 5,
  },
  {
    id: 4,
    name: "Taseer Mehboob",
    role: "Founder",
    company: "Andazenu",
    image: "/taseer-1.webp",
    content:
      "Uzair did an amazing job building our e-commerce site. From the design to the tech behind it, everything turned out exactly how we wanted. He's super professional and easy to work with.",
    rating: 5,
  },
];

const CARDS_PER_PAGE = 2;

export default function Testimonials() {
  const totalPages = Math.ceil(testimonials.length / CARDS_PER_PAGE);
  const [page, setPage] = useState(0);

  const prev = () => setPage((p) => (p === 0 ? totalPages - 1 : p - 1));
  const next = () => setPage((p) => (p === totalPages - 1 ? 0 : p + 1));

  const visible = testimonials.slice(
    page * CARDS_PER_PAGE,
    page * CARDS_PER_PAGE + CARDS_PER_PAGE
  );

  return (
    <motion.section
      id="testimonials"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className="section-padding bg-[#0a0a0a] overflow-hidden"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          {/* Left */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <SectionLabel>Clients Testimonials</SectionLabel>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mt-2 mb-4">
              What clients
              <br />
              <span className="text-[#C9F31D]">say</span>
            </h2>
            <p className="text-[#a1a1a1] text-sm md:text-base leading-relaxed max-w-sm mb-8">
              Hear what my clients have to say about their experience working
              with me and the results we achieved together.
            </p>

            <div className="flex items-center gap-3">
              <button
                onClick={prev}
                aria-label="Previous testimonials"
                className="w-12 h-12 rounded-full bg-[#C9F31D] text-[#0a0a0a] flex items-center justify-center hover:brightness-110 transition-all"
              >
                <ArrowUpLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                aria-label="Next testimonials"
                className="w-12 h-12 rounded-full bg-[#161616] border border-[#2a2a2a] text-[#a1a1a1] flex items-center justify-center hover:border-[#C9F31D]/50 hover:text-white transition-all"
              >
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </div>

            <a
              href="https://www.upwork.com/freelancers/~018fd5ca5b2fb70adc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 card-glow rounded-xl px-5 py-4 mt-10 hover:border-[#C9F31D]/30 transition-all"
            >
              <span className="text-[#C9F31D] font-bold text-lg">★</span>
              <div>
                <p className="text-white font-semibold text-sm">
                  Profile on Upwork
                </p>
                <p className="text-[#6b6b6b] text-xs">Top-rated freelancer →</p>
              </div>
            </a>
          </div>

          {/* Right — 2 cards per page */}
          <div className="lg:col-span-8 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={page}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.35 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              >
                {visible.map((t, i) => (
                  <TestimonialCard
                    key={`${page}-${t.id}-${i}`}
                    testimonial={t}
                    index={page * CARDS_PER_PAGE + i}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

function TestimonialCard({
  testimonial: t,
  index,
}: {
  testimonial: (typeof testimonials)[0];
  index: number;
}) {
  const quoteAccent = index % 2 === 0;

  return (
    <div className="card-glow rounded-2xl p-8 md:p-10 flex flex-col items-center text-center h-full">
      <div className="relative mb-8">
        <div
          className={`absolute -left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center ${
            quoteAccent
              ? "bg-[#C9F31D] text-[#0a0a0a]"
              : "bg-[#0a0a0a] border border-[#2a2a2a] text-[#C9F31D]"
          }`}
        >
          <Quote className="w-4 h-4 fill-current" />
        </div>
        <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-[#2a2a2a]">
          <Image src={t.image} alt={t.name} fill className="object-cover" />
        </div>
      </div>

      <p className="text-[#a1a1a1] text-sm md:text-base leading-relaxed mb-8 flex-1">
        &ldquo;{t.content}&rdquo;
      </p>

      <div>
        <h4 className="font-display font-bold text-white text-lg mb-1">
          {t.name}
        </h4>
        <p className="text-[#C9F31D] text-sm">
          {t.role} @ {t.company}
        </p>
      </div>
    </div>
  );
}
