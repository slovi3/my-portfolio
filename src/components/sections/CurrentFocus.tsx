"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";

const focusItems = [
  {
    icon: "🚀",
    title: "Building BulkTrack",
    description:
      "A comprehensive calorie & nutrition tracking app — my main product in active development.",
    status: "In Progress",
  },
  {
    icon: "🎨",
    title: "Improving Frontend & UI Skills",
    description:
      "Deepening my expertise in modern UI design, animations, and responsive layouts.",
    status: "Ongoing",
  },
  {
    icon: "📦",
    title: "Publishing Real Projects",
    description:
      "Consistently shipping live projects to build a strong portfolio and real-world experience.",
    status: "Active",
  },
  {
    icon: "📚",
    title: "Learning by Consistency",
    description:
      "Showing up every day, writing code, solving problems, and growing as a developer.",
    status: "Always",
  },
];

export default function CurrentFocus() {
  return (
    <SectionWrapper className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="section-label text-center">What I&apos;m Doing Now</p>
        <h2 className="section-title text-center mb-14">
          Current Focus
        </h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {focusItems.map((item, i) => (
            <motion.div
              key={item.title}
              className="glass-card glass-card-hover p-6 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="flex items-start gap-4">
                <span className="text-2xl mt-0.5">{item.icon}</span>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-white font-semibold text-sm">
                      {item.title}
                    </h3>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[#666] font-mono">
                      {item.status}
                    </span>
                  </div>
                  <p className="text-xs text-[#777] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
