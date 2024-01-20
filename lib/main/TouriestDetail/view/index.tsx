'use client'
import React, { useEffect, useState } from 'react'
import {
  Avatar,
  Box,
  Button,
  IconButton,
  Stack,
  Typography,
} from '@mui/material'
import SubHeadText from '@/components/SubHeadText'
import GlassCard from '@/components/GlassCard'
import { getTouriest } from '../services'
import { IDataTouriest } from '../types'
import CircelLoading from '@/components/CircelLoading'

interface propsType {
  id: string
}

const TouriestDetail = (props: propsType) => {
  const [touriestDetail, setTouriestDetail] = useState<IDataTouriest>({
    id: '',
    $id: '',
    tourist_name: '',
    tourist_email: '',
    tourist_location: '',
    tourist_profilepicture: '',
  })
  const [loading, setLoading] = useState(false)
  const { id } = props
  useEffect(() => {
    const getSingleTouriest = async () => {
      setLoading(true)
      const res = await getTouriest(id)
      setTouriestDetail(res)
      setLoading(false)
    }
    getSingleTouriest()
  }, [])

  return (
    <Box
      sx={{
        minHeight: '90vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20',
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
          {loading ? (
            <CircelLoading />
          ) : (
            <>
              <SubHeadText>Detail Touriest</SubHeadText>
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
                  src={touriestDetail.tourist_profilepicture}
                  sx={{ width: 56, height: 56 }}
                />
                <Typography sx={{ color: '#212121', fontSize: '20px' }}>
                  {touriestDetail.tourist_name}
                </Typography>
                <Typography sx={{ color: '#212121', fontSize: '16px' }}>
                  {touriestDetail.tourist_location}
                </Typography>
                <Typography sx={{ color: '#212121', fontSize: '16px' }}>
                  {touriestDetail.tourist_email}
                </Typography>
                <Typography sx={{ color: '#212121', fontSize: '16px' }}>
                  Join at: {touriestDetail.createdat}
                </Typography>
              </Box>
              <Stack>
                <Button variant="contained">Edit Data</Button>
                <Button variant="outlined">Hapus Data</Button>
              </Stack>
            </>
          )}
        </Box>
      </GlassCard>
    </Box>
  )
}

export default TouriestDetail
