import { formValueTypes } from './../types/index'
import { BASE_URL } from '@/constant'
import Axios from 'axios'

export const registerUser = async (value: formValueTypes) => {
  try {
    const response = await Axios.post(
      `${BASE_URL}/api/authaccount/registration`,
      value
    )

    console.log(response)

    return response
  } catch (error) {
    console.log(error)
    // Rethrow the error or handle it as needed
    return error
  }
}
