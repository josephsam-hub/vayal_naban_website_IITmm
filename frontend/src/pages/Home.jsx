import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Cpu, Navigation, Zap, Target, CheckCircle, ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useRef, useEffect, useState } from 'react'

// Floating particles component
const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary-500/30 rounded-full"
          initial={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
          }}
          animate={{
            y: [null, Math.random() * -200 - 100],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  )
}

// Grid background component
const GridBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div 
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: `
          linear-gradient(rgba(10, 182, 188, 0.5) 1px, transparent 1px),
          linear-gradient(90deg, rgba(10, 182, 188, 0.5) 1px, transparent 1px)
        `,
        backgroundSize: '100px 100px'
      }}
    />
    {/* Radial spotlight */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary-500/10 via-transparent to-transparent" />
    <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-secondary-500/10 via-transparent to-transparent" />
  </div>
)

const Home = () => {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  const workflowItems = [
    {
      step: "01",
      title: "Autonomous Cultivation",
      description: "Robot autonomously cultivates vegetables using precision agriculture techniques and environmental monitoring.",
      icon: <Cpu className="w-8 h-8" />,
    },
    {
      step: "02", 
      title: "Crop Transportation",
      description: "Harvested crops are transferred using specialized crates designed for optimal storage and transport.",
      icon: <Navigation className="w-8 h-8" />,
    },
    {
      step: "03",
      title: "Warehouse Navigation", 
      description: "Robot navigates to warehouse environment using GPS and environmental mapping systems.",
      icon: <Target className="w-8 h-8" />,
    },
    {
      step: "04",
      title: "Line Sensor Navigation",
      description: "Precise navigation inside warehouse using line sensor technology for accurate path following.",
      icon: <Zap className="w-8 h-8" />,
    },
    {
      step: "05",
      title: "Intelligent Placement",
      description: "Items are placed at predefined warehouse locations based on system logic and navigation data.",
      icon: <CheckCircle className="w-8 h-8" />,
    }
  ]

  const applications = [
    {
      title: "Automated Agriculture Systems",
      description: "Reduces manual labor in farming operations while increasing precision and efficiency in crop management."
    },
    {
      title: "Smart Warehouses",
      description: "Enables intelligent inventory management with automated sorting and placement based on product characteristics."
    },
    {
      title: "Labor Reduction",
      description: "Significantly reduces dependency on manual labor for repetitive tasks in agriculture and warehouse operations."
    },
    {
      title: "Accurate Item Placement",
      description: "Ensures proper placement of items at designated locations using advanced navigation technology."
    },
    {
      title: "Controlled Farming Environments",
      description: "Provides scalable solutions for greenhouse and indoor farming operations with consistent quality control."
    },
    {
      title: "Supply Chain Optimization",
      description: "Streamlines the entire process from cultivation to warehouse storage, improving overall supply chain efficiency."
    }
  ]

  const highlights = [
    {
      title: "Fully Autonomous Operation",
      description: "Complete automation from cultivation to warehouse placement without human intervention."
    },
    {
      title: "Sensor-Based Decision Making",
      description: "Advanced sensor integration for intelligent navigation and placement decisions."
    },
    {
      title: "Precise Navigation & Placement",
      description: "High-accuracy positioning system ensures optimal placement and minimal errors."
    },
    {
      title: "Modular & Extensible Design",
      description: "Scalable architecture allows for easy expansion and customization for different environments."
    }
  ]

  return (
    <div className="min-h-screen bg-dark-800 relative overflow-hidden">
      <GridBackground />
      <FloatingParticles />
      
      {/* Hero Section with Spline 3D Robot */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left Content */}
            <motion.div variants={itemVariants} className="text-center lg:text-left order-2 lg:order-1">
              {/* Status badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-primary-500/30 bg-primary-500/5 mb-6"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500" />
                </span>
                <span className="text-sm text-primary-400 tracking-wider uppercase">System Active</span>
              </motion.div>

              <motion.h1 
                variants={itemVariants}
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              >
                <span className="text-highlight-500">Vayal</span>
                <br />
                <span className="gradient-text font-['Orbitron']">Agro System</span>
              </motion.h1>
              
              <motion.p 
                variants={itemVariants}
                className="text-lg md:text-xl text-highlight-500/60 mb-8 leading-relaxed max-w-xl"
              >
                An autonomous system for vegetable cultivation, smart transportation, and intelligent warehouse placement.
              </motion.p>
              
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Link to="/product">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative px-8 py-4 rounded-xl font-semibold overflow-hidden btn-glow"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500" />
                    <span className="absolute inset-[1px] bg-dark-500 rounded-[10px]" />
                    <span className="relative flex items-center justify-center gap-2 text-primary-400">
                      View Components
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </motion.button>
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-primary-500/10"
              >
                {[
                  { value: '99.9%', label: 'Precision' },
                  { value: '24/7', label: 'Operation' },
                  { value: '5+', label: 'Sensors' }
                ].map((stat, i) => (
                  <div key={i} className="text-center lg:text-left">
                    <div className="text-2xl md:text-3xl font-bold text-primary-400 font-['Orbitron']">{stat.value}</div>
                    <div className="text-sm text-highlight-500/40 uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Content - Spline 3D Robot */}
            <motion.div
              variants={itemVariants}
              className="relative order-1 lg:order-2"
            >
              {/* Holographic frame */}
              <div className="relative">
                {/* Outer glow ring */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary-500/20 via-secondary-500/20 to-primary-500/20 blur-xl" />
                
                {/* Spline container with holographic effect */}
                <div className="relative glass-card rounded-3xl p-2 overflow-hidden">
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-primary-500/50 rounded-tl-3xl" />
                  <div className="absolute top-0 right-0 w-20 h-20 border-r-2 border-t-2 border-primary-500/50 rounded-tr-3xl" />
                  <div className="absolute bottom-0 left-0 w-20 h-20 border-l-2 border-b-2 border-primary-500/50 rounded-bl-3xl" />
                  <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-primary-500/50 rounded-br-3xl" />
                  
                  {/* 3D Robot Visualization */}
                  <div className="relative aspect-square min-h-[400px] md:min-h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-dark-600 to-dark-700">
                    {/* Animated Robot Illustration */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      {/* Central Robot Core */}
                      <motion.div
                        animate={{ 
                          rotateY: [0, 360],
                        }}
                        transition={{ 
                          duration: 20, 
                          repeat: Infinity, 
                          ease: "linear" 
                        }}
                        style={{ transformStyle: 'preserve-3d' }}
                        className="relative"
                      >
                        {/* Outer Ring */}
                        <motion.div 
                          animate={{ rotate: 360 }}
                          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                          className="absolute -inset-20 border-2 border-primary-500/20 rounded-full"
                        />
                        <motion.div 
                          animate={{ rotate: -360 }}
                          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                          className="absolute -inset-28 border border-secondary-500/10 rounded-full border-dashed"
                        />
                        
                        {/* Robot Body */}
                        <div className="relative w-48 h-48 md:w-64 md:h-64">
                          {/* Core hexagon */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <motion.div
                              animate={{ scale: [1, 1.05, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                              className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-primary-500/30 to-secondary-500/30 rounded-2xl rotate-45 border border-primary-500/50"
                            />
                          </div>
                          
                          {/* Inner core */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <motion.div
                              animate={{ 
                                boxShadow: [
                                  '0 0 20px rgba(10, 182, 188, 0.3)',
                                  '0 0 40px rgba(10, 182, 188, 0.5)',
                                  '0 0 20px rgba(10, 182, 188, 0.3)'
                                ]
                              }}
                              transition={{ duration: 2, repeat: Infinity }}
                              className="w-20 h-20 md:w-24 md:h-24 bg-dark-600 rounded-full border-2 border-primary-500 flex items-center justify-center"
                            >
                              <Cpu className="w-10 h-10 md:w-12 md:h-12 text-primary-400" />
                            </motion.div>
                          </div>
                          
                          {/* Orbiting elements */}
                          {[0, 1, 2].map((i) => (
                            <motion.div
                              key={i}
                              animate={{ rotate: 360 }}
                              transition={{ 
                                duration: 5 + i * 2, 
                                repeat: Infinity, 
                                ease: "linear",
                                delay: i * 0.5
                              }}
                              className="absolute inset-0"
                            >
                              <div 
                                className="absolute w-4 h-4 bg-primary-500 rounded-full shadow-glow"
                                style={{ 
                                  top: '50%', 
                                  left: i === 0 ? '-10%' : i === 1 ? '110%' : '50%',
                                  transform: 'translateY(-50%)'
                                }}
                              />
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                      
                      {/* Floating data points */}
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ 
                            x: Math.cos(i * 60 * Math.PI / 180) * 150,
                            y: Math.sin(i * 60 * Math.PI / 180) * 150
                          }}
                          animate={{ 
                            y: [
                              Math.sin(i * 60 * Math.PI / 180) * 150,
                              Math.sin(i * 60 * Math.PI / 180) * 150 - 20,
                              Math.sin(i * 60 * Math.PI / 180) * 150
                            ]
                          }}
                          transition={{ 
                            duration: 2 + i * 0.3, 
                            repeat: Infinity,
                            delay: i * 0.2
                          }}
                          className="absolute w-2 h-2 bg-secondary-500/50 rounded-full"
                        />
                      ))}
                    </div>
                    
                    {/* Grid overlay */}
                    <div 
                      className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage: `
                          linear-gradient(rgba(10, 182, 188, 0.3) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(10, 182, 188, 0.3) 1px, transparent 1px)
                        `,
                        backgroundSize: '30px 30px'
                      }}
                    />
                    
                    {/* Scan line effect */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                      <motion.div 
                        animate={{ y: ['0%', '100%'] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-x-0 h-20 bg-gradient-to-b from-transparent via-primary-500/10 to-transparent" 
                      />
                    </div>
                  </div>

                  {/* Floating UI elements */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-8 right-8 px-3 py-1.5 rounded-lg bg-dark-500/80 border border-primary-500/30 backdrop-blur-sm"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
                      <span className="text-xs text-primary-400 font-mono">ONLINE</span>
                    </div>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute bottom-8 left-8 px-3 py-1.5 rounded-lg bg-dark-500/80 border border-secondary-500/30 backdrop-blur-sm"
                  >
                    <span className="text-xs text-secondary-400 font-mono">3D INTERACTIVE</span>
                  </motion.div>
                </div>

                {/* Robot label */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-6 py-3 rounded-full bg-dark-500/90 border border-primary-500/30 backdrop-blur-sm shadow-lg"
                >
                  <p className="text-sm font-medium text-highlight-500/80 flex items-center gap-3">
                    <span className="text-primary-400">Autonomous</span>
                    <span className="w-1 h-1 rounded-full bg-primary-500" />
                    <span className="text-secondary-400">Agriculture</span>
                    <span className="w-1 h-1 rounded-full bg-secondary-500" />
                    <span className="text-primary-400">Warehouse</span>
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            style={{ opacity }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-2 text-primary-500/50"
            >
              <span className="text-xs uppercase tracking-widest">Scroll</span>
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* System Workflow */}
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full border border-primary-500/30 bg-primary-500/5 text-primary-400 text-sm tracking-wider uppercase mb-4">
                How It Works
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-highlight-500 mb-4">
                System <span className="gradient-text">Workflow</span>
              </h2>
              <p className="text-highlight-500/50 max-w-2xl mx-auto">
                A seamless integration of autonomous systems working in harmony
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {workflowItems.map((item, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group glass-card p-8 rounded-2xl cursor-pointer card-3d"
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl font-bold text-primary-500/20 font-['Orbitron'] group-hover:text-primary-500/40 transition-colors">
                      {item.step}
                    </span>
                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary-500/20 to-secondary-500/20 border border-primary-500/20 text-primary-400 group-hover:border-primary-500/40 group-hover:shadow-glow-sm transition-all">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-highlight-500 mb-3 group-hover:text-primary-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-highlight-500/50 leading-relaxed">{item.description}</p>
                  
                  {/* Progress line */}
                  <div className="mt-6 h-1 rounded-full bg-dark-400 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      className="h-full bg-gradient-to-r from-primary-500 to-secondary-500"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Applications & Use Cases */}
      <section className="relative py-32">
        {/* Background accent */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/5 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full border border-secondary-500/30 bg-secondary-500/5 text-secondary-400 text-sm tracking-wider uppercase mb-4">
                Use Cases
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-highlight-500 mb-4">
                Applications & <span className="gradient-text">Use Cases</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {applications.map((item, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="group relative p-6 rounded-2xl border border-primary-500/10 bg-dark-500/30 hover:border-primary-500/30 hover:bg-dark-500/50 transition-all duration-300"
                >
                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-500/0 to-secondary-500/0 group-hover:from-primary-500/5 group-hover:to-secondary-500/5 transition-all" />
                  
                  <div className="relative">
                    <h3 className="text-lg font-semibold text-highlight-500 mb-3 group-hover:text-primary-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-highlight-500/50 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* System Highlights */}
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full border border-primary-500/30 bg-primary-500/5 text-primary-400 text-sm tracking-wider uppercase mb-4">
                Features
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-highlight-500 mb-4">
                System <span className="gradient-text">Highlights</span>
              </h2>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="glass-card p-10 md:p-16 rounded-3xl relative overflow-hidden"
            >
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'radial-gradient(circle at 2px 2px, #0AB6BC 1px, transparent 0)',
                  backgroundSize: '40px 40px'
                }} />
              </div>

              <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                {highlights.map((item, index) => (
                  <motion.div 
                    key={index} 
                    variants={itemVariants}
                    className="text-center group"
                  >
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="relative w-20 h-20 mx-auto mb-6"
                    >
                      {/* Outer ring */}
                      <div className="absolute inset-0 rounded-full border-2 border-primary-500/30 group-hover:border-primary-500/60 transition-colors" />
                      {/* Inner circle */}
                      <div className="absolute inset-2 rounded-full bg-gradient-to-br from-primary-500/20 to-secondary-500/20 flex items-center justify-center group-hover:shadow-glow-md transition-shadow">
                        <span className="text-2xl font-bold text-primary-400 font-['Orbitron']">{index + 1}</span>
                      </div>
                      {/* Pulse effect */}
                      <div className="absolute inset-0 rounded-full border border-primary-500/30 animate-ping opacity-20" />
                    </motion.div>
                    <h3 className="text-lg font-semibold text-highlight-500 mb-3 group-hover:text-primary-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-highlight-500/50 text-sm leading-relaxed">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Bottom spacing for scroll */}
      <div className="h-20" />
    </div>
  )
}

export default Home
