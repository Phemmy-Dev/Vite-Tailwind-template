import TeamBox from "../../widgets/TeamBox/TeamBox"
import { motion } from "framer-motion";
import bolade from '../../../assets/images/leaders/bolade.jpg';
import Josh from '../../../assets/images/leaders/josh.jpg';
import Zee from '../../../assets/images/leaders/zee.jpg';
import Miji from '../../../assets/images/leaders/miji.jpg';
import Lekan from '../../../assets/images/leaders/lekan.jpg';
import Ayomipo from '../../../assets/images/leaders/ayomipo.jpg';
import Enoch from '../../../assets/images/leaders/enoch.jpg';
import Malik from '../../../assets/images/leaders/malik.jpg';
import Jerimiah from '../../../assets/images/leaders/jerimiah.jpg';
import Boluwatife from '../../../assets/images/leaders/boluwatife.jpg';
import Maurel from '../../../assets/images/leaders/maurel.jpg';
import Patricia from '../../../assets/images/leaders/patricia.jpg';
import Sharon from '../../../assets/images/leaders/sharon.jpg';
import TJ from '../../../assets/images/leaders/tj.jpg';
import Femi from '../../../assets/images/leaders/femi.jpg';
import Marve from '../../../assets/images/leaders/marve.jpg';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const LeadershipTeam = () => {
  const founderInfo = {
    img: bolade,
    name: "Mobolade Adesokan",
    title: "Founder & Executive Director",
    description: "Visionary leader driving global impact and empowering youth worldwide"
  };

  const teamMembers = [
    { img: Malik, name: "Maleek Kuye", title: "Program Associate" },
    { img: Josh, name: "Joshua Oroge", title: "Team Leader" },
    { img: Ayomipo, name: "Ayomipo Olawale", title: "Team Leader" },
    { img: TJ, name: "Tijesunimi Falade", title: "Team Leader" },
    { img: Femi, name: "Oluwafemi Akinruntan", title: "Team Leader" },
    { img: Miji, name: "Olamiji Ononuga", title: "Team Leader" },
    { img: Lekan, name: "Olamilekan Iwayemi", title: "Team Leader" },
    { img: Zee, name: "Aaliyah Zemaiye", title: "Team Leader" },
    { img: Enoch, name: "Enoch Oladimeji", title: "Team Leader" },
    { img: Patricia, name: "Patricia Adetuase", title: "Team Leader" },
    { img: Jerimiah, name: "Ande Jeremiah Terese", title: "Team Leader" },
    { img: Boluwatife, name: "Boluwatife Adetuase", title: "Team Leader" },
    { img: Maurel, name: "Maurel Houatchueng", title: "Team Leader" },
    { img: Sharon, name: "Sharon Bamikole", title: "Team Leader" },
    { img: Marve, name: "Marvelous Aliyu", title: "Team Leader" }
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-primary bg-opacity-10 rounded-full animate-bounce" style={{ animationDuration: '3s' }}></div>
        <div className="absolute bottom-32 left-20 w-20 h-20 bg-blue-200 rounded-full opacity-30"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.06'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        {/* Enhanced Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-6 py-3 mb-8 bg-white rounded-full shadow-md border border-blue-100 backdrop-blur-sm bg-opacity-90">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
              <span className="text-primary font-bold text-sm tracking-wider uppercase">
                Meet Our Team
              </span>
              <div className="w-3 h-3 bg-blue-300 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-8 leading-tight"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}>
            Leadership That{' '}
            <span className="relative inline-block">
              <span className="text-primary">Inspires</span>
              <motion.div
                className="absolute -bottom-2 left-0 w-full h-6 bg-gradient-to-r from-primary to-blue-400 rounded-full opacity-20 -z-10"
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: "100%", opacity: 0.2 }}
                transition={{ duration: 1.5, delay: 1.2 }}
                viewport={{ once: true }}
              ></motion.div>
            </span>
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            viewport={{ once: true }}>
            Discover the passionate individuals behind our global movement. Our diverse leadership team 
            combines vision, expertise, and unwavering commitment to creating meaningful change worldwide.
          </motion.p>
        </motion.div>

        {/* Founder Spotlight */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}>
          
          <div className="text-center mb-16">
            <motion.h3 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              viewport={{ once: true }}>
              Our Founder & Visionary
            </motion.h3>
            <motion.div 
              className="w-32 h-1.5 bg-gradient-to-r from-primary to-blue-400 mx-auto rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "8rem" }}
              transition={{ duration: 1, delay: 1.4 }}
              viewport={{ once: true }}
            ></motion.div>
          </div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              className="relative group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.6 }}
              viewport={{ once: true }}>
              
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 relative overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary to-blue-400 opacity-5 rounded-full -mr-20 -mt-20"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-200 to-primary opacity-10 rounded-full -ml-16 -mb-16"></div>
                
                {/* Crown/Star icon */}
                <motion.div 
                  className="absolute top-8 right-8 w-12 h-12 bg-gradient-to-br from-primary to-blue-500 rounded-full flex items-center justify-center shadow-lg"
                  initial={{ rotate: 0, scale: 0 }}
                  whileInView={{ rotate: 360, scale: 1 }}
                  transition={{ duration: 1, delay: 2 }}
                  viewport={{ once: true }}>
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L3 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A.996.996 0 0118 6v2a1 1 0 11-2 0v-.277l-1.254.145a1 1 0 11-.992-1.736L14 6l-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.152V12a1 1 0 11-2 0v-1.848l-1.246-.284a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.047l1.254.716a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.047V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.99a.995.995 0 01-1.022 0l-1.735-.99a1 1 0 01-.372-1.364z" clipRule="evenodd" />
                  </svg>
                </motion.div>
                
                <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
                  <div className="flex-shrink-0">
                    <motion.div 
                      className="relative"
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 1.8 }}
                      viewport={{ once: true }}>
                      <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden ring-8 ring-white shadow-2xl group-hover:ring-primary transition-colors duration-500">
                        <img 
                          src={founderInfo.img} 
                          alt={founderInfo.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                      {/* Floating badge */}
                      <motion.div 
                        className="absolute -bottom-4 -right-4 bg-gradient-to-r from-primary to-blue-500 text-white px-4 py-2 rounded-full shadow-lg font-semibold text-sm"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 2.2 }}
                        viewport={{ once: true }}>
                        Founder
                      </motion.div>
                    </motion.div>
                  </div>
                  
                  <div className="flex-grow text-center lg:text-left">
                    <motion.h3 
                      className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 2 }}
                      viewport={{ once: true }}>
                      {founderInfo.name}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-xl text-primary font-semibold mb-6"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 2.2 }}
                      viewport={{ once: true }}>
                      {founderInfo.title}
                    </motion.p>
                    
                    <motion.p 
                      className="text-lg text-gray-600 leading-relaxed mb-8"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 2.4 }}
                      viewport={{ once: true }}>
                      {founderInfo.description}
                    </motion.p>
                    
                    <motion.div 
                      className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 2.6 }}
                      viewport={{ once: true }}>
                      <div className="bg-blue-50 px-6 py-3 rounded-full">
                        <span className="text-primary font-semibold text-sm">Visionary Leader</span>
                      </div>
                      <div className="bg-green-50 px-6 py-3 rounded-full">
                        <span className="text-green-600 font-semibold text-sm">Global Impact</span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Team Members Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          viewport={{ once: true }}>
          
          <div className="text-center mb-16">
            <motion.h3 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              viewport={{ once: true }}>
              Our Dedicated Team
            </motion.h3>
            <motion.div 
              className="w-32 h-1.5 bg-gradient-to-r from-primary to-blue-400 mx-auto rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "8rem" }}
              transition={{ duration: 1, delay: 1.8 }}
              viewport={{ once: true }}
            ></motion.div>
            <motion.p 
              className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2 }}
              viewport={{ once: true }}>
              Meet the incredible individuals who bring passion, expertise, and dedication to our mission every day.
            </motion.p>
          </div>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}>
            
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group">
                
                <div className="bg-white rounded-2xl p-5 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 text-center relative overflow-hidden">
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl"></div>
                  
                  <div className="relative z-10">
                    <div className="relative mb-5">
                      <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden ring-3 ring-gray-200 group-hover:ring-primary transition-all duration-300 mx-auto shadow-md group-hover:shadow-lg">
                        <img 
                          src={member.img} 
                          alt={member.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      {/* Floating dot indicator */}
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-2 border-white shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>
                    
                    <h4 className="font-bold text-gray-900 mb-2 text-sm md:text-base group-hover:text-primary transition-colors duration-300 leading-tight">
                      {member.name}
                    </h4>
                    <p className="text-xs md:text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300 font-medium">
                      {member.title}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Enhanced Team Stats */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.2 }}
          viewport={{ once: true }}>
          
          <div className="bg-white rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
            {/* Enhanced background decorations */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-primary to-blue-400 opacity-5 rounded-full -mr-24 -mt-24"></div>
            <div className="absolute bottom-0 left-0 w-36 h-36 bg-gradient-to-tr from-blue-200 to-primary opacity-10 rounded-full -ml-18 -mb-18"></div>
            <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-primary rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute top-1/4 right-1/3 w-6 h-6 bg-blue-300 rounded-full opacity-15 animate-bounce" style={{ animationDuration: '4s' }}></div>
            
            <div className="relative z-10">
              <motion.h3 
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 2.4 }}
                viewport={{ once: true }}>
                Strength in Unity
              </motion.h3>
              
              <motion.p 
                className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.6 }}
                viewport={{ once: true }}>
                Our diverse team represents a tapestry of experiences, cultures, and expertise, all united by 
                a shared vision of empowering youth and creating lasting positive change across the globe.
              </motion.p>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                {[
                  { number: teamMembers.length + 1, label: "Team Members", delay: 2.8 },
                  { number: "10+", label: "Countries Represented", delay: 3 },
                  { number: "5+", label: "Years of Impact", delay: 3.2 },
                  { number: "∞", label: "Possibilities Ahead", delay: 3.4 }
                ].map((stat, index) => (
                  <motion.div 
                    key={index}
                    className="p-6 bg-gray-50 rounded-2xl hover:bg-blue-50 transition-colors duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: stat.delay }}
                    viewport={{ once: true }}>
                    <div className="text-4xl md:text-5xl font-black text-primary mb-3">{stat.number}</div>
                    <div className="text-sm md:text-base text-gray-600 font-semibold">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default LeadershipTeam
