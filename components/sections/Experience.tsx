"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/experience";
import SectionLabel from "@/components/ui/SectionLabel";
import {
  sectionVariants,
  containerVariants,
  itemVariants,
  viewportConfig,
} from "@/lib/motion";

export default function Experience() {
  return (
    <motion.section
      id="experience"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className="section-padding bg-surface"
    >
      <div className="container-custom">
        <SectionLabel>Experience</SectionLabel>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-12">
          How I got here
        </h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="relative max-w-3xl"
        >
          {/* Vertical line */}
          <div className="absolute left-[7px] md:left-[11px] top-2 bottom-2 w-0.5 bg-accent-green/30" />

          <div className="space-y-8">
            {experience.map((item) => (
              <motion.div
                key={item.period + item.title}
                variants={itemVariants}
                className="relative pl-8 md:pl-12"
              >
                {/* Dot */}
                <div
                  className={`absolute left-0 top-1.5 w-4 h-4 md:w-6 md:h-6 rounded-full border-2 ${
                    item.isCurrent
                      ? "bg-accent-green border-accent-green pulse-dot"
                      : "bg-card-surface border-accent-green"
                  }`}
                />

                <span className="font-mono text-xs text-dim-custom tracking-wider">
                  {item.period}
                </span>
                <h3 className="font-display text-lg md:text-xl font-bold text-foreground mt-1">
                  {item.title}
                </h3>
                <p className="text-accent-green text-sm font-medium mt-0.5">
                  {item.company}
                </p>
                <p className="text-muted-custom text-sm mt-2 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
