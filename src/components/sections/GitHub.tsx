"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";

const activityData = [
  [0, 1, 2, 1, 0, 3, 2],
  [1, 2, 3, 2, 1, 2, 3],
  [2, 1, 0, 1, 3, 2, 1],
  [0, 2, 3, 2, 1, 0, 2],
  [1, 3, 2, 1, 2, 3, 1],
  [2, 1, 2, 3, 0, 1, 2],
  [1, 0, 1, 2, 3, 2, 0],
];

const intensityColors: Record<number, string> = {
  0: "bg-white/[0.03]",
  1: "bg-white/[0.08]",
  2: "bg-white/[0.15]",
  3: "bg-white/[0.25]",
};

export default function GitHub() {
  return (
    <SectionWrapper className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="section-label text-center">Open Source</p>
        <h2 className="section-title text-center mb-14">
          GitHub Activity
        </h2>

        <motion.div
          className="glass-card p-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Contribution grid */}
          <div className="flex flex-col gap-1 items-center mb-8">
            {activityData.map((week, wi) => (
              <div key={wi} className="flex gap-1">
                {week.map((level, di) => (
                  <motion.div
                    key={`${wi}-${di}`}
                    className={`w-3 h-3 rounded-[3px] ${intensityColors[level]} transition-colors duration-200 hover:ring-1 hover:ring-white/20`}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: (wi * 7 + di) * 0.008,
                      duration: 0.3,
                    }}
                  />
                ))}
              </div>
            ))}
          </div>

          {/* GitHub Link */}
          <div className="text-center">
            <p className="text-xs text-[#666] mb-4 font-mono">
              Contributions & open-source work
            </p>
            <a
              href="https://github.com/fkaanzeytin"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 glow-btn glow-btn-secondary text-sm"
            >
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              View GitHub Profile
            </a>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
