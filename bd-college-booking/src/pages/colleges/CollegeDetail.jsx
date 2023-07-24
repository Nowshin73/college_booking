import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams} from 'react-router-dom';

const CollegeDetail = () => {
    const id = useParams();
    console.log(id);
    const [college, setCollege] = useState([]);
    
  
    useEffect(() => {
        fetch(`http://localhost:5000/colleges`)
            .then(response => response.json())
            .then(data => setCollege(data))
            .catch(error => console.error('Error fetching classes:', error));
    }, []);
   
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{college.collegename}</h1>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <img src={college.clgimage} alt={college.collegename} className="w-full rounded-lg" />
          <h2 className="text-xl font-bold mt-4">Admission Process</h2>
          <p className="mt-2">{college.admission_date}</p>
        </div>
        <div>
          <h2 className="text-xl font-bold">Events Details</h2>
          <p className="mt-2">{college.events}</p>
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
