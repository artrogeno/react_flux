import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Table, Button } from 'reactstrap'

const CourseList = ({deleteCourse, courses}) => (
  <Table>
    <thead>
      <tr>
        <th>&nbsp;</th>
        <th>Title</th>
        <th>Author ID</th>
        <th>Category</th>
      </tr>
    </thead>
    <tbody>
      {courses.map(course => (
        <tr key={course.id}>
          <td>
            <Button
              outline
              color="danger"
              size="sm"
              onClick={() => deleteCourse(course.id)}>
              delete
            </Button>
          </td>
          <td>
            <Link to={`/course/${course.slug}`}>
              {course.title}
            </Link>
          </td>
          <td>{course.authorId}</td>
          <td>{course.category}</td>
        </tr>
      ))}
    </tbody>
  </Table>
)

CourseList.propTypes = {
  deleteCourse: PropTypes.func.isRequired,
  courses: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    authorId: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
  }))
}

export default CourseList
