import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'

import courseStore from '../../../../shared/store/courseStore'
import * as courseActions from '../../../../shared/actions/course'
import CourseForm from '../form'

const ManageCourse = props => {
  const [errors,  setErros] = useState({})
  const [courses, setCourses] = useState(courseStore.getCourses())
  const [course, setCourse] = useState({
    id: null,
    slug: '',
    title: '',
    authorId: null,
    category: ''
  })

  const formIsValid = () => {
    const _errors = {}
    const _errorKeys = Object.keys(course)
    const excludeList = ['id', 'slug']
    _errorKeys.forEach(key => {
      if (!excludeList.includes(key) && !course[key]) {
        _errors[key] = `${key.toUpperCase()} is required!`
      }
    })
    setErros(_errors)
    return Object.keys(_errors).length === 0
  }

  const handleChange = ({target}) => {
    const updateCourse = {...course, [target.name]: target.value}
    setCourse(updateCourse)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!formIsValid()) {
      return
    }
    try {
      await courseActions.saveCourse(course)
      props.history.push('/courses')
    } catch (error) {
      console.log(error)
    }
  }

  const onChange = () => {
    setCourses(courseStore.getCourses())
  }

  useEffect(() => {
    courseStore.addChangeListener(onChange)
    const slug = props.match.params.slug
    if (courses.length === 0) {
      courseActions.loadCourses()
    } else if (slug) {
      setCourse(courseStore.getCourseBySlug(slug))
    }
    return () => courseStore.removeChangeListener(onChange)
  }, [courses.length, props.match.params.slug])

  return (
    <Container>
      <Row className="pt-5">
        <Col md={6}>
          <h2>Manage Course</h2>
        </Col>
        <Col md={6} className="d-flex justify-content-end align-items-center">
          <Link className="btn btn-outline-green-flux btn-sm" to="/courses">
            Back to Courses
          </Link>
        </Col>
      </Row>
      <Row>
        <CourseForm
          errors={errors}
          course={course}
          onChange={handleChange}
          onSubmit={handleSubmit}/>
      </Row>
    </Container>
  )
}

export default ManageCourse
