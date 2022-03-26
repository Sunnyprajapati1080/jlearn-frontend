import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import courseContext from '../contexts/coursecontext'

const Card = (props) => {
  const {deleteCourse} = useContext(courseContext)
  const navigate = useNavigate()
  return (
    <div className="rounded-xl my-10 overflow-hidden w-96 shadow-lg">
      {props.imgUrl ? <img src={props.imgUrl} className="w-full" alt={props.title} /> : false}
      <div className="px-6 py-4">
        <div className="font-semibold text-xl mb-2 whitespace-pre">{props.title}</div>
        <p className="text-gray-700 text-base">
          {props.desc}
        </p>
        <div className="flex justify-between">
          <Link to={`/Courses/${props.title.replaceAll(" ","-")}`}><button className='bg-indigo-600 text-white p-3 py-1.5 mt-4 rounded-full hover:bg-indigo-700'>Start Learning</button></Link>
          <div className='flex space-x-4 items-center mt-3'>
            <img onClick={()=>navigate(`/updateCourse/${props.id}`)} className='w-[20px] cursor-pointer' src="/edit.svg" alt="" />
            <img onClick={()=>deleteCourse(props.id)} className='w-[20px] cursor-pointer' src="/delete.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
