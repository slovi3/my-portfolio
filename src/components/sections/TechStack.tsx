"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";

const technologies = [
  { name: "HTML", color: "#E34F26" },
  { name: "CSS", color: "#1572B6" },
  { name: "JavaScript", color: "#F7DF1E" },
  { name: "React", color: "#61DAFB" },
  { name: "Next.js", color: "#FFFFFF" },
  { name: "Tailwind CSS", color: "#06B6D4" },
  { name: "Git", color: "#F05032" },
  { name: "GitHub", color: "#FFFFFF" },
  { name: "Vercel", color: "#FFFFFF" },
];

const tools = [
  { name: "VS Code", color: "#007ACC" },
  { name: "Figma", color: "#F24E1E" },
  { name: "Chrome DevTools", color: "#4285F4" },
];

export default function TechStack() {
  return (
    <SectionWrapper id="stack" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="section-label text-center">Technologies</p>
        <h2 className="section-title text-center mb-14">
          Tech Stack & Toolbox
        </h2>

        {/* Primary Stack */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              className="tech-badge group cursor-default"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              whileHover={{ scale: 1.05 }}
            >
              <span
                className="w-2 h-2 rounded-full transition-shadow duration-300"
                style={{
                  backgroundColor: tech.color,
                  boxShadow: `0 0 8px ${tech.color}40`,
                }}
              />
              {tech.name}
            </motion.div>
          ))}
        </div>

        {/* Tools */}
        <div className="flex flex-wrap justify-center gap-3">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              className="tech-badge group cursor-default"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.05, duration: 0.4 }}
              whileHover={{ scale: 1.05 }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{
                  backgroundColor: tool.color,
                  boxShadow: `0 0 8px ${tool.color}40`,
                }}
              />
              {tool.name}
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
