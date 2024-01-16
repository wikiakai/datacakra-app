import { BASE_URL } from '@/constant'
import Axios from 'axios'
import { formValueTypes } from '../../register/types'

export const loginUser = async (value: formValueTypes) => {
  try {
    const response = await Axios.post(`${BASE_URL}/api/authaccount/login`, {
      email: value.email,
      password: value.password,
    })
    if (response.status === 201) {
      localStorage.setItem('accessToken', response.data.data.Token)
      localStorage.setItem('name', response.data.data.Name)
      localStorage.setItem('email', response.data.data.Email)
      localStorage.setItem('id', response.data.data.Id)
    }
    return response
  } catch (error) {
    console.log(error)
    // Rethrow the error or handle it as needed
    return error
  }
}
