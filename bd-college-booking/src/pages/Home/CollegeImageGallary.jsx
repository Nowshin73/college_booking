import React from "react";

const CollegeImageGallery = ({college}) => {
 

  return (
          <div>
            <h1 className="font-semibold rounded-md text-xl text-white bg-slate-800 p-2 ">{college.collegename}</h1>
            <img
          
              src={college.grad_img}
              alt={`College Graduate Group`}
              className="w-[800px] h-[500px] "
            />

          </div>
  );
};

export default CollegeImageGallery;
