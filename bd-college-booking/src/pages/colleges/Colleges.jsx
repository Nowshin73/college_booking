import React, { useEffect, useState } from 'react'; // Import the CollegeCard component
import College from './College';
import Siderbar from './sidebar/Siderbar';
import ActiveSideLink from './sidebar/ActiveSideLink';


const Colleges = () => {
  const [colleges, setColleges] = useState([]);
  useEffect(()=>{
    fetch("https://college-booking-rosy.vercel.app/colleges")
      .then(res=>res.json())
      .then(data=>setColleges(data))
      .catch(err=>console.error("error fetching:", err));
  },[]);

  const allColleges = colleges.slice(0, 20);
  return (
    <div className="container font-serif flex">
      {/* <div className='sidebar flex flex-col w-[20%] bg-white shadow-md text-black font-semibold'>
        <ActiveSideLink to='/all' className='p-5' onClick={() => Category("All")}>All Colleges</ActiveSideLink>
        <ActiveSideLink to='/Medical' className='p-5' onClick={() => Category("Medical")}> Medical Colleges</ActiveSideLink>
        <ActiveSideLink to='/Engineering' className='p-5' onClick={() => Category("Engineering")}> Engineering Colleges</ActiveSideLink>
        <ActiveSideLink to='/Fasion' className='p-5' onClick={() => Category("Fasion")}>Fasion & Design</ActiveSideLink>
      </div> */}

     <div className='clg-container grid md:grid-cols-2 lg:grid-cols-3 justify-center'>
        {allColleges.map((college) => (
          <College key={college.id} college={college} />
        ))}
      </div> 
    </div>
  );
};

export default Colleges;
