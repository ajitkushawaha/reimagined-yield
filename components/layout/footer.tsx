"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Linkedin, Mail, Phone } from "lucide-react"

export function Footer() {
  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "Web Development", href: "/services#web-development" },
        { name: "App Development", href: "/services#app-development" },
        { name: "UI/UX Design", href: "/services#ui-ux-design" },
        { name: "Digital Marketing", href: "/services#digital-marketing" },
        { name: "SEO Optimization", href: "/services#seo-optimization" },
        { name: "Custom Development", href: "/services#custom-development" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Team", href: "/about#team" },
        { name: "Portfolio", href: "/portfolio" },
        { name: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Contact Info",
      links: [
        { name: "merajsaurabh0000@gmail.com", href: "mailto:merajsaurabh0000@gmail.com" },
        { name: "+91 9915174967", href: "tel:+919915174967" },
        { name: "Bulandshahr, Uttar Pradesh", href: "#" },
        { name: "India", href: "#" },
        { name: "Mon-Fri 9AM-6PM IST", href: "#" },
        { name: "We reply within 24 hours", href: "#" },
      ],
    },
  ]

  return (
    <footer className="bg-black border-t border-white/5 py-20 px-6 lg:px-12" role="contentinfo">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className="w-48 sm:w-64 md:w-80 lg:w-96 h-16 sm:h-20 md:h-24 relative bg-white backdrop-blur-xl border border-cyan-400/20 rounded-2xl p-2 sm:p-3 md:p-4">
                  <Image 
                    src="/logo.png" 
                    alt="Codyn Logo" 
                    width={96} 
                    height={64} 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
                Crafting digital excellence through innovative web development, mobile apps, and digital marketing solutions that drive real business results.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/saurabh-rajput-9a1071245"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-cyan-500/5 backdrop-blur-xl border border-cyan-400/20 rounded-lg flex items-center justify-center text-cyan-400 hover:text-white hover:bg-cyan-500/10 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:merajsaurabh0000@gmail.com"
                  className="w-10 h-10 bg-cyan-500/5 backdrop-blur-xl border border-cyan-400/20 rounded-lg flex items-center justify-center text-cyan-400 hover:text-white hover:bg-cyan-500/10 transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href="tel:+919915174967"
                  className="w-10 h-10 bg-cyan-500/5 backdrop-blur-xl border border-cyan-400/20 rounded-lg flex items-center justify-center text-cyan-400 hover:text-white hover:bg-cyan-500/10 transition-colors"
                  aria-label="Phone"
                >
                  <Phone className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-white mb-6">{section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          className="mt-16 pt-8 border-t border-white/5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Codyn. All rights reserved. Crafted with ❤️ in India.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}