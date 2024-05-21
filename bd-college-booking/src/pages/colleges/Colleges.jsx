import React, { useEffect, useState } from 'react'; // Import the CollegeCard component
import College from './College';
import Siderbar from './sidebar/Siderbar';


const Colleges = () => {
  const [colleges, setColleges] = useState([]);
  const [filteredcolleges, setFilteredColleges] = useState([]);
  //const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch(' https://college-booking-rosy.vercel.app/colleges')
      .then(response => response.json())
      .then(data => setColleges(data))
      .catch(error => console.error('Error fetching classes:', error));
  }, []);
  const Category = (college) => {
    if (college == "all") {
      setFilteredColleges(colleges);
    }
    if (college == "medical") {
      const medical = colleges.filter(data => colleges.category === "Medical");
      console.log(medical);
      setFilteredColleges(colleges.filter(data => colleges.category === "Medical"));
    }
    if (college == "engg") {
      const engg = colleges.filter(data => colleges.category === "Engineering");
      setFilteredColleges(colleges.filter(data => colleges.category === "Engineering"));
    }
    if (college == "fasion") {
      const fasion = colleges.filter(data => colleges.category === "Fasion & Design");
      setFilteredColleges(colleges.filter(data => colleges.category === "Fasion & Design"));
    }
  }
  const allColleges = colleges.slice(0, 20);
  return (
    <div className="container  flex">
      <div className='sidebar flex flex-col w-[20%] bg-white shadow-md text-black font-semibold'>
        <button className='p-5' onClick={() => Category("all")}>All Colleges</button>
        <button className='p-5' onClick={() => Category("medical")}> Medical Colleges</button>
        <button className='p-5' onClick={() => Category("engg")}> Engineering Colleges</button>
        <button className='p-5' onClick={() => Category("fasion")}>Fasion & Design</button>
      </div>

      <div className='clg-container grid md:grid-cols-2 lg:grid-cols-3 justify-center'>
        {filteredcolleges.map((college) => (
          <College key={college.id} college={college} />
        ))}
      </div>
    </div>
  );
};

export default Colleges;
