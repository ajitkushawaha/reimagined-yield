"use client"
import { ArrowRight, Globe, Smartphone, Search, Palette, Code, BarChart, CheckCircle, ShoppingCart } from "lucide-react"
import Link from "next/link"
import { AnimatedText } from "@/components/eternity/animated-text"
import { AnimatedCard } from "@/components/eternity/animated-card"
import { MagneticButton } from "@/components/eternity/magnetic-button"
import { GlowingCard } from "@/components/eternity/glowing-card"
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
                Services
              </span>
            </h1>
          </motion.div>
          <motion.p
            className="text-white/80 text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Comprehensive digital solutions designed to transform your business and drive measurable results.
          </motion.p>
        </div>
      </section>

      {/* Apple Glass Services Grid */}
      <section className="py-32 px-6 lg:px-12 relative bg-gradient-to-b from-slate-800 to-slate-900">
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="group h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="h-full backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl group-hover:bg-white/10 transition-all duration-500 flex flex-col"
                  whileHover={{ 
                    scale: 1.02, 
                    y: -8,
                    rotateY: 3
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="w-20 h-20 bg-gradient-to-r from-blue-400/20 to-purple-400/20 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 5 }}
                  >
                    <div className="text-white">{service.icon}</div>
                  </motion.div>
                  <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-white/90 transition-colors">{service.title}</h3>
                  <p className="text-white/70 leading-relaxed mb-6 flex-grow group-hover:text-white/80 transition-colors">{service.description}</p>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">What's Included:</h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-white/80 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto">
                    <div className="text-2xl font-bold text-white mb-4">{service.price}</div>
                      <Link href="/contact" className="w-full justify-center backdrop-blur-xl bg-white/20 border border-white/30 rounded-2xl text-white font-semibold shadow-2xl px-6 py-3 flex items-center hover:bg-white/30 transition-all duration-300">
                        Get Started <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                  </div>
                  
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

      {/* Process Section */}
      <section className="py-32 px-6 lg:px-12 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <AnimatedText>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Process</h2>
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
              <AnimatedCard key={index} delay={index * 0.1} className="p-8 text-center">
                <div className="text-4xl font-bold text-gray-600 mb-4">{step.step}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 lg:px-12 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedText>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Ready to Get Started?</h2>
          </AnimatedText>
          <AnimatedText delay={0.2}>
            <p className="text-gray-400 text-lg mb-12 leading-relaxed">
              Let's discuss your project and create a custom solution that drives real results for your business.
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
