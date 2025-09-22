"use client"

import type React from "react"

import { motion } from "framer-motion"
import { type ReactNode, useRef, useState } from "react"

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  onClick?: () => void
}

export function MagneticButton({ children, className = "", onClick }: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouse = (e: React.MouseEvent) => {
    const { clientX, clientY } = e
    const { height, width, left, top } = ref.current!.getBoundingClientRect()
    const middleX = clientX - (left + width / 2)
    const middleY = clientY - (top + height / 2)
    setPosition({ x: middleX * 0.1, y: middleY * 0.1 })
  }

  const reset = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      onClick={onClick}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={`relative overflow-hidden rounded-2xl bg-white text-black px-8 py-4 font-semibold transition-all duration-200 hover:bg-gray-100 active:scale-95 shadow-sm ${className}`}
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  )
}
