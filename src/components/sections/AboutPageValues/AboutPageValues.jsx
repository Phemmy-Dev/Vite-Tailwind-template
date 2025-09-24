import ValueWidget from "../../widgets/ValueWidget/ValueWidget"
import advanceIcon from '../../../assets/images/icons/advance.png'
import learnIcon from '../../../assets/images/icons/learn.png'
import connectedIcon from '../../../assets/images/icons/connected.png'
import focusedIcon from '../../../assets/images/icons/focused.png'
import honestIcon from '../../../assets/images/icons/honest.png'
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const AboutPageValues = () => {
  const values = [
    {
      icon: advanceIcon,
      title: "Keep Advancing",
      description: "Innovation empowers us to stay relevant and meet the ever-changing needs of those we serve. We are committed to maintaining a quality-focused approach while embracing change to improve our standards.",
      color: "bg-blue-100",
      borderColor: "border-blue-200"
    },
    {
      icon: learnIcon,
      title: "Keep Learning",
      description: "We rely on well-researched, proven tools to foster growth and innovation. By expanding our knowledge base, we build the confidence needed to redefine the narrative of the communities we serve.",
      color: "bg-green-100",
      borderColor: "border-green-200"
    },
    {
      icon: connectedIcon,
      title: "Stay Connected",
      description: "At Equipr, we believe in the power of community and collaboration. By connecting young minds with the right tools and opportunities, we help them unlock their potential and thrive.",
      color: "bg-purple-100",
      borderColor: "border-purple-200"
    },
    {
      icon: focusedIcon,
      title: "Stay Focused",
      description: "Our mission is fueled by a clear focus and strong partnerships. We set achievable goals in collaboration with local communities and global networks.",
      color: "bg-orange-100",
      borderColor: "border-orange-200"
    },
    {
      icon: honestIcon,
      title: "Be Honest",
      description: "Trust and transparency are at the core of everything we do. We value integrity and mutual respect, fostering relationships built on honesty and high ethical standards.",
      color: "bg-pink-100",
      borderColor: "border-pink-200"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zM0 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10S0 5.5 0 0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
              OUR FOUNDATION
            </span>
          </motion.div>

          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}>
            Our Core{' '}
            <span className="relative">
              <span className="text-primary">Values</span>
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
            These fundamental principles guide everything we do, shaping our approach to leadership development 
            and community building across the globe.
          </motion.p>
        </motion.div>

        {/* Values Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}>
          
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group">
              
              <div className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border ${value.borderColor} h-full relative overflow-hidden`}>
                {/* Decorative top accent */}
                <div className={`absolute top-0 left-0 w-full h-1 ${value.color.replace('bg-', 'bg-').replace('-100', '-400')}`}></div>
                
                {/* Icon Container */}
                <div className={`w-16 h-16 ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto`}>
                  <img 
                    src={value.icon} 
                    alt={`${value.title} Icon`}
                    className="w-8 h-8 object-contain"
                  />
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
                    {value.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    {value.description}
                  </p>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-primary bg-opacity-0 group-hover:bg-opacity-5 transition-all duration-300 rounded-2xl pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          viewport={{ once: true }}>
          
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary bg-opacity-5 rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-100 rounded-full -ml-12 -mb-12"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Values in Action
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                These values aren't just words on a page—they're the driving force behind every program, 
                every connection, and every opportunity we create for young leaders worldwide.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="p-4">
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-gray-600">Integrity-Driven</div>
                </div>
                <div className="p-4">
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-gray-600">Community Focus</div>
                </div>
                <div className="p-4">
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-2">Global</div>
                  <div className="text-sm text-gray-600">Impact Reach</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutPageValues
