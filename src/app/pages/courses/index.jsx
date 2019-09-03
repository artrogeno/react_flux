import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'

import courseStore from '../../../shared/store/courseStore'
import { loadCourses, deleteCourse } from '../../../shared/actions/course'
import CourseList from './list'

const Courses = () => {
  const [courses, setCourses] = useState(courseStore.getCourses())

  const onChange = () => {
    setCourses(courseStore.getCourses())
  }

  useEffect(() => {
    courseStore.addChangeListener(onChange)
    if (courseStore.getCourses().length === 0) loadCourses()
    return () => courseStore.removeChangeListener(onChange)
  }, [])

  return (
    <Container className="pr-0 pl-0">
      <Row>
        <Col md={12} className="d-flex mt-4 mb-3">
          <h2 className="flex-grow-1">Courses</h2>
          <p>
            <Link className="btn btn-outline-green-flux btn-sm" to="/course">
              Add Course
            </Link>
          </p>
        </Col>
        <Col md={12}>
          <CourseList courses={courses} deleteCourse={deleteCourse} />
        </Col>
      </Row>
    </Container>
  )
}

export default Courses
