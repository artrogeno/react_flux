import axios from 'shared/utils/axios'

export const getCourses = async () => {
  try {
    const { data } = await axios.get('/courses')
    return data
  } catch (error) {
    console.log(error)
  }
}

export const getCourseBySlug = async (slug) => {
  try {
    const { data } = await axios.get(`/courses/?slug=${slug}`)
    if (data.length !== 1) throw new Error (`Course not found: ${slug}`)
    return data[0]
  } catch (error) {
    console.log(error)
  }
}

export const saveCourse = async (course) => {
  try {
    const options = {
      method: course.id ? 'PUT' : 'POST',
      headers: { 'content-type': 'application/json' },
      data: JSON.stringify({
        ...course,
        authorId: parseInt(course.authorId, 10)
      }),
      url: `/courses/${course.id || ''}`,
    };
    const { data } = await axios(options)
    return data
  } catch (error) {
    console.log(error)
  }
}

export const deleteCourse = async (courseId) => {
  try {
    const response = await axios.delete(`/courses/${courseId}`)
    return response
  } catch (error) {
    console.log(error)
  }
}
