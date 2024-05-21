import React from 'react'
import { NavLink } from "react-router-dom";
const ActiveSideLink = ({to,children}) => {
  return (
    <NavLink
  to= {to}
  className={({ isActive}) =>
   isActive ? "text-black p-5 font-semibold" : "text-blue-500 font-semibold"
  }
>
   {children}
</NavLink>
  )
}

export default ActiveSideLink