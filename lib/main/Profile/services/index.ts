import { DetailUserTypes } from './../types/index'
import { BASE_URL } from '@/constant'
import Axios, { AxiosResponse } from 'axios'
import checkAuth from '@/helper/useAuth'
export const getUserDetail = async () => {
  const { accessToken, userId } = checkAuth()
  try {
    const response: AxiosResponse = await Axios.get(
      `${BASE_URL}/api/users/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )

    const data = response.data
    console.log(data)

    return data
  } catch (error) {
    console.log(error)
    // Rethrow the error or handle it as needed
    return error
  }
}
