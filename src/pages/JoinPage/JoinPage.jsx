import React from 'react'
import { motion } from 'framer-motion'
import CommunityImg from '../../assets/images/communityImg.jpg'
import Navbar from '../../components/widgets/Navbar/Navbar'
import Footer from '../../components/sections/Footer/Footer'

const JoinPage = () => {
  const handleApplyNow = () => {
    window.open('https://forms.gle/WEHAkULjsYFSH1Kw7', '_blank');
  };

  const benefits = [
    {
      title: "Global Network",
      description: "Connect with passionate changemakers from around the world",
      icon: "🌍"
    },
    {
      title: "Leadership Skills",
      description: "Develop essential skills for creating meaningful impact",
      icon: "🚀"
    },
    {
      title: "Mentorship",
      description: "Learn from experienced leaders and industry experts",
      icon: "🎯"
    },
    {
      title: "Real Impact",
      description: "Work on projects that make a difference in communities",
      icon: "💫"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar isTransparent={false} />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${CommunityImg})` }}>
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-primary/30"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute top-20 left-10 w-32 h-32 bg-white bg-opacity-10 rounded-full"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>
          <motion.div 
            className="absolute top-40 right-20 w-20 h-20 bg-primary bg-opacity-20 rounded-full"
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          ></motion.div>
          <motion.div 
            className="absolute bottom-32 left-20 w-24 h-24 bg-blue-300 bg-opacity-15 rounded-full"
            animate={{ y: [0, -25, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          ></motion.div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8">
            <div className="inline-flex items-center px-6 py-3 mb-6 bg-green-500 bg-opacity-20 backdrop-blur-sm rounded-full border border-green-400 border-opacity-30">
              <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-green-100 font-bold text-sm tracking-wider uppercase">
                Applications Now Open
              </span>
            </div>
          </motion.div>

          <motion.h1 
            className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-8 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}>
            Join the Next Generation of{' '}
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                Leaders
              </span>
              <motion.div
                className="absolute -bottom-2 left-0 w-full h-6 bg-gradient-to-r from-primary to-blue-400 opacity-30 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, delay: 1.2 }}
              ></motion.div>
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}>
            Ready to make a global impact? Join our community of passionate changemakers and develop 
            the skills to lead meaningful transformation in your community and beyond.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}>
            
            <motion.button
              onClick={handleApplyNow}
              className="group relative overflow-hidden bg-gradient-to-r from-primary to-blue-500 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center space-x-3">
                <span>Apply Now</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </motion.div>
              </div>
            </motion.button>

            <motion.div
              className="text-white text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}>
              <p className="text-sm text-gray-300 mb-2">Application Deadline</p>
              <p className="font-bold text-lg">Rolling Basis</p>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}>
            
            {[
              { number: "400+", label: "Alumni Worldwide" },
              { number: "5+", label: "Countries Represented" },
              { number: "3+", label: "Years of Impact" },
              { number: "∞", label: "Opportunities Ahead" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-4 bg-white bg-opacity-10 backdrop-blur-sm rounded-xl border border-white border-opacity-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}>
                <div className="text-2xl md:text-3xl font-black text-white mb-1">{stat.number}</div>
                <div className="text-xs md:text-sm text-gray-300 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-white via-gray-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-40 h-40 bg-primary bg-opacity-5 rounded-full"></div>
          <div className="absolute bottom-20 left-10 w-32 h-32 bg-blue-200 bg-opacity-20 rounded-full"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}>
            
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Join <span className="text-primary">Equipr?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the unique opportunities and experiences that await you as an Equipr member.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}>
                
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-primary to-blue-400 opacity-5 rounded-full -ml-36 -mt-36"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-blue-200 to-primary opacity-10 rounded-full -mr-32 -mb-32"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">

          {/* Final CTA */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            viewport={{ once: true }}>
            
            <div className="bg-gradient-to-r from-primary to-blue-500 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-black bg-opacity-10"></div>
              <div className="relative z-10">
                <h3 className="text-2xl md:text-4xl font-bold mb-6">
                  Ready to Start Your Journey?
                </h3>
                <p className="text-lg md:text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
                  Don't wait! Applications are being reviewed on a rolling basis. 
                  Submit yours today and take the first step toward becoming a global changemaker.
                </p>
                
                <motion.button
                  onClick={handleApplyNow}
                  className="group bg-white text-primary px-10 py-5 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:bg-gray-50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}>
                  <div className="flex items-center space-x-3">
                    <span>Apply Now - It's Free!</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </motion.div>
                  </div>
                </motion.button>

                <p className="text-sm text-blue-200 mt-4">
                  Questions? Contact us at{' '}
                  <a href="mailto:equiprafricamedia@gmail.com" className="underline hover:text-white transition-colors duration-200">
                    equiprafricamedia@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default JoinPage
