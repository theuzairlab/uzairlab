"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import { sectionVariants, viewportConfig } from "@/lib/motion";

export default function About() {
  return (
    <motion.section
      id="about"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className="section-padding bg-surface"
    >
      <div className="container-custom">
        <SectionLabel>About</SectionLabel>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-12">
          Why I build this way
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto aspect-[4/5] rounded-2xl overflow-hidden card-glow">
              <Image
                src="/uzair-1.jpeg"
                alt="Uzair Ullah"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 md:right-8 card-glow rounded-xl p-4 max-w-[200px]">
              <p className="font-mono text-xs text-accent-green">NXTechnova</p>
              <p className="text-foreground text-sm font-semibold mt-1">
                Full-Stack Engineer
              </p>
              <p className="text-dim-custom text-xs mt-1">Islamabad, PK</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.5 }}
            className="space-y-4 text-muted-custom leading-relaxed"
          >
            <p>
              I grew up in a region where the internet infrastructure itself was
              the bottleneck. That gave me a different perspective — I had to
              understand the whole system, not just the layer I was hired to work
              on.
            </p>
            <p>
              Now I work at NXTechnova as a one-person engineering department:
              client projects, platform architecture, deployment pipelines, and DNS
              records. At night, I build ClipsGen AI.
            </p>
            <p>
              I ask &ldquo;what problem does this solve&rdquo; before writing a
              line of code. If that&apos;s the kind of engineer you need —
              let&apos;s talk.
            </p>
            <p className="text-accent-green font-mono text-sm pt-2">
              → Open to: select freelance projects, founding engineer roles, AI
              product builds
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
