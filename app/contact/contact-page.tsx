"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useState } from "react"
import { ArrowRight, Mail, Phone, MapPin, Clock, Send } from "lucide-react"
import Link from "next/link"
import { AnimatedText } from "@/components/eternity/animated-text"
import { AnimatedCard } from "@/components/eternity/animated-card"
import { MagneticButton } from "@/components/eternity/magnetic-button"
import { Spotlight } from "@/components/ui/spotlight-new"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: "",
          email: "",
          company: "",
          service: "",
          message: "",
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: ["+91 9915174967", "Mon-Fri 9AM-6PM IST"],
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["merajsaurabh0000@gmail.com", "We reply within 24 hours"],
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Office",
      details: ["Bulandshahr, Uttar Pradesh, India"],
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      details: ["We provide 24/7 Support"],
    },
  ]

  return (
    <div className="bg-black">
      {/* New Spotlight Hero Section */}
      <section className="min-h-[60vh] lg:h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden ">
        <Spotlight 
          gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(195, 100%, 85%, .15) 0, hsla(195, 100%, 55%, .08) 50%, hsla(195, 100%, 45%, 0) 80%)"
          gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(195, 100%, 85%, .12) 0, hsla(195, 100%, 55%, .06) 80%, transparent 100%)"
          gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(195, 100%, 85%, .08) 0, hsla(195, 100%, 45%, .04) 80%, transparent 100%)"
          width={800}
          height={1800}
          smallWidth={320}
          xOffset={150}
        />
        <div className=" max-w-7xl mx-auto relative z-10 w-full pt-0 flex items-center justify-center flex-col">
          <motion.h1
            className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Get In{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500 bg-clip-text text-transparent">
              Touch
            </span>
          </motion.h1>
          <motion.p
            className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Ready to transform your digital presence? Let's discuss your project and create something amazing
            together.
          </motion.p>
        </div>
      </section>

      {/* Cyan Theme Contact Form & Info */}
      <section className="py-16 px-6 lg:px-12 relative bg-gradient-to-b from-slate-900 to-black flex items-center">
        {/* Cyan Background Elements */}
        <motion.div className="absolute inset-0" aria-hidden="true">
          <motion.div 
            className="absolute top-1/4 right-1/4 w-64 h-64 bg-cyan-500/10 backdrop-blur-3xl rounded-full border border-cyan-500/20"
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

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Cyan Contact Form */}
            <motion.div 
              className="backdrop-blur-xl bg-cyan-500/5 border border-cyan-400/20 rounded-3xl p-8 shadow-2xl hover:bg-cyan-500/10 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-white mb-8">
                Send us a <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500 bg-clip-text text-transparent">message</span>
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6 py-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-cyan-500/5 border border-cyan-400/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/30 backdrop-blur-xl hover:bg-cyan-500/10 transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-cyan-500/5 border border-cyan-400/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/30 backdrop-blur-xl hover:bg-cyan-500/10 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-white/80 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-cyan-500/5 border border-cyan-400/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/30 backdrop-blur-xl hover:bg-cyan-500/10 transition-colors"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-white/80 mb-2">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-cyan-500/5 border border-cyan-400/20 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/30 backdrop-blur-xl hover:bg-cyan-500/10 transition-colors"
                    >
                      <option value="" className="bg-black">Select a service</option>
                      <option value="web-development" className="bg-black">Web Development</option>
                      <option value="mobile-apps" className="bg-black">Mobile App Development</option>
                      <option value="ecommerce-development" className="bg-black">Ecommerce Development</option>
                      <option value="seo" className="bg-black">SEO Optimization</option>
                      <option value="digital-marketing" className="bg-black">Digital Marketing</option>
                      <option value="custom-development" className="bg-black">Custom Development</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-cyan-500/5 border border-cyan-400/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/30 backdrop-blur-xl hover:bg-cyan-500/10 transition-colors resize-none"
                    placeholder="Tell us about your project, goals, and timeline..."
                  />
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-500/20 border border-green-500/30 rounded-2xl text-green-300 text-center backdrop-blur-xl"
                  >
                    ✅ Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-500/20 border border-red-500/30 rounded-2xl text-red-300 text-center backdrop-blur-xl"
                  >
                    ❌ Sorry, there was an error sending your message. Please try again or contact us directly.
                  </motion.div>
                )}

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 mt-8 justify-center backdrop-blur-xl border border-cyan-400/30 rounded-2xl text-white font-semibold shadow-2xl transition-all duration-300 flex items-center ${
                    isSubmitting 
                      ? 'bg-cyan-500/10 cursor-not-allowed' 
                      : 'bg-cyan-500/20 hover:bg-cyan-500/30'
                  }`}
                >
                  <span className="flex items-center">
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <Send className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </span>
                </button>
              </form>
            </motion.div>

            {/* Glass Contact Information */}
            <div className="space-y-8">
              <motion.h2 
                className="text-2xl font-bold text-white mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                Contact <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500 bg-clip-text text-transparent">Information</span>
              </motion.h2>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="backdrop-blur-xl bg-cyan-500/5 border border-cyan-400/20 rounded-3xl p-6 shadow-2xl hover:bg-cyan-500/10 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * (index + 3), duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-400/20 to-cyan-500/20 backdrop-blur-xl border border-cyan-400/30 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <div className="text-white">{info.icon}</div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-white/70">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                className="backdrop-blur-xl bg-cyan-500/5 border border-cyan-400/20 rounded-3xl p-6 shadow-2xl hover:bg-cyan-500/10 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <h3 className="text-lg font-semibold text-white mb-4">
                  Why Choose <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500 bg-clip-text text-transparent">Us?</span>
                </h3>
                <ul className="space-y-3 text-white/70">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    Free initial consultation
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    24/7 project support
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    100% satisfaction guarantee
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    Transparent pricing
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Cyan Theme FAQ Section */}
      <section className="py-32 px-6 lg:px-12 relative bg-gradient-to-b from-black to-slate-900">
        {/* Cyan Background Elements */}
        <motion.div className="absolute inset-0" aria-hidden="true">
          <motion.div 
            className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500/10 backdrop-blur-3xl rounded-full border border-cyan-500/20"
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

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-white mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Frequently Asked <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500 bg-clip-text text-transparent">Questions</span>
            </motion.h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How long does a typical project take?",
                answer:
                  "Project timelines vary based on complexity. A simple website takes 2-4 weeks, while complex applications can take 3-6 months. We'll provide a detailed timeline during our consultation.",
              },
              {
                question: "Do you provide ongoing support after launch?",
                answer:
                  "Yes! We offer comprehensive maintenance and support packages to ensure your digital solution continues to perform optimally and stays up-to-date.",
              },
              {
                question: "What's included in your free consultation?",
                answer:
                  "Our free consultation includes project assessment, technology recommendations, timeline estimation, and a detailed proposal with transparent pricing.",
              },
              {
                question: "Do you work with businesses of all sizes?",
                answer:
                  "We work with startups, small businesses, and enterprise clients. Our solutions are tailored to meet your specific needs and budget.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="backdrop-blur-xl bg-cyan-500/5 border border-cyan-400/20 rounded-3xl p-6 shadow-2xl hover:bg-cyan-500/10 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-white/70 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
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
              Ready to Start Your <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500 bg-clip-text text-transparent">Project?</span>
            </h2>
          </AnimatedText>
          <AnimatedText delay={0.2}>
            <p className="text-gray-400 text-lg mb-12 leading-relaxed">
              Don't wait! Get your free consultation today and take the first step towards transforming your digital
              presence.
            </p>
          </AnimatedText>
          <AnimatedText delay={0.4}>
            <Link href="https://meetings-na2.hubspot.com/merajsaurabh0000">
            <MagneticButton className="!bg-cyan-500/20 !text-white backdrop-blur-xl border border-cyan-400/30 rounded-2xl font-semibold px-8 py-4 shadow-2xl hover:!bg-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
              <span className="flex items-center">
                Schedule Free Consultation <ArrowRight className="ml-2 w-4 h-4" />
              </span>
            </MagneticButton>
            </Link>
          </AnimatedText>
        </div>
      </section>
    </div>
  )
}
