import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Img1 from '../../../assets/images/aboutimg/1.jpg'
import Img2 from '../../../assets/images/aboutimg/2.jpg'
import Img3 from '../../../assets/images/aboutimg/3.jpg'
import Img4 from '../../../assets/images/aboutimg/4.jpg'
import Img5 from '../../../assets/images/aboutimg/5.jpg'
import Img6 from '../../../assets/images/aboutimg/6.jpg'
import Img7 from '../../../assets/images/aboutimg/7.jpg'
import Img8 from '../../../assets/images/aboutimg/8.jpg'
import Img9 from '../../../assets/images/aboutimg/9.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './carouselstyles.css';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

const Carousel = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper  rounded-lg"
      >
        <SwiperSlide><img src={Img1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Img2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Img3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Img4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Img5} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Img6} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Img7} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Img8} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Img9} alt="" /></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Carousel
