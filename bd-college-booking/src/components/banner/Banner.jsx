import React, { useEffect, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';
import { Link } from 'react-router-dom';
function Banner() {
    const [banner, setBanner] = useState([]);
    //const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        fetch(' https://college-booking-rosy.vercel.app/banner')
            .then(response => response.json())
            .then(data => setBanner(data))
            .catch(error => console.error('Error fetching banner:', error));
    }, []);
    console.log(banner);
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
              { banner.map((data,index)=> ( 
                <SwiperSlide>
                    <div id={data._id} style={{ backgroundImage: `url(${data.banner_img})` }} key={index} 
                    className={`container relative w-full flex bg-[#1725547d] bg-cover flex-col justify-center h-[92vh]`}>
                        {/* <img className="-z-20 h-full bg-cover" src="https://i.ibb.co/Rj55hCY/image.png" alt="" /> */}
                        <div className="text-container relative top-30 flex flex-col justify-center ">
                            <h1 className='text-6xl mb-10 p-2 text-center font-bold text-white bg-[#172554b5]'>{data.headline1}</h1>

                            <div className="headline-container px-2 py-2 j mx-4 my-4 items-center flex  self-center">
                                <p className='headline shadow-2xl bg-[#3553b8] text-white text-4xl w-[350px] mb-5 p-2 font-semibold'>{data.headline2}</p>
                                <p className='des shadow-2xl bg-yellow-300 relative -left-4 top-24 w-[350px] p-4 font-semibold'>{data.des}</p>
                                <Link to={data.link}><button className='btn-secondary shadow-2xl relative -left-8 top-44 self-center hover:text-white border-2 border-[#172554] font-semibold px-4 py-2 rounded-md bg-white text-black hover:bg-[#172554]'>{data.btn_name}</button></Link>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>)
               )}


            </Swiper>
        </div>
    )
}

export default Banner