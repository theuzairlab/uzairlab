"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import SectionLabel from "@/components/ui/SectionLabel";
import ProjectCard from "@/components/ui/ProjectCard";
import {
  sectionVariants,
  containerVariants,
  viewportConfig,
} from "@/lib/motion";

export default function Projects() {
  return (
    <motion.section
      id="work"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className="section-padding bg-[#0a0a0a]"
    >
      <div className="container-custom">
        <SectionLabel>Work</SectionLabel>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">
          Things I&apos;ve built{" "}
          <span className="text-[#C9F31D]">(and still run)</span>
        </h2>
        <p className="text-[#a1a1a1] mb-16 max-w-xl">
          Not a gallery — a proof board. Every project answers: what was the
          problem, what did I build, what does it prove?
        </p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="flex flex-col gap-10 md:gap-14"
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportConfig}
          className="text-center text-[#6b6b6b] mt-16 text-sm"
        >
          More on{" "}
          <a
            href="https://github.com/theuzairlab"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C9F31D] hover:underline"
          >
            GitHub
          </a>
        </motion.p>
      </div>
    </motion.section>
  );
}
