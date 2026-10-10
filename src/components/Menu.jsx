import { NavLink } from "react-router-dom"

const Menu = ({ title = "", icon, to = "/" }) => {
  return (
    <NavLink to={to}
      className={({ isActive }) => `flex gap-2 items-center transition duration-300 py-2 rounded-md px-3 cursor-pointer
       ${isActive ? "bg-blue-500 text-white shadow-md" : "text-gray-600 hover:scale-105 hover:text-blue-400"}`}> 
       {icon} <span>{title}</span></NavLink>
  )
}

export default Menu