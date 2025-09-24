import ImpactBg from "../../../assets/images/impactmetricsBG1.jpg"
import CountUp from 'react-countup';
import { motion } from "framer-motion";



const ImpactMetrics = () => {
  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden">
      {/* Background with improved overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{backgroundImage: `url(${ImpactBg})`}}
      >
        <div className="absolute inset-0 bg-primary bg-opacity-90"></div>
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      </div>

      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 mb-6 bg-white bg-opacity-20 rounded-full border border-white border-opacity-30 backdrop-blur-sm">
            <div className="w-2 h-2 bg-white rounded-full mr-3 animate-pulse"></div>
            <span className="text-white font-semibold text-sm tracking-wide">
              OUR GLOBAL IMPACT
            </span>
          </motion.div>

          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}>
            Transforming Lives Through{' '}
            <span className="relative">
              <span className="text-yellow-300">Meaningful Impact</span>
              <motion.div
                className="absolute bottom-1 left-0 w-full h-3 bg-yellow-300 bg-opacity-30 rounded-md -z-10"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1.2, delay: 1 }}
                viewport={{ once: true }}
              ></motion.div>
            </span>
          </motion.h2>

          <motion.p
            className="text-lg text-white text-opacity-90 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}>
            Every number tells a story of transformation, growth, and the endless potential 
            we've helped unlock in young leaders across the globe.
          </motion.p>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true, amount: 0.3 }}>
          
          {/* Years of Impact */}
          <motion.div
            className="text-center group"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            viewport={{ once: true }}>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
              <CountUp 
                end={4} 
                suffix="+"
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white block mb-3" 
                duration={2.5}
                enableScrollSpy={true}
                scrollSpyOnce={true}
              />
              <p className="text-lg font-semibold text-white text-opacity-90">Years of Impact</p>
              <p className="text-sm text-white text-opacity-70 mt-2">Consistent growth and innovation</p>
            </div>
          </motion.div>

          {/* Batches Trained */}
          <motion.div
            className="text-center group"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            viewport={{ once: true }}>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
              <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.75.524zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                </svg>
              </div>
              <CountUp 
                end={4} 
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white block mb-3" 
                duration={2.5}
                enableScrollSpy={true}
                scrollSpyOnce={true}
              />
              <p className="text-lg font-semibold text-white text-opacity-90">Batches Trained</p>
              <p className="text-sm text-white text-opacity-70 mt-2">Comprehensive learning cohorts</p>
            </div>
          </motion.div>

          {/* Alumni Network */}
          <motion.div
            className="text-center group"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            viewport={{ once: true }}>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
              <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
                </svg>
              </div>
              <CountUp 
                end={100} 
                suffix="+"
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white block mb-3" 
                duration={2.5}
                enableScrollSpy={true}
                scrollSpyOnce={true}
              />
              <p className="text-lg font-semibold text-white text-opacity-90">Alumni Network</p>
              <p className="text-sm text-white text-opacity-70 mt-2">Global community of leaders</p>
            </div>
          </motion.div>

          {/* Universities Reached */}
          <motion.div
            className="text-center group"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            viewport={{ once: true }}>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
              <div className="w-16 h-16 bg-purple-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                </svg>
              </div>
              <CountUp 
                end={30} 
                suffix="+"
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white block mb-3" 
                duration={2.5}
                enableScrollSpy={true}
                scrollSpyOnce={true}
              />
              <p className="text-lg font-semibold text-white text-opacity-90">Universities Reached</p>
              <p className="text-sm text-white text-opacity-70 mt-2">Academic partnerships worldwide</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
          viewport={{ once: true }}>
          <p className="text-lg text-white text-opacity-90 mb-6">
            Ready to be part of our next success story?
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}>
            <button className="inline-flex items-center px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
              Join Our Community
              <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ImpactMetrics
