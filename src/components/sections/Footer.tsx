"use client";

import { siteConfig } from "@/data/config";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/[0.04] py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-[#444] font-mono">
          Built by{" "}
          <span className="text-[#666]">{siteConfig.name}</span>
        </p>
        <p className="text-xs text-[#333] font-mono">
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
