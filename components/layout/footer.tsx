"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { AnimatedText } from "@/components/eternity/animated-text"

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
    <footer className="bg-gray-900 py-20 px-6 lg:px-12 border-t border-gray-800" role="contentinfo">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <AnimatedText>
            <div>
              <Link href="/" className="flex items-center space-x-3 mb-6">
                <motion.div
                  className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-sm overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image 
                    src="/logo.svg" 
                    alt="Codyn Logo" 
                    width={48} 
                    height={48} 
                    className="w-full h-full object-contain"
                  />
                </motion.div>
                <div className="text-white">
                  <div className="text-lg font-bold">CODY</div>
                  <div className="text-xs text-gray-400">DIGITAL AGENCY</div>
                </div>
              </Link>
              <p className="text-gray-400 leading-relaxed mb-6">
                We're a passionate team of digital innovators dedicated to transforming businesses through creative technology solutions and strategic thinking.
              </p>
              <div className="flex space-x-4"> 
                {[
                  { name: "LinkedIn", href: " https://www.linkedin.com/in/saurabh-rajput-9a1071245" },
                  { name: "Email", href: "mailto:merajsaurabh0000@gmail.com" },
                  { name: "Phone", href: "tel:+919915174967" },
                ].map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <span className="text-sm font-semibold">{social.name.charAt(0)}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </AnimatedText>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <AnimatedText key={index} delay={0.2 * (index + 1)}>
              <div>
                <h3 className="text-white font-semibold mb-6 text-lg">{section.title}</h3>
                <ul className="space-y-3 text-gray-400">
                  {section.links.map((link, linkIndex) => (
                    <motion.li key={linkIndex} whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                      <Link
                        href={link.href}
                        className="hover:text-white transition-colors focus:outline-none focus:text-white"
                      >
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </AnimatedText>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p>&copy; 2024 Codyn. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/sitemap.xml" className="hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
