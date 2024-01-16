'use client'
const checkAuth = () => {
  const accessToken: string = localStorage.getItem('accessToken') ?? ''
  const userId: string = localStorage.getItem('userId') ?? ''

  return {
    accessToken,
    userId,
  }
}

export default checkAuth
