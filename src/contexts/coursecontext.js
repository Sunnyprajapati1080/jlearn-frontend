import React, { createContext, useState } from 'react'

const courseContext = createContext()

const CourseState = (props) => {
    const [courses, setCourses] = useState([])

    const getAllCourses = async () => {
        const res = await fetch("http://localhost:8000/api/courses/getallcourses", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                token: localStorage.getItem("token")
            },
        })
        const data = await res.json()
        setCourses(data)
    }

    const createCourse = async (newcourse) => {
        await fetch("http://localhost:8000/api/courses/createcourse", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                token: localStorage.getItem("token")
            },
            body: JSON.stringify(newcourse)
        })
    }
    const updateCourse = async (id, updatedCourse) => {
        await fetch(`http://localhost:8000/api/courses/updateCourse/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                token: localStorage.getItem("token")
            },
            body: JSON.stringify(updatedCourse)
        })
    }
    const deleteCourse = async (id) => {
        await fetch(`http://localhost:8000/api/courses/deleteCourse/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                token: localStorage.getItem("token")
            },
        })
        getAllCourses()
    }
    const findCourse = (givencourse) => {
        const foundcourse = courses.filter((course) => {
            return course.title.replaceAll(" ", "-") === givencourse.name
        })
        return foundcourse
    }
    return (
        <courseContext.Provider value={{ courses, createCourse, updateCourse, deleteCourse, getAllCourses ,findCourse}}>
            {props.children}
        </courseContext.Provider>
    )
}

export default courseContext
export { CourseState }