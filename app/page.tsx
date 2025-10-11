"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
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
  ShoppingCart,
  Linkedin,
  Sparkles,
} from "lucide-react"
import Link from "next/link"
import { ThreeDMarquee } from "@/components/ui/3d-marquee"
import { Testimonial3DMarquee } from "@/components/ui/testimonial-3d-marquee"
import { Highlight } from "@/components/ui/hero-highlight"
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect"
import { CardSpotlight } from "@/components/ui/card-spotlight"
import { Meteors } from "@/components/ui/meteors"
import { CometCard } from "@/components/ui/comet-card"
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

  // Images for 3D Marquee
  const marqueeImages = [
    "/logo.png",
    "/placeholder.jpg",
    "/placeholder.svg",
    "/placeholder-logo.png",
    "/placeholder-logo.svg",
    "/placeholder-user.jpg",
    "/saurabh.jpeg",
    "https://media.licdn.com/dms/image/v2/D4D03AQFIz0m9uBFIog/profile-displayphoto-shrink_100_100/B4DZeUU8CmGsAU-/0/1750540207046?e=1762992000&v=beta&t=B8pJHsm3zKCI_ZRKQIPmc6XaWaOr2IPlXhX104G6UEo",
    "/images/team-meeting.jpg",
    "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=300&fit=crop",
    "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=300&fit=crop",
    "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=300&fit=crop",
    "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=300&fit=crop",
    "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=300&fit=crop",
    "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=300&fit=crop",
    "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=300&fit=crop",
    "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=300&fit=crop",
    "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=300&fit=crop",
    "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=300&fit=crop",
    "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=300&fit=crop",
    "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=300&fit=crop",
    "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=300&fit=crop",
    "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=300&fit=crop",
    "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=300&fit=crop",
    "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=300&fit=crop",
    "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=300&fit=crop",
    "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=300&fit=crop",
    "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=300&fit=crop",
    "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=300&fit=crop",
  ]

  return (
    <>
      <div className="bg-black">
        {/* HERO SECTION WITH 3D MARQUEE */}
        <section
          id="home"
          className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black pt-20 "
          aria-labelledby="hero-heading"
        >
          {/* 3D Marquee Background */}
          <div className="absolute inset-0 z-0">
            <ThreeDMarquee
              className="pointer-events-none absolute inset-0 h-full w-full"
              images={marqueeImages}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-gray-900/90 to-black/90" />
          </div>

          {/* Main Content */}
          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <h1 id="hero-heading" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight mb-6 sm:mb-8">
                Crafting Digital{" "}
                <Highlight className="text-black dark:text-white">
                  Excellence
                </Highlight>{" "}
                for Your Business
              </h1>
              <div className="sr-only">
                Founded by <strong>Saurabh Rajput</strong> (CEO) and <strong>Ajit Kushwaha</strong> (CTO)
              </div>
            </motion.div>

            <motion.p
              className="text-white/80 text-lg sm:text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto mb-8 sm:mb-12 md:mb-16 px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              We transform your digital presence with cutting-edge web development, 
              mobile apps, and digital marketing solutions that drive real results.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 md:mb-20 px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <Link href="/contact">
                <motion.button
                  className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold text-base sm:text-lg rounded-2xl shadow-2xl overflow-hidden w-full sm:w-auto"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center">
                    Get Started
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
              <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-cyan-700"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.button>
              </Link>
              <Link href="/portfolio">
                <motion.button
                  className="group px-6 sm:px-8 py-3 sm:py-4 bg-transparent border border-cyan-400/30 rounded-2xl text-white/90 font-semibold text-base sm:text-lg hover:bg-cyan-500/10 transition-all duration-300 w-full sm:w-auto"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center">
                    <Play className="mr-2 w-5 h-5" />
                    View Our Work
                  </span>
                </motion.button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 max-w-4xl mx-auto px-4 pb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
            >
              {[
                { number: "50+", label: "Projects" },
                { number: "100%", label: "Success" },
                { number: "24/7", label: "Support" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6 shadow-2xl"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-white/70 text-sm">{stat.label}</div>
                  </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
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

        {/* WHY CHOOSE CODYN SECTION */}
        <section id="why-choose" className="py-32 px-6 lg:px-12 relative bg-gradient-to-b from-gray-900 to-black" aria-labelledby="why-choose-heading">
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 id="why-choose-heading" className="text-5xl md:text-6xl font-bold text-white mb-8">
                Why Choose{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-cyan-500 bg-clip-text text-transparent">
                  Codyn?
                </span>
              </h2>
              <p className="text-white/70 text-xl max-w-4xl mx-auto leading-relaxed">
                We combine cutting-edge technology with creative excellence to deliver fluid, intuitive digital experiences
              </p>
                    </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Lightning Fast */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                <CardSpotlight className="h-80 w-full">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Lightning Fast</h3>
                    <p className="text-white/70 leading-relaxed">
                      Optimized performance and blazing-fast load times for seamless user experience
                    </p>
                  </div>
                </CardSpotlight>
              </motion.div>

              {/* Innovative Solutions */}
                  <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <CardSpotlight className="h-80 w-full">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                      <Lightbulb className="w-8 h-8 text-white" />
            </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Innovative Solutions</h3>
                    <p className="text-white/70 leading-relaxed">
                      Cutting-edge technology and creative approaches to solve complex problems
                    </p>
          </div>
                </CardSpotlight>
          </motion.div>

              {/* Proven Results */}
                    <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                <CardSpotlight className="h-80 w-full">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Proven Results</h3>
                    <p className="text-white/70 leading-relaxed">
                      Data-driven strategies that consistently deliver measurable business growth
                    </p>
                  </div>
                </CardSpotlight>
                    </motion.div>

              {/* Secure & Reliable */}
                      <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                <CardSpotlight className="h-80 w-full">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Secure & Reliable</h3>
                    <p className="text-white/70 leading-relaxed">
                      Enterprise-grade security and 99.9% uptime guarantee for peace of mind
                    </p>
                  </div>
                </CardSpotlight>
                      </motion.div>

              {/* Expert Team */}
                  <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <CardSpotlight className="h-80 w-full">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Expert Team</h3>
                    <p className="text-white/70 leading-relaxed">
                      Experienced professionals with deep expertise in modern technologies
                    </p>
                  </div>
                </CardSpotlight>
                  </motion.div>

              {/* Quality Assured */}
                    <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <CardSpotlight className="h-80 w-full">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                      <CheckCircle className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Quality Assured</h3>
                    <p className="text-white/70 leading-relaxed">
                      Rigorous testing and quality assurance processes ensure flawless delivery
                    </p>
                  </div>
                </CardSpotlight>
                </motion.div>
            </div>
          </div>
        </section>

        {/* OUR PROCESS SECTION WITH METEORS */}
        <section id="process" className="py-32 px-6 lg:px-12 relative bg-gradient-to-b from-black to-gray-900 overflow-hidden" aria-labelledby="process-heading">
          <div className="max-w-7xl mx-auto relative z-10">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
              className="text-center mb-16"
                  >
              <h2 id="process-heading" className="text-5xl md:text-6xl font-bold text-white mb-8">
                Our{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-cyan-500 bg-clip-text text-transparent">
                  Process
                </span>
              </h2>
              <p className="text-white/70 text-xl max-w-4xl mx-auto leading-relaxed">
                A fluid, proven methodology that ensures your project's success from concept to launch
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Discovery */}
                      <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                className="relative"
              >
                <div className="relative w-full h-80">
                  <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 blur-3xl opacity-20" />
                  <div className="relative flex h-full flex-col items-center justify-center rounded-2xl border border-white/10 bg-black/50 px-6 py-8 shadow-xl backdrop-blur-sm">
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-blue-400/30 bg-gradient-to-r from-blue-500/20 to-cyan-500/20">
                      <span className="text-2xl font-bold text-blue-400">01</span>
                    </div>
                    <h3 className="relative z-50 mb-4 text-2xl font-bold text-white text-center">
                      Discovery
                    </h3>
                    <p className="relative z-50 text-center text-base font-normal text-white/70 leading-relaxed">
                      We dive deep into your business goals, target audience, and requirements
                    </p>
                    <Meteors number={15} />
                  </div>
                </div>
              </motion.div>

              {/* Strategy */}
                  <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative w-full h-80">
                  <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 blur-3xl opacity-20" />
                  <div className="relative flex h-full flex-col items-center justify-center rounded-2xl border border-white/10 bg-black/50 px-6 py-8 shadow-xl backdrop-blur-sm">
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-purple-400/30 bg-gradient-to-r from-purple-500/20 to-pink-500/20">
                      <span className="text-2xl font-bold text-purple-400">02</span>
                    </div>
                    <h3 className="relative z-50 mb-4 text-2xl font-bold text-white text-center">
                      Strategy
                    </h3>
                    <p className="relative z-50 text-center text-base font-normal text-white/70 leading-relaxed">
                      Crafting a comprehensive plan tailored to your specific needs and objectives
                    </p>
                    <Meteors number={15} />
                  </div>
                </div>
                      </motion.div>

              {/* Development */}
                      <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative w-full h-80">
                  <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 blur-3xl opacity-20" />
                  <div className="relative flex h-full flex-col items-center justify-center rounded-2xl border border-white/10 bg-black/50 px-6 py-8 shadow-xl backdrop-blur-sm">
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-green-400/30 bg-gradient-to-r from-green-500/20 to-emerald-500/20">
                      <span className="text-2xl font-bold text-green-400">03</span>
                    </div>
                    <h3 className="relative z-50 mb-4 text-2xl font-bold text-white text-center">
                      Development
                    </h3>
                    <p className="relative z-50 text-center text-base font-normal text-white/70 leading-relaxed">
                      Building your solution with cutting-edge technology and best practices
                    </p>
                    <Meteors number={15} />
                  </div>
                </div>
              </motion.div>
                    
              {/* Launch */}
                    <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative w-full h-80">
                  <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 blur-3xl opacity-20" />
                  <div className="relative flex h-full flex-col items-center justify-center rounded-2xl border border-white/10 bg-black/50 px-6 py-8 shadow-xl backdrop-blur-sm">
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-orange-400/30 bg-gradient-to-r from-orange-500/20 to-red-500/20">
                      <span className="text-2xl font-bold text-orange-400">04</span>
                    </div>
                    <h3 className="relative z-50 mb-4 text-2xl font-bold text-white text-center">
                      Launch
                    </h3>
                    <p className="relative z-50 text-center text-base font-normal text-white/70 leading-relaxed">
                      Deploying your project and providing ongoing support for optimal performance
                    </p>
                    <Meteors number={15} />
                  </div>
                </div>
                  </motion.div>
                </div>
          </div>
        </section>

        {/* SERVICES SECTION WITH CARD SPOTLIGHT */}
        <section id="services" className="py-32 px-6 lg:px-12 relative bg-gradient-to-b from-black to-gray-900" aria-labelledby="services-heading">
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
                <span className="bg-gradient-to-r from-cyan-400 to-cyan-500 bg-clip-text text-transparent">
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
                  icon: <Code className="w-8 h-8" />,
                  title: "Web Development",
                  description: "Custom websites built with modern technologies for optimal performance and user experience",
                  features: ["React & Next.js", "Responsive Design", "SEO Optimized"],
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  icon: <Smartphone className="w-8 h-8" />,
                  title: "Mobile App Development",
                  description: "Native and cross-platform mobile applications that engage users and drive business growth",
                  features: ["iOS & Android", "Cross-Platform", "App Store Ready"],
                  color: "from-purple-500 to-pink-500",
                },
                {
                  icon: <Search className="w-8 h-8" />,
                  title: "SEO Optimization",
                  description: "Strategic SEO services to improve your search rankings and increase organic traffic",
                  features: ["Keyword Research", "Technical SEO", "Content Strategy"],
                  color: "from-green-500 to-emerald-500",
                },
                {
                  icon: <ShoppingCart className="w-8 h-8" />,
                  title: "E-commerce Development",
                  description: "Complete ecommerce solutions that drive sales and provide exceptional shopping experiences",
                  features: ["Online Store Setup", "Payment Integration", "Inventory Management"],
                  color: "from-orange-500 to-red-500",
                },
                {
                  icon: <BarChart className="w-8 h-8" />,
                  title: "Digital Marketing",
                  description: "Data-driven marketing strategies to reach your target audience and maximize ROI",
                  features: ["Social Media", "PPC Campaigns", "Analytics"],
                  color: "from-teal-500 to-cyan-500",
                },
                {
                  icon: <Palette className="w-8 h-8" />,
                  title: "UI/UX Design",
                  description: "Beautiful, intuitive designs that users love and that drive conversions",
                  features: ["User Research", "Wireframing", "Prototyping"],
                  color: "from-indigo-500 to-purple-500",
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
                  <CardSpotlight className="h-full p-8">
                    <div className="text-center">
                        <motion.div
                        className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
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
                      <div className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-white/80">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                            <span>{feature}</span>
                      </div>
                        ))}
                      </div>
                      </div>
                  </CardSpotlight>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* COLLABORATION SECTION WITH COMET CARDS */}
        <section id="collaboration" className="py-32 px-6 lg:px-12 relative bg-gradient-to-b from-gray-900 to-black" aria-labelledby="collaboration-heading">
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 id="collaboration-heading" className="text-5xl md:text-6xl font-bold text-white mb-8">
                Built Through{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-cyan-500 bg-clip-text text-transparent">
                  Collaboration
                  </span>
                </h2>
              <p className="text-white/70 text-xl max-w-4xl mx-auto leading-relaxed">
                  We believe the best results come from working closely with our clients as partners, not just service providers.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
              {/* Happy Clients Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                <CometCard rotateDepth={15} translateDepth={15}>
                  <div className="bg-gradient-to-br from-gray-900 to-black p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-white mb-2">
                        <AnimatedCounter end={200} duration={2} />+
                  </div>
                      <div className="text-cyan-400 font-semibold mb-2">Happy Clients</div>
                      <div className="text-white/60 text-sm">
                        Satisfied customers who trust our expertise
                  </div>
            </div>
                  </div>
                </CometCard>
              </motion.div>

              {/* Countries Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
              >
                <CometCard rotateDepth={15} translateDepth={15}>
                  <div className="bg-gradient-to-br from-gray-900 to-black p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-white mb-2">
                        <AnimatedCounter end={10} duration={2} />+
                    </div>
                      <div className="text-cyan-400 font-semibold mb-2">Countries</div>
                      <div className="text-white/60 text-sm">
                        Global reach with local expertise
                      </div>
                    </div>
              </div>
                </CometCard>
              </motion.div>

              {/* Client Rating Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
              >
                <CometCard rotateDepth={15} translateDepth={15}>
                  <div className="bg-gradient-to-br from-gray-900 to-black p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-white mb-2">
                        <AnimatedCounter end={5} duration={2} />
                    </div>
                      <div className="text-cyan-400 font-semibold mb-2">Client Rating</div>
                      <div className="text-white/60 text-sm">
                        Average rating from our clients
                      </div>
                    </div>
                  </div>
                </CometCard>
                  </motion.div>
              </div>
            </div>
        </section>

        {/* TRUSTED BY INDUSTRY LEADERS SECTION */}
        <section id="trusted-by" className="py-32 px-6 lg:px-12 relative bg-gradient-to-b from-black to-gray-900" aria-labelledby="trusted-by-heading">
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 id="trusted-by-heading" className="text-5xl md:text-6xl font-bold text-white mb-8">
                Trusted by{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-cyan-500 bg-clip-text text-transparent">
                  Industry Leaders
                </span>
              </h2>
              <p className="text-white/70 text-xl max-w-4xl mx-auto leading-relaxed">
                We're proud to partner with leading companies across various industries
              </p>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
                {[
                  { 
                    name: "Growing Wing", 
                  logo: "https://www.growingwing.com/public/images/logo.png",
                  url: "https://www.growingwing.com/"
                  },
                  { 
                    name: "Heighten Infotech", 
                  logo: "https://www.heighteninfotech.com/img/logo.png",
                  url: "https://www.heighteninfotech.com/"
                  },
                  { 
                    name: "Patiyal Infotech", 
                  logo: "https://patiyalinfotech.com/wp-content/uploads/2024/08/logo.png",
                  url: "https://patiyalinfotech.com/"
                  },
                  { 
                    name: "Klance", 
                  logo: "https://klance.net/wp-content/uploads/2025/06/WhatsApp-Image-2025-08-06-at-00.57.10_9d1529bc.jpg",
                  url: "https://klance.net/"
                  },
                  { 
                    name: "WebTech99", 
                  logo: "https://webtech99.com/wp-content/uploads/2023/10/webtech99-logo-final.png",
                  url: "https://webtech99.com/"
                  },
                  { 
                    name: "HDH Technologies", 
                  logo: "https://hdhtechnologies.com/wp-content/uploads/2024/01/logo-hdh.png",
                  url: "https://hdhtechnologies.com/"
                  }
                ].map((company, index) => (
                <motion.div
                  key={company.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CometCard 
                    rotateDepth={12} 
                    translateDepth={10}
                    className="w-full"
                  >
                    <a
                    href={company.url}
                    target="_blank"
                    rel="noopener noreferrer"
                      className="w-full h-24 sm:h-28 lg:h-32 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl hover:bg-white/20 hover:border-white/30 transition-all duration-300 flex items-center justify-center p-3 sm:p-4 lg:p-6"
                    >
                      <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 flex items-center justify-center">
                      <img 
                        src={company.logo} 
                        alt={`${company.name} logo`}
                          className="max-w-full max-h-full object-contain transition-opacity duration-300 hover:opacity-80"
                        />
                      </div>
                    </a>
                  </CometCard>
                </motion.div>
                ))}
              </div>
            </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section id="testimonials" className="py-32 px-6 lg:px-12 bg-gradient-to-b from-gray-900 to-black" aria-labelledby="testimonials-heading">
          <div className="max-w-7xl mx-auto">
            <header className="text-center mb-20">
              <motion.h2
                id="testimonials-heading"
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
                What Clients Say <span className="bg-gradient-to-r from-cyan-400 to-cyan-500 bg-clip-text text-transparent">About Us</span>
              </motion.h2>
              <motion.p
                className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
              >
                Don't just take our word for it. Here's what our satisfied clients have to say about our work.
              </motion.p>
            </header>

            {/* 3D Marquee with Client Testimonials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mx-auto my-10 max-w-7xl rounded-3xl bg-gray-950/5 p-2 ring-1 ring-neutral-700/10 dark:bg-neutral-800"
            >
              <Testimonial3DMarquee testimonials={[
                {
                  name: "Alex Thompson",
                  company: "TechStart Inc.",
                  quote: "Codyn transformed our digital presence completely. Their team's expertise and dedication are unmatched.",
                  rating: 5,
                  avatar: "A",
                  color: "from-blue-500 to-purple-500"
                },
                {
                  name: "Maria Garcia",
                  company: "Creative Solutions",
                  quote: "Outstanding work on our mobile app. The user experience is incredible and our customers love it.",
                  rating: 5,
                  avatar: "M",
                  color: "from-green-500 to-cyan-500"
                },
                {
                  name: "James Wilson",
                  company: "Global Enterprises",
                  quote: "Professional, reliable, and results-driven. They delivered exactly what we needed on time and within budget.",
                  rating: 5,
                  avatar: "J",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  name: "Lisa Chang",
                  company: "Innovation Labs",
                  quote: "The SEO results speak for themselves. Our organic traffic increased by 300% in just 6 months.",
                  rating: 5,
                  avatar: "L",
                  color: "from-orange-500 to-red-500"
                },
                {
                  name: "David Kim",
                  company: "Digital Ventures",
                  quote: "Exceptional attention to detail and innovative solutions. Codyn exceeded our expectations in every way.",
                  rating: 5,
                  avatar: "D",
                  color: "from-cyan-500 to-blue-500"
                },
                {
                  name: "Sarah Johnson",
                  company: "TechCorp",
                  quote: "Working with Codyn was a game-changer. They understood our vision and brought it to life perfectly.",
                  rating: 5,
                  avatar: "S",
                  color: "from-pink-500 to-purple-500"
                },
                {
                  name: "Michael Chen",
                  company: "StartupHub",
                  quote: "Fast, efficient, and incredibly talented. Our project was delivered ahead of schedule with outstanding quality.",
                  rating: 5,
                  avatar: "M",
                  color: "from-yellow-500 to-orange-500"
                },
                {
                  name: "Emily Rodriguez",
                  company: "InnovateLab",
                  quote: "The team's creativity and technical expertise are second to none. Highly recommend their services.",
                  rating: 5,
                  avatar: "E",
                  color: "from-indigo-500 to-purple-500"
                },
                {
                  name: "Alex Thompson",
                  company: "TechStart Inc.",
                  quote: "Codyn transformed our digital presence completely. Their team's expertise and dedication are unmatched.",
                  rating: 5,
                  avatar: "A",
                  color: "from-blue-500 to-purple-500"
                },
                {
                  name: "Maria Garcia",
                  company: "Creative Solutions",
                  quote: "Outstanding work on our mobile app. The user experience is incredible and our customers love it.",
                  rating: 5,
                  avatar: "M",
                  color: "from-green-500 to-cyan-500"
                },
                {
                  name: "James Wilson",
                  company: "Global Enterprises",
                  quote: "Professional, reliable, and results-driven. They delivered exactly what we needed on time and within budget.",
                  rating: 5,
                  avatar: "J",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  name: "Lisa Chang",
                  company: "Innovation Labs",
                  quote: "The SEO results speak for themselves. Our organic traffic increased by 300% in just 6 months.",
                  rating: 5,
                  avatar: "L",
                  color: "from-orange-500 to-red-500"
                },
                {
                  name: "David Kim",
                  company: "Digital Ventures",
                  quote: "Exceptional attention to detail and innovative solutions. Codyn exceeded our expectations in every way.",
                  rating: 5,
                  avatar: "D",
                  color: "from-cyan-500 to-blue-500"
                },
                {
                  name: "Sarah Johnson",
                  company: "TechCorp",
                  quote: "Working with Codyn was a game-changer. They understood our vision and brought it to life perfectly.",
                  rating: 5,
                  avatar: "S",
                  color: "from-pink-500 to-purple-500"
                },
                {
                  name: "Michael Chen",
                  company: "StartupHub",
                  quote: "Fast, efficient, and incredibly talented. Our project was delivered ahead of schedule with outstanding quality.",
                  rating: 5,
                  avatar: "M",
                  color: "from-yellow-500 to-orange-500"
                },
                {
                  name: "Emily Rodriguez",
                  company: "InnovateLab",
                  quote: "The team's creativity and technical expertise are second to none. Highly recommend their services.",
                  rating: 5,
                  avatar: "E",
                  color: "from-indigo-500 to-purple-500"
                },
                {
                  name: "Alex Thompson",
                  company: "TechStart Inc.",
                  quote: "Codyn transformed our digital presence completely. Their team's expertise and dedication are unmatched.",
                  rating: 5,
                  avatar: "A",
                  color: "from-blue-500 to-purple-500"
                },
                {
                  name: "Maria Garcia",
                  company: "Creative Solutions",
                  quote: "Outstanding work on our mobile app. The user experience is incredible and our customers love it.",
                  rating: 5,
                  avatar: "M",
                  color: "from-green-500 to-cyan-500"
                },
                {
                  name: "James Wilson",
                  company: "Global Enterprises",
                  quote: "Professional, reliable, and results-driven. They delivered exactly what we needed on time and within budget.",
                  rating: 5,
                  avatar: "J",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  name: "Lisa Chang",
                  company: "Innovation Labs",
                  quote: "The SEO results speak for themselves. Our organic traffic increased by 300% in just 6 months.",
                  rating: 5,
                  avatar: "L",
                  color: "from-orange-500 to-red-500"
                },
                {
                  name: "David Kim",
                  company: "Digital Ventures",
                  quote: "Exceptional attention to detail and innovative solutions. Codyn exceeded our expectations in every way.",
                  rating: 5,
                  avatar: "D",
                  color: "from-cyan-500 to-blue-500"
                },
                {
                  name: "Sarah Johnson",
                  company: "TechCorp",
                  quote: "Working with Codyn was a game-changer. They understood our vision and brought it to life perfectly.",
                  rating: 5,
                  avatar: "S",
                  color: "from-pink-500 to-purple-500"
                },
                {
                  name: "Michael Chen",
                  company: "StartupHub",
                  quote: "Fast, efficient, and incredibly talented. Our project was delivered ahead of schedule with outstanding quality.",
                  rating: 5,
                  avatar: "M",
                  color: "from-yellow-500 to-orange-500"
                },
                {
                  name: "Emily Rodriguez",
                  company: "InnovateLab",
                  quote: "The team's creativity and technical expertise are second to none. Highly recommend their services.",
                  rating: 5,
                  avatar: "E",
                  color: "from-indigo-500 to-purple-500"
                },
                {
                  name: "Alex Thompson",
                  company: "TechStart Inc.",
                  quote: "Codyn transformed our digital presence completely. Their team's expertise and dedication are unmatched.",
                  rating: 5,
                  avatar: "A",
                  color: "from-blue-500 to-purple-500"
                },
                {
                  name: "Maria Garcia",
                  company: "Creative Solutions",
                  quote: "Outstanding work on our mobile app. The user experience is incredible and our customers love it.",
                  rating: 5,
                  avatar: "M",
                  color: "from-green-500 to-cyan-500"
                },
                {
                  name: "James Wilson",
                  company: "Global Enterprises",
                  quote: "Professional, reliable, and results-driven. They delivered exactly what we needed on time and within budget.",
                  rating: 5,
                  avatar: "J",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  name: "Lisa Chang",
                  company: "Innovation Labs",
                  quote: "The SEO results speak for themselves. Our organic traffic increased by 300% in just 6 months.",
                  rating: 5,
                  avatar: "L",
                  color: "from-orange-500 to-red-500"
                },
                {
                  name: "David Kim",
                  company: "Digital Ventures",
                  quote: "Exceptional attention to detail and innovative solutions. Codyn exceeded our expectations in every way.",
                  rating: 5,
                  avatar: "D",
                  color: "from-cyan-500 to-blue-500"
                },
                {
                  name: "Sarah Johnson",
                  company: "TechCorp",
                  quote: "Working with Codyn was a game-changer. They understood our vision and brought it to life perfectly.",
                  rating: 5,
                  avatar: "S",
                  color: "from-pink-500 to-purple-500"
                },
                {
                  name: "Michael Chen",
                  company: "StartupHub",
                  quote: "Fast, efficient, and incredibly talented. Our project was delivered ahead of schedule with outstanding quality.",
                  rating: 5,
                  avatar: "M",
                  color: "from-yellow-500 to-orange-500"
                },
                {
                  name: "Emily Rodriguez",
                  company: "InnovateLab",
                  quote: "The team's creativity and technical expertise are second to none. Highly recommend their services.",
                  rating: 5,
                  avatar: "E",
                  color: "from-indigo-500 to-purple-500"
                },
              ]} />
                          </motion.div>

          </div>
        </section>

        {/* CTA SECTION */}
        <section
          className="py-32 px-6 lg:px-12 relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black"
          aria-labelledby="cta-heading"
        >
          <div className="max-w-6xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <TypewriterEffectSmooth 
                words={[
                  { text: "Ready" },
                  { text: "to" },
                  { text: "Build" },
                  { text: "Something" },
                  { text: "Extraordinary", className: "text-cyan-400 dark:text-cyan-400" },
                  { text: "?" }
                ]}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white px-4"
              />
            </motion.div>

            <motion.p
              className="text-white/80 text-xl md:text-2xl mb-16 leading-relaxed max-w-4xl mx-auto px-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Join hundreds of successful businesses who have transformed their digital presence with our cutting-edge solutions. 
              Let's create something amazing together.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center items-center px-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link href="/contact">
                <motion.button
                  className="group relative px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold text-lg sm:text-xl rounded-3xl shadow-2xl overflow-hidden w-full sm:w-auto"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center">
                  Start Your Project
                    <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-cyan-700"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.button>
              </Link>
              <Link href="/portfolio">
                <motion.button
                  className="group px-8 sm:px-10 py-4 sm:py-5 bg-transparent border border-cyan-400/30 rounded-3xl text-white/90 font-semibold text-lg sm:text-xl hover:bg-cyan-500/10 transition-all duration-300 w-full sm:w-auto"
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