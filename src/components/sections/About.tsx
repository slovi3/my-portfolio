"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { siteConfig } from "@/data/config";

export default function About() {
  return (
    <SectionWrapper id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_1.5fr] gap-12 items-start">
        {/* Left Column */}
        <div>
          <p className="section-label">About</p>
          <h2 className="section-title mb-4">
            Building through
            <br />
            <span className="text-[#666]">consistency.</span>
          </h2>
        </div>

        {/* Right Column */}
        <motion.div
          className="glass-card p-8 space-y-5"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <p className="text-[#999] leading-relaxed">
            I&apos;m <span className="text-white font-medium">{siteConfig.name}</span>, a
            self-taught software developer who believes in learning by doing. I
            don&apos;t wait until I know everything — I start building, ship fast, and
            improve through iteration.
          </p>
          <p className="text-[#999] leading-relaxed">
            My focus is on modern web development with{" "}
            <span className="text-white">React</span>,{" "}
            <span className="text-white">Next.js</span>, and{" "}
            <span className="text-white">Tailwind CSS</span>. Every project I
            build is an opportunity to sharpen my craft, develop real skills, and
            push my limits further.
          </p>
          <p className="text-[#999] leading-relaxed">
            I&apos;m not just coding for practice — I&apos;m building real products that
            solve real problems, publishing them live, and treating every commit
            as a step forward.
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {["Self-taught", "Builder Mindset", "Shipping Daily", "Modern Web"].map(
              (tag) => (
                <span key={tag} className="tech-badge">
                  {tag}
                </span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
