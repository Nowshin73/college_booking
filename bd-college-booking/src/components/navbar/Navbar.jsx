import React, { useContext } from "react";
import ActiveLink from "./ActiveLink";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <nav className="bg-blue-950 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <span className="text-white text-xl font-bold">CU College Admission</span>
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
            {user ? (
              <>
                <ActiveLink to='/mycollege' className="text-white hover:text-gray-300">
                  My College
                </ActiveLink>
                <ActiveLink to='/profile' className="text-white hover:text-gray-300">
                  Profile
                </ActiveLink>
              </>
            )
              :
              <ActiveLink to='/login' className="text-white hover:text-gray-300">
                Login
              </ActiveLink>
            }

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
