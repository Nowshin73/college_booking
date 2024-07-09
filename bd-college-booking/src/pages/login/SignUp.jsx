import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { HiEye, HiEyeOff } from "react-icons/hi";

// ...

const SignUp = () => {

  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, reset, formState: { errors }, watch } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);

  const navigate = useNavigate();

  const onSubmit = data => {

    createUser(data.email, data.password)
      .then(result => {

        const loggedUser = result.user;
        console.log(loggedUser);

        const updateuser = updateUserProfile(data.name, data.photoURL)
        if (updateuser) {
          axios.post(' https://college-booking-rosy.vercel.app/users', { email: data.email, name: data.name, photo: data.photoURL })

        }
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'User created successfully.',
          showConfirmButton: false,
          timer: 1500
        });
        reset();
        navigate('/');
      })

      .catch(error => console.log(error));
    }
  return (
    <div className="login font-serif container w-full py-10">
      <form onSubmit={handleSubmit(onSubmit)} className='mx-auto max-w-[500px] bg-[#f4f1f1d6] rounded-lg shadow-md py-5 px-10'>
        <h2 className="text-2xl font-bold mb-4 text-center">Registration Page</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 font-medium">
            Name:
          </label>
          <input
            type="text"
            id="name"
            {...register('name', { required: true })}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
          {errors.name && <span className="text-red-500">Name is required</span>}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 font-medium">
            Email:
          </label>
          <input
            type="email"
            id="email"
            {...register('email', { required: true })}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
          {errors.email && <span className="text-red-500">Email is required</span>}
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2" htmlFor="password">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              {...register("password", {
                required: true,
                minLength: 6,
                pattern: /(?=.*[A-Z])(?=.*[!@#$%^&*])/
              })}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
            <div
              className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <HiEyeOff size={20} /> : <HiEye size={20} />}
              {errors.password?.type === 'required' && (
                <span className="text-red-500">Password is required</span>
              )}
            </div>
              {errors.password?.type === 'minLength' && (
                <span className="text-red-500">Password must be at least 6 characters</span>
              )}
              {errors.password?.type === 'pattern' && (
                <span className="text-red-500">
                  Password must contain at least one capital letter and one special character
                </span>
              )}
          </div>

          {/* Error messages */}
        </div>

        <div className="mb-4">
          <label className="block font-bold mb-2" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <div className="relative">
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              type={showPassword ? "text" : "password"}
              {...register("confirmPassword", {
                required: true,
                validate: (value) => value === watch("password")
              })}
            />
            <div
              className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <HiEyeOff size={20} /> : <HiEye size={20} />}
            </div>
            {errors.confirmPassword && errors.confirmPassword.type === "required" && (
              <p className="text-red-500">Confirm Password is required.</p>
            )}
            {errors.confirmPassword && errors.confirmPassword.type === "validate" && (
              <p className="text-red-500">Passwords do not match.</p>
            )}
          </div>
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2" htmlFor="photoURL">Photo URL</label>
          <input className="border rounded w-full py-2 px-3" type="text" {...register('photoURL')} />
        </div>
       
        <button className="button-primary bg-blue-950 p-2 text-white rounded" type="submit">Register</button>
      </form>
    </div>
  );
};

export default SignUp;
