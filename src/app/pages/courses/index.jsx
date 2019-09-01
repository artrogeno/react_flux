import React, { useEffect, useState } from 'react'
import { Table } from 'reactstrap'

import { getCourses } from 'shared/services/course.api'
import CourseList from './list'

const Courses = () => {
  const [courses, setCourses] = useState([])

  const getCousesApi = async () => {
    const _courses = await getCourses()
    setCourses(_courses)
  }

  useEffect(() => {
    getCousesApi()
  }, [])

  return (
    <>
      <h2>Courses</h2>
      <CourseList courses={courses} />
    </>
  )
}

export default Courses
