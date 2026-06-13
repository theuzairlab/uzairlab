"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { clientLogos } from "@/data/clients";
import { sectionVariants, viewportConfig } from "@/lib/motion";

export default function ClientLogos() {
  return (
    <section className="bg-surface py-12">
      <div className="container-custom px-4 md:px-8 lg:px-16">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <p className="text-center text-xs font-mono tracking-[0.2em] text-dim-custom uppercase mb-8">
            Trusted by teams at
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            {clientLogos.map((client) => (
              <div
                key={client.name}
                className="card-glow rounded-xl px-6 py-4 relative w-28 h-14 md:w-36 md:h-16 opacity-80 hover:opacity-100 transition-opacity"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
