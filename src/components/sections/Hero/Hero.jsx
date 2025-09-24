import { motion } from "framer-motion"; 
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import image1 from "../../../assets/images/herofaces/1.jpg";
import image2 from "../../../assets/images/herofaces/2.jpg";
import image3 from "../../../assets/images/herofaces/3.jpg";
import image4 from "../../../assets/images/herofaces/4.jpg";
import image5 from "../../../assets/images/herofaces/5.jpg";
import image6 from "../../../assets/images/herofaces/6.jpg";
import image7 from "../../../assets/images/herofaces/7.jpg";
import image8 from "../../../assets/images/herofaces/8.jpg";
import image9 from "../../../assets/images/herofaces/9.jpg";
import image10 from "../../../assets/images/herofaces/10.jpg";
import image11 from "../../../assets/images/herofaces/11.jpg";
import image12 from "../../../assets/images/herofaces/12.jpg";
import image13 from "../../../assets/images/herofaces/13.jpg";
import image14 from "../../../assets/images/herofaces/14.jpg";
import image15 from "../../../assets/images/herofaces/15.jpg";
import image16 from "../../../assets/images/herofaces/16.jpg";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{delay: 0.3, duration: 1.2 }}>
      
      <section className="relative w-full min-h-screen bg-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="relative z-10 w-full px-4 md:px-8 lg:px-16 py-8 md:py-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16 min-h-[80vh]">
              
              {/* Content Section */}
              <motion.div 
                className="order-2 lg:order-1 text-center lg:text-left"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{delay: 0.6, duration: 1 }}>
                
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{delay: 0.8, duration: 0.6 }}
                  className="inline-flex items-center px-4 py-2 mb-8 bg-blue-50 rounded-full border border-blue-100">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse"></div>
                  <span className="text-primary font-semibold text-sm tracking-wide">
                    IGNITE PURPOSE • TRANSFORM FUTURES
                  </span>
                </motion.div>

                {/* Main Headline */}
                <motion.h1 
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{delay: 1, duration: 0.8 }}>
                  Empowering the Next{' '}
                  <span className="relative">
                    <span className="text-primary">Generation</span>
                    <motion.div
                      className="absolute bottom-1 left-0 w-full h-2 bg-blue-200 rounded-md -z-10"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{delay: 1.5, duration: 1.2 }}
                    ></motion.div>
                  </span>
                  {' '}of Visionary Leaders
                  <span className="text-primary"> Globally</span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p 
                  className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{delay: 1.2, duration: 0.8 }}>
                  Connect with opportunities, mentorship, and resources that inspire innovation 
                  and drive meaningful change in communities worldwide.
                </motion.p>

                {/* Stats Row */}
                <motion.div
                  className="flex flex-row items-center justify-center lg:justify-start gap-4 sm:gap-8 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{delay: 1.4, duration: 0.8 }}>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-primary">100+</div>
                    <div className="text-xs sm:text-sm text-gray-600 font-medium">Alumni Network</div>
                  </div>
                  <div className="w-px h-8 sm:h-12 bg-gray-300"></div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-primary">4+</div>
                    <div className="text-xs sm:text-sm text-gray-600 font-medium">Years Impact</div>
                  </div>
                  <div className="w-px h-8 sm:h-12 bg-gray-300"></div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-primary">Global</div>
                    <div className="text-xs sm:text-sm text-gray-600 font-medium">Community</div>
                  </div>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{delay: 1.6, duration: 0.8 }}>
                  <Link 
                    to="/join" 
                    className="group inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
                    Join Our Community
                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                  <Link 
                    to="/about" 
                    className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-primary hover:text-primary transition-all duration-300 transform hover:-translate-y-1">
                    Learn More
                  </Link>
                </motion.div>
              </motion.div>

              {/* Visual Section */}
              <motion.div 
                className="order-1 lg:order-2 flex justify-center items-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{delay: 0.8, duration: 1.2 }}>
                <ShuffleGrid />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg className="w-full h-20 text-gray-50" fill="currentColor" viewBox="0 0 1000 100" preserveAspectRatio="none">
            <path d="M0,100 C150,0 350,0 500,50 C650,100 850,100 1000,50 L1000,100 Z" />
          </svg>
        </div>
      </section>
    </motion.div>
  )
}


const shuffle = (array) => {
    let currentIndex = array.length,
      randomIndex;
  
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
  
    return array;
  };
  
  const squareData = [
    { id: 1, src: image1 },
    { id: 2, src: image2 },
    { id: 3, src: image3 },
    { id: 4, src: image4 },
    { id: 5, src: image5 },
    { id: 6, src: image6 },
    { id: 7, src: image7 },
    { id: 8, src: image8 },
    { id: 9, src: image9 },
    { id: 10, src: image10 },
    { id: 11, src: image11 },
    { id: 12, src: image12 },
    { id: 13, src: image13 },
    { id: 14, src: image14 },
    { id: 15, src: image15 },
    { id: 16, src: image16 },
  ];
  
  const generateSquares = () => {
    return shuffle(squareData).map((sq) => (
      <motion.div
        key={sq.id}
        layout
        transition={{ duration: 2.5, type: "spring" }}
        className="w-full h-full overflow-hidden"
        style={{
          backgroundImage: `url(${sq.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></motion.div>
    ));
  };
  
  const ShuffleGrid = () => {
    const timeoutRef = useRef(null);
    const [squares, setSquares] = useState(generateSquares());
  
    useEffect(() => {
      shuffleSquares();
  
      return () => clearTimeout(timeoutRef.current);
    }, []);
  
    const shuffleSquares = () => {
      setSquares(generateSquares());
  
      timeoutRef.current = setTimeout(shuffleSquares, 7000);
    };
  
    return (
      <div className="grid grid-cols-4 grid-rows-4 w-[450px] h-[450px] gap-1">
        {squares.map((sq) => sq)}
      </div>
    );
  };

export default Hero
