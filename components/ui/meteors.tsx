"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

export const Meteors = ({
  number,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const meteors = new Array(number || 12).fill(true);
  const colors = [
    { head: "bg-white/80", glow: "shadow-[0_0_4px_#ffffff,0_0_8px_#ffffff]", trail: "from-white/60 via-white/30 to-transparent" },
    { head: "bg-blue-400/70", glow: "shadow-[0_0_4px_#60a5fa,0_0_8px_#60a5fa]", trail: "from-blue-400/50 via-blue-400/25 to-transparent" },
    { head: "bg-cyan-400/70", glow: "shadow-[0_0_4px_#22d3ee,0_0_8px_#22d3ee]", trail: "from-cyan-400/50 via-cyan-400/25 to-transparent" },
    { head: "bg-purple-400/70", glow: "shadow-[0_0_4px_#a78bfa,0_0_8px_#a78bfa]", trail: "from-purple-400/50 via-purple-400/25 to-transparent" },
  ];
  
  // Deterministic PRNG to ensure matching output on server and client
  const mulberry32 = (seed: number) => {
    return () => {
      let t = (seed += 0x6d2b79f5);
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  };
  const baseSeed = 123456; // stable seed
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {meteors.map((el, idx) => {
        const meteorCount = number || 12;
        // Calculate position to evenly distribute meteors across container width
        const position = idx * (800 / meteorCount) - 400; // Spread across 800px range, centered
        const color = colors[idx % colors.length];
        const rng = mulberry32(baseSeed + idx * 9973);
        const r1 = rng();
        const r2 = rng();
        const r3 = rng();
        const r4 = rng();
        const size = r1 > 0.7 ? "h-2 w-2" : r1 > 0.4 ? "h-1.5 w-1.5" : "h-1 w-1";
        const trailLength = r2 > 0.7 ? "h-[50px]" : r2 > 0.4 ? "h-[40px]" : "h-[30px]";
        const delaySeconds = r3 * 5; // 0-5s
        const durationSeconds = Math.floor(r4 * 5 + 5); // 5-9s

        return (
          <span
            key={"meteor" + idx}
            className={cn(
              "animate-meteor-effect absolute rounded-full",
              size,
              color.head,
              color.glow,
              `before:absolute before:bottom-full before:left-1/2 before:${trailLength} before:w-[0.5px] before:-translate-x-1/2 before:transform before:bg-gradient-to-t before:from-white/40 before:via-white/20 before:to-transparent before:content-['']`,
              "after:absolute after:bottom-full after:left-1/2 after:h-[30px] after:w-[1px] after:-translate-x-1/2 after:transform after:bg-gradient-to-t after:from-white/20 after:to-transparent after:content-['']",
              className,
            )}
            style={{
              top: "-50px", // Start above the container
              left: position + "px",
              animationDelay: `${delaySeconds}s`,
              animationDuration: `${durationSeconds}s`, // Deterministic pseudo-random duration
            }}
          ></span>
        );
      })}
    </motion.div>
  );
};
