"use client";
import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

interface ContactStarsProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function ContactStars({ title, subtitle, className = "" }: ContactStarsProps) {
  return (
    <div className={`h-[40rem] rounded-md bg-black flex flex-col items-center justify-center relative w-full ${className}`}>
      <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
        {title === "Get In Touch" ? (
          <>
            Get In <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500 bg-clip-text text-transparent">Touch</span>
          </>
        ) : (
          title
        )}
      </h1>
      {subtitle && (
        <p className="text-lg md:text-xl text-gray-300 text-center mt-4 relative z-20 max-w-2xl px-4">
          {subtitle}
        </p>
      )}
      {/* Cyan-themed shooting stars */}
      <ShootingStars 
        starColor="#06B6D4"
        trailColor="#0891B2"
        minSpeed={8}
        maxSpeed={25}
        minDelay={1500}
        maxDelay={4000}
      />
      {/* Stars background */}
      <StarsBackground 
        starDensity={0.0002}
        allStarsTwinkle={true}
        twinkleProbability={0.8}
        minTwinkleSpeed={0.3}
        maxTwinkleSpeed={1.2}
      />
    </div>
  );
}
