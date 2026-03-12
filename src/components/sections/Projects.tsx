"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { projects } from "@/data/projects";

const statusClass: Record<string, string> = {
  Live: "status-live",
  "In Progress": "status-progress",
  "Case Study": "status-study",
};

export default function Projects() {
  return (
    <SectionWrapper id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="section-label text-center">Selected Work</p>
        <h2 className="section-title text-center mb-14">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              className="glass-card group relative overflow-hidden flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ y: -6 }}
            >
              {/* Glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(400px circle at 50% 0%, ${project.accent}, transparent 60%)`,
                }}
              />

              {/* Preview area */}
              <div className="relative h-40 bg-gradient-to-br from-white/[0.02] to-transparent border-b border-white/[0.04] flex items-center justify-center">
                <span className="text-3xl font-bold text-white/[0.06] font-mono tracking-tighter select-none group-hover:text-white/[0.1] transition-colors duration-500">
                  {project.name}
                </span>
              </div>

              {/* Content */}
              <div className="relative p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-white font-semibold text-base">
                    {project.name}
                  </h3>
                  <span
                    className={`text-[10px] px-2.5 py-0.5 rounded-full font-medium ${
                      statusClass[project.status]
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <p className="text-xs text-[#777] leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

                {/* Stack badges */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.stack.map((s) => (
                    <span
                      key={s}
                      className="text-[10px] px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.06] text-[#666] font-mono"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* CTA buttons */}
                <div className="flex gap-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center text-xs py-2 rounded-lg bg-white text-black font-medium hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center text-xs py-2 rounded-lg bg-white/[0.06] text-[#ccc] border border-white/[0.08] font-medium hover:bg-white/[0.1] hover:border-white/[0.15] transition-all duration-300"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
