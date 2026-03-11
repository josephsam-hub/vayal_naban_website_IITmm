import { useState } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'
import { Send, CheckCircle, AlertCircle, User, Phone, Mail, MessageSquare, Sparkles } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    reason: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      await axios.post('http://localhost:5000/api/contact', formData)
      setSubmitStatus('success')
      setFormData({
        name: '',
        phone: '',
        email: '',
        reason: '',
        message: ''
      })
    } catch (error) {
      setSubmitStatus('error')
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

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

  return (
    <div className="min-h-screen bg-dark-800 relative overflow-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-secondary-500/10 rounded-full blur-[120px]" />
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-28 relative z-10">
        {/* Header */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.span 
            variants={itemVariants}
            className="inline-block px-4 py-1.5 rounded-full border border-primary-500/30 bg-primary-500/5 text-primary-400 text-sm tracking-wider uppercase mb-6"
          >
            Get In Touch
          </motion.span>
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="text-highlight-500">Contact</span>
            <br />
            <span className="gradient-text font-['Orbitron']">Our Team</span>
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-highlight-500/50 leading-relaxed max-w-2xl mx-auto"
          >
            Get in touch with our team for technical support, demonstrations, or inquiries about the Vayal Agro system.
          </motion.p>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card rounded-3xl overflow-hidden relative"
        >
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-24 h-24 border-l-2 border-t-2 border-primary-500/30 rounded-tl-3xl" />
          <div className="absolute top-0 right-0 w-24 h-24 border-r-2 border-t-2 border-primary-500/30 rounded-tr-3xl" />
          <div className="absolute bottom-0 left-0 w-24 h-24 border-l-2 border-b-2 border-primary-500/30 rounded-bl-3xl" />
          <div className="absolute bottom-0 right-0 w-24 h-24 border-r-2 border-b-2 border-primary-500/30 rounded-br-3xl" />

          <div className="p-8 md:p-12 relative">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Name Input */}
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="group"
                >
                  <label htmlFor="name" className="block text-sm font-semibold text-highlight-500/80 mb-3">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary-500/50 w-5 h-5 group-focus-within:text-primary-400 transition-colors" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-4 rounded-xl bg-dark-500/50 border border-primary-500/20 text-highlight-500 placeholder-highlight-500/30 focus:outline-none focus:border-primary-500/50 focus:bg-dark-500/70 transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>
                </motion.div>

                {/* Phone Input */}
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="group"
                >
                  <label htmlFor="phone" className="block text-sm font-semibold text-highlight-500/80 mb-3">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary-500/50 w-5 h-5 group-focus-within:text-primary-400 transition-colors" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-4 rounded-xl bg-dark-500/50 border border-primary-500/20 text-highlight-500 placeholder-highlight-500/30 focus:outline-none focus:border-primary-500/50 focus:bg-dark-500/70 transition-all duration-300"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </motion.div>
              </div>

              {/* Email Input */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="group"
              >
                <label htmlFor="email" className="block text-sm font-semibold text-highlight-500/80 mb-3">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary-500/50 w-5 h-5 group-focus-within:text-primary-400 transition-colors" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-dark-500/50 border border-primary-500/20 text-highlight-500 placeholder-highlight-500/30 focus:outline-none focus:border-primary-500/50 focus:bg-dark-500/70 transition-all duration-300"
                    placeholder="Enter your email address"
                  />
                </div>
              </motion.div>

              {/* Reason Select */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="group"
              >
                <label htmlFor="reason" className="block text-sm font-semibold text-highlight-500/80 mb-3">
                  Reason for Contact *
                </label>
                <select
                  id="reason"
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 rounded-xl bg-dark-500/50 border border-primary-500/20 text-highlight-500 focus:outline-none focus:border-primary-500/50 focus:bg-dark-500/70 transition-all duration-300 appearance-none cursor-pointer"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%230AB6BC'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 1rem center',
                    backgroundSize: '1.5rem'
                  }}
                >
                  <option value="" className="bg-dark-500 text-highlight-500/50">Select a reason</option>
                  <option value="Technical support" className="bg-dark-500">Technical Support</option>
                  <option value="Hardware inquiry" className="bg-dark-500">Hardware Inquiry</option>
                  <option value="Demonstration request" className="bg-dark-500">Demonstration Request</option>
                  <option value="Other" className="bg-dark-500">Other</option>
                </select>
              </motion.div>

              {/* Message Textarea */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="group"
              >
                <label htmlFor="message" className="block text-sm font-semibold text-highlight-500/80 mb-3">
                  Message *
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-6 text-primary-500/50 w-5 h-5 group-focus-within:text-primary-400 transition-colors" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-dark-500/50 border border-primary-500/20 text-highlight-500 placeholder-highlight-500/30 focus:outline-none focus:border-primary-500/50 focus:bg-dark-500/70 transition-all duration-300 resize-none"
                    placeholder="Please provide details about your inquiry or request"
                  />
                </div>
              </motion.div>

              {/* Submit Button */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full py-4 px-8 rounded-xl font-semibold text-lg overflow-hidden btn-glow disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500" />
                  <span className="absolute inset-[1px] bg-dark-500 rounded-[10px]" />
                  <span className="relative flex items-center justify-center gap-3 text-primary-400">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-primary-400/30 border-t-primary-400 rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        <span>Send Message</span>
                      </>
                    )}
                  </span>
                </button>
              </motion.div>

              {/* Success Message */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-6 rounded-2xl bg-green-500/10 border border-green-500/30"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-green-500/20">
                      <CheckCircle className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-green-400 mb-2">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-green-400/70 leading-relaxed">
                        Thank you for your inquiry about the Vayal Agro system. Our team will review your message and respond within 24-48 hours. 
                        For urgent technical support, please include your contact information and system details.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-6 rounded-2xl bg-red-500/10 border border-red-500/30"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-red-500/20">
                      <AlertCircle className="w-6 h-6 text-red-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-red-400 mb-2">
                        Error Sending Message
                      </h3>
                      <p className="text-red-400/70 leading-relaxed">
                        There was an error sending your message. Please check your internet connection and try again. 
                        If the problem persists, please contact us directly through alternative means.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </form>
          </div>
        </motion.div>
      </div>

      {/* Bottom spacing */}
      <div className="h-20" />
    </div>
  )
}

export default Contact
