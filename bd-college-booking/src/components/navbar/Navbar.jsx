import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <span className="text-white text-xl font-bold">My College App</span>
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="#" className="text-white hover:text-gray-300">
              Home
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              Colleges
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              Admission
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              My College
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
