import { motion } from 'framer-motion'
import { Users, Mail, Phone, Heart, Target, Lightbulb, Sparkles } from 'lucide-react'

const About = () => {
  const teamMembers = [
    { name: "Joseph Sam", role: "Lead Developer" },
    { name: "Madhan", role: "Hardware Engineer" },
    { name: "Mahaa Shri", role: "Systems Architect" },
    { name: "Karthika", role: "Software Engineer" }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const missions = [
    {
      icon: <Lightbulb className="w-10 h-10" />,
      title: "Innovation",
      description: "Continuously pushing the boundaries of autonomous robotics to create smarter, more efficient systems.",
      color: "primary"
    },
    {
      icon: <Target className="w-10 h-10" />,
      title: "Precision",
      description: "Delivering highly accurate and reliable automation solutions for critical agricultural and warehouse operations.",
      color: "secondary"
    },
    {
      icon: <Heart className="w-10 h-10" />,
      title: "Sustainability",
      description: "Creating environmentally conscious solutions that promote sustainable practices in agriculture and logistics.",
      color: "primary"
    }
  ]

  return (
    <div className="min-h-screen bg-dark-800 relative overflow-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary-500/10 rounded-full blur-[120px]" />
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
            About Us
          </motion.span>
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="text-highlight-500">About</span>
            <br />
            <span className="gradient-text font-['Orbitron']">Vayal Agro</span>
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-highlight-500/50 max-w-2xl mx-auto"
          >
            Meet the innovative team behind the autonomous agriculture and warehouse robot system
          </motion.p>
        </motion.div>

        {/* Our Vision */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="mb-24"
        >
          <motion.div 
            variants={itemVariants}
            className="glass-card p-10 md:p-14 rounded-3xl relative overflow-hidden"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, #0AB6BC 1px, transparent 0)',
                backgroundSize: '30px 30px'
              }} />
            </div>

            <div className="relative text-center">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary-500/20 to-secondary-500/20 border border-primary-500/30 mb-8"
              >
                <Target className="w-10 h-10 text-primary-400" />
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold text-highlight-500 mb-6">
                Our <span className="gradient-text">Vision</span>
              </h2>
              <p className="text-lg text-highlight-500/60 leading-relaxed max-w-4xl mx-auto">
                At Vayal Agro, we envision a future where autonomous robotics revolutionizes agriculture and warehouse management. 
                Our cutting-edge system combines precision engineering with intelligent automation to create sustainable, 
                efficient solutions that reduce manual labor while maximizing productivity. We're committed to developing 
                technology that not only advances industrial capabilities but also contributes to a more sustainable and 
                automated future for agriculture and logistics.
              </p>
            </div>
          </motion.div>
        </motion.section>

        {/* Team Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="mb-24"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full border border-secondary-500/30 bg-secondary-500/5 text-secondary-400 text-sm tracking-wider uppercase mb-4">
              The Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-highlight-500">
              Our <span className="gradient-text">Team</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group glass-card p-8 rounded-2xl text-center cursor-pointer card-3d"
              >
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="relative w-24 h-24 mx-auto mb-6"
                >
                  {/* Outer ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-primary-500/30 group-hover:border-primary-500/60 transition-colors" />
                  {/* Animated ring */}
                  <div className="absolute inset-0 rounded-full border border-primary-500/20 animate-ping opacity-30" />
                  {/* Inner circle with icon */}
                  <div className="absolute inset-2 rounded-full bg-gradient-to-br from-primary-500/20 to-secondary-500/20 flex items-center justify-center group-hover:shadow-glow-md transition-shadow">
                    <Users className="w-10 h-10 text-primary-400" />
                  </div>
                </motion.div>
                <h3 className="text-xl font-bold text-highlight-500 mb-2 group-hover:text-primary-400 transition-colors">
                  {member.name}
                </h3>
                <p className="text-primary-400 font-medium text-sm tracking-wide">{member.role}</p>
                
                {/* Decorative line */}
                <div className="mt-6 h-0.5 rounded-full bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact Information */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="mb-24"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary-500/30 bg-primary-500/5 text-primary-400 text-sm tracking-wider uppercase mb-4">
              Contact
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-highlight-500">
              Get In <span className="gradient-text">Touch</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="glass-card p-8 rounded-2xl group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-xl bg-gradient-to-br from-primary-500/20 to-secondary-500/20 border border-primary-500/20 group-hover:shadow-glow-sm transition-shadow">
                  <Phone className="w-8 h-8 text-primary-400" />
                </div>
                <h3 className="text-2xl font-bold text-highlight-500">Contact Number</h3>
              </div>
              <p className="text-highlight-500/50 mb-4">Ready to discuss your automation needs?</p>
              <a 
                href="tel:9876543210" 
                className="text-2xl font-bold gradient-text hover:opacity-80 transition-opacity"
              >
                9876543210
              </a>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="glass-card p-8 rounded-2xl group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-xl bg-gradient-to-br from-primary-500/20 to-secondary-500/20 border border-primary-500/20 group-hover:shadow-glow-sm transition-shadow">
                  <Mail className="w-8 h-8 text-primary-400" />
                </div>
                <h3 className="text-2xl font-bold text-highlight-500">Email Address</h3>
              </div>
              <p className="text-highlight-500/50 mb-4">Send us your inquiries and feedback</p>
              <a 
                href="mailto:jarvisbot2026@gmail.com" 
                className="text-xl font-bold gradient-text hover:opacity-80 transition-opacity break-all"
              >
                jarvisbot2026@gmail.com
              </a>
            </motion.div>
          </div>
        </motion.section>

        {/* Our Mission */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          <motion.div 
            variants={itemVariants}
            className="glass-card p-10 md:p-14 rounded-3xl relative overflow-hidden"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, #045C43 1px, transparent 0)',
                backgroundSize: '30px 30px'
              }} />
            </div>

            <div className="relative">
              <div className="text-center mb-12">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-secondary-500/20 to-primary-500/20 border border-secondary-500/30 mb-6"
                >
                  <Heart className="w-10 h-10 text-secondary-400" />
                </motion.div>
                <h2 className="text-3xl md:text-4xl font-bold text-highlight-500">
                  Our <span className="gradient-text">Mission</span>
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {missions.map((mission, index) => (
                  <motion.div 
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    className="text-center group"
                  >
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${mission.color === 'primary' ? 'from-primary-500/20 to-primary-500/5' : 'from-secondary-500/20 to-secondary-500/5'} border border-${mission.color}-500/20 mb-6 group-hover:shadow-glow-sm transition-shadow`}>
                      <span className={`${mission.color === 'primary' ? 'text-primary-400' : 'text-secondary-400'}`}>
                        {mission.icon}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-highlight-500 mb-4 group-hover:text-primary-400 transition-colors">
                      {mission.title}
                    </h3>
                    <p className="text-highlight-500/50 leading-relaxed">
                      {mission.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.section>
      </div>

      {/* Bottom spacing */}
      <div className="h-20" />
    </div>
  )
}

export default About
