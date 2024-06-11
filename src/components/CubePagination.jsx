import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

import './styles.css';


import { EffectCube, Pagination, Autoplay } from 'swiper/modules';

const CubePagination = () => {
    return (
        <>
            <Swiper
                effect={'cube'}
                grabCursor={true}
                cubeEffect={{
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                }}
              
                modules={[EffectCube, Pagination, Autoplay]}
                className="mySwiper "
               
                autoplay={{
                    delay: 2700,
                    disableOnInteraction: false,
                  }}/
                
            >



                <SwiperSlide>
                    <img src="https://i.ibb.co/gWcSk22/second.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/7Wx8FdJ/fifth.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/ygWFW4j/fourth.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/k1bMYhS/third.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/r4hwf4w/sixth.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/vB8Gnh8/first.jpg" />
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default CubePagination;