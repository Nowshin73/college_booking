import React from "react";

const CollegeImageGallery = ({college}) => {
 

  return (
          <div className="w-[650px] h-[350px] bg-[#f1f1f1] overflow-hidden"> 
            <h1 className="font-semibold rounded-md text-xl  text-white bg-slate-800 p-2 ">{college.collegename}</h1>
            <img
              src={college.grad_img}
              alt={`College Graduate Group`}
              className="w-full"
            />

          </div>
  );
};

export default CollegeImageGallery;
