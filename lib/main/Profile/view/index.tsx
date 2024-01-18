'use client'
import GlassCard from '@/components/GlassCard'
import { Avatar, Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getUserDetail } from '../services'
import SubHeadText from '@/components/SubHeadText'
import { DetailUserTypes } from '../types'

const Profile = () => {
  const [dataUser, setDataUser] = useState<DetailUserTypes>({
    avatar: '',
    email: '',
    name: '',
  })
  useEffect(() => {
    const getUser = async () => {
      const res = await getUserDetail()
      console.log(res)
      setDataUser(res)
    }
    getUser()
  }, [])

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <GlassCard>
        <Box
          sx={{
            width: '100%',
            height: '250px',
            display: 'flex',
            justifyContent: 'flex-start',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <SubHeadText>Detail user</SubHeadText>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              flexDirection: 'column',
              alignItems: 'center',
              marginTop: '30px',
            }}
          >
            <Avatar
              alt="profil"
              src={dataUser?.avatar}
              sx={{ width: 56, height: 56 }}
            />
            <Typography sx={{ color: '#212121', fontSize: '20px' }}>
              {dataUser.name}
            </Typography>
            <Typography sx={{ color: '#212121', fontSize: '16px' }}>
              {dataUser.email}
            </Typography>
          </Box>
        </Box>
      </GlassCard>
    </Box>
  )
}

export default Profile
