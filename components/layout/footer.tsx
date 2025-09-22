"use client"

import { motion } from "framer-motion"
import Link from "next/link"
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
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
      ],
    },
    {
      title: "Contact Info",
      links: [
        { name: "info@reimaginedyield.com", href: "mailto:info@reimaginedyield.com" },
        { name: "+1 (555) 123-4567", href: "tel:+15551234567" },
        { name: "123 Innovation Street", href: "#" },
        { name: "Tech City, TC 12345", href: "#" },
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
                  className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-black font-bold text-lg" aria-label="Reimagined Yield logo">
                    RY
                  </span>
                </motion.div>
                <div className="text-white">
                  <div className="text-sm font-semibold">REIMAGINED YIELD</div>
                  <div className="text-xs text-gray-400">TECHNOLOGY</div>
                </div>
              </Link>
              <p className="text-gray-400 leading-relaxed mb-6">
                Transforming businesses through innovative digital solutions and creative excellence.
              </p>
              <div className="flex space-x-4">
                {[
                  { name: "LinkedIn", href: "https://linkedin.com/company/reimaginedyield" },
                  { name: "Twitter", href: "https://twitter.com/reimaginedyield" },
                  { name: "Instagram", href: "https://instagram.com/reimaginedyield" },
                  { name: "Facebook", href: "https://facebook.com/reimaginedyield" },
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
          <p>&copy; 2024 Reimagined Yield Technology. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap.xml" className="hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
