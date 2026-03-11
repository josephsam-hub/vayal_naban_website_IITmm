import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Bot, Menu, X, Circle } from 'lucide-react'
import { useState, useEffect } from 'react'

const Navbar = () => {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path) => location.pathname === path

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/product', label: 'Product' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ]

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-dark-500/90 backdrop-blur-xl shadow-lg shadow-primary-500/5 border-b border-primary-500/10' 
          : 'bg-transparent'
      }`}
    >
      {/* Animated top border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 opacity-50 blur-lg group-hover:opacity-80 transition-opacity"
                />
                <div className="relative p-2 rounded-xl bg-dark-500/80 border border-primary-500/30 group-hover:border-primary-500/60 transition-all">
                  <Bot className="h-7 w-7 text-primary-500" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold font-['Orbitron'] tracking-wider bg-gradient-to-r from-primary-400 via-primary-300 to-secondary-400 bg-clip-text text-transparent">
                  VAYAL NANBAN
                </span>
                <span className="text-[10px] text-primary-500/60 tracking-[0.3em] uppercase">
                  Autonomous Systems
                </span>
              </div>
            </Link>
          </motion.div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <Link
                  to={item.path}
                  className="relative px-5 py-2.5 group"
                >
                  {/* Background glow effect */}
                  <span className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                    isActive(item.path) 
                      ? 'bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border border-primary-500/30' 
                      : 'bg-transparent group-hover:bg-primary-500/10'
                  }`} />
                  
                  {/* Active indicator dot */}
                  {isActive(item.path) && (
                    <motion.span
                      layoutId="activeIndicator"
                      className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary-400"
                    />
                  )}
                  
                  <span className={`relative text-sm font-medium tracking-wide transition-all duration-300 ${
                    isActive(item.path) 
                      ? 'text-primary-400' 
                      : 'text-highlight-500/70 group-hover:text-primary-400'
                  }`}>
                    {item.label}
                  </span>
                  
                  {/* Hover underline */}
                  <span className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-[2px] rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 transition-all duration-300 ${
                    isActive(item.path) ? 'w-1/2' : 'w-0 group-hover:w-1/2'
                  }`} />
                </Link>
              </motion.div>
            ))}
            
            {/* Status indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="ml-4 pl-4 border-l border-primary-500/20 flex items-center space-x-2"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary-500" />
              </span>
              <span className="text-xs text-primary-500/60 tracking-wider uppercase">Online</span>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="relative p-2 rounded-lg border border-primary-500/30 bg-dark-500/50 text-primary-400 hover:bg-primary-500/10 transition-all"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2 border-t border-primary-500/10">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                        isActive(item.path) 
                          ? 'bg-gradient-to-r from-primary-500/20 to-secondary-500/10 border border-primary-500/30 text-primary-400' 
                          : 'text-highlight-500/70 hover:bg-primary-500/10 hover:text-primary-400'
                      }`}
                    >
                      <Circle className={`w-2 h-2 ${isActive(item.path) ? 'text-primary-400 fill-primary-400' : 'text-primary-500/30'}`} />
                      <span className="font-medium tracking-wide">{item.label}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navbar
