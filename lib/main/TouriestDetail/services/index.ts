import { BASE_URL } from '@/constant'
import Axios, { AxiosResponse } from 'axios'
import checkAuth from '@/helper/useAuth'

export const getTouriest = async (id: string) => {
  const { accessToken } = checkAuth()
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
