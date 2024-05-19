import React from "react";
import { Link } from "react-router-dom";

const CollegeCard = ({ college }) => {
  const { _id, collegename, clgimage, events } = college;
  return (
    <div className="bg-white shadow-[#17255489]  rounded-lg mx-2 shadow-lg p-4">
      <img src={clgimage[0]} alt={collegename} className="w-full h-60 object-cover mb-2 rounded-md" />
      <h2 className="text-xl font-bold mb-2">{collegename}</h2>
      {events.map((data, index) =>
         ( <>
         <p className="text-gray-600 mb-2">{data.eventname}</p>
          <p className="text-gray-600 mb-2">Admission Date: {data.starting_date}</p>
          <p className="text-gray-600 mb-2">Closing Date: {data.closing_date}</p>
          {/* <p className="text-gray-600 mb-2">{data.eventdescription}</p> */}
          </> 
        )
        )
          
          }
      <Link to={`/colleges/${_id}`} >
      <button  className="btn-secondary shadow-2xl  self-center text-white border-2 border-[#172554] font-semibold px-4 py-2 rounded-md hover:bg-white hover:text-black bg-[#172554]">Details</button>
      </Link>
    </div>
  );
};

export default CollegeCard