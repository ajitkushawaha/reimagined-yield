"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import { AnimatedText } from "@/components/eternity/animated-text"
import { AnimatedCard } from "@/components/eternity/animated-card"
import { MagneticButton } from "@/components/eternity/magnetic-button"

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
    <div className="bg-slate-900">
      {/* Apple Glass Hero Section */}
      <section className="py-32 px-6 lg:px-12 relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Glass Background Elements */}
        <motion.div className="absolute inset-0" aria-hidden="true">
          <motion.div 
            className="absolute top-20 left-20 w-96 h-96 bg-white/5 backdrop-blur-3xl rounded-full border border-white/10"
            animate={{ 
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/10 backdrop-blur-3xl rounded-full border border-purple-500/20"
            animate={{ 
              x: [0, -80, 0],
              y: [0, 60, 0],
              scale: [1, 0.9, 1]
            }}
            transition={{ 
              duration: 25,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 5
            }}
          />
        </motion.div>

        <div className="max-w-6xl mx-auto text-center relative z-10 pt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8">
              Our{" "}
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                Portfolio
              </span>
            </h1>
          </motion.div>
          <motion.p
            className="text-white/80 text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Explore our collection of successful projects that have helped businesses achieve their digital goals and
            drive real results.
          </motion.p>
        </div>
      </section>

      {/* Apple Glass Filter Buttons */}
      <section className="py-12 px-6 lg:px-12 relative bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <motion.button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 backdrop-blur-xl ${
                  activeFilter === filter 
                    ? "bg-white/20 border border-white/30 text-white shadow-2xl" 
                    : "bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white"
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

      {/* Apple Glass Projects Grid */}
      <section className="py-20 px-6 lg:px-12 relative bg-gradient-to-b from-slate-900 to-slate-800">
        {/* Glass Background Elements */}
        <motion.div className="absolute inset-0" aria-hidden="true">
          <motion.div 
            className="absolute top-20 right-20 w-80 h-80 bg-white/5 backdrop-blur-3xl rounded-full border border-white/10"
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
                <motion.div 
                  className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl overflow-hidden group h-full flex flex-col shadow-2xl"
                  whileHover={{ 
                    scale: 1.02, 
                    y: -8,
                    rotateY: 3
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/20 backdrop-blur-sm text-white border border-white/30">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 flex gap-2">
                      <motion.a
                        href={project.link}
                        className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </motion.a>
                      <motion.a
                        href={project.github}
                        className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github className="w-4 h-4" />
                      </motion.a>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-white/90 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed mb-6 group-hover:text-white/80 transition-colors">{project.description}</p>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="px-2 py-1 rounded text-xs bg-white/10 text-white/80 border border-white/20">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white mb-3">Results:</h4>
                      <ul className="space-y-1">
                        {project.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="text-sm text-white/70">
                            • {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <MagneticButton className="w-full justify-center mt-auto backdrop-blur-xl bg-white/20 border border-white/30 rounded-2xl text-white font-semibold shadow-2xl">
                      <span className="flex items-center">
                        View Project <ArrowRight className="ml-2 w-4 h-4" />
                      </span>
                    </MagneticButton>
                    
                    {/* Glass shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.8 }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 lg:px-12 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedText>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Ready to Create Your Success Story?</h2>
          </AnimatedText>
          <AnimatedText delay={0.2}>
            <p className="text-gray-400 text-lg mb-12 leading-relaxed">
              Let's work together to create a project that exceeds your expectations and delivers measurable results.
            </p>
          </AnimatedText>
          <AnimatedText delay={0.4}>
            <MagneticButton>
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
