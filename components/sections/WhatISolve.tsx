"use client";

import { motion } from "framer-motion";
import { Brain, Layers, Compass } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import {
  sectionVariants,
  containerVariants,
  itemVariants,
  viewportConfig,
} from "@/lib/motion";

const offerings = [
  {
    icon: Brain,
    title: "AI-Powered Products",
    description:
      "I build SaaS where AI is the architecture, not the add-on. LangGraph agents, AssemblyAI pipelines, Vapi voice systems, n8n automation.",
    proof: "→ ClipsGen AI · TechTivAI",
  },
  {
    icon: Layers,
    title: "Full-Stack Systems",
    description:
      "From Next.js frontend to FastAPI backend to PostgreSQL schema to Hetzner VPS to Cloudflare R2. I own the whole thing, end to end.",
    proof: "→ WrenchEx · NxtFlight · NXTechnova infra",
  },
  {
    icon: Compass,
    title: "Technical Architecture",
    description:
      "I map ideas to real stacks and find what breaks before you build it. Useful when you're about to commit to six months of the wrong choice.",
    proof: "→ TechTivAI stack design · DNS/email systems",
  },
];

export default function WhatISolve() {
  return (
    <motion.section
      id="services"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className="section-padding bg-surface"
    >
      <div className="container-custom">
        <SectionLabel>What I Do</SectionLabel>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-12 max-w-2xl">
          Problems I actually know how to fix
        </h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {offerings.map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="card-glow rounded-xl p-6 md:p-8 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-accent-green/10 flex items-center justify-center mb-5 group-hover:bg-accent-green/20 transition-colors">
                <item.icon className="w-6 h-6 text-accent-green" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-custom text-sm leading-relaxed mb-4">
                {item.description}
              </p>
              <p className="text-accent-green text-xs font-mono">{item.proof}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
