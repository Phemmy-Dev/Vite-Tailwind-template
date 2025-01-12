import React from 'react'
import Carousel from '../../widgets/Carousel/Carousel';
import img1 from '../../../assets/images/1.jpg';
import img2 from '../../../assets/images/2.jpg';
import img3 from '../../../assets/images/3.jpg';

const CarouselSection = () => {
    const slides = [img1, img2, img3];
  return (
    <div className="relative">
      <div className="max-w-lg">
        <Carousel slides={slides} />
      </div>
    </div>
  )
}

export default CarouselSection
