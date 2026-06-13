"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { pricingTiers } from "@/data/pricing";
import SectionLabel from "@/components/ui/SectionLabel";
import {
  sectionVariants,
  containerVariants,
  itemVariants,
  viewportConfig,
} from "@/lib/motion";

export default function Pricing() {
  return (
    <motion.section
      id="pricing"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className="section-padding bg-surface"
    >
      <div className="container-custom">
        <SectionLabel>Pricing</SectionLabel>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
          Hourly rates by complexity
        </h2>
        <p className="text-muted-custom mb-12 max-w-xl">
          Transparent pricing based on project complexity. No hidden fees, no
          scope creep surprises.
        </p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {pricingTiers.map((tier) => (
            <motion.div
              key={tier.id}
              variants={itemVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`rounded-xl p-6 md:p-8 flex flex-col transition-all duration-300 ${
                tier.highlighted ? "card-glow-accent" : "card-glow"
              }`}
            >
              <p className="font-mono text-xs text-dim-custom uppercase tracking-wider">
                {tier.complexity}
              </p>
              <h3 className="font-display text-2xl font-bold text-foreground mt-2">
                {tier.name}
              </h3>
              <div className="mt-4 mb-2">
                <span className="font-display text-4xl md:text-5xl font-bold text-accent-green">
                  {tier.rate}
                </span>
                <span className="text-muted-custom text-lg">{tier.unit}</span>
              </div>
              <p className="text-dim-custom text-sm mb-6">{tier.description}</p>

              <ul className="space-y-3 flex-1 mb-8">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-muted-custom"
                  >
                    <Check className="w-4 h-4 text-accent-green mt-0.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`inline-flex items-center justify-center gap-2 py-3 rounded-lg font-semibold text-sm transition-all ${
                  tier.highlighted
                    ? "bg-accent-green text-[#0a0a0a] hover:brightness-110"
                    : "border border-surface text-foreground hover:border-accent-green/50"
                }`}
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
