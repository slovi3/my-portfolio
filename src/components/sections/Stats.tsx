"use client";

import SectionWrapper from "@/components/SectionWrapper";
import AnimatedCounter from "@/components/AnimatedCounter";

const stats = [
  { target: 3, suffix: "+", label: "Projects Built" },
  { target: 2, suffix: "+", label: "Live Deployments" },
  { target: 1, suffix: "", label: "Product in Progress" },
  { target: 365, suffix: "+", label: "Days of Learning" },
];

export default function Stats() {
  return (
    <SectionWrapper className="py-12 px-6">
      <div className="max-w-4xl mx-auto flex flex-wrap gap-4 justify-center">
        {stats.map((stat, i) => (
          <AnimatedCounter
            key={i}
            target={stat.target}
            suffix={stat.suffix}
            label={stat.label}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
