/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary robotics accent - Teal/Cyan
        primary: {
          50: '#e6f7f8',
          100: '#ccf0f1',
          200: '#99e0e4',
          300: '#66d1d6',
          400: '#33c1c9',
          500: '#0AB6BC', // Main primary accent
          600: '#089296',
          700: '#066d71',
          800: '#04494b',
          900: '#022426'
        },
        // Secondary accent - Deep green
        secondary: {
          50: '#e6f0ed',
          100: '#cce1db',
          200: '#99c3b7',
          300: '#66a593',
          400: '#33876f',
          500: '#045C43', // Main secondary accent
          600: '#034a36',
          700: '#023728',
          800: '#01251b',
          900: '#01120d'
        },
        // Deep dark backgrounds
        dark: {
          50: '#e6e8e9',
          100: '#ccd1d3',
          200: '#99a3a7',
          300: '#66747b',
          400: '#33464f',
          500: '#021B23', // Deep background
          600: '#02161c',
          700: '#011015',
          800: '#010b0e',
          900: '#000507'
        },
        // Highlight/Light colors
        highlight: {
          50: '#ffffff',
          100: '#fefefe',
          200: '#fdfdfd',
          300: '#fbfbfb',
          400: '#f9f9f9',
          500: '#F6F6F6', // Main highlight
          600: '#c5c5c5',
          700: '#949494',
          800: '#626262',
          900: '#313131'
        },
        // Keep gray for compatibility
        gray: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a'
        },
        // Keep accent for compatibility
        accent: {
          50: '#e6f7f8',
          100: '#ccf0f1',
          200: '#99e0e4',
          300: '#66d1d6',
          400: '#33c1c9',
          500: '#0AB6BC',
          600: '#089296',
          700: '#066d71',
          800: '#04494b',
          900: '#022426'
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'circuit-flow': 'circuitFlow 3s linear infinite',
        'scan-line': 'scanLine 4s linear infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'tilt-3d': 'tilt3d 0.3s ease-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        },
        slideInRight: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #0AB6BC, 0 0 10px #0AB6BC, 0 0 15px #0AB6BC' },
          '100%': { boxShadow: '0 0 10px #0AB6BC, 0 0 20px #0AB6BC, 0 0 30px #0AB6BC' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' }
        },
        circuitFlow: {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '100% 100%' }
        },
        scanLine: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        },
        tilt3d: {
          '0%': { transform: 'perspective(1000px) rotateX(0) rotateY(0)' },
          '100%': { transform: 'perspective(1000px) rotateX(5deg) rotateY(5deg)' }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'circuit-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0v10m0 10v10m0 10v10m0 10v10M0 30h10m10 0h10m10 0h10m10 0h10' stroke='%230AB6BC' stroke-opacity='0.1' fill='none'/%3E%3C/svg%3E\")"
      },
      boxShadow: {
        'glow-sm': '0 0 10px rgba(10, 182, 188, 0.3)',
        'glow-md': '0 0 20px rgba(10, 182, 188, 0.4)',
        'glow-lg': '0 0 30px rgba(10, 182, 188, 0.5)',
        'glow-xl': '0 0 40px rgba(10, 182, 188, 0.6)',
        'inner-glow': 'inset 0 0 20px rgba(10, 182, 188, 0.2)'
      },
      backdropBlur: {
        xs: '2px'
      }
    },
  },
  plugins: [],
}
