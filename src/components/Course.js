import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import courseContext from "../contexts/coursecontext"

const Course = () => {
  const givencourse = useParams()
  const context = useContext(courseContext)

  const course = context.findCourse(givencourse)

  const handleOnSave = (e) => {
    const note = e.target.previousSibling.value
    context.updateCourse(course[0]._id, {
      title: course[0].title,
      note: note,
      desc: course[0].desc,
      imgUrl: course[0].imgUrl,
      videoUrl: course[0].videoUrl
    })
  }
  const setIframe = () => {
    console.log(course)
    return { __html: `${course[0].videoUrl}` }
  }
  return (
    <>
      <div className='mt-10 mx-[calc(50%-(860px/2))]' dangerouslySetInnerHTML={setIframe()}></div>
      <div className=' w-screen flex justify-center mb-10'>
        <textarea defaultValue={course[0].note} className='p-4 rounded text-xl outline-none w-[40%] mx-auto mt-8 bg-red-100' cols="30" rows="10"></textarea>
        <button onClick={handleOnSave} className='absolute z-30 top-24 hover:bg-blue-700 right-20 bg-blue-600 text-white w-20 h-8 rounded'>Save</button>
      </div>
    </>
  )
}

export default Course
