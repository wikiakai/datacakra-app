'use client'

import {
  Avatar,
  Box,
  Button,
  IconButton,
  Stack,
  Typography,
} from '@mui/material'
import React, { useEffect, useState } from 'react'

import SubHeadText from '@/components/SubHeadText'
import { getTouriests } from '../services'
import { ArrDataTouriestType } from '../types'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'
import { useRouter } from 'next/navigation'
import CircelLoading from '@/components/CircelLoading'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
const TouriestList = () => {
  const router = useRouter()
  const [dataTouriest, setDataTouriest] = useState<ArrDataTouriestType>([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  useEffect(() => {
    const getDataTouriest = async () => {
      setLoading(true)
      const data: any = await getTouriests(page)
      setDataTouriest(data.data)
      setLoading(false)
    }
    getDataTouriest()
  }, [page])

  const handleOpenDetail = (id: string) => {
    router.push(`/touriest/${id}`)
  }

  return (
    <Box
      sx={{
        height: '95vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '20px',
      }}
    >
      <SubHeadText>List of Touriest</SubHeadText>
      {loading ? (
        <CircelLoading />
      ) : (
        <>
          <Stack
            direction="row"
            flexWrap="wrap"
            gap="15px"
            alignItems={'center'}
          >
            <IconButton disabled={page === 1} onClick={() => setPage(page - 1)}>
              <ArrowBackIosIcon />
            </IconButton>
            <Typography
              variant="body2"
              sx={{
                fontSize: '14px',
              }}
            >
              Page {page}
            </Typography>

            <IconButton onClick={() => setPage(page + 1)}>
              <ArrowForwardIosIcon />
            </IconButton>
          </Stack>
          <Button
            onClick={() => router.push(`/touriest/create`)}
            variant="contained"
          >
            Add Touriest
          </Button>
          <Stack
            direction="row"
            flexWrap="wrap"
            gap="15px"
            sx={{ padding: '0 100px' }}
          >
            {dataTouriest.map((touriest) => (
              <Box
                sx={{
                  display: 'flex',

                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  alignItems: 'center',
                  backgroundColor: '#FFFFFF',
                  width: '280px',
                  padding: '20px',
                  boxShadow: '0px 6px 10px 0px #0000001A',
                  borderRadius: '12px',
                  gap: '10px',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: '10px',
                  }}
                >
                  <Avatar
                    alt="touriestImg"
                    src={touriest.tourist_profilepicture}
                  />
                  <Box>
                    <Typography
                      variant="h5"
                      sx={{
                        fontSize: '18px',
                        fontWeight: '700',
                        lineHeight: '27px',
                      }}
                    >
                      {touriest.tourist_name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: '14px',
                      }}
                    >
                      {touriest.tourist_location}
                    </Typography>
                  </Box>
                </Box>

                <IconButton onClick={() => handleOpenDetail(touriest.id)}>
                  <RemoveRedEyeIcon />
                </IconButton>
              </Box>
            ))}
          </Stack>
        </>
      )}
    </Box>
  )
}

export default TouriestList
