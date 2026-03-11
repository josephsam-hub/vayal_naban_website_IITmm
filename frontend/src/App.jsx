import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Product from './pages/Product'
import About from './pages/About'
import Contact from './pages/Contact'

// Page transition wrapper
const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4, ease: 'easeInOut' }}
  >
    {children}
  </motion.div>
)

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark-800 text-highlight-500 relative">
        {/* Global background effects */}
        <div className="fixed inset-0 pointer-events-none z-0">
          {/* Neural network dots pattern */}
          <div 
            className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, #0AB6BC 1px, transparent 0)',
              backgroundSize: '60px 60px'
            }}
          />
        </div>
        
        <Navbar />
        
        <main className="relative z-10">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={
                <PageWrapper>
                  <Home />
                </PageWrapper>
              } />
              <Route path="/product" element={
                <PageWrapper>
                  <Product />
                </PageWrapper>
              } />
              <Route path="/about" element={
                <PageWrapper>
                  <About />
                </PageWrapper>
              } />
              <Route path="/contact" element={
                <PageWrapper>
                  <Contact />
                </PageWrapper>
              } />
            </Routes>
          </AnimatePresence>
        </main>

        {/* Footer */}
        <footer className="relative z-10 border-t border-primary-500/10 bg-dark-500/30 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
                <span className="text-sm text-highlight-500/50">
                  Vayal Nanban Autonomous Systems
                </span>
              </div>
              <div className="text-sm text-highlight-500/30">
                Precision Agriculture & Warehouse Robotics
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App
