'use client'
import checkAuth from '@/helper/useAuth'

import React from 'react'
import RedirectPage from '../Redirect'

import { Container, Typography } from '@mui/material'
import HeadText from '@/components/HeadText'
import SubHeadText from '@/components/SubHeadText'

const MainLayout = () => {
  const { accessToken, userId } = checkAuth()
  if (!accessToken && !userId) {
    return <RedirectPage />
  } else {
    return (
      <Container
        maxWidth="xl"
        sx={{
          width: '100%',
          height: '80vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          textAlign: 'center',
        }}
      >
        <HeadText>Welcome</HeadText>
        <SubHeadText>
          This project was made for recruitment test in DataCakra, <br /> Please
          select the menu
        </SubHeadText>
      </Container>
    )
  }
}

export default MainLayout
