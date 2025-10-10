"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}

export const Card3D = ({ children, className, intensity = 50 }: Card3DProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [intensity, -intensity]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-intensity, intensity]);

  const springConfig = { damping: 25, stiffness: 300 };
  const rotateXSpring = useSpring(rotateX, springConfig);
  const rotateYSpring = useSpring(rotateY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;
    const xPct = mouseXPos / width - 0.5;
    const yPct = mouseYPos / height - 0.5;

    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <motion.div
      ref={cardRef}
      className={cn(
        "relative group perspective-1000",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      <motion.div
        className="relative w-full h-full"
        style={{
          rotateX: rotateXSpring,
          rotateY: rotateYSpring,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Card Content */}
        <div className="relative w-full h-full">
          {children}
        </div>

        {/* 3D Glow Effect */}
        {isHovered && (
          <motion.div
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: "radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 70%)",
              transform: "translateZ(1px)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        )}

        {/* Edge Lighting */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: "linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%)",
            transform: "translateZ(2px)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
};

// Specific 3D card variants for different use cases
export const ServiceCard3D = ({ 
  icon, 
  title, 
  description, 
  features, 
  color = "from-blue-500 to-purple-500",
  className 
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  color?: string;
  className?: string;
}) => {
  return (
    <Card3D className={cn("h-full", className)}>
      <div className="h-full backdrop-blur-xl bg-black/50 border border-white/10 rounded-2xl p-8 shadow-2xl group-hover:shadow-2xl group-hover:shadow-blue-500/20 transition-all duration-500">
        <div className="text-center h-full flex flex-col">
          <motion.div
            className={`w-16 h-16 bg-gradient-to-r ${color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
            whileHover={{ rotate: 5 }}
          >
            <div className="text-white text-2xl">{icon}</div>
          </motion.div>
          
          <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-white/90 transition-colors">
            {title}
          </h3>
          
          <p className="text-white/70 leading-relaxed mb-6 group-hover:text-white/80 transition-colors flex-grow">
            {description}
          </p>
          
          {/* Features list */}
          <div className="space-y-3">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center text-sm text-white/80"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0" />
                <span>{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Card3D>
  );
};

export const PortfolioCard3D = ({ 
  title, 
  category, 
  description, 
  image, 
  alt,
  className 
}: {
  title: string;
  category: string;
  description: string;
  image: string;
  alt: string;
  className?: string;
}) => {
  return (
    <Card3D className={cn("h-full", className)}>
      <div className="h-full backdrop-blur-xl bg-black/50 border border-white/10 rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-2xl group-hover:shadow-purple-500/20 transition-all duration-500">
        <div className="relative h-64 overflow-hidden">
          <motion.img
            src={image}
            alt={alt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          
          <motion.div
            className="absolute bottom-4 left-4 right-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-white/20 backdrop-blur-sm text-white mb-2 border border-white/30">
              {category}
            </span>
          </motion.div>
        </div>
        
        <div className="p-6">
          <h3 className="text-lg font-semibold text-white group-hover:text-white/90 transition-colors mb-2">
            {title}
          </h3>
          <p className="text-white/70 text-sm leading-relaxed group-hover:text-white/80 transition-colors">
            {description}
          </p>
        </div>
      </div>
    </Card3D>
  );
};
