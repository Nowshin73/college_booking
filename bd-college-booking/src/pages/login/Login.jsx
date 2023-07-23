import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { HiEye, HiEyeOff } from "react-icons/hi";
import axios from 'axios';
import { AuthContext } from '../../providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { signIn, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";


  const handleLogin = (data) => {
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        reset();
        setErrorMessage('');
        Swal.fire({
          title: 'User Login Successful.',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        });
        navigate(from, { replace: true });
      })
     
  };

  const signInWithGoogle = () => {
    googleSignIn()
      .then((result) => {
        const loggedInUser = result.user;
        const updateuser = updateUserProfile(data.name, data.photoURL)
        if (updateuser) {
          axios.post('https://b7a12-summer-camp-server-side-nowshin73.vercel.app/users', { email: data.email, name: data.name, photo: data.photoURL })
        }
        setUser(loggedInUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('https://b7a12-summer-camp-server-side-nowshin73.vercel.app/jwt', data);
      const token = response.data.token;
      localStorage.setItem('token', token);

      // Redirect to dashboard or perform other actions
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.error);
      } else {
        setErrorMessage('wrong credentials');
        reset();
      }
    }
  };

  return (
    <div className="login min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full mx-auto bg-[#f4f1f1d6] rounded-lg shadow-md py-5 px-10">
        <h1 className="text-2xl font-semibold mb-6">Login</h1>
        {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-medium">Email:</label>

            <input
              type="email"
              id="email"
              {...register('email', { required: true })}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
            {errors.email && <span className="text-red-500">Email is required</span>}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 font-medium">
              Password:
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                {...register("password", { required: true })}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
              <div
                className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <HiEyeOff size={20} /> : <HiEye size={20} />}
              </div>
            </div>
            {errors.password && (
              <span className="text-red-500">Password is required</span>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-slate-900 text-white font-semibold border border-slate-900  px-4 rounded hover:bg-white hover:text-black focus:bg-white"
          >
            Login
          </button>
        </form>

        <div className="divider">OR</div>
        <button onClick={signInWithGoogle} className="w-full bg-white border border-slate-900 text-gray-800 font-semibold  px-2 rounded mt-2 hover:bg-slate-900 hover:text-white">
          Login with Google
        </button>
        <p className="mt-4">
          Don't have an account? <a href="/signup" className="text-blue-500">Register here</a>.
        </p>
      </div>
    </div>
  );
};

export default Login;
