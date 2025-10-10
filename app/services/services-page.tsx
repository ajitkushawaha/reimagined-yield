"use client"
import { ArrowRight, Globe, Smartphone, Search, Palette, Code, BarChart, CheckCircle, ShoppingCart } from "lucide-react"
import Link from "next/link"
import { AnimatedText } from "@/components/eternity/animated-text"
import { AnimatedCard } from "@/components/eternity/animated-card"
import { MagneticButton } from "@/components/eternity/magnetic-button"
import { GlowingCard } from "@/components/eternity/glowing-card"
import { ServiceCard3D } from "@/components/ui/3d-card"
import { Spotlight } from "@/components/ui/spotlight"
import { motion } from "framer-motion"

export default function ServicesPage() {
  const services = [
    {
      icon: <Code className="w-12 h-12" />,
      title: "Custom Development",
      description: "Tailored software solutions built to meet your specific business requirements and goals.",
      features: [
        "API Development",
        "Database Design",
        "Cloud Integration",
        "Security Implementation",
        "Scalable Architecture",
      ],
      price: "GET A Quote",
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Web Development",
      description: "Custom websites built with modern technologies for optimal performance and user experience.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "CMS Integration", "E-commerce Solutions"],
      price: "GET A Quote",
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that engage users and drive business growth.",
      features: ["iOS & Android", "Cross-Platform", "UI/UX Design", "App Store Optimization", "Maintenance & Support"],
      price: "GET A Quote",
    },
    {
      icon: <Search className="w-12 h-12" />,
      title: "SEO Optimization",
      description: "Strategic SEO services to improve your search rankings and increase organic traffic.",
      features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Content Strategy", "Performance Tracking"],
      price: "GET A Quote",
    },
   
    {
      icon: <ShoppingCart className="w-12 h-12" />,
      title: "Ecommerce Development",
      description: "Complete ecommerce solutions that drive sales and provide exceptional shopping experiences.",
      features: ["Online Store Setup", "Payment Integration", "Inventory Management"],
      price: "GET A Quote",
    },
   
    {
      icon: <BarChart className="w-12 h-12" />,
      title: "Digital Marketing",
      description: "Data-driven marketing strategies to reach your target audience and maximize ROI.",
      features: [
        "Social Media Marketing",
        "PPC Advertising",
        "Email Marketing",
        "Content Marketing",
        "Analytics & Reporting",
      ],
      price: "GET A Quote",
    },
  ]

  const process = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "We start by understanding your business goals, target audience, and project requirements.",
    },
    {
      step: "02",
      title: "Design & Planning",
      description: "Our team creates detailed wireframes, designs, and project roadmaps for your approval.",
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "We build your solution using best practices and conduct thorough testing throughout the process.",
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "We deploy your project and provide ongoing support to ensure continued success.",
    },
  ]

  return (
    <div className="bg-black">
      {/* Spotlight Hero Section */}
      <section className="relative flex min-h-[60vh] sm:h-[40rem] w-full overflow-hidden bg-black/[0.96] antialiased md:items-center md:justify-center pt-32 pb-16">
        {/* Grid Background */}
        <div
          className="pointer-events-none absolute inset-0 [background-size:40px_40px] select-none [background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
        />

        {/* Spotlight Effect */}
        <Spotlight
          className="-top-40 left-0 md:-top-20 md:left-60"
          fill="white"
        />

        {/* Content */}
        <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-0">
          <motion.h1
            className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500 bg-clip-text text-transparent">
              Services
            </span>
          </motion.h1>
          <motion.p
            className="mx-auto mt-4 max-w-lg text-center text-base font-normal text-neutral-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Comprehensive digital solutions designed to transform your business and drive measurable results.
          </motion.p>
        </div>
      </section>

      {/* Cyan Theme Services Grid */}
      <section className="py-32 px-6 lg:px-12 relative bg-gradient-to-b from-slate-900 to-black">
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <ServiceCard3D
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  features={service.features}
                  color={index % 2 === 0 ? "from-cyan-400 to-cyan-600" : "from-cyan-500 to-cyan-700"}
                  className="h-full"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cyan Theme Process Section */}
      <section className="py-32 px-6 lg:px-12 relative bg-gradient-to-b from-black to-slate-900">
        {/* Cyan Background Elements */}
        <motion.div className="absolute inset-0" aria-hidden="true">
          <motion.div 
            className="absolute top-1/3 left-1/4 w-72 h-72 bg-cyan-500/10 backdrop-blur-3xl rounded-full border border-cyan-500/20"
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
        </motion.div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <AnimatedText>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500 bg-clip-text text-transparent">Process</span>
              </h2>
            </AnimatedText>
            <AnimatedText delay={0.2}>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                We follow a proven methodology to ensure your project is delivered on time, within budget, and exceeds
                expectations.
              </p>
            </AnimatedText>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <AnimatedCard key={index} delay={index * 0.1} className="p-8 text-center backdrop-blur-xl bg-cyan-500/5 border border-cyan-400/20 rounded-3xl shadow-2xl hover:bg-cyan-500/10 transition-colors">
                <div className="text-4xl font-bold text-cyan-400 mb-4">{step.step}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Cyan Theme CTA Section */}
      <section className="py-32 px-6 lg:px-12 relative bg-gradient-to-b from-slate-900 to-black">
        {/* Cyan Background Elements */}
        <motion.div className="absolute inset-0" aria-hidden="true">
          <motion.div 
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 backdrop-blur-3xl rounded-full border border-cyan-500/20"
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
        </motion.div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <AnimatedText>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Ready to <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500 bg-clip-text text-transparent">Get Started</span>?
            </h2>
          </AnimatedText>
          <AnimatedText delay={0.2}>
            <p className="text-gray-400 text-lg mb-12 leading-relaxed">
              Let's discuss your project and create a custom solution that drives real results for your business.
            </p>
          </AnimatedText>
          <AnimatedText delay={0.4}>
            <MagneticButton className="backdrop-blur-xl bg-cyan-500/20 border border-cyan-400/30 rounded-2xl text-white font-semibold px-8 py-4 shadow-2xl hover:bg-cyan-500/30 transition-colors">
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
