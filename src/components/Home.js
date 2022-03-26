import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Card from './Card'
import CourseContext from '../contexts/coursecontext'


const Home = () => {
  const navigate = useNavigate()
  const context = useContext(CourseContext)
  useEffect(() => {
    if (localStorage.getItem("token")) {
      context.getAllCourses()
    }else{
      navigate("/SignUp")
    }
  }, [])
  return (
    <div>
      <h1 className='text-4xl text-center mt-10 text-gray-800 font-semibold'>Top Courses</h1>
      {context.courses.length > 0 ? <div className="container mx-auto grid grid-cols-3 justify-evenly place-items-center">
        {context.courses.slice(0, 3).map((course, index) => {
          return <Card key={index} id={course._id} title={course.title} desc={course.desc} imgUrl={course.imgUrl} />
        })}
      </div> : <h1 className='mt-8 text-2xl text-center'>No Courses Added Yet.</h1>}
      {context.courses.length > 0 ? <p className='text-center mb-10'><Link to="/Courses" className='text-center text-xl text-indigo-600'>Browse All Courses ⟶ </Link></p> : false}
    </div>
  )
}

export default Home
