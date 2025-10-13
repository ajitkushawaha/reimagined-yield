"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { ArrowRight, Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { GlowButton } from "@/components/ui/glow-button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showFloatingMenu, setShowFloatingMenu] = useState(false)
  const pathname = usePathname()
  const { scrollY } = useScroll()
  
  // Detect scroll and menu states
  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      setIsScrolled(latest > 100)
      setShowFloatingMenu(latest > 300) // Show floating menu after 300px
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

  const closeMobileMenu = () => setIsMenuOpen(false)

  return (
    <motion.header
      className="sticky top-0 w-full z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      role="banner"
    >
      {/* Main Navigation */}
      <motion.nav 
        className={`flex items-center justify-between px-6 py-4 backdrop-blur-2xl border-b border-white/5 relative z-50 transition-all duration-300 ${
          isScrolled ? "bg-black/95" : "bg-black/80"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <motion.div
            className="relative w-56 h-12"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
                 <Image 
                   src="/logo.svg" 
                   alt="Codyn Logo" 
                   width={48} 
                   height={48} 
                   className="w-full h-full object-contain brightness-0 invert"
                 />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                isActive(item.href)
                  ? "text-white"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {item.name}
              {isActive(item.href) && (
                <motion.div
                  className="absolute inset-0 bg-cyan-500/20 rounded-lg"
                  layoutId="activeTab"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center space-x-4">
        <Link href="/contact#contact-form">
              <GlowButton 
                variant="cyan" 
                size="sm"
                className="!bg-cyan-500/20 !text-white backdrop-blur-xl rounded-full font-semibold px-4 py-2 shadow-2xl hover:!bg-cyan-500/30 transition-all duration-300"
              >
                Let's Talk
              </GlowButton>
            </Link>
        </div>
      </motion.nav>


      {/* Floating Scroll Menu */}
      <AnimatePresence>
        {showFloatingMenu && (
          <motion.div
            className="lg:hidden max-w-fit fixed top-4 inset-x-0 mx-auto rounded-full bg-black z-[5001] px-4 py-2 sm:py-3 items-center justify-center space-x-1 sm:space-x-2 flex"
            role="menubar"
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-neutral-50 text-sm hover:text-neutral-300 transition-colors duration-200 px-2 py-1 ${
                  isActive(item.href) ? "text-white" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            <Link href="/contact#contact-form" className="max-[500px]:hidden">
              <GlowButton 
                variant="cyan" 
                size="sm"
                className="!bg-cyan-500/20 !text-white backdrop-blur-xl rounded-full font-semibold px-3 py-1.5 shadow-2xl hover:!bg-cyan-500/30 transition-all duration-300"
              >
                Let's Talk
              </GlowButton>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Floating Scroll Menu */}
      <AnimatePresence>
        {showFloatingMenu && (
          <motion.div
            className="hidden lg:flex max-w-fit fixed top-4 inset-x-0 mx-auto rounded-full bg-black/95 backdrop-blur-2xl border border-white/10 z-[5001] pr-4 pl-8 py-3 items-center justify-center space-x-4"
            role="menubar"
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-neutral-50 text-sm hover:text-neutral-300 transition-colors duration-200 px-3 py-1 ${
                  isActive(item.href) ? "text-white" : ""
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <motion.div
                    className="absolute inset-0 bg-white/10 rounded-lg"
                    layoutId="floatingActiveTab"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            ))}
            
            <Link href="/contact#contact-form">
              <GlowButton 
                variant="cyan" 
                size="md"
              >
                Let's Talk
              </GlowButton>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden absolute top-4 right-4 p-2 text-white/70 hover:text-white transition-colors z-50"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu */}
      <motion.div
        className={`fixed inset-0 z-50 lg:hidden ${
          isMenuOpen ? "block" : "hidden"
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={closeMobileMenu} />
        <motion.div
          className="fixed top-0 right-0 h-full w-72 sm:w-80 bg-black/95 backdrop-blur-2xl border-l border-cyan-500/20 shadow-2xl"
          initial={{ x: "100%" }}
          animate={{ x: isMenuOpen ? 0 : "100%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="flex items-center justify-between p-6 border-b border-cyan-500/20">
            <span className="text-xl font-bold text-white">Menu</span>
            <button
              className="p-2 text-white/70 hover:text-white transition-colors"
              onClick={closeMobileMenu}
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <nav className="p-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-4 py-3 text-lg font-medium rounded-lg transition-colors ${
                  isActive(item.href)
                    ? "text-white bg-cyan-500/20"
                    : "text-white/70 hover:text-white hover:bg-cyan-500/10"
                }`}
                onClick={closeMobileMenu}
              >
                {item.name}
              </Link>
            ))}
            
            <div className="pt-6 border-t border-cyan-500/20">
            <Link href="/contact#contact-form">
              <GlowButton 
                variant="cyan" 
                size="sm"
                className="!bg-cyan-500/20 !text-white backdrop-blur-xl rounded-full font-semibold px-4 py-2 shadow-2xl hover:!bg-cyan-500/30 transition-all duration-300"
              >
                Let's Talk
              </GlowButton>
            </Link>
            </div>
          </nav>
        </motion.div>
      </motion.div>
    </motion.header>
  )
}