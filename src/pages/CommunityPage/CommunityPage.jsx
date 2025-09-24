import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../../components/widgets/Navbar/Navbar';
import CommunityImg from '../../assets/images/communityImg.jpg';
import CountUp from 'react-countup';
// import CommunityBoxes from '../../components/widgets/CommunityBoxes/CommunityBoxes';
import CommunityJoinBox from '../../components/widgets/CommunityJoinBox/CommunityJoinBox';
import Carousel from '../../components/widgets/Carousel/Carousel';
// import CarouselCards from '../../components/widgets/CarouselCards/CarouselCards';
import Footer from '../../components/sections/Footer/Footer';

const CommunityPage = () => {
  return (
    <div className="bg-gray-50">
      <Navbar isTransparent={false} />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${CommunityImg})` }}>
          {/* Modern Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          
          {/* Decorative Elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 right-20 w-32 h-32 border-2 border-white rounded-full animate-pulse"></div>
            <div className="absolute bottom-40 left-10 w-16 h-16 border border-white rounded-full"></div>
            <div className="absolute top-1/2 right-1/4 w-8 h-8 bg-white rounded-full opacity-50"></div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 w-full">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-6">
                <div className="inline-flex items-center px-4 py-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-full border border-white border-opacity-30 mb-6">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse"></div>
                  <span className="text-white font-semibold text-sm tracking-wide">
                    GLOBAL COMMUNITY
                  </span>
                </div>
                
                <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                  Connect, Share and{' '}
                  <span className="relative">
                    <span className="text-primary">Grow</span>
                    <motion.div
                      className="absolute bottom-1 left-0 w-full h-3 bg-primary bg-opacity-30 rounded-md"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1.5, delay: 1 }}
                    ></motion.div>
                  </span>
                </h1>
                
                <p className="text-white text-base md:text-lg leading-relaxed mb-6 max-w-2xl opacity-90">
                  Become part of a thriving global network of young changemakers who are shaping the future through innovation, collaboration, and leadership.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mb-12">
                <Link 
                  to="/join" 
                  className="group inline-flex items-center bg-primary text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl">
                  Join Our Community
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </motion.div>

              {/* Stats Counter */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="grid grid-cols-3 gap-8 max-w-md">
                
                <div className="text-center">
                  <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4 border border-white border-opacity-30">
                    <CountUp 
                      end={4} 
                      className="text-2xl md:text-3xl font-bold text-white block" 
                      suffix="+" 
                      duration={2.5}
                    />
                    <p className="text-white text-xs md:text-sm font-medium opacity-90 mt-1">Years of Impact</p>
                  </div>
                </div>

                <div className="text-center">
                  <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4 border border-white border-opacity-30">
                    <CountUp 
                      end={4} 
                      className="text-2xl md:text-3xl font-bold text-white block" 
                      duration={2.5}
                    />
                    <p className="text-white text-xs md:text-sm font-medium opacity-90 mt-1">Batches Trained</p>
                  </div>
                </div>

                <div className="text-center">
                  <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4 border border-white border-opacity-30">
                    <CountUp 
                      end={100} 
                      className="text-2xl md:text-3xl font-bold text-white block" 
                      suffix="+" 
                      duration={2.5}
                    />
                    <p className="text-white text-xs md:text-sm font-medium opacity-90 mt-1">Alumni</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}>
          <div className="flex flex-col items-center text-white">
            <span className="text-sm mb-2 opacity-70">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
            </motion.div>
          </div>
        </motion.div>
      </section>
      {/* Why Join Us Section */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          {/* Section Header */}
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
                WHY CHOOSE US
              </span>
            </motion.div>

            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}>
              Why Join Our{' '}
              <span className="relative">
                <span className="text-primary">Community?</span>
                <motion.div
                  className="absolute bottom-1 left-0 w-full h-4 bg-blue-200 rounded-md -z-10"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1.2, delay: 1 }}
                  viewport={{ once: true }}
                ></motion.div>
              </span>
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}>
              Discover a thriving community where passion meets purpose. At Equipr, we provide the resources, 
              connections, and support you need to unlock your full potential.
            </motion.p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side - Benefits */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: true }}>
              
              {/* Enhanced CommunityJoinBox alternatives */}
              <div className="group">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Engaging Events</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Equipr hosts engaging events such as workshops, networking sessions, and leadership training 
                        tailored to help members grow personally and professionally.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Meaningful Connections</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Expand your circle by connecting with like-minded individuals, mentors, and industry leaders. 
                        Equipr brings together a network of passionate changemakers to support and uplift each other.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Exceptional People</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Surround yourself with a community of talented and driven individuals. At Equipr, 
                        you'll find friendships and collaborations that last a lifetime.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Carousel */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              viewport={{ once: true }}>
              
              {/* Decorative background */}
              <div className="absolute -top-4 -right-4 w-full h-full bg-primary bg-opacity-10 rounded-2xl -z-10"></div>
              
              <div className="bg-white p-4 rounded-2xl shadow-xl">
                <Carousel />
              </div>
            </motion.div>
          </div>

          {/* Additional Benefits Grid */}
          <motion.div
            className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            viewport={{ once: true }}>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z"/>
                </svg>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Skill Development</h4>
              <p className="text-gray-600 text-sm">Continuous learning opportunities and skill-building workshops</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Mentorship</h4>
              <p className="text-gray-600 text-sm">One-on-one guidance from experienced leaders and professionals</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Innovation Hub</h4>
              <p className="text-gray-600 text-sm">Collaborate on cutting-edge projects and innovative solutions</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Recognition</h4>
              <p className="text-gray-600 text-sm">Celebrate achievements and showcase your impact globally</p>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            viewport={{ once: true }}>
            
            <div className="bg-primary rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white bg-opacity-10 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white bg-opacity-10 rounded-full -ml-12 -mb-12"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Begin Your Journey?</h3>
                <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
                  Join thousands of young leaders who are already making a difference. Your future starts here.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/join" 
                    className="group inline-flex items-center justify-center bg-white text-primary px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                    Join Our Community
                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                  
                  <Link 
                    to="/about" 
                    className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-white hover:text-primary transition-all duration-300 transform hover:-translate-y-1">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default CommunityPage;