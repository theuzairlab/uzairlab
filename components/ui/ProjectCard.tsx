"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import type { Project } from "@/data/projects";
import StatusBadge from "@/components/ui/StatusBadge";
import TechTag from "@/components/ui/TechTag";
import { itemVariants } from "@/lib/motion";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const imageOnLeft = index % 2 === 0;

  const imageBlock = (
    <div className="relative w-full h-64 sm:h-80 lg:h-[420px] flex items-center justify-center my-auto">
      {project.image && (
        <div className="relative w-full h-full">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-contain"
          />
        </div>
      )}
    </div>
  );

  const textBlock = (
    <div className="flex flex-col justify-center px-6 py-10 lg:px-12 lg:py-16 max-w-xl">
      <div className="flex items-center gap-2">
      <StatusBadge status={project.status} />
      {project.badge && (
        <div className="text-sm text-[#a1a1a1] italic">{project.badge}</div>
      )}
      </div>

      <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-white mt-5 mb-3 group-hover:text-[#C9F31D] transition-colors">
        {project.title}
      </h3>

      <p className="text-[#a1a1a1] text-sm md:text-base leading-relaxed mb-4">
        {project.tagline}
      </p>

      <div className="space-y-3 text-sm mb-4">
        <p className="text-[#a1a1a1] leading-relaxed">{project.problem}</p>
        <p className="text-[#a1a1a1] leading-relaxed">{project.built}</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.stack.slice(0, 6).map((tech) => (
          <TechTag key={tech}>{tech}</TechTag>
        ))}
      </div>

      <p className="text-sm text-[#6b6b6b] italic mb-6">{project.proof}</p>

      <div className="flex items-center gap-4">
        
        {project.links.demo && (
          <a
            href={project.links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-[#C9F31D] hover:underline"
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </a>
        )}
        {project.links.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-[#a1a1a1] hover:text-white"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
        )}
      </div>
    </div>
  );

  return (
    <motion.article
      variants={itemVariants}
      className="group grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden"
    >
      {imageOnLeft ? (
        <>
          {imageBlock}
          {textBlock}
        </>
      ) : (
        <>
          <div className="lg:order-2 my-auto">{imageBlock}</div>
          <div className="lg:order-1">{textBlock}</div>
        </>
      )}
    </motion.article>
  );
}
