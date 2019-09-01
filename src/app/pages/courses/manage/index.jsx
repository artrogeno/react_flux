import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'

import * as courseApi from 'shared/services/course.api'
import CourseForm from '../form'

const ManageCourse = props => {
  const [errors,  setErros] = useState({})
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
      await courseApi.saveCourse(course)
      props.history.push('/courses')
      toast.success('Course saved.')
    } catch (error) {
      console.log(error)
      toast.error('Course not saved.')
    }
  }

  const findCourse = async (slug) => {
    if (slug) {
      const _course = await courseApi.getCourseBySlug(slug)
      setCourse(_course)
    }
  }

  useEffect(() => {
    const slug = props.match.params.slug
    if (slug) {
      findCourse(slug)
    }
  }, [props.match.params.slug])

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
