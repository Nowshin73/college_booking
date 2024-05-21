import React, { useEffect, useState } from 'react'; // Import the CollegeCard component
import College from './College';
import Siderbar from './sidebar/Siderbar';


const Colleges = () => {
  const [colleges, setColleges] = useState([]);
  //const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch(' https://college-booking-rosy.vercel.app/colleges')
      .then(response => response.json())
      .then(data => setColleges(data))
      .catch(error => console.error('Error fetching classes:', error));
  }, []);
  const allColleges = colleges.slice(0, 20);
  return (
    <div className="container  flex">
      <div className='sidebar flex flex-col w-[20%] bg-white shadow-md text-black font-semibold'>
        <Siderbar colleges={colleges}></Siderbar>
      </div>

      <div className='clg-container grid md:grid-cols-2 lg:grid-cols-3 justify-center'>
        {allColleges.map((college) => (
          <College key={college.id} college={college} />
        ))}
      </div>
    </div>
  );
};

export default Colleges;
