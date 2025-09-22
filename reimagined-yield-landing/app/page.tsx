"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  ArrowRight,
  Award,
  Smartphone,
  Globe,
  Search,
  Palette,
  Code,
  BarChart,
  Star,
  ChevronDown,
  Users,
  Play,
  Zap,
  Target,
  Rocket,
  Shield,
  Lightbulb,
  TrendingUp,
  CheckCircle,
  ArrowUpRight,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { AnimatedCard } from "@/components/eternity/animated-card"
import { FloatingElements } from "@/components/eternity/floating-elements"
import { AnimatedText } from "@/components/eternity/animated-text"
import { MagneticButton } from "@/components/eternity/magnetic-button"
import { GlowingCard } from "@/components/eternity/glowing-card"
import { ScrollReveal } from "@/components/eternity/scroll-reveal"
import { PageLayout } from "@/components/layout/page-layout"

// Animated counter component
const AnimatedCounter = ({ end, duration = 2 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  return <span>{count}</span>
}

function HomePageContent() {
  const { scrollYProgress } = useScroll()
  const [activeCard, setActiveCard] = useState(0)

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  // Structured data for services
  const servicesJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Digital Agency Services",
    provider: {
      "@type": "Organization",
      name: "Reimagined Yield Technology",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Web Development",
            description: "Custom websites built with modern technologies for optimal performance and user experience",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mobile App Development",
            description: "Native and cross-platform mobile applications that engage users and drive business growth",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SEO Optimization",
            description: "Strategic SEO services to improve your search rankings and increase organic traffic",
          },
        },
      ],
    },
  }

  // Interactive cards data
  const heroCards = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Launch Faster",
      description: "Get your digital presence up and running in record time",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Hit Your Goals",
      description: "Data-driven strategies that deliver measurable results",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security and 99.9% uptime guarantee",
      color: "from-green-500 to-emerald-500",
    },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }} />

      <div className="bg-gray-950">
        {/* Floating Elements Background */}
        <FloatingElements />

        {/* APPLE FLUID GLASS HERO SECTION */}
        <section
          id="home"
          className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
          aria-labelledby="hero-heading"
        >
          {/* Dynamic Glass Background */}
          <motion.div className="absolute inset-0" style={{ y: backgroundY }} aria-hidden="true">
            {/* Floating glass orbs */}
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
              className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/10 backdrop-blur-3xl rounded-full border border-blue-500/20"
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
            <motion.div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 backdrop-blur-3xl rounded-full border border-purple-500/10"
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 30,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear"
              }}
            />
          </motion.div>

          {/* Main Content Container */}
          <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
            {/* Glass Badge */}
            <motion.div
              className="inline-flex items-center backdrop-blur-xl bg-white/10 border border-white/20 rounded-full px-6 py-3 mb-12 shadow-2xl"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <motion.span
                className="text-white mr-3 text-lg"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                ✨
              </motion.span>
              <span className="text-white/90 font-medium">Crafting Digital Excellence</span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <h1 id="hero-heading" className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-8">
                Reimagined{" "}
                <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                  Digital
                </span>{" "}
                Future
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              className="text-white/80 text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              We create fluid, intuitive digital experiences that seamlessly blend technology with human creativity, 
              delivering solutions that feel as natural as they are powerful.
            </motion.p>

            {/* Glass CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
            >
              <Link href="/contact">
                <motion.button
                  className="group relative px-8 py-4 bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl text-white font-semibold text-lg shadow-2xl overflow-hidden"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center">
                    Start Your Journey
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
              <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.button>
              </Link>
              <Link href="/portfolio">
                <motion.button
                  className="group px-8 py-4 bg-transparent backdrop-blur-xl border border-white/20 rounded-2xl text-white/90 font-semibold text-lg hover:bg-white/10 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center">
                    <Play className="mr-2 w-5 h-5" />
                    Explore Our Work
                  </span>
                </motion.button>
              </Link>
            </motion.div>

            {/* Glass Stats Cards */}
            <motion.div
              className="grid grid-cols-3 gap-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.6 }}
            >
              {[
                { number: "50+", label: "Projects" },
                { number: "100%", label: "Success" },
                { number: "24/7", label: "Support" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 shadow-2xl"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-white/70 text-sm">{stat.label}</div>
                  </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Floating Glass Elements */}
              <motion.div
            className="absolute top-1/4 right-1/4 w-32 h-32 backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl"
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/4 w-24 h-24 backdrop-blur-2xl bg-blue-500/10 border border-blue-500/20 rounded-2xl"
            animate={{ 
              y: [0, 15, 0],
              rotate: [0, -3, 0]
            }}
            transition={{ 
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 2
            }}
          />

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
              <motion.div
              className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-full p-3"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
              <ChevronDown className="w-6 h-6 text-white/70" />
            </motion.div>
          </motion.div>
        </section>

        {/* APPLE GLASS FEATURES SECTION */}
        <section className="py-32 px-6 lg:px-12 relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800">
          {/* Glass Background Elements */}
          <motion.div className="absolute inset-0" aria-hidden="true">
                    <motion.div
              className="absolute top-20 right-20 w-64 h-64 bg-white/5 backdrop-blur-3xl rounded-full border border-white/10"
              animate={{ 
                x: [0, 50, 0],
                y: [0, -30, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 15,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute bottom-20 left-20 w-48 h-48 bg-purple-500/10 backdrop-blur-3xl rounded-full border border-purple-500/20"
              animate={{ 
                x: [0, -40, 0],
                y: [0, 40, 0],
                scale: [1, 0.9, 1]
              }}
              transition={{ 
                duration: 18,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 3
              }}
            />
          </motion.div>

          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              className="text-center mb-20"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
                Why Choose{" "}
                <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                  Reimagined Yield
                </span>?
              </h2>
              <p className="text-white/70 text-xl max-w-4xl mx-auto leading-relaxed">
                We combine cutting-edge technology with creative excellence to deliver fluid, intuitive digital experiences
              </p>
                    </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: "Lightning Fast",
                  description: "Optimized performance and blazing-fast load times for seamless user experience",
                  color: "from-yellow-400/20 to-orange-400/20",
                  borderColor: "border-yellow-400/30",
                },
                {
                  icon: <Lightbulb className="w-8 h-8" />,
                  title: "Innovative Solutions",
                  description: "Cutting-edge technology and creative approaches to solve complex problems",
                  color: "from-blue-400/20 to-cyan-400/20",
                  borderColor: "border-blue-400/30",
                },
                {
                  icon: <TrendingUp className="w-8 h-8" />,
                  title: "Proven Results",
                  description: "Data-driven strategies that consistently deliver measurable business growth",
                  color: "from-green-400/20 to-emerald-400/20",
                  borderColor: "border-green-400/30",
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: "Secure & Reliable",
                  description: "Enterprise-grade security and 99.9% uptime guarantee for peace of mind",
                  color: "from-purple-400/20 to-pink-400/20",
                  borderColor: "border-purple-400/30",
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "Expert Team",
                  description: "Experienced professionals with deep expertise in modern technologies",
                  color: "from-indigo-400/20 to-blue-400/20",
                  borderColor: "border-indigo-400/30",
                },
                {
                  icon: <CheckCircle className="w-8 h-8" />,
                  title: "Quality Assured",
                  description: "Rigorous testing and quality assurance processes ensure flawless delivery",
                  color: "from-teal-400/20 to-green-400/20",
                  borderColor: "border-teal-400/30",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className={`h-full backdrop-blur-xl bg-white/5 border ${feature.borderColor} rounded-3xl p-8 shadow-2xl group-hover:bg-white/10 transition-all duration-500`}
                    whileHover={{ 
                      scale: 1.02, 
                      y: -8,
                      rotateY: 5
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className={`w-16 h-16 bg-gradient-to-r ${feature.color} backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 5 }}
                    >
                      <div className="text-white">{feature.icon}</div>
                    </motion.div>
                    <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-white/90 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed group-hover:text-white/80 transition-colors">
                      {feature.description}
                    </p>
                    
                    {/* Glass shine effect */}
                  <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.8 }}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* APPLE GLASS PROCESS SECTION */}
        <section className="py-32 px-6 lg:px-12 relative bg-gradient-to-b from-slate-800 to-slate-900">
          {/* Glass Background Elements */}
          <motion.div className="absolute inset-0" aria-hidden="true">
            <motion.div 
              className="absolute top-1/4 left-1/4 w-72 h-72 bg-white/5 backdrop-blur-3xl rounded-full border border-white/10"
              animate={{ 
                x: [0, 60, 0],
                y: [0, -40, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-purple-500/10 backdrop-blur-3xl rounded-full border border-purple-500/20"
              animate={{ 
                x: [0, -50, 0],
                y: [0, 30, 0],
                scale: [1, 0.9, 1]
              }}
              transition={{ 
                duration: 22,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 5
              }}
            />
          </motion.div>

          <div className="max-w-7xl mx-auto relative z-10">
                  <motion.div
              className="text-center mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
                Our{" "}
                <span className="bg-gradient-to-r from-white via-purple-100 to-pink-100 bg-clip-text text-transparent">
                  Process
                </span>
              </h2>
              <p className="text-white/70 text-xl max-w-4xl mx-auto leading-relaxed">
                A fluid, proven methodology that ensures your project's success from concept to launch
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Discovery",
                  description: "We dive deep into your business goals, target audience, and requirements",
                  icon: <Search className="w-6 h-6" />,
                  color: "from-blue-400/20 to-cyan-400/20",
                  borderColor: "border-blue-400/30",
                },
                {
                  step: "02",
                  title: "Strategy",
                  description: "Crafting a comprehensive plan tailored to your specific needs and objectives",
                  icon: <Target className="w-6 h-6" />,
                  color: "from-purple-400/20 to-pink-400/20",
                  borderColor: "border-purple-400/30",
                },
                {
                  step: "03",
                  title: "Development",
                  description: "Building your solution with cutting-edge technology and best practices",
                  icon: <Code className="w-6 h-6" />,
                  color: "from-green-400/20 to-emerald-400/20",
                  borderColor: "border-green-400/30",
                },
                {
                  step: "04",
                  title: "Launch",
                  description: "Deploying your project and providing ongoing support for optimal performance",
                  icon: <Rocket className="w-6 h-6" />,
                  color: "from-orange-400/20 to-red-400/20",
                  borderColor: "border-orange-400/30",
                },
              ].map((process, index) => (
                      <motion.div
                        key={index}
                  className="relative group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="text-center backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl group-hover:bg-white/10 transition-all duration-500"
                    whileHover={{ 
                      scale: 1.02, 
                      y: -5,
                      rotateY: 2
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative mb-6">
                      <motion.div 
                        className={`w-20 h-20 bg-gradient-to-r ${process.color} backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                        whileHover={{ rotate: 5 }}
                      >
                        <div className="text-white">{process.icon}</div>
                      </motion.div>
                      <motion.div 
                        className="absolute -top-2 -right-2 w-8 h-8 backdrop-blur-xl bg-white/20 border border-white/30 rounded-full flex items-center justify-center"
                        whileHover={{ scale: 1.1 }}
                      >
                        <span className="text-white font-bold text-sm">{process.step}</span>
                  </motion.div>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-white/90 transition-colors">
                      {process.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed group-hover:text-white/80 transition-colors">
                      {process.description}
                    </p>
                    
                    {/* Glass shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.8 }}
                    />
                  </motion.div>

                  {/* Glass connector line */}
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-white/20 via-white/10 to-transparent transform translate-x-4"></div>
                  )}
                </motion.div>
              ))}
                </div>
          </div>
        </section>

        {/* APPLE GLASS SERVICES SECTION */}
        <section id="services" className="py-32 px-6 lg:px-12 relative bg-gradient-to-b from-slate-900 to-slate-800" aria-labelledby="services-heading">
          {/* Glass Background Elements */}
          <motion.div className="absolute inset-0" aria-hidden="true">
            <motion.div 
              className="absolute top-20 left-20 w-80 h-80 bg-white/5 backdrop-blur-3xl rounded-full border border-white/10"
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
              className="absolute bottom-20 right-20 w-64 h-64 bg-cyan-500/10 backdrop-blur-3xl rounded-full border border-cyan-500/20"
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
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 id="services-heading" className="text-5xl md:text-6xl font-bold text-white mb-8">
                Our{" "}
                <span className="bg-gradient-to-r from-white via-cyan-100 to-blue-100 bg-clip-text text-transparent">
                  Services
                </span>
                </h2>
              <p className="text-white/70 text-xl max-w-4xl mx-auto leading-relaxed">
                Comprehensive digital solutions designed to elevate your business and drive meaningful growth
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Globe className="w-8 h-8" />,
                  title: "Web Development",
                  description: "Custom websites built with modern technologies for optimal performance and user experience",
                  features: ["Responsive Design", "SEO Optimized", "Fast Loading"],
                  color: "from-blue-400/20 to-cyan-400/20",
                  borderColor: "border-blue-400/30",
                  href: "/services#web-development",
                },
                {
                  icon: <Smartphone className="w-8 h-8" />,
                  title: "App Development",
                  description: "Native and cross-platform mobile applications that engage users and drive business growth",
                  features: ["iOS & Android", "Cross-Platform", "App Store Ready"],
                  color: "from-purple-400/20 to-pink-400/20",
                  borderColor: "border-purple-400/30",
                  href: "/services#app-development",
                },
                {
                  icon: <Search className="w-8 h-8" />,
                  title: "SEO Optimization",
                  description: "Strategic SEO services to improve your search rankings and increase organic traffic",
                  features: ["Keyword Research", "Technical SEO", "Content Strategy"],
                  color: "from-green-400/20 to-emerald-400/20",
                  borderColor: "border-green-400/30",
                  href: "/services#seo-optimization",
                },
                {
                  icon: <Palette className="w-8 h-8" />,
                  title: "UI/UX Design",
                  description: "Beautiful, intuitive designs that create memorable user experiences and drive conversions",
                  features: ["User Research", "Wireframing", "Prototyping"],
                  color: "from-orange-400/20 to-red-400/20",
                  borderColor: "border-orange-400/30",
                  href: "/services#ui-ux-design",
                },
                {
                  icon: <Code className="w-8 h-8" />,
                  title: "Custom Development",
                  description: "Tailored software solutions built to meet your specific business requirements and goals",
                  features: ["Custom Solutions", "API Integration", "Scalable Architecture"],
                  color: "from-indigo-400/20 to-purple-400/20",
                  borderColor: "border-indigo-400/30",
                  href: "/services#custom-development",
                },
                {
                  icon: <BarChart className="w-8 h-8" />,
                  title: "Digital Marketing",
                  description: "Data-driven marketing strategies to reach your target audience and maximize ROI",
                  features: ["Social Media", "PPC Campaigns", "Analytics"],
                  color: "from-teal-400/20 to-cyan-400/20",
                  borderColor: "border-teal-400/30",
                  href: "/services#digital-marketing",
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Link href={service.href}>
                        <motion.div
                      className={`h-full backdrop-blur-xl bg-white/5 border ${service.borderColor} rounded-3xl p-8 shadow-2xl group-hover:bg-white/10 transition-all duration-500 cursor-pointer`}
                      whileHover={{ 
                        scale: 1.02, 
                        y: -8,
                        rotateY: 3
                      }}
                      transition={{ duration: 0.3 }}
                    >
                        <motion.div
                        className={`w-16 h-16 bg-gradient-to-r ${service.color} backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                        whileHover={{ rotate: 5 }}
                        >
                        <div className="text-white">{service.icon}</div>
                        </motion.div>
                      <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-white/90 transition-colors">
                          {service.title}
                        </h3>
                      <p className="text-white/70 leading-relaxed mb-6 group-hover:text-white/80 transition-colors">
                        {service.description}
                      </p>
                      
                      {/* Features list */}
                      <div className="space-y-3 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-white/80">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                            <span>{feature}</span>
                      </div>
                        ))}
                      </div>
                      
                      {/* Arrow indicator */}
                      <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                        <span className="text-sm font-medium">Learn More</span>
                        <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </div>
                      
                      {/* Glass shine effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.8 }}
                      />
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="text-center mt-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              viewport={{ once: true }}
            >
                <Link href="/services">
                <motion.button
                  className="group relative px-8 py-4 bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl text-white font-semibold text-lg shadow-2xl overflow-hidden"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center">
                    View All Services
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.button>
                </Link>
            </motion.div>
          </div>
        </section>

        {/* Portfolio Preview */}
        <section id="portfolio" className="py-32 px-6 lg:px-12 bg-gray-900" aria-labelledby="portfolio-heading">
          <div className="max-w-7xl mx-auto">
            <header className="text-center mb-20">
              <AnimatedText>
                <h2 id="portfolio-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Check Our <span className="text-gray-300">Projects</span> With Real Results
                </h2>
              </AnimatedText>
              <AnimatedText delay={0.2}>
                <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
                  Explore our portfolio of successful projects that have helped businesses achieve their digital goals.
                </p>
              </AnimatedText>
            </header>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "E-commerce Platform",
                  category: "Web Development",
                  image: "/placeholder.svg?height=400&width=600&text=E-commerce+Platform",
                  alt: "Modern e-commerce platform with responsive design and user-friendly interface",
                },
                {
                  title: "Mobile Banking App",
                  category: "App Development",
                  image: "/placeholder.svg?height=400&width=600&text=Mobile+Banking+App",
                  alt: "Secure mobile banking application with intuitive user experience",
                },
                {
                  title: "Brand Identity Design",
                  category: "UI/UX Design",
                  image: "/placeholder.svg?height=400&width=600&text=Brand+Identity+Design",
                  alt: "Complete brand identity design including logo, colors, and visual elements",
                },
              ].map((project, index) => (
                <article key={index}>
                  <AnimatedCard delay={index * 0.1} className="overflow-hidden group bg-gray-800/30 border-gray-700">
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.alt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
                      <motion.div
                        className="absolute bottom-4 left-4 right-4"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-gray-800/80 backdrop-blur-sm text-white mb-2 border border-gray-600">
                          {project.category}
                        </span>
                      </motion.div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-white group-hover:text-gray-200 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </AnimatedCard>
                </article>
              ))}
            </div>

            <div className="text-center mt-16">
              <AnimatedText delay={0.6}>
                <Link href="/portfolio">
                  <MagneticButton>
                    <span className="flex items-center">
                    View Full Portfolio <ArrowRight className="ml-2 w-4 h-4" />
                    </span>
                  </MagneticButton>
                </Link>
              </AnimatedText>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-32 px-6 lg:px-12 bg-gray-950" aria-labelledby="testimonials-heading">
          <div className="max-w-7xl mx-auto">
            <header className="text-center mb-20">
              <AnimatedText>
                <h2 id="testimonials-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  What <span className="text-gray-300">Clients</span> Say About Us
                </h2>
              </AnimatedText>
              <AnimatedText delay={0.2}>
                <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
                  Don't just take our word for it. Here's what our satisfied clients have to say about our work.
                </p>
              </AnimatedText>
            </header>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Alex Thompson",
                  company: "TechStart Inc.",
                  review:
                    "Reimagined Yield transformed our digital presence completely. Their team's expertise and dedication are unmatched.",
                  rating: 5,
                },
                {
                  name: "Maria Garcia",
                  company: "Creative Solutions",
                  review:
                    "Outstanding work on our mobile app. The user experience is incredible and our customers love it.",
                  rating: 5,
                },
                {
                  name: "James Wilson",
                  company: "Global Enterprises",
                  review:
                    "Professional, reliable, and results-driven. They delivered exactly what we needed on time and within budget.",
                  rating: 5,
                },
                {
                  name: "Lisa Chang",
                  company: "Innovation Labs",
                  review:
                    "The SEO results speak for themselves. Our organic traffic increased by 300% in just 6 months.",
                  rating: 5,
                },
              ].map((testimonial, index) => (
                <article key={index}>
                  <GlowingCard className="h-full">
                    <div className="p-8 bg-gray-800/30 border border-gray-700 rounded-2xl hover:bg-gray-800/50 hover:border-gray-600 transition-all duration-300">
                      <div className="flex mb-6" aria-label={`${testimonial.rating} star rating`}>
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 + index * 0.1 }}
                          >
                            <Star className="w-4 h-4 text-yellow-400 fill-current" aria-hidden="true" />
                          </motion.div>
                        ))}
                      </div>
                      <blockquote className="text-gray-300 mb-8 leading-relaxed">"{testimonial.review}"</blockquote>
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mr-4 shadow-sm">
                          <span className="text-black font-semibold text-sm" aria-hidden="true">
                            {testimonial.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <cite className="font-semibold text-white text-sm not-italic">{testimonial.name}</cite>
                          <div className="text-xs text-gray-400">{testimonial.company}</div>
                        </div>
                      </div>
                    </div>
                  </GlowingCard>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* APPLE GLASS CTA SECTION */}
        <section
          className="py-32 px-6 lg:px-12 relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
          aria-labelledby="cta-heading"
        >
          {/* Dynamic Glass Background */}
          <motion.div className="absolute inset-0" aria-hidden="true">
            <motion.div 
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 backdrop-blur-3xl rounded-full border border-white/10"
              animate={{ 
                x: [0, 100, 0],
                y: [0, -60, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 30,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 backdrop-blur-3xl rounded-full border border-purple-500/20"
              animate={{ 
                x: [0, -80, 0],
                y: [0, 50, 0],
                scale: [1, 0.9, 1]
              }}
              transition={{ 
                duration: 35,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 10
              }}
            />
            <motion.div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-cyan-500/5 via-transparent to-transparent rounded-full"
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 40,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear"
              }}
            />
          </motion.div>

          <div className="max-w-6xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 id="cta-heading" className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                Ready to Build Something{" "}
                <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                  Extraordinary
                </span>?
              </h2>
            </motion.div>

            <motion.p
              className="text-white/80 text-xl md:text-2xl mb-16 leading-relaxed max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Join hundreds of successful businesses who have transformed their digital presence with our cutting-edge solutions. 
              Let's create something amazing together.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link href="/contact">
                <motion.button
                  className="group relative px-10 py-5 bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl text-white font-semibold text-xl shadow-2xl overflow-hidden"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center">
                  Start Your Project
                    <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.button>
              </Link>
              <Link href="/portfolio">
                <motion.button
                  className="group px-10 py-5 bg-transparent backdrop-blur-xl border border-white/20 rounded-3xl text-white/90 font-semibold text-xl hover:bg-white/10 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center">
                    <Play className="mr-3 w-6 h-6" />
                    View Our Work
                  </span>
                </motion.button>
              </Link>
            </motion.div>

            {/* Glass Trust Indicators */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {[
                { number: "50+", label: "Happy Clients" },
                { number: "100+", label: "Projects Delivered" },
                { number: "5+", label: "Years Experience" },
                { number: "24/7", label: "Support Available" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 shadow-2xl"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-white/70 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default function HomePage() {
  return (
    <PageLayout>
      <HomePageContent />
    </PageLayout>
  )
}
