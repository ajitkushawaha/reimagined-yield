"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useState } from "react"
import { ArrowRight, Mail, Phone, MapPin, Clock, Send } from "lucide-react"
import Link from "next/link"
import { AnimatedText } from "@/components/eternity/animated-text"
import { AnimatedCard } from "@/components/eternity/animated-card"
import { MagneticButton } from "@/components/eternity/magnetic-button"

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

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8">
              Get In{" "}
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
          </motion.div>
          <motion.p
            className="text-white/80 text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Ready to transform your digital presence? Let's discuss your project and create something amazing
            together.
          </motion.p>
        </div>
      </section>

      {/* Apple Glass Contact Form & Info */}
      <section className="py-32 px-6 lg:px-12 relative bg-gradient-to-b from-slate-800 to-slate-900">
        {/* Glass Background Elements */}
        <motion.div className="absolute inset-0" aria-hidden="true">
          <motion.div 
            className="absolute top-1/4 right-1/4 w-64 h-64 bg-white/5 backdrop-blur-3xl rounded-full border border-white/10"
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

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Glass Contact Form */}
            <motion.div 
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-white mb-8">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
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
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent backdrop-blur-xl"
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
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent backdrop-blur-xl"
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
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent backdrop-blur-xl"
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
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent backdrop-blur-xl"
                    >
                      <option value="" className="bg-slate-800">Select a service</option>
                      <option value="web-development" className="bg-slate-800">Web Development</option>
                      <option value="mobile-apps" className="bg-slate-800">Mobile App Development</option>
                      <option value="ecommerce-development" className="bg-slate-800">Ecommerce Development</option>
                      <option value="seo" className="bg-slate-800">SEO Optimization</option>
                      <option value="digital-marketing" className="bg-slate-800">Digital Marketing</option>
                      <option value="custom-development" className="bg-slate-800">Custom Development</option>
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
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent resize-none backdrop-blur-xl"
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
                  className={`w-full justify-center backdrop-blur-xl border border-white/30 rounded-2xl text-white font-semibold shadow-2xl transition-all duration-300 flex items-center ${
                    isSubmitting 
                      ? 'bg-white/10 cursor-not-allowed' 
                      : 'bg-white/20 hover:bg-white/30'
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
                Contact Information
              </motion.h2>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 shadow-2xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * (index + 3), duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-400/20 to-purple-400/20 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
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
                className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 shadow-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <h3 className="text-lg font-semibold text-white mb-4">Why Choose Us?</h3>
                <ul className="space-y-3 text-white/70">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    Free initial consultation
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    24/7 project support
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    100% satisfaction guarantee
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    Transparent pricing
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Apple Glass FAQ Section */}
      <section className="py-32 px-6 lg:px-12 relative bg-gradient-to-b from-slate-900 to-slate-800">
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
              Frequently Asked <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">Questions</span>
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
                className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 shadow-2xl"
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

      {/* CTA Section */}
      <section className="py-32 px-6 lg:px-12 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedText>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Ready to Start Your Project?</h2>
          </AnimatedText>
          <AnimatedText delay={0.2}>
            <p className="text-gray-400 text-lg mb-12 leading-relaxed">
              Don't wait! Get your free consultation today and take the first step towards transforming your digital
              presence.
            </p>
          </AnimatedText>
          <AnimatedText delay={0.4}>
            <Link href="https://meetings-na2.hubspot.com/merajsaurabh0000">
            <MagneticButton>
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
