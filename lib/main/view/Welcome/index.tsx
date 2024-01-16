'use client'
import checkAuth from '@/helper/useAuth'
import { useRouter } from 'next/navigation'
import React from 'react'
import RedirectPage from '../Redirect'

const Welcome = () => {
  const router = useRouter()
  const { accessToken, userId } = checkAuth()
  if (!accessToken && !userId) {
    return <RedirectPage />
  } else {
    return <div>hallo welcome</div>
  }
}

export default Welcome
