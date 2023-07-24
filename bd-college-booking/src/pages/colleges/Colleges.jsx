import React, { useEffect, useState } from 'react'; // Import the CollegeCard component
import College from './College';


const Colleges = () => {
  const [colleges, setColleges] = useState([]);
  //const [instructors, setInstructors] = useState([]);

  useEffect(() => {
      fetch('http://localhost:5000/colleges')
          .then(response => response.json())
          .then(data => setColleges(data))
          .catch(error => console.error('Error fetching classes:', error));
  }, []);
  const allColleges = colleges.slice(0, 20);
  return (
    <div className="container mx-auto flex flex-wrap justify-center">
      {allColleges.map((college) => (
        <College key={college.id} college={college} />
      ))}
    </div>
  );
};

export default Colleges;
