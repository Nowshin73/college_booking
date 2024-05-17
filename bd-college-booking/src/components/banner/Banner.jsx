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
        <div className='flex flex-col justify-center mx-auto  '>
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
                    <div className="container relative w-full flex  bg-[url('https://i.ibb.co/Rj55hCY/image.png')] bg-cover flex-col justify-center h-[80vh]">
                        {/* <img className="-z-20 h-full bg-cover" src="https://i.ibb.co/Rj55hCY/image.png" alt="" /> */}
                        <div className="text-container relative top-30 flex flex-col justify-center ">
                            <h1 className='text-6xl p-2 text-center font-bold text-white bg-[#172554b5]'>Welcome to CU College Admission</h1>
                           
                            <div className="headline-container px-1 py-2 mx-4 my-2 items-baseline text-white flex flex-col justify-start bg-[#3553b8] w-[350px] min-h-[300px]">
                                <p className='headline text-4xl mb-5 p-2 font-semibold'>College admissions are going on</p>
                                <p className='des text-yellow-300 p-2 font-semibold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid voluptatum ipsum veniam facilis. Architecto, dolorum sunt quisquam libero rem obcaecati adipisci saepe a.</p>
                                <button className='btn-secondary self-center font-semibold px-4 py-2 bg-[#172554]'>Explore</button>
                            </div>
                           
                        </div>
                    </div>
                </SwiperSlide>


            </Swiper>
        </div>
    )
}

export default Banner