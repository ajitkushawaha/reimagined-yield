"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface AnimatedCardProps {
  children: ReactNode
  className?: string
  delay?: number
  hover?: boolean
}

export function AnimatedCard({ children, className = "", delay = 0, hover = true }: AnimatedCardProps) {
  return (
    <motion.div
      className={`relative overflow-hidden rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-700 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={
        hover
          ? {
              y: -4,
              backgroundColor: "rgba(31, 41, 55, 0.5)",
              borderColor: "rgba(107, 114, 128, 0.8)",
            }
          : {}
      }
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
}
