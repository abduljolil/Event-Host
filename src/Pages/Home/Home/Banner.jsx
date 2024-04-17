import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
 
import 'swiper/css/pagination';
import 'swiper/css';

 
// import required modules
import { Pagination } from 'swiper/modules';
import BannerCard from '../../../Component/BannerCard';

const Banner = () => {
 
   return (
        <>
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide><BannerCard></BannerCard></SwiperSlide>
            <SwiperSlide><BannerCard></BannerCard></SwiperSlide>
             
          </Swiper>
        </>
    
   );
};

export default Banner;