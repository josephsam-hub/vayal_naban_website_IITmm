import { motion } from 'framer-motion'
import { Cpu, Zap, Eye, Cog, Package, Battery, AlertTriangle, CircuitBoard, Gauge, Settings } from 'lucide-react'

const Product = () => {
  const hardwareComponents = [
    {
      name: "STM32 Nucleo F103RB",
      description: "High-performance ARM Cortex-M3 microcontroller board providing the central processing power for autonomous operations.",
      role: "Main controller for sensor integration, decision-making algorithms, and motor coordination in real-time operations.",
      icon: <Cpu className="w-6 h-6" />,
      category: "Control"
    },
    {
      name: "Motor Driver L298N",
      description: "Dual H-bridge motor driver enabling bidirectional control of DC motors with PWM speed regulation.",
      role: "Controls motor speed and direction for smooth navigation and precise placement operations.",
      icon: <Zap className="w-6 h-6" />,
      category: "Control"
    },
    {
      name: "Line Following Sensor",
      description: "Multi-array infrared sensor system for detecting and following predefined path markers.",
      role: "Provides real-time path detection data for autonomous navigation within warehouse environments.",
      icon: <Eye className="w-6 h-6" />,
      category: "Sensing"
    },
    {
      name: "IR Sensor Module",
      description: "Infrared proximity sensor for obstacle detection and distance measurement capabilities.",
      role: "Provides collision avoidance and precise distance control for safe handling operations.",
      icon: <Eye className="w-6 h-6" />,
      category: "Sensing"
    },
    {
      name: "MOSFET Driver",
      description: "Power switching module for controlling high-current electromagnet operations efficiently.",
      role: "Manages electromagnet power consumption and provides precise timing control for operations.",
      icon: <Zap className="w-6 h-6" />,
      category: "Control"
    },
    {
      name: "LiPo 3-Cell 12V Battery",
      description: "High-capacity lithium polymer battery providing reliable power for extended autonomous operation.",
      role: "Primary power source ensuring continuous operation throughout warehouse cycles.",
      icon: <Battery className="w-6 h-6" />,
      category: "Power"
    },
    {
      name: "RGB LED Indicators",
      description: "Multi-color LED array for system status indication and operational feedback display.",
      role: "Provides visual feedback for system status, operational modes, and error condition alerts.",
      icon: <Zap className="w-6 h-6" />,
      category: "Interface"
    },
    {
      name: "Battery Balance Charger",
      description: "Intelligent charging system ensuring optimal battery health and performance maintenance.",
      role: "Maintains battery longevity and ensures consistent power delivery for reliable operations.",
      icon: <Battery className="w-6 h-6" />,
      category: "Power"
    },
    {
      name: "Vayal Agro PCB",
      description: "Custom-designed printed circuit board integrating all electronic components and connections.",
      role: "Central hub for all electrical connections, ensuring reliable communication between components.",
      icon: <CircuitBoard className="w-6 h-6" />,
      category: "Control"
    },
    {
      name: "Buck Module (Soldered on PCB)",
      description: "Voltage regulation module providing stable power supply to sensitive electronic components.",
      role: "Ensures consistent voltage levels for optimal sensor performance and system reliability.",
      icon: <Gauge className="w-6 h-6" />,
      category: "Power"
    },
    {
      name: "Toggle Switch (Soldered on PCB)",
      description: "Main power switch integrated into the PCB for system power control.",
      role: "Provides manual control over system power state and emergency shutdown capability.",
      icon: <Settings className="w-6 h-6" />,
      category: "Control"
    },
    {
      name: "Resistor 3000 Ohm (Soldered on PCB)",
      description: "Current limiting resistor for LED circuits and sensor protection.",
      role: "Protects sensitive components from overcurrent and ensures proper LED brightness levels.",
      icon: <Zap className="w-6 h-6" />,
      category: "Control"
    }
  ]

  const categories = {
    "Control": { gradient: "from-primary-500 to-primary-600", bg: "primary" },
    "Sensing": { gradient: "from-secondary-500 to-secondary-600", bg: "secondary" },
    "Power": { gradient: "from-yellow-500 to-orange-500", bg: "yellow" },
    "Interface": { gradient: "from-pink-500 to-rose-500", bg: "pink" }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  const operationalLogic = [
    {
      title: "Path Following",
      description: "Line sensor data is continuously processed to maintain accurate path tracking. The system uses real-time feedback to adjust motor speeds and direction, ensuring precise navigation along predefined warehouse routes.",
      icon: <Eye className="w-8 h-8" />
    },
    {
      title: "Decision Making",
      description: "Advanced sensor integration processes navigation data to make intelligent decisions about optimal routes and placement locations, maximizing warehouse efficiency.",
      icon: <Cpu className="w-8 h-8" />
    },
    {
      title: "Location Identification",
      description: "Advanced navigation algorithms determine specific warehouse zones based on sensor data, enabling systematic organization and efficient item retrieval.",
      icon: <Package className="w-8 h-8" />
    },
    {
      title: "Item Placement",
      description: "Precise motor control and sensor feedback ensure accurate item placement at designated locations, maintaining warehouse organization and maximizing storage efficiency.",
      icon: <Cog className="w-8 h-8" />
    }
  ]

  const problems = [
    {
      title: "Line Sensor Calibration Issues",
      issue: "Robot deviates from designated paths due to inconsistent line detection, causing navigation errors and potential collisions with warehouse infrastructure.",
      cause: "Ambient lighting variations and sensor drift over time affect the threshold values for line detection, leading to false readings and path deviation.",
      fix: "Implemented adaptive calibration algorithm that automatically adjusts sensor thresholds based on environmental conditions and includes manual recalibration procedure for optimal performance."
    },
    {
      title: "IR Sensor Interference Issues",
      issue: "IR sensors experience interference from ambient infrared sources, leading to false obstacle detection and navigation interruptions.",
      cause: "Sunlight, fluorescent lighting, and other IR sources interfere with sensor readings, causing inconsistent distance measurements and false positive detections.",
      fix: "Implemented sensor shielding and filtering algorithms that distinguish between actual obstacles and ambient IR interference, improving detection reliability."
    }
  ]

  return (
    <div className="min-h-screen bg-dark-800 relative overflow-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-secondary-500/10 rounded-full blur-[120px]" />
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(10, 182, 188, 1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(10, 182, 188, 1) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-28 relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.span 
            variants={itemVariants}
            className="inline-block px-4 py-1.5 rounded-full border border-primary-500/30 bg-primary-500/5 text-primary-400 text-sm tracking-wider uppercase mb-6"
          >
            Hardware Specifications
          </motion.span>
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="text-highlight-500">Hardware & System</span>
            <br />
            <span className="gradient-text font-['Orbitron']">Components</span>
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-highlight-500/50 max-w-3xl mx-auto mb-12"
          >
            Comprehensive overview of the Vayal Agro's advanced hardware components and their operational roles
          </motion.p>
          
          {/* Robot Image Showcase */}
          <motion.div
            variants={itemVariants}
            className="max-w-2xl mx-auto"
          >
            <div className="relative glass-card rounded-3xl p-3 overflow-hidden">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-primary-500/40 rounded-tl-3xl" />
              <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-primary-500/40 rounded-tr-3xl" />
              <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-primary-500/40 rounded-bl-3xl" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-primary-500/40 rounded-br-3xl" />
              
              <img 
                src="/images/jarvis-robot.jpeg" 
                alt="Vayal Agro Hardware Implementation" 
                className="w-full h-auto rounded-2xl"
              />
              
              {/* Label badge */}
              <div className="absolute top-6 right-6 px-4 py-2 rounded-lg bg-dark-500/90 border border-primary-500/30 backdrop-blur-sm">
                <span className="text-sm font-medium text-primary-400">Actual Implementation</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Hardware Components */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="mb-24"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hardwareComponents.map((component, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.01 }}
                className="group glass-card p-6 rounded-2xl cursor-pointer card-3d"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${categories[component.category].gradient} bg-opacity-20 border border-white/10 text-white group-hover:shadow-glow-sm transition-all`}>
                    {component.icon}
                  </div>
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${categories[component.category].gradient} text-white`}>
                    {component.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-highlight-500 mb-3 group-hover:text-primary-400 transition-colors">
                  {component.name}
                </h3>
                <p className="text-highlight-500/50 text-sm mb-4 leading-relaxed">{component.description}</p>
                <div className="p-4 rounded-xl bg-dark-500/50 border-l-2 border-primary-500/50">
                  <p className="text-sm text-highlight-500/70">
                    <span className="text-primary-400 font-medium">Role:</span> {component.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Operational Logic */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="mb-24"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full border border-secondary-500/30 bg-secondary-500/5 text-secondary-400 text-sm tracking-wider uppercase mb-4">
              System Logic
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-highlight-500">
              Operational <span className="gradient-text">Logic</span>
            </h2>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="glass-card p-8 md:p-12 rounded-3xl relative overflow-hidden"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, #0AB6BC 1px, transparent 0)',
                backgroundSize: '30px 30px'
              }} />
            </div>

            <div className="relative grid md:grid-cols-2 gap-8">
              {operationalLogic.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start gap-5 p-6 rounded-2xl bg-dark-500/30 border border-primary-500/10 hover:border-primary-500/30 transition-all"
                >
                  <div className="p-4 rounded-xl bg-gradient-to-br from-primary-500/20 to-secondary-500/20 border border-primary-500/20 text-primary-400 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-highlight-500 mb-3">{item.title}</h3>
                    <p className="text-highlight-500/50 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.section>

        {/* Common Problems and Fixes */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full border border-red-500/30 bg-red-500/5 text-red-400 text-sm tracking-wider uppercase mb-4">
              Troubleshooting
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-highlight-500">
              Common Problems & <span className="text-red-400">Solutions</span>
            </h2>
          </motion.div>

          <div className="space-y-8">
            {problems.map((problem, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="glass-card p-8 rounded-3xl border border-red-500/10 hover:border-red-500/20 transition-all"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20">
                    <AlertTriangle className="w-8 h-8 text-red-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-red-400">
                    Problem {index + 1}: {problem.title}
                  </h3>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="p-6 rounded-2xl bg-red-500/5 border-l-4 border-red-500/50">
                    <h4 className="font-bold text-highlight-500 mb-3 text-lg">Issue Description</h4>
                    <p className="text-highlight-500/60 leading-relaxed">{problem.issue}</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-orange-500/5 border-l-4 border-orange-500/50">
                    <h4 className="font-bold text-highlight-500 mb-3 text-lg">Root Cause</h4>
                    <p className="text-highlight-500/60 leading-relaxed">{problem.cause}</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-green-500/5 border-l-4 border-green-500/50">
                    <h4 className="font-bold text-highlight-500 mb-3 text-lg">Practical Fix</h4>
                    <p className="text-highlight-500/60 leading-relaxed">{problem.fix}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>

      {/* Bottom spacing */}
      <div className="h-20" />
    </div>
  )
}

export default Product
