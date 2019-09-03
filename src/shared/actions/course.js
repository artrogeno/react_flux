import { toast } from 'react-toastify'

import dispatcher from 'shared/utils/dispatcher'
import * as courseApi from 'shared/services/course.api'
import actionTypes from './actionTypes'

export const saveCourse = async (course) => {
  try {
    const savedCourse = await courseApi.saveCourse(course)
    toast.success(`Course ${course.id ? 'updated' : 'saved'}.`)
    return dispatcher.dispatch({
      actionType: course.id ? actionTypes.UPDATE_COURSE : actionTypes.CREATE_COURSE,
      course: savedCourse
    })
  } catch (error) {
    toast.error(`Course not ${course.id ? 'updated' : 'saved'}.`)
  }
}

export const loadCourses = async () => {
  const courses = await courseApi.getCourses()
  return dispatcher.dispatch({
    actionType: actionTypes.LOAD_COURSES,
    courses
  })
}

export const deleteCourse = async (id) => {
  try {
    await courseApi.deleteCourse(id)
    toast.success('Course deleted.')
    return dispatcher.dispatch({
      actionType: actionTypes.DELETE_COURSE,
      id
    })
  } catch (error) {
    toast.error('Course not deleted.')
  }

}
