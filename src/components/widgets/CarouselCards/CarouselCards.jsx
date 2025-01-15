import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Impactmetricsbg2 from '../../../assets/images/1.jpg'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './CarouselCards.css';

// import required modules
import { EffectCards } from 'swiper/modules';

const CarouselCards = () => {
  return (
    <div>
        <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide><img src={Impactmetricsbg2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Impactmetricsbg2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Impactmetricsbg2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Impactmetricsbg2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Impactmetricsbg2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Impactmetricsbg2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Impactmetricsbg2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Impactmetricsbg2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Impactmetricsbg2} alt="" /></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default CarouselCards
