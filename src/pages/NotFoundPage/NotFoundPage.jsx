import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/widgets/Navbar/Navbar'
import Footer from '../../components/sections/Footer/Footer'

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  const floatingElements = [
    { id: 1, size: 'w-32 h-32', position: 'top-20 left-10', delay: 0 },
    { id: 2, size: 'w-24 h-24', position: 'top-40 right-20', delay: 1 },
    { id: 3, size: 'w-20 h-20', position: 'bottom-32 left-20', delay: 2 },
    { id: 4, size: 'w-16 h-16', position: 'bottom-40 right-32', delay: 0.5 },
    { id: 5, size: 'w-12 h-12', position: 'top-60 left-1/3', delay: 1.5 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      <Navbar isTransparent={false} />
      
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingElements.map((element) => (
          <motion.div
            key={element.id}
            className={`absolute ${element.size} ${element.position} bg-primary bg-opacity-5 rounded-full`}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 6 + element.id,
              repeat: Infinity,
              ease: "easeInOut",
              delay: element.delay
            }}
          />
        ))}
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.08'%3E%3Cpath d='M36 36c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm-20-16c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* 404 Animation */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}>
            
            <motion.div 
              className="relative inline-block"
              animate={{ 
                rotateY: [0, 10, -10, 0],
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}>
              
              <h1 className="text-9xl md:text-[12rem] font-black text-primary mb-4 leading-none relative">
                4
                <motion.span
                  className="inline-block text-transparent"
                  style={{
                    background: 'linear-gradient(45deg, #3B82F6, #1E40AF, #3B82F6)',
                    backgroundSize: '200% 200%',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text'
                  }}
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}>
                  0
                </motion.span>
                4
              </h1>
              
              {/* Floating dots around 404 */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-4 h-4 bg-primary rounded-full opacity-30"
                  style={{
                    top: `${20 + Math.sin(i * 0.8) * 30}%`,
                    left: `${20 + Math.cos(i * 0.8) * 30}%`,
                  }}
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.3, 0.8, 0.3],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 2 + i * 0.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.3
                  }}
                />
              ))}
            </motion.div>
          </motion.div>

          {/* Error Message */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}>
            
            <motion.div
              className="inline-flex items-center px-6 py-3 mb-8 bg-red-50 rounded-full border border-red-100 backdrop-blur-sm"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}>
              <div className="w-3 h-3 bg-red-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-red-600 font-bold text-sm tracking-wider uppercase">
                Page Not Found
              </span>
            </motion.div>

            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Oops! This Page Took a{' '}
              <span className="text-primary">Different Path</span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              The page you're looking for seems to have wandered off on its own adventure. 
              Don't worry though – we'll help you find your way back to inspiring content!
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}>
            
            <motion.button
              onClick={handleGoHome}
              className="group relative overflow-hidden bg-primary text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}>
              <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center space-x-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span>Go Home</span>
              </div>
            </motion.button>

            <motion.button
              onClick={handleGoBack}
              className="group bg-white text-primary px-10 py-5 rounded-2xl font-bold text-lg border-2 border-primary hover:bg-primary hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}>
              <div className="flex items-center space-x-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span>Go Back</span>
              </div>
            </motion.button>
          </motion.div>

          {/* Quick Navigation */}
          <motion.div
            className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Or explore these popular pages:
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: 'About', path: '/about', icon: '👥', color: 'bg-blue-100 text-blue-600 hover:bg-blue-200' },
                { name: 'Community', path: '/community', icon: '🌍', color: 'bg-green-100 text-green-600 hover:bg-green-200' },
                { name: 'Join Us', path: '/join', icon: '🚀', color: 'bg-purple-100 text-purple-600 hover:bg-purple-200' },
                { name: 'Contact', path: '/contact', icon: '📧', color: 'bg-orange-100 text-orange-600 hover:bg-orange-200' }
              ].map((link, index) => (
                <motion.button
                  key={link.name}
                  onClick={() => navigate(link.path)}
                  className={`group p-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1 ${link.color}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}>
                  
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {link.icon}
                  </div>
                  <div className="font-semibold text-sm">
                    {link.name}
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Fun Fact */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.8 }}>
            
            <div className="inline-flex items-center px-4 py-2 bg-yellow-100 rounded-full border border-yellow-200">
              <span className="text-2xl mr-2">💡</span>
              <p className="text-yellow-800 font-medium text-sm">
                Fun fact: 404 errors got their name from room 404 at CERN where the web was invented!
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default NotFoundPage
