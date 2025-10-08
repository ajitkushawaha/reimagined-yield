"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { MagneticButton } from "@/components/eternity/magnetic-button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

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
      className="fixed top-0 w-full z-50 bg-gradient-to-r from-blue-900/95 via-purple-900/95 to-indigo-900/95 backdrop-blur-2xl border-b border-white/20 shadow-2xl"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      role="banner"
    >
      <nav
        className="flex items-center justify-between px-6 py-4 lg:px-12"
        role="navigation"
        aria-label="Main navigation"
      >
        <Link href="/" className="flex items-center space-x-4">
          <motion.div
            className="w-52 h-16 bg-white/10 backdrop-blur-xl border border-white/30 rounded-2xl flex items-center justify-center shadow-2xl overflow-hidden"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ duration: 0.2 }}
          >
            <Image 
              src="/logo.svg" 
              alt="Codyn Logo" 
              width={200} 
              height={60} 
              className="w-full h-full object-contain"
            />
          </motion.div>
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
          
          </motion.div>
        </Link>

        {/* Apple Glass Desktop Menu */}
        <motion.div
          className="hidden md:flex items-center space-x-2 bg-white/5 backdrop-blur-xl rounded-3xl px-6 py-3 border border-white/10 shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          role="menubar"
        >
          {navItems.map((item, index) => (
            <motion.div key={item.name} role="menuitem">
              <Link
                href={item.href}
                className={`relative font-medium transition-all duration-300 px-4 py-2 rounded-2xl focus:outline-none focus:ring-2 focus:ring-white/50 ${
                  isActive(item.href)
                    ? "text-white bg-white/20 backdrop-blur-xl"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Apple Glass Mobile Menu Button */}
        <motion.button
          className="md:hidden text-white p-3 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          aria-expanded={isMenuOpen}
          aria-label="Toggle mobile menu"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </motion.button>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="hidden md:block"
        >
          <Link href="/contact">
            <MagneticButton className="text-sm font-medium backdrop-blur-xl bg-white/20 border border-white/30 rounded-2xl text-white shadow-2xl focus:outline-none focus:ring-2 focus:ring-white/50">
              <span className="flex items-center">
                Let's Talk 
                <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
              </span>
            </MagneticButton>
          </Link>
        </motion.div>
      </nav>

      {/* Apple Glass Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden bg-slate-900/95 backdrop-blur-2xl border-t border-white/10"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block transition-all duration-300 py-3 px-4 rounded-2xl ${
                  isActive(item.href)
                    ? "text-white font-semibold bg-white/20 backdrop-blur-xl"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
              <MagneticButton className="w-full justify-center mt-4 backdrop-blur-xl bg-white/20 border border-white/30 rounded-2xl text-white shadow-2xl">
                <span className="flex items-center">
                  Let's Talk 
                  <ArrowRight className="ml-2 w-4 h-4" />
                </span>
              </MagneticButton>
            </Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
