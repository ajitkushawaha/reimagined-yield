"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import { AnimatedText } from "@/components/eternity/animated-text"
import { AnimatedCard } from "@/components/eternity/animated-card"
import { MagneticButton } from "@/components/eternity/magnetic-button"
import { PortfolioCard3D } from "@/components/ui/3d-card"
import PortfolioHeroParallax from "@/components/portfolio-hero-parallax"

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filters = ["All", "Web Development", "Mobile Apps", "UI/UX Design", "Digital Marketing"]

  const projects = [
    {
      title: "TechStart E-commerce Platform",
      category: "Web Development",
      image: "/placeholder.svg?height=400&width=600&text=E-commerce+Platform",
      description: "Complete e-commerce solution with custom CMS, payment integration, and inventory management.",
      technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
      results: ["300% increase in sales", "50% faster page load", "95% customer satisfaction"],
      link: "#",
      github: "#",
    },
    {
      title: "FinanceApp Mobile Banking",
      category: "Mobile Apps",
      image: "/placeholder.svg?height=400&width=600&text=Mobile+Banking+App",
      description: "Secure mobile banking application with biometric authentication and real-time transactions.",
      technologies: ["React Native", "Node.js", "MongoDB", "AWS"],
      results: ["100K+ downloads", "4.8 App Store rating", "Zero security incidents"],
      link: "#",
      github: "#",
    },
    {
      title: "Creative Studio Rebrand",
      category: "UI/UX Design",
      image: "/placeholder.svg?height=400&width=600&text=Brand+Identity+Design",
      description: "Complete brand identity redesign including logo, website, and marketing materials.",
      technologies: ["Figma", "Adobe Creative Suite", "Webflow"],
      results: ["200% brand recognition", "150% website engagement", "Award-winning design"],
      link: "#",
      github: "#",
    },
    {
      title: "SaaS Growth Campaign",
      category: "Digital Marketing",
      image: "/placeholder.svg?height=400&width=600&text=Digital+Marketing+Campaign",
      description: "Multi-channel digital marketing campaign for B2B SaaS company targeting enterprise clients.",
      technologies: ["Google Ads", "LinkedIn Ads", "HubSpot", "Analytics"],
      results: ["400% lead increase", "60% cost reduction", "25% conversion rate"],
      link: "#",
      github: "#",
    },
    {
      title: "Healthcare Portal",
      category: "Web Development",
      image: "/placeholder.svg?height=400&width=600&text=Healthcare+Portal",
      description: "Patient management system with appointment scheduling and telemedicine capabilities.",
      technologies: ["React", "Python", "Django", "PostgreSQL"],
      results: ["10K+ patients served", "40% admin time saved", "HIPAA compliant"],
      link: "#",
      github: "#",
    },
    {
      title: "Fitness Tracking App",
      category: "Mobile Apps",
      image: "/placeholder.svg?height=400&width=600&text=Fitness+App",
      description: "Comprehensive fitness tracking app with social features and AI-powered recommendations.",
      technologies: ["Flutter", "Firebase", "TensorFlow", "Cloud Functions"],
      results: ["50K+ active users", "4.7 rating", "Featured by Apple"],
      link: "#",
      github: "#",
    },
  ]

  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <div className="bg-black">
      {/* Hero Parallax Section */}
      <PortfolioHeroParallax />

      {/* Cyan Theme Filter Buttons */}
      <section className="py-12 px-6 lg:px-12 relative bg-gradient-to-b from-slate-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <motion.button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 backdrop-blur-xl ${
                  activeFilter === filter 
                    ? "bg-cyan-500/20 border border-cyan-400/30 text-white shadow-2xl" 
                    : "bg-cyan-500/5 border border-cyan-400/10 text-white/70 hover:bg-cyan-500/10 hover:text-white hover:border-cyan-400/20"
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Cyan Theme Projects Grid */}
      <section className="py-20 px-6 lg:px-12 relative bg-gradient-to-b from-black to-slate-900">
        {/* Cyan Background Elements */}
        <motion.div className="absolute inset-0" aria-hidden="true">
          <motion.div 
            className="absolute top-20 right-20 w-80 h-80 bg-cyan-500/10 backdrop-blur-3xl rounded-full border border-cyan-500/20"
            animate={{ 
              x: [0, 80, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 25,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-20 left-20 w-64 h-64 bg-cyan-500/10 backdrop-blur-3xl rounded-full border border-cyan-500/20"
            animate={{ 
              x: [0, -60, 0],
              y: [0, 40, 0],
              scale: [1, 0.8, 1]
            }}
            transition={{ 
              duration: 28,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 7
            }}
          />
        </motion.div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" layout>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <PortfolioCard3D
                  title={project.title}
                  category={project.category}
                  description={project.description}
                  image={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="h-full"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Cyan Theme CTA Section */}
      <section className="py-32 px-6 lg:px-12 relative bg-gradient-to-b from-slate-900 to-black">
        {/* Cyan Background Elements */}
        <motion.div className="absolute inset-0" aria-hidden="true">
          <motion.div 
            className="absolute top-1/3 right-1/3 w-80 h-80 bg-cyan-500/10 backdrop-blur-3xl rounded-full border border-cyan-500/20"
            animate={{ 
              x: [0, -40, 0],
              y: [0, 30, 0],
              scale: [1, 0.9, 1]
            }}
            transition={{ 
              duration: 18,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut"
            }}
          />
        </motion.div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <AnimatedText>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Ready to Create Your <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500 bg-clip-text text-transparent">Success Story?</span>
            </h2>
          </AnimatedText>
          <AnimatedText delay={0.2}>
            <p className="text-gray-400 text-lg mb-12 leading-relaxed">
              Let's work together to create a project that exceeds your expectations and delivers measurable results.
            </p>
          </AnimatedText>
          <AnimatedText delay={0.4}>
            <MagneticButton className="!bg-cyan-500/20 !text-white backdrop-blur-xl border border-cyan-400/30 rounded-2xl font-semibold px-8 py-4 shadow-2xl hover:!bg-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
              <span className="flex items-center">
                Start Your Project <ArrowRight className="ml-2 w-4 h-4" />
              </span>
            </MagneticButton>
          </AnimatedText>
        </div>
      </section>
    </div>
  )
}
