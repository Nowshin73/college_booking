import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams} from 'react-router-dom';

const CollegeDetail = () => {
   
    const college = useLoaderData();
  
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">{college.collegename}</h1>
      <div className="grid grid-cols-2 gap-20">
        <div>
          <img src={college.clgimage} alt={college.collegename} className="w-full rounded-lg" />
          <div className='w-[500px] h-[300px]'>
          <h2 className="text-2xl font-bold mt-4">Admission Process</h2>
          <p className="my-2 font-semibold">Admission Date: {college.admission_date}</p>
          <p className='font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam suscipit molestiae nostrum, repellat, ratione vel repudiandae tempora ab natus adipisci minima necessitatibus aliquam? </p>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold">Admission Details</h2>
          {
            college.events.map((data,index)=>(
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
    </div>
  );
};

export default CollegeDetail;
