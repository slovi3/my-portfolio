"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";

const steps = [
  {
    number: "01",
    title: "Choose an Idea",
    description: "Identify a real problem or personal need worth solving.",
  },
  {
    number: "02",
    title: "Build Fast",
    description: "Start coding immediately. Prototype, iterate, and learn by doing.",
  },
  {
    number: "03",
    title: "Ship Early",
    description: "Deploy it live. Real projects need real users and real feedback.",
  },
  {
    number: "04",
    title: "Improve Always",
    description: "Refine the design, optimize performance, add features, repeat.",
  },
];

export default function HowIBuild() {
  return (
    <SectionWrapper className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="section-label text-center">Process</p>
        <h2 className="section-title text-center mb-14">How I Build</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="glass-card glass-card-hover p-6 relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
            >
              <span className="text-4xl font-bold text-white/[0.04] font-mono absolute top-4 right-5 group-hover:text-white/[0.08] transition-colors duration-500">
                {step.number}
              </span>
              <div className="relative">
                <h3 className="text-white font-semibold text-sm mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-[#666] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
