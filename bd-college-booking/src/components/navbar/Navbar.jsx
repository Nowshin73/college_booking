import React, { useContext } from "react";
import ActiveLink from "./ActiveLink";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => {
        // Logout successful
        alert("Logout successful");
        navigate('/login');
      })
      .catch(error => {
        console.error("Logout error:", error);
      });
  };
  return (
    <nav className="bg-blue-950 p-4 font-serif">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <span className="text-white text-xl font-bold">CU College Admission</span>
          </div>
          <div className="hidden md:flex justify-center items-center space-x-4">
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
                <button type="button" onClick={handleLogout}
                 className="text-white p-2 rounded-md bg-yellow-600 shadow-2xl hover:shadow-inner">
                  Logout
                  </button>
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
