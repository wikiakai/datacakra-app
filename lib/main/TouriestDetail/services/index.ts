import { BASE_URL } from '@/constant'
import Axios, { AxiosResponse } from 'axios'
import checkAuth from '@/helper/useAuth'
import querystring from 'querystring'
const { accessToken } = checkAuth()

export const getTouriest = async (id: string) => {
  try {
    const response: AxiosResponse = await Axios.get(
      `${BASE_URL}/api/Tourist/${id}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )

    const data = response.data

    return data
  } catch (error) {
    console.log(error)
    // Rethrow the error or handle it as needed
    return error
  }
}

export const requestEditTouriest = async (id: string, formData: any) => {
  try {
    const response: AxiosResponse = await Axios.put(
      `${BASE_URL}/api/Tourist/${id}`,
      querystring.stringify(formData),
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    )

    return response
  } catch (error) {
    console.log(error)
    // Rethrow the error or handle it as needed
    return error
  }
}

export const requestDeleteTouriest = async (id: string) => {
  try {
    const response: AxiosResponse = await Axios.delete(
      `${BASE_URL}/api/Tourist/${id}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )

    return response
  } catch (error) {
    console.log(error)
    // Rethrow the error or handle it as needed
    return error
  }
}
