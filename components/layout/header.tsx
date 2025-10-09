"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { MagneticButton } from "@/components/eternity/magnetic-button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const { scrollY } = useScroll()
  
  // Detect scroll - hide logo/CTA when scrolled, show only menu
  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      setIsScrolled(latest > 200)
    })
    return unsubscribe
  }, [scrollY])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ]

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <motion.header
      className="fixed top-0 w-full z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      role="banner"
    >
      {/* Manu-style Navigation - Only visible when scrolled */}
      <motion.div
        className={`hidden lg:flex max-w-fit fixed top-4 inset-x-0 mx-auto rounded-full bg-black pr-2 pl-8 py-2 items-center justify-center space-x-4 ${
          isScrolled ? "z-[5000]" : "z-[-1] pointer-events-none"
        }`}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: isScrolled ? 1 : 0, scale: isScrolled ? 1 : 0.9 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        role="menubar"
      >
        {navItems.map((item, index) => (
          <Link
            key={item.name}
            href={item.href}
            className="relative text-neutral-50 text-sm hover:text-neutral-300 transition-colors duration-200"
          >
            {item.name}
          </Link>
        ))}
        
        {/* CTA Button - Manu style */}
        <Link href="/contact">
          <button className="bg-slate-900 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white">
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
            </span>
            <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 ring-1 ring-white/10 px-4 py-1">
              <span>Let's Talk</span>
              <ArrowRight className="w-4 h-4" />
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
          </button>
        </Link>
      </motion.div>

      {/* Mobile Manu-style Navigation - Show when scrolled */}
      <motion.div
        className={`lg:hidden max-w-fit fixed top-4 inset-x-0 mx-auto rounded-full bg-black z-[5001] pr-2 pl-8 py-3 items-center justify-center space-x-2 ${
          isScrolled ? "flex" : "hidden"
        }`}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: isScrolled ? 1 : 0, scale: isScrolled ? 1 : 0.9 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        role="menubar"
      >
        {navItems.map((item, index) => (
          <Link
            key={item.name}
            href={item.href}
            className="relative text-neutral-50 text-sm hover:text-neutral-300 transition-colors duration-200 px-2 py-1"
          >
            {item.name}
          </Link>
        ))}
        
        {/* CTA Button - Manu style for mobile */}
        <Link href="/contact">
          <button className="bg-slate-900 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white">
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
            </span>
            <div className="relative flex space-x-1 items-center z-10 rounded-full bg-zinc-950 ring-1 ring-white/10 px-3 py-1 max-[475px]:hidden">
              <span className="text-xs">Let's Talk</span>
              <ArrowRight className="w-3 h-3" />
            </div>
            <span className="absolute -bottom-0 left-[0.75rem] h-px w-[calc(100%-1.5rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
          </button>
        </Link>
      </motion.div>

      {/* Regular Header - Visible when at top with background */}
      <motion.nav 
        className={`flex items-center justify-between px-6 py-2 backdrop-blur-2xl bg-gradient-to-r from-blue-900/95 via-purple-900/95 to-indigo-900/95 border-b border-white/20 shadow-2xl relative z-50 ${
          isScrolled ? "lg:hidden" : ""
        }`}
        style={{ 
          opacity: isScrolled ? 0 : 1,
          pointerEvents: isScrolled ? "none" : "auto"
        }}
        transition={{ duration: 0.3 }}
      >
        <Link href="/" className="flex items-center">
          <motion.div
            className="p-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-lg"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ duration: 0.2 }}
          >
            <Image 
              src="/logo.svg" 
              alt="Codyn Logo" 
              width={200} 
              height={60} 
              className="h-12 w-auto"
            />
          </motion.div>
        </Link>

        {/* Desktop Menu - Always visible at top */}
        <div className="hidden lg:flex items-center space-x-2 bg-white/5 backdrop-blur-xl rounded-3xl px-6 py-3 border border-white/10 shadow-2xl">
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              className={`relative font-medium transition-all duration-300 px-4 py-2 rounded-2xl focus:outline-none focus:ring-2 focus:ring-white/50 ${
                isActive(item.href)
                  ? "text-white bg-white/20 backdrop-blur-xl"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA - Only visible at top */}
        <div className="hidden lg:block">
          <Link href="/contact">
            <MagneticButton className="text-sm font-medium backdrop-blur-xl bg-white/20 border border-white/30 rounded-2xl text-white shadow-2xl focus:outline-none focus:ring-2 focus:ring-white/50">
              <span className="flex items-center">
                Let's Talk 
                <ArrowRight className="ml-2 w-4 h-4" />
              </span>
            </MagneticButton>
          </Link>
        </div>

        {/* Mobile Menu Button - Always visible */}
        <motion.button
          className="lg:hidden text-white p-3 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          aria-expanded={isMenuOpen}
          aria-label="Toggle mobile menu"
          style={{ 
            opacity: isScrolled ? 1 : 1,
            pointerEvents: "auto"
          }}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </motion.button>
      </motion.nav>

      {/* Mobile Menu - Only show when at top (not scrolled) */}
      {isMenuOpen && !isScrolled && (
        <motion.div
          className="lg:hidden fixed top-4 left-4 right-4 z-[5002] bg-gradient-to-br from-slate-800/95 via-purple-900/95 to-slate-800/95 backdrop-blur-2xl rounded-2xl border border-white/20 shadow-2xl"
          initial={{ opacity: 0, scale: 0.9, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-6 py-6">
            {/* Close Button */}
            <div className="flex justify-end mb-4">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-full hover:bg-white/20 transition-colors bg-white/10"
                aria-label="Close menu"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>
            
            {/* Navigation Items - Vertical layout for mobile */}
            <div className="space-y-3 mb-6">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block w-full text-center font-medium transition-all duration-300 px-6 py-3 rounded-2xl text-base ${
                    isActive(item.href)
                      ? "text-white bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-xl border border-white/20"
                      : "text-white/90 hover:text-white hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 hover:border hover:border-white/10"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            
            {/* CTA Button */}
            <div className="flex justify-center">
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                <button className="bg-slate-900 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white">
                  <span className="absolute inset-0 overflow-hidden rounded-full">
                    <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                  </span>
                  <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 ring-1 ring-white/10 px-4 py-1 max-[475px]:hidden">
                    <span>Let's Talk</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                  <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
