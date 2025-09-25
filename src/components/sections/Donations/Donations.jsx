// import React from 'react
import { motion } from "framer-motion";

const Donations = () => {
  const handleContactUs = () => {
    window.location.href = 'mailto:equiprafricamedia@gmail.com?subject=Partnership and Support Inquiry&body=Hello Equipr Team,%0D%0A%0D%0AI am interested in supporting your mission. Please let me know how I can get involved.%0D%0A%0D%0AThank you!';
  };

  return (
    <section className="relative py-16 md:py-24 bg-gray-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.08'%3E%3Cpath d='M50 50c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zM10 10c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm60 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

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
            className="inline-flex items-center px-4 py-2 mb-6 bg-blue-50 rounded-full border border-blue-100">
            <div className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse"></div>
            <span className="text-primary font-semibold text-sm tracking-wide">
              JOIN OUR MISSION
            </span>
          </motion.div>

          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}>
            Play a Part in Empowering the{' '}
            <span className="relative">
              <span className="text-primary">Next Generation</span>
              <motion.div
                className="absolute bottom-1 left-0 w-full h-3 bg-blue-200 rounded-md -z-10"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1.2, delay: 1 }}
                viewport={{ once: true }}
              ></motion.div>
            </span>
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}>
            Join us in shaping the future of young leaders globally by contributing your expertise, time, or resources. 
            Every effort you make has a direct impact on their journey to success.
          </motion.p>
        </motion.div>

        {/* Main Options Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Donation Option */}
          <motion.div
            className="group"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true }}>
            <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden h-full">
              {/* Decorative top bar */}
              <div className="h-2 bg-primary"></div>
              
              <div className="p-8 md:p-10">
                {/* Icon */}
                <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Make a Donation</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Support our mission with a one-time or monthly contribution. Your donation directly funds 
                  training programs, mentorship opportunities, and resources for young leaders.
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-600">Direct impact on youth development</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-600">Flexible giving options</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-600">Regular impact updates</span>
                  </div>
                </div>

                <motion.button 
                  className="w-full bg-primary text-white font-semibold py-4 px-6 rounded-xl hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}>
                  Donate Now
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Partnership Option */}
          <motion.div
            className="group"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            viewport={{ once: true }}>
            <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden h-full">
              {/* Decorative top bar */}
              <div className="h-2 bg-green-500"></div>
              
              <div className="p-8 md:p-10">
                {/* Icon */}
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                  </svg>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Become a Partner</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Partner with us to create more opportunities for young leaders worldwide. 
                  Join our network of organizations making a lasting difference.
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-600">Strategic collaboration opportunities</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-600">Global network access</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-600">Shared impact reporting</span>
                  </div>
                </div>

                <motion.button 
                  className="w-full bg-green-600 text-white font-semibold py-4 px-6 rounded-xl hover:bg-green-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}>
                  Learn More
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Ways to Help */}
        <motion.div
          className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100 mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          viewport={{ once: true }}>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">Other Ways to Support</h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Volunteer */}
            <div className="text-center group">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Volunteer</h4>
              <p className="text-sm text-gray-600">Share your skills and time with our community</p>
            </div>

            {/* Mentor */}
            <div className="text-center group">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z"/>
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Mentor</h4>
              <p className="text-sm text-gray-600">Guide young leaders on their journey</p>
            </div>

            {/* Spread Awareness */}
            <div className="text-center group">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Spread Awareness</h4>
              <p className="text-sm text-gray-600">Share our mission with your network</p>
            </div>

            {/* Corporate Sponsorship */}
            <div className="text-center group">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-6a1 1 0 00-1-1H9a1 1 0 00-1 1v6a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Corporate Sponsor</h4>
              <p className="text-sm text-gray-600">Partner with us for greater impact</p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          viewport={{ once: true }}>
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Make a Difference?</h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Together, we can build a brighter future for the next generation. Every contribution counts, 
              and every action creates ripples of positive change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                className="bg-white text-primary px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                Get Started Today
              </motion.button>
              <motion.button 
                onClick={handleContactUs}
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-primary transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                Contact Us
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Donations
