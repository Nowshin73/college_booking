import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const College = ({ college }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="max-w-xl bg-white rounded overflow-hidden shadow-lg m-4">
      <img className="w-full" src={college.clgimage} alt={college.collegename} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{college.collegename}</div>
        <p className="text-gray-700 text-base mb-2">
          Rating: {college.rating}
        </p>
        <p className="text-gray-700 text-base mb-2">
          College Location: {college.collegelocation}
        </p>
        <p className="text-gray-700 text-base mb-2">
          Research Count: {college.research_papers.length}
        </p>
        <Link to={`/colleges/${college._id}`} >
      <button  className="btn-secondary shadow-2xl  self-center text-white border-2 border-[#172554] font-semibold px-4 py-2 rounded-md hover:bg-white hover:text-black bg-[#172554]">Details</button>
      </Link>
        {/* <button
          onClick={toggleDetails}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Details
        </button> */}
      </div>
      {/* {showDetails && (
        <div className="px-6 py-4">
          <p className="text-gray-700 text-base mb-2">
            Events: {college.events}
          </p>
          <p className="text-gray-700 text-base mb-2">
            Sports Facilities: {college.sports}
          </p>
        </div>
      )} */}
    </div>
  );
};

export default College;
