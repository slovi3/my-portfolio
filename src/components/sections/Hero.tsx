"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/config";

const floatingCards = [
  { label: "BulkTrack", x: "8%", y: "20%", delay: 1.2 },
  { label: "Habit Tracker", x: "78%", y: "25%", delay: 1.5 },
  { label: "Pomodoro Timer", x: "85%", y: "60%", delay: 1.8 },
];

const headlineWords = ["Build.", "Learn.", "Ship."];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Blurred glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-white/[0.015] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] bg-white/[0.01] rounded-full blur-[100px] pointer-events-none" />

      {/* Floating project labels — desktop */}
      {floatingCards.map((card) => (
        <motion.div
          key={card.label}
          className="absolute hidden lg:block glass-card px-4 py-2 text-xs font-mono text-[#666] select-none"
          style={{ left: card.x, top: card.y }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: card.delay,
            duration: 0.8,
            ease: [0.25, 0.4, 0.25, 1],
          }}
        >
          <motion.span
            animate={{ y: [0, -6, 0] }}
            transition={{
              repeat: Infinity,
              duration: 4 + Math.random() * 2,
              ease: "easeInOut",
            }}
            className="block"
          >
            ◆ {card.label}
          </motion.span>
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] text-xs text-[#888] font-mono mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          Available for opportunities
        </motion.div>

        {/* Main Headline */}
        <div className="flex justify-center gap-4 mb-6 flex-wrap">
          {headlineWords.map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5 + i * 0.15,
                duration: 0.8,
                ease: [0.25, 0.4, 0.25, 1],
              }}
              className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-[-0.04em] text-white"
            >
              {word}
            </motion.span>
          ))}
        </div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
          className="text-lg sm:text-xl font-medium text-[#999] mb-3"
        >
          {siteConfig.name}
        </motion.h1>

        {/* Role */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.7 }}
          className="text-sm font-mono text-[#555] mb-6"
        >
          {siteConfig.title}
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.7 }}
          className="text-base text-[#777] max-w-xl mx-auto leading-relaxed mb-10"
        >
          {siteConfig.description}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a href="#projects" className="glow-btn glow-btn-primary">
            View Projects
          </a>
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="glow-btn glow-btn-secondary"
          >
            <span className="flex items-center gap-2">
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </span>
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-white/[0.15] flex items-start justify-center p-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
