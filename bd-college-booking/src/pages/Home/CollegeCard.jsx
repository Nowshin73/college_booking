import React from "react";
import { Link } from "react-router-dom";

const CollegeCard = ({ college }) => {
    const {_id, collegename, clgimage, admission_date, events, research_history, sports } = college;
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
    <img src={clgimage} alt={collegename} className="w-full h-40 object-cover mb-2 rounded-md" />
    <h2 className="text-xl font-bold mb-2">{collegename}</h2>
    <p className="text-gray-600 mb-2">Admission Date: {admission_date}</p>
    <p className="text-gray-600 mb-2">Events: {events}</p>
    <p className="text-gray-600 mb-2">Research History: {research_history}</p>
    <p className="text-gray-600 mb-2">Sports: {sports}</p>
    <Link to={`/colleges/${_id}`} className="text-blue-500 font-medium hover:underline">
      Details
    </Link>
  </div>
  );
};

export default CollegeCard