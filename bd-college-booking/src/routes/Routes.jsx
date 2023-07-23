import React from 'react'
import SignUp from '../pages/login/SignUp'
import Home from '../pages/Home/Home'
import Main from '../layout/Main'
import { createBrowserRouter } from 'react-router-dom'
import Login from '../pages/login/Login'


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
        }]
    }
]);