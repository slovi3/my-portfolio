"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";

const principles = [
  {
    quote: "Progress over perfection.",
    description: "Ship it, learn from it, make it better.",
  },
  {
    quote: "Consistency over excuses.",
    description: "Show up every day and put in the work.",
  },
  {
    quote: "Build to learn, learn to build.",
    description: "Real projects teach more than tutorials ever will.",
  },
];

export default function Mindset() {
  return (
    <SectionWrapper className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="section-label text-center">Philosophy</p>
        <h2 className="section-title text-center mb-14">Mindset</h2>

        <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {principles.map((p, i) => (
            <motion.div
              key={i}
              className="glass-card glass-card-hover p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
            >
              <p className="text-white font-semibold text-base mb-3 tracking-tight">
                &ldquo;{p.quote}&rdquo;
              </p>
              <p className="text-xs text-[#666] leading-relaxed">
                {p.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
