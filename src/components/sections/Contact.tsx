"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { siteConfig } from "@/data/config";

export default function Contact() {
  const links = [
    {
      label: "Email",
      href: `mailto:${siteConfig.email}`,
      display: siteConfig.email,
    },
    {
      label: "GitHub",
      href: siteConfig.links.github,
      display: siteConfig.links.github.replace("https://", ""),
    },
    {
   label: "LinkedIn",
   href: siteConfig.links.linkedin,
   display: "Fikret Kaan Karazeytin",
  },
  ];
  return (
    <SectionWrapper id="contact" className="py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        {/* Glow backdrop */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[500px] h-[300px] bg-white/[0.015] rounded-full blur-[120px]" />
        </div>

        <motion.p
          className="section-label"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Get in Touch
        </motion.p>

        <motion.h2
          className="text-4xl sm:text-5xl font-bold tracking-[-0.04em] text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          Let&apos;s build something
          <br />
          <span className="text-[#555]">real.</span>
        </motion.h2>

        <motion.p
          className="text-sm text-[#777] mb-10 max-w-md mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Interested in working together, have feedback, or just want to say hi?
          Feel free to reach out.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="glass-card glass-card-hover px-6 py-4 flex flex-col items-center gap-1 min-w-[200px]"
            >
              <span className="text-[10px] text-[#555] font-mono uppercase tracking-widest">
                {link.label}
              </span>
              <span className="text-sm text-[#aaa] group-hover:text-white transition-colors">
                {link.display}
              </span>
            </a>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
