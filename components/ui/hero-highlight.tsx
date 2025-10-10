"use client";
import { cn } from "@/lib/utils";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import React from "react";

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  return (
    <div
      className={cn(
        "group relative rounded-full bg-transparent p-0.5",
        className
      )}
      onMouseMove={handleMouseMove}
    >
      <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-600 opacity-0 blur-xl group-hover:opacity-100" />
      <div
        className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-600"
        style={{
          background: useMotionTemplate`radial-gradient(650px circle at ${mouseX}px ${mouseY}px, rgba(6, 182, 212, 0.15), transparent 40%)` as any,
        }}
      />
      <div className="relative z-20 rounded-full bg-black px-4 py-2 text-white">
        {children}
      </div>
    </div>
  );
};