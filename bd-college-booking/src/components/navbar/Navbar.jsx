import React from "react";
import ActiveLink from "./ActiveLink";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <span className="text-white text-xl font-bold">College Booking</span>
          </div>
          <div className="hidden md:flex space-x-4">
            <ActiveLink to='/' className="text-white hover:text-gray-300">
              Home
            </ActiveLink>
            <ActiveLink to='/colleges' className="text-white hover:text-gray-300">
              Colleges
            </ActiveLink>
            <ActiveLink to='/admission' className="text-white hover:text-gray-300">
              Admission
            </ActiveLink>
            <ActiveLink to='mycollege' className="text-white hover:text-gray-300">
              My College
            </ActiveLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
