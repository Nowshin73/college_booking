
import { useLoaderData, useParams } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';
import { useEffect, useState } from 'react';
const CollegeDetail = () => {
  const college = useLoaderData();

  console.log(college);
  return (
    <div className="container font-serif mx-auto p-4">
      <h1 className="text-4xl text-center font-bold mt-5 mb-10">{college.collegename}</h1>

      <div className='flex mx-auto rounded-md max-w-[1200px] h-[600px] overflow-hidden shadow-lg shadow-slate-900 self-center'>

        <Swiper
          slidesPerView={1.2}
          spaceBetween={10}
          pagination={{
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {college.clgimage.map((imgSrc, index) => (
            <SwiperSlide>
              <img
                key={index}
                src={imgSrc}
                alt={`${college.collegename} image ${index + 1}`}
                className='border-2'
              />

            </SwiperSlide>

          ))}

        </Swiper>

      </div>
      <div className="clg-details mx-auto max-w-[1200px]">
        <h2 className="text-2xl text-center font-bold my-10">College Description</h2>
        <p className=" text-center text-slate-800 mb-20">{college ? college.collegedes : "Data has not loaded"}</p>

      </div>

      <div className='grid grid-cols-2 gap-5'>
        <div className="events flex flex-col bg-blue-800 p-5">
          <h2 className="text-2xl font-bold text-white text-center mb-4">Events</h2>
          {
            college.events.map((data, index) => (
              <div className='event bg-white p-3 rounded-3xl'>
                <p className="mt-2 text-center font-bold text-lg">{data.eventname}</p>
                <div className='flex justify-between'>
                  <p className="mt-2">{data ? "Starting Date: " + data.starting_date : ""}</p>
                  <p className="mt-2">{data ? "Ending Date: " + data.closing_date : ""}</p>
                </div>
                <p className="mt-2">{data ? "Details: "+data.eventdescription:""}</p>
              </div>
            ))
          }
        </div>
        <div className="researchs">
          <h2 className="text-2xl font-bold mt-4">Research Works</h2>
          <ul className="list-disc list-inside mt-2">
            {college.research_papers.map((paper, index) => (
              <li key={index}>
                <a href={paper.link} target="_blank" rel="noopener noreferrer">
                  {paper.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <h2 className="text-xl font-bold mt-4">Sports Categories</h2>
        <p className="mt-2">{college.sports}</p>
      </div>

    </div>
  );
};

export default CollegeDetail;
