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
          gap: '20px',
        }}
      >
        <HeadText>Welcome</HeadText>
        <SubHeadText>
          This project was made for recruitment test in DataCakra, <br /> Please
          select the menu
        </SubHeadText>
        <Typography>
          Live demo{' '}
          <a href="https://datacakra-app-wikiakai.vercel.app/" target="_blank">
            here
          </a>
        </Typography>
        <Typography>
          Source code{' '}
          <a href="https://github.com/wikiakai/datacakra-app" target="_blank">
            here
          </a>
        </Typography>
      </Container>
    )
  }
}

export default MainLayout
