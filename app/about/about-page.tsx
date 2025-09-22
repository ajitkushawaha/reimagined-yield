"use client"
import { ArrowRight, Award, Users, Target, Heart, Lightbulb, Shield, Mail, Linkedin, Twitter } from "lucide-react"
import { AnimatedText } from "@/components/eternity/animated-text"
import { AnimatedCard } from "@/components/eternity/animated-card"
import { MagneticButton } from "@/components/eternity/magnetic-button"
import { ScrollReveal } from "@/components/eternity/scroll-reveal"
import { motion } from "framer-motion"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "Visionary leader with 10+ years in digital transformation and business strategy. Sarah founded Reimagined Yield with a mission to help businesses thrive in the digital age.",
      skills: ["Strategic Planning", "Business Development", "Team Leadership"],
      social: {
        email: "sarah@reimaginedyield.com",
        linkedin: "https://linkedin.com/in/sarahjohnson",
        twitter: "https://twitter.com/sarahjohnson",
      },
    },
    {
      name: "Michael Chen",
      role: "Chief Technology Officer",
      bio: "Full-stack architect specializing in scalable solutions and modern web technologies. Michael leads our technical vision and ensures we deliver cutting-edge solutions.",
      skills: ["Full-Stack Development", "Cloud Architecture", "DevOps"],
      social: {
        email: "michael@reimaginedyield.com",
        linkedin: "https://linkedin.com/in/michaelchen",
        twitter: "https://twitter.com/michaelchen",
      },
    },
    {
      name: "Emily Rodriguez",
      role: "Creative Director",
      bio: "Award-winning designer with expertise in user experience and brand identity. Emily ensures every project we deliver is both beautiful and functional.",
      skills: ["UI/UX Design", "Brand Identity", "Creative Strategy"],
      social: {
        email: "emily@reimaginedyield.com",
        linkedin: "https://linkedin.com/in/emilyrodriguez",
        twitter: "https://twitter.com/emilyrodriguez",
      },
    },
    {
      name: "David Kim",
      role: "Marketing Director",
      bio: "Growth strategist with proven track record in digital marketing and SEO. David helps our clients achieve measurable results and sustainable growth.",
      skills: ["Digital Marketing", "SEO Strategy", "Analytics"],
      social: {
        email: "david@reimaginedyield.com",
        linkedin: "https://linkedin.com/in/davidkim",
        twitter: "https://twitter.com/davidkim",
      },
    },
    {
      name: "Jessica Park",
      role: "Lead Developer",
      bio: "Senior developer with expertise in React, Node.js, and mobile development. Jessica leads our development team and ensures code quality and best practices.",
      skills: ["React/Next.js", "Node.js", "Mobile Development"],
      social: {
        email: "jessica@reimaginedyield.com",
        linkedin: "https://linkedin.com/in/jessicapark",
        twitter: "https://twitter.com/jessicapark",
      },
    },
    {
      name: "Alex Thompson",
      role: "Project Manager",
      bio: "Experienced project manager who ensures smooth delivery and client satisfaction. Alex coordinates between teams and keeps projects on track and within budget.",
      skills: ["Project Management", "Client Relations", "Agile Methodology"],
      social: {
        email: "alex@reimaginedyield.com",
        linkedin: "https://linkedin.com/in/alexthompson",
        twitter: "https://twitter.com/alexthompson",
      },
    },
  ]

  const values = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description:
        "We constantly push boundaries and embrace cutting-edge technologies to deliver exceptional results that set our clients apart from the competition.",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Passion",
      description:
        "Our love for what we do drives us to exceed expectations and create meaningful digital experiences that resonate with users and drive business growth.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Integrity",
      description:
        "We build trust through transparency, honesty, and delivering on our promises every single time. Your success is our success.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description:
        "We believe in the power of teamwork and work closely with our clients as true partners, not just service providers.",
    },
  ]

  const stats = [
    { number: 5, suffix: "+", label: "Years Experience" },
    { number: 150, suffix: "+", label: "Projects Completed" },
    { number: 50, suffix: "+", label: "Happy Clients" },
    { number: 100, suffix: "%", label: "Client Satisfaction" },
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
              About{" "}
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                Reimagined Yield
              </span>
            </h1>
          </motion.div>
          <motion.p
            className="text-white/80 text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            We're a passionate team of digital innovators dedicated to transforming businesses through creative
            technology solutions and strategic thinking.
          </motion.p>
        </div>
      </section>

      {/* Apple Glass Story Section */}
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
          <ScrollReveal>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <motion.h2 
                  className="text-4xl md:text-5xl font-bold text-white mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  Our <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">Story</span>
                </motion.h2>
                <motion.p 
                  className="text-white/70 text-lg leading-relaxed mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  Founded in 2019, Reimagined Yield Technology emerged from a simple belief: every business deserves a
                  digital presence that truly represents their vision and drives real results.
                </motion.p>
                <motion.p 
                  className="text-white/70 text-lg leading-relaxed mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  What started as a small team of passionate developers and designers has grown into a full-service
                  digital agency, helping businesses of all sizes navigate the ever-evolving digital landscape with
                  confidence and success.
                </motion.p>
                <motion.p 
                  className="text-white/70 text-lg leading-relaxed mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  Today, we're proud to have completed over 150 projects, working with startups, small businesses, and
                  enterprise clients across various industries. Our commitment to excellence and innovation continues
                  to drive everything we do.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <MagneticButton className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-2xl text-white font-semibold px-8 py-4 shadow-2xl">
                    <span className="flex items-center">
                      Our Portfolio <ArrowRight className="ml-2 w-4 h-4" />
                    </span>
                  </MagneticButton>
                </motion.div>
              </div>

              {/* Glass Stats Grid */}
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 text-center shadow-2xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                      {stat.number}
                      {stat.suffix}
                    </div>
                    <div className="text-sm text-white/70 font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Apple Glass Mission & Vision */}
      <section className="py-32 px-6 lg:px-12 relative bg-gradient-to-b from-slate-900 to-slate-800">
        {/* Glass Background Elements */}
        <motion.div className="absolute inset-0" aria-hidden="true">
          <motion.div 
            className="absolute top-1/3 left-1/3 w-72 h-72 bg-white/5 backdrop-blur-3xl rounded-full border border-white/10"
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
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12 text-center shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <Target className="w-16 h-16 text-white mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-6">Our Mission</h3>
              <p className="text-white/70 leading-relaxed">
                To empower businesses with innovative digital solutions that drive growth, enhance user experiences, and
                create lasting impact in the digital world. We strive to be the catalyst that transforms your vision
                into digital reality.
              </p>
            </motion.div>
            <motion.div 
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12 text-center shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <Award className="w-16 h-16 text-white mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-6">Our Vision</h3>
              <p className="text-white/70 leading-relaxed">
                To be the leading digital agency that transforms how businesses connect with their audiences through
                creative technology and strategic innovation. We envision a future where every business can thrive in
                the digital landscape.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Apple Glass Values Section */}
      <section className="py-32 px-6 lg:px-12 relative bg-gradient-to-b from-slate-800 to-slate-900">
        {/* Glass Background Elements */}
        <motion.div className="absolute inset-0" aria-hidden="true">
          <motion.div 
            className="absolute top-20 right-20 w-64 h-64 bg-purple-500/10 backdrop-blur-3xl rounded-full border border-purple-500/20"
            animate={{ 
              x: [0, -50, 0],
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

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-white mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Our <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">Values</span>
            </motion.h2>
            <motion.p 
              className="text-white/70 text-xl max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              These core values guide everything we do and shape how we work with our clients and each other.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 text-center shadow-2xl group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -8, rotateY: 5 }}
              >
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-r from-blue-400/20 to-purple-400/20 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 5 }}
                >
                  <div className="text-white">{value.icon}</div>
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-white/90 transition-colors">{value.title}</h3>
                <p className="text-white/70 leading-relaxed group-hover:text-white/80 transition-colors">{value.description}</p>
                
                {/* Glass shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.8 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-32 px-6 lg:px-12 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <AnimatedText>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Meet Our Team</h2>
            </AnimatedText>
            <AnimatedText delay={0.2}>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Our diverse team of experts brings together years of experience in technology, design, and strategy to
                deliver exceptional results for our clients.
              </p>
            </AnimatedText>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <AnimatedCard key={index} delay={index * 0.1} className="p-8 group">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-white to-gray-200 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-2xl font-bold text-black">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                  <p className="text-sm text-gray-300 font-medium mb-4">{member.role}</p>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-6">{member.bio}</p>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3 text-sm">Expertise:</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 rounded-full text-xs bg-gray-800 text-gray-300 border border-gray-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center space-x-4">
                  <motion.a
                    href={member.social.email}
                    className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail className="w-4 h-4" />
                  </motion.a>
                  <motion.a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={`${member.name} on LinkedIn`}
                  >
                    <Linkedin className="w-4 h-4" />
                  </motion.a>
                  <motion.a
                    href={member.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={`${member.name} on Twitter`}
                  >
                    <Twitter className="w-4 h-4" />
                  </motion.a>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 lg:px-12 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedText>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Ready to Work With Us?</h2>
          </AnimatedText>
          <AnimatedText delay={0.2}>
            <p className="text-gray-400 text-lg mb-12 leading-relaxed">
              Let's discuss how we can help transform your digital presence and achieve your business goals together.
            </p>
          </AnimatedText>
          <AnimatedText delay={0.4}>
            <MagneticButton>
              <span className="flex items-center">
                Get Started Today <ArrowRight className="ml-2 w-4 h-4" />
              </span>
            </MagneticButton>
          </AnimatedText>
        </div>
      </section>
    </div>
  )
}
