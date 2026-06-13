"use client";

import { motion } from "framer-motion";
import { stackGroups } from "@/data/stack";
import SectionLabel from "@/components/ui/SectionLabel";
import TechTag from "@/components/ui/TechTag";
import {
  sectionVariants,
  containerVariants,
  itemVariants,
  viewportConfig,
} from "@/lib/motion";

export default function TechStack() {
  return (
    <motion.section
      id="stack"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className="section-padding bg-surface"
    >
      <div className="container-custom">
        <SectionLabel>Stack</SectionLabel>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-12">
          What I work with
        </h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {stackGroups.map((group) => (
            <motion.div
              key={group.label}
              variants={itemVariants}
              className="card-glow rounded-xl p-6 md:p-8"
            >
              <h3 className="font-mono text-xs tracking-[0.2em] text-accent-green uppercase mb-5">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <TechTag key={item}>{item}</TechTag>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
