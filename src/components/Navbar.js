import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const path = useLocation().pathname
  const navigate = useNavigate()
  const handleLogOut = () => {
    localStorage.removeItem("token")
    navigate("/SignUp")
  }
  return (
    <div className="bg-white relative z-20 shadow">
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-3">
          <div className="hidden sm:flex sm:items-center">
            <Link to="/Home" className={` text-md font-semibold hover:text-blue-600 ${path === "/Home" || path === "/" ? "text-blue-600" : "text-gray-800"} mr-4`}>Home</Link>
            <Link to="/Courses" className={`text-md font-semibold hover:text-blue-600 ${path === "/Courses" ? "text-blue-600" : "text-gray-800"} mr-4`}>Courses</Link>
          </div>
          <div className="hidden sm:flex sm:items-center">
            {!localStorage.getItem("token") ?
              <>
                <Link to="/SignIn" className={`text-md font-semibold hover:text-blue-600 mr-2 ${path === "/SignIn" ? "text-blue-600" : "text-gray-800"}`}>Sign in</Link>
                <Link to="/SignUp" className={`text-md font-semibold px-4 py-2 rounded-lg hover:text-white transition-colors border-2 hover:bg-blue-600 ${path === "/SignUp" || path === "/signup" ? "text-white bg-blue-600" : "text-gray-800"}`}>Sign up</Link>
              </>
              : <button onClick={handleLogOut} className={`text-md font-semibold px-4 py-2 rounded-lg hover:text-white transition-colors border-2 hover:bg-blue-600 text-gray-800`}>LogOut</button>}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Navbar