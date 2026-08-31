import { Link } from "react-router-dom"

const Menu = ({ title = "", icon, to = "/" }) => {
  return (
    <Link 
      to={to} 
      className="flex gap-2 items-center transition duration-300 hover:scale-105 rounded-md py-2 hover:text-blue-400 cursor-pointer"
    >
      {icon}
      <span>{title}</span>
    </Link>
  )
}

export default Menu