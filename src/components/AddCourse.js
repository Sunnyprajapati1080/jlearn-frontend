import React, { useContext } from 'react'
import { Link,useNavigate  } from 'react-router-dom'
import courseContext from '../contexts/coursecontext'

const AddCourse = () => {
  let navigate = useNavigate()
  const { createCourse } = useContext(courseContext)
  const handleSubmit = (e) => {
    e.preventDefault()
    const course = {}
    if (e.target.title) { course["title"] = e.target.title.value }
    if (e.target.desc) { course["desc"] = e.target.desc.value }
    if (e.target.imgUrl) { course["imgUrl"] = e.target.imgUrl.value }
    if (e.target.videoUrl) { course["videoUrl"] = e.target.videoUrl.value }
    createCourse(course)
    navigate("/Courses")
  }
  return (
    <div className="mx-auto h-[92.7vh] bg-blue-500 flex justify-center items-center w-full">
      <form onSubmit={handleSubmit}>
        <div className="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
          <div className="space-y-4">
            <h1 className="text-center text-2xl font-semibold text-gray-600">Add Course</h1>
            <div>
              <label htmlFor="title" className="block mb-1 text-gray-600 font-semibold">Title</label>
              <input id="title" name='title' type="text" className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
            </div>
            <div>
              <label htmlFor="Desc" className="block mb-1 text-gray-600 font-semibold">Desc</label>
              <input id="Desc" type="text" name='desc' className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
            </div>
            <div>
              <label htmlFor="ImgUrl" className="block mb-1 text-gray-600 font-semibold">ImgUrl</label>
              <input id="ImgUrl" type="text" name='imgUrl' className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
            </div>
            <div>
              <label htmlFor="VideoUrl" className="block mb-1 text-gray-600 font-semibold">VideoUrl</label>
              <input id="VideoUrl" type="text" name='videoUrl' className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
            </div>
          </div>
          <div className='flex justify-end'>
            <button className="mt-4 mr-2 bg-blue-500 px-4 text-indigo-100 py-2 rounded-md text-lg tracking-wide">add</button>
            <Link to="/Courses"><button className="mt-4 bg-rose-400 px-4 text-indigo-100 py-2 rounded-md text-lg tracking-wide">cancel</button></Link>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddCourse