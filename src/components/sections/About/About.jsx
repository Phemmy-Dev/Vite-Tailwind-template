import {Link} from "react-router"
import { motion } from "framer-motion";
import VideoPlayerx from "../../widgets/VideoPlayerx/VideoPlayerx"

const About = () => {
    return (
        <section className="relative py-16 md:py-24 bg-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h-2v20H0v-2h20v-2H0v-2h20v-2H0v-2h20v-2H0v-2h20v-2H0v-2h20v-1.5z'/%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">
                    
                    {/* Content Section */}
                    <motion.div 
                        className="order-2 lg:order-1"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true, amount: 0.3 }}>
                        
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center px-4 py-2 mb-6 bg-blue-50 rounded-full border border-blue-100">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                            <span className="text-primary font-semibold text-sm tracking-wide">
                                IGNITING PURPOSE • TRANSFORMING FUTURES
                            </span>
                        </motion.div>

                        {/* Main Heading */}
                        <motion.h2 
                            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            viewport={{ once: true }}>
                            Empowering Young Minds to Shape{' '}
                            <span className="relative">
                                <span className="text-primary">Tomorrow's World</span>
                                <motion.div
                                    className="absolute bottom-1 left-0 w-full h-3 bg-blue-200 rounded-md -z-10"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100%" }}
                                    transition={{ duration: 1.2, delay: 1 }}
                                    viewport={{ once: true }}
                                ></motion.div>
                            </span>
                        </motion.h2>

                        {/* Description */}
                        <motion.div
                            className="space-y-4 mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            viewport={{ once: true }}>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                At Equipr, we are on a mission to unlock the untapped potential of young leaders globally. 
                                We connect ambitious minds with tools, opportunities, and environments that foster growth, innovation, and impact.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Through strategic partnerships with global organizations, we provide training, mentorship, 
                                funding, and access to cutting-edge technology, enabling youth to overcome barriers and thrive 
                                in their chosen fields of influence.
                            </p>
                        </motion.div>

                        {/* Key Features */}
                        <motion.div
                            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1 }}
                            viewport={{ once: true }}>
                            <div className="flex items-center space-x-3">
                                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <span className="text-gray-700 font-medium">Global Mentorship Network</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <span className="text-gray-700 font-medium">Skills Development Programs</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <span className="text-gray-700 font-medium">Innovation & Technology</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <span className="text-gray-700 font-medium">Funding Opportunities</span>
                            </div>
                        </motion.div>

                        {/* CTA Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.2 }}
                            viewport={{ once: true }}>
                            <Link to="/about">
                                <motion.button 
                                    className="group inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}>
                                    Discover Our Story
                                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </motion.button>
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Visual Section */}
                    <motion.div 
                        className="order-1 lg:order-2 flex justify-center items-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        viewport={{ once: true, amount: 0.3 }}>
                        
                        <div className="relative">
                            {/* Background decoration */}
                            <motion.div
                                className="absolute -inset-6 bg-blue-50 rounded-3xl transform -rotate-6"
                                initial={{ rotate: -6, scale: 0.8 }}
                                whileInView={{ rotate: -6, scale: 1 }}
                                transition={{ duration: 1, delay: 0.6 }}
                                viewport={{ once: true }}
                            ></motion.div>
                            
                            {/* Main video container */}
                            <div className="relative z-10 p-4 bg-white rounded-2xl shadow-2xl">
                                <motion.div 
                                    className="w-[320px] md:w-[400px] lg:w-[450px]"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 1, delay: 0.8 }}
                                    viewport={{ once: true }}>
                                    <VideoPlayerx />
                                </motion.div>
                            </div>

                            {/* Floating elements */}
                            <motion.div
                                className="absolute -top-4 -right-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg z-20"
                                animate={{ 
                                    y: [0, -8, 0],
                                    rotate: [0, 10, 0] 
                                }}
                                transition={{ 
                                    duration: 4,
                                    repeat: Infinity,
                                    repeatType: "reverse" 
                                }}>
                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </motion.div>

                            <motion.div
                                className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg z-20"
                                animate={{ 
                                    y: [0, 8, 0],
                                    rotate: [0, -10, 0] 
                                }}
                                transition={{ 
                                    duration: 3.5,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    delay: 1 
                                }}>
                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
export default About
