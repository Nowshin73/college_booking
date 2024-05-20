import React from 'react'
import SignUp from '../pages/login/SignUp'
import Home from '../pages/Home/Home'
import Main from '../layout/Main'
import { createBrowserRouter } from 'react-router-dom'
import Login from '../pages/login/Login'
import Colleges from '../pages/colleges/Colleges'
import userProfile from '../pages/user/userProfile'
import MyCollege from '../pages/mycolleges/MyCollege'
import AdmissionForm from '../pages/admission/AdmissionForm'
import CollegeDetail from '../pages/colleges/CollegeDetail'
import PrivateRoute from './PrivateRoute'


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/signup',
            element: <SignUp></SignUp>
        },
        {
            path: '/colleges',
            element: <Colleges></Colleges>
        },
        {
            path: '/colleges/:id',
            element: <CollegeDetail></CollegeDetail>,
            loader: ({params}) => fetch(` https://college-booking-rosy.vercel.app/colleges/${params.id}`)
        },
        {
            path: '/mycollege',
            element: <MyCollege></MyCollege>
        },
        {
            path: '/mycollege/:id',
            element: <MyCollege></MyCollege>
        },
        {
            path: '/profile/:id',
            element: <userProfile></userProfile>
        },
        {
            path: '/admission',
            element: <AdmissionForm></AdmissionForm>
        }
    ]
    }
]);