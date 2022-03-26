import React, { useContext, useEffect } from 'react'
import { Link, useLocation ,useNavigate} from 'react-router-dom'
import CourseContext from '../contexts/coursecontext'
import Card from './Card'

const Courses = () => {
  const context = useContext(CourseContext)
  const navigate = useNavigate()

  useEffect(()=>{
    if (localStorage.getItem("token")) {
      context.getAllCourses()
    }else{
      navigate("/SignUp")
    }
  },[])
  const path = useLocation()
  return (
    <div>
      <div className='container relative mx-auto'>
        <h1 className='text-4xl text-center mt-10 text-gray-800 font-semibold'>Browse Courses</h1>
        <Link to="/addcourse"><button className={`absolute right-0 bottom-1 text-md font-semibold px-4 py-2 rounded-lg hover:text-white transition-colors border-2 hover:bg-blue-600 ${path === "/addcourse" ? "text-white bg-blue-600" : "text-gray-800"}`}>Add Course</button></Link>
      </div>
      {context.courses.length > 0 ? <div className="container mx-auto grid grid-cols-3 justify-evenly place-items-center">
        {context.courses.map((course, index) => {
          return <Card key={index} id={course._id} title={course.title} desc={course.desc} imgUrl={course.imgUrl} />
        })}
      </div> : <h1 className='mt-8 text-2xl text-center'>No Courses Added Yet.</h1>}
    </div>
  )
}

export default Courses
