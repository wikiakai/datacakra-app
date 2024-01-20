const checkAuth = () => {
  let accessToken = ''
  let userId = ''

  if (typeof window !== 'undefined') {
    accessToken = localStorage.getItem('accessToken') ?? ''
    userId = localStorage.getItem('id') ?? ''
  }

  console.log(accessToken, userId)
  return {
    accessToken,
    userId,
  }
}

export default checkAuth
