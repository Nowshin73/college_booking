
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
      <h1 className="text-4xl text-center font-bold mb-10">{college.collegename}</h1>

      <div className='flex mx-auto rounded-md max-w-[1200px] h-[600px] overflow-hidden shadow-lg shadow-slate-900 self-center'>

        <Swiper
        slidesPerView={1.2}
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
                
              />

            </SwiperSlide>

          ))}

        </Swiper>

      </div>
      <div className="clg-details mx-auto max-w-[1200px]">
        <h2 className="text-2xl text-center font-bold my-10">College Description</h2>
        <p className=" text-center text-slate-800 mb-20">{college?college.collegedes:"Data has not loaded"}</p>

      </div>
      <div className='w-[500px] h-[300px]'>
        <h2 className="text-2xl font-bold mt-4">Admission Process</h2>
        <p className="my-2 font-semibold">Admission Date: {college.admission_date}</p>
        <p className='font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam suscipit molestiae nostrum, repellat, ratione vel repudiandae tempora ab natus adipisci minima necessitatibus aliquam? </p>
      </div>

      <div>
        <h2 className="text-xl font-bold">Admission Details</h2>
        {
          college.events.map((data, index) => (
            <>
              <p className="mt-2">{data.eventname}</p>
              <p className="mt-2">{data.starting_date}</p>
              <p className="mt-2">{data.closing_date}</p>
              <p className="mt-2">{data.eventdescription}</p>
            </>
          ))
        }
        <h2 className="text-xl font-bold mt-4">Research Works</h2>
        <ul className="list-disc list-inside mt-2">
          {college.research_papers.map((paper, index) => (
            <li key={index}>
              <a href={paper.link} target="_blank" rel="noopener noreferrer">
                {paper.title}
              </a>
            </li>
          ))}
        </ul>
        <h2 className="text-xl font-bold mt-4">Sports Categories</h2>
        <p className="mt-2">{college.sports}</p>
      </div>

    </div>
  );
};

export default CollegeDetail;
