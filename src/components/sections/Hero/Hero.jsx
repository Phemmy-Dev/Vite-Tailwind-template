import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
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
    <div>
      <section className="w-full px-3 md:px-20 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-full mx-auto bg-equiprGray">
      <div>
        <span className="block mb-4 text-xs md:text-sm text-primary font-medium">
          Ignite Purpose
        </span>
        <h3 className="text-4xl md:text-5xl font-bold">
        Empowering the Next Generation of Leaders in Sub-Saharan Africa
        </h3>
        <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam nobis in
          error repellat voluptatibus ad.
        </p>
        <button className="bg-primary text-white font-semibold py-2 px-4 rounded transition-all hover:bg-blue-400 active:scale-95">
          Join Us
        </button>
      </div>
      <ShuffleGrid />
    </section>
    </div>
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
        className="w-full h-full"
        style={{
          backgroundImage: `url(${sq.src})`,
          backgroundSize: "cover",
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
      <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
        {squares.map((sq) => sq)}
      </div>
    );
  };
export default Hero
