'use client'
import React, { useEffect, useState } from 'react'
import {
  Avatar,
  Box,
  Button,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import SubHeadText from '@/components/SubHeadText'
import GlassCard from '@/components/GlassCard'
import {
  getTouriest,
  requestEditTouriest,
  requestDeleteTouriest,
} from '../services'
import { IDataTouriest } from '../types'
import CircelLoading from '@/components/CircelLoading'
import { useRouter } from 'next/navigation'

interface propsType {
  id: string
}

const TouriestDetail = (props: propsType) => {
  const router = useRouter()

  const [touriestDetail, setTouriestDetail] = useState<IDataTouriest>({
    id: '',
    $id: '',
    tourist_name: '',
    tourist_email: '',
    tourist_location: '',
    tourist_profilepicture: '',
  })
  const [loading, setLoading] = useState(false)
  const [view, setView] = useState('detail')
  const { id } = props
  useEffect(() => {
    const getSingleTouriest = async () => {
      setLoading(true)
      const res = await getTouriest(id)
      setTouriestDetail(res)
      setLoading(false)
    }
    getSingleTouriest()
  }, [view])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value

    const field = e.target.name

    let updatedForm: any = touriestDetail

    updatedForm[field] = val
    setTouriestDetail({ ...updatedForm })
  }

  const handleSubmitEdit = async () => {
    setLoading(true)
    const params = {
      tourist_name: touriestDetail.tourist_name,
      tourist_email: touriestDetail.tourist_email,
      tourist_location: touriestDetail.tourist_location,
    }
    const res = await requestEditTouriest(id, params)

    setLoading(false)
    setView('detail')
  }

  const handleDelete = async () => {
    setLoading(true)

    const res = await requestDeleteTouriest(id)

    setLoading(false)
    router.push('/touriest')
  }
  const renderContent = () => {
    if (loading) return <CircelLoading />
    if (view === 'detail')
      return (
        <>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '20px 0',
            }}
          >
            <SubHeadText>Detail Touriest</SubHeadText>

            <Avatar
              alt="profil"
              src={touriestDetail.tourist_profilepicture}
              sx={{ width: 56, height: 56, marginTop: '20px' }}
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
            <Stack direction="row" gap="5px" sx={{ paddingTop: '10px' }}>
              <Button variant="contained" onClick={() => setView('edit')}>
                Edit Data
              </Button>
              <Button
                variant="outlined"
                color="error"
                onClick={() => setView('delete')}
              >
                Hapus Data
              </Button>
            </Stack>
          </Box>
        </>
      )
    if (view === 'edit')
      return (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '20px 0',
          }}
        >
          <SubHeadText>Edit Touriest</SubHeadText>

          <TextField
            margin="normal"
            id="email"
            label="Email Address"
            name="tourist_email"
            value={touriestDetail.tourist_email}
            sx={{ minWidth: '300px', marginTop: '20px' }}
            onChange={handleChange}
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            id="name"
            label="Name"
            name="tourist_name"
            value={touriestDetail.tourist_name}
            sx={{ minWidth: '300px' }}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            id="location"
            label="Location"
            name="tourist_location"
            value={touriestDetail.tourist_location}
            sx={{ minWidth: '300px' }}
            onChange={handleChange}
          />
          <Stack direction="row" gap="5px" sx={{ paddingTop: '10px' }}>
            <Button variant="contained" onClick={handleSubmitEdit}>
              Submit
            </Button>
            <Button
              variant="outlined"
              color="error"
              onClick={() => setView('detail')}
            >
              Cancel
            </Button>
          </Stack>
        </Box>
      )
    if (view === 'delete')
      return (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '30px',
            padding: '50px 0',
          }}
        >
          <SubHeadText>Are you sure to Delete?</SubHeadText>
          <Stack direction="row" gap="5px" sx={{ paddingTop: '10px' }}>
            <Button variant="contained" onClick={handleDelete} color="error">
              Submit
            </Button>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => setView('detail')}
            >
              Cancel
            </Button>
          </Stack>
        </Box>
      )
  }

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
            minHeight: '250px',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px',
            paddingBottom: '20px',
          }}
        >
          {renderContent()}
        </Box>
      </GlassCard>
    </Box>
  )
}

export default TouriestDetail
