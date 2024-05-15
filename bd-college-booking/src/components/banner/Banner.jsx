import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';
function Banner() {
    return (
        <div className='flex flex-col justify-center mx-auto h-[90vh] '>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="container relative w-full text-center flex flex-col justify-center">
                        <img src="https://i.ibb.co/v1PC8vZ/image.png" alt="" />
                        <div className="text-container  absolute top-[10%] left-[30%] bg-slate-500">
                        <h1 className='text-6xl font-bold text-white '>Admission Going On!</h1>
                        <p></p>
                        </div>
                    </div>
                </SwiperSlide>
                
            </Swiper>
        </div>
    )
}

export default Banner