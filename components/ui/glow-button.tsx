"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { ReactNode } from "react"

interface GlowButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  className?: string
  variant?: "cyan" | "emerald" | "slate"
  size?: "sm" | "md" | "lg"
  showArrow?: boolean
  disabled?: boolean
}

export function GlowButton({ 
  children, 
  href, 
  onClick, 
  className = "",
  variant = "cyan",
  size = "md",
  showArrow = true,
  disabled = false
}: GlowButtonProps) {
  const baseClasses = "no-underline group cursor-pointer relative shadow-2xl rounded-full p-px text-xs font-semibold leading-6 text-white"
  
  const variantClasses = {
    cyan: "bg-cyan-500/10 shadow-cyan-900/20",
    emerald: "bg-transparent shadow-cyan-900/20",
    slate: "bg-slate-900 shadow-zinc-900"
  }
  
  const sizeClasses = {
    sm: "px-3 py-1",
    md: "px-4 py-2", 
    lg: "px-6 py-3"
  }
  
  const gradientClasses = {
    cyan: "bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(6,182,212,0.6)_0%,rgba(6,182,212,0)_75%)]",
    emerald: "bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(6,182,212,0.6)_0%,rgba(6,182,212,0)_75%)]",
    slate: "bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)]"
  }
  
  const innerClasses = {
    cyan: "bg-transparent",
    emerald: "bg-transparent",
    slate: "bg-zinc-950"
  }
  
  const bottomGradientClasses = {
    cyan: "bg-gradient-to-r from-cyan-400/0 via-cyan-400/90 to-cyan-400/0",
    emerald: "bg-gradient-to-r from-cyan-400/0 via-cyan-400/90 to-cyan-400/0",
    slate: "bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0"
  }
  
  const arrowSize = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5"
  }
  
  const buttonContent = (
    <motion.button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      onClick={onClick}
      disabled={disabled}
    >
      <span className="absolute inset-0 overflow-hidden rounded-full">
        <span className={`absolute inset-0 rounded-full ${gradientClasses[variant]} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}></span>
      </span>
      <div className={`relative flex items-center justify-center gap-2 z-10 rounded-full ${innerClasses[variant]} ${sizeClasses[size]}`}>
        <span className={`${size === "sm" ? "text-sm" : size === "md" ? "text-sm" : "text-base"} flex items-center gap-2`}>
          {children}
        </span>
        {showArrow && (
          <ArrowRight className={arrowSize[size]} />
        )}
      </div>
      <span className={`absolute -bottom-0 left-[0.75rem] h-px w-[calc(100%-1.5rem)] ${bottomGradientClasses[variant]} transition-opacity duration-500 group-hover:opacity-40`}></span>
    </motion.button>
  )
  
  if (href) {
    return (
      <a href={href} className="inline-block">
        {buttonContent}
      </a>
    )
  }
  
  return buttonContent
}
