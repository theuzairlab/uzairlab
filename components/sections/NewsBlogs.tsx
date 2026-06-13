"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";
import { currentWork } from "@/data/news";
import SectionLabel from "@/components/ui/SectionLabel";
import {
  sectionVariants,
  containerVariants,
  itemVariants,
  viewportConfig,
} from "@/lib/motion";

const statusPill: Record<string, string> = {
  "IN DEV": "In Development",
  LIVE: "Live in Prod",
  SHIPPED: "Delivered",
};

export default function NewsBlogs() {
  return (
    <motion.section
      id="news"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className="section-padding bg-[#0a0a0a]"
    >
      <div className="container-custom">
        <SectionLabel>Current Work</SectionLabel>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-12 md:mb-16">
          What I&apos;m building now
        </h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8"
        >
          {currentWork.map((item) => (
            <WorkCard key={item.id} item={item} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

function WorkCard({ item }: { item: (typeof currentWork)[0] }) {
  const titleParts = item.title.split(" — ");
  const secondaryTag = titleParts[1] ?? item.status;

  const card = (
    <motion.article
      variants={itemVariants}
      className="flex flex-col sm:flex-row card-glow rounded-2xl overflow-hidden h-full"
    >
      {/* Image — left */}
      <div className="relative sm:w-[42%] min-h-[200px] sm:min-h-[260px] shrink-0 m-3 sm:m-4 sm:mr-0 rounded-xl overflow-hidden">
        {item.image && (
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
          />
        )}
      </div>

      {/* Content — right */}
      <div className="flex flex-col flex-1 p-6 sm:py-7 sm:pr-7 sm:pl-2">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#C9F31D] text-[#0a0a0a]">
            {statusPill[item.status]}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#2a2a2a] text-[#a1a1a1]">
            {secondaryTag}
          </span>
        </div>

        <h3 className="font-display text-lg md:text-xl font-bold text-white mb-3">
          {item.title}
        </h3>

        <p className="text-[#a1a1a1] text-sm leading-relaxed flex-1">
          {item.excerpt}
        </p>

        {item.link && (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[#C9F31D] text-sm mt-4 hover:underline w-fit"
          >
            View project
            <ArrowRight className="w-3 h-3" />
          </a>
        )}

        <div className="border-t border-[#2a2a2a] mt-5 pt-4 flex items-center gap-2 text-[#a1a1a1] text-sm">
          <Calendar className="w-4 h-4 shrink-0" />
          <span>{item.date}</span>
        </div>
      </div>
    </motion.article>
  );

  return card;
}
