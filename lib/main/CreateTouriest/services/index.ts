import { BASE_URL } from '@/constant'
import Axios, { AxiosResponse } from 'axios'
import checkAuth from '@/helper/useAuth'
import querystring from 'querystring'
const { accessToken } = checkAuth()

export const requestCreateTouriest = async (formValue: any) => {
  try {
    const response: AxiosResponse = await Axios.post(
      `${BASE_URL}/api/Tourist`,
      querystring.stringify(formValue),
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
