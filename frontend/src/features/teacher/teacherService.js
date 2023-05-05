import axios from 'axios'

const API_URL = '/api/teachers/'


const createTeacher = async (teacherData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, teacherData, config)

  return response.data
}

const getTeachers = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data
}

const deleteTeacher = async (goalId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + goalId, config)

  return response.data
}

const teacherService = {
  createTeacher,
  getTeachers,
  deleteTeacher,
}

export default teacherService
