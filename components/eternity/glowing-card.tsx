"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface GlowingCardProps {
  children: ReactNode
  className?: string
  glowColor?: string
}

export function GlowingCard({ children, className = "", glowColor = "purple" }: GlowingCardProps) {
  return (
    <motion.div
      className={`relative group ${className}`}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}
