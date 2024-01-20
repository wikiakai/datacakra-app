'use client'

import { Box, Button, Stack, TextField, Snackbar, Alert } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CheckIcon from '@mui/icons-material/Check'
import SubHeadText from '@/components/SubHeadText'
import GlassCard from '@/components/GlassCard'
import { IFormValue } from '../types'
import { requestCreateTouriest } from '../services'
import { useRouter } from 'next/navigation'

const CreateTouriest = () => {
  const router = useRouter()
  const [formValue, setFormValue] = useState<IFormValue>({
    tourist_email: '',
    tourist_location: '',
    tourist_name: '',
  })

  const [openSnackbar, setOpenSnackBar] = useState(false)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value

    const field = e.target.name

    let updatedForm: any = formValue

    updatedForm[field] = val
    setFormValue({ ...updatedForm })
  }

  const handleSubmitCreate = async () => {
    const res: any = await requestCreateTouriest(formValue)

    if (res.status === 201) {
      setOpenSnackBar(true)
      router.push('/touriest')
    }
  }
  const isDisabled =
    formValue.tourist_email === '' ||
    formValue.tourist_location === '' ||
    formValue.tourist_name === ''

  return (
    <Box
      sx={{
        height: '95vh',
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '120px',
      }}
    >
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={openSnackbar}
        onClose={() => setOpenSnackBar(false)}
        message="Touriest Created!"
        autoHideDuration={2000}
      >
        <Alert
          onClose={() => setOpenSnackBar(false)}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          User created!
        </Alert>
      </Snackbar>
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
          <SubHeadText>Create New Touriest</SubHeadText>

          <TextField
            id="email"
            label="Email Address"
            name="tourist_email"
            value={formValue.tourist_email}
            sx={{ minWidth: '300px' }}
            onChange={handleChange}
            autoComplete="email"
            type="email"
            autoFocus
          />
          <TextField
            id="name"
            label="Name"
            name="tourist_name"
            value={formValue.tourist_name}
            sx={{ minWidth: '300px' }}
            onChange={handleChange}
          />
          <TextField
            id="location"
            label="Location"
            name="tourist_location"
            value={formValue.tourist_location}
            sx={{ minWidth: '300px' }}
            onChange={handleChange}
          />
          <Stack direction="row" gap="5px" sx={{ paddingTop: '10px' }}>
            <Button
              variant="contained"
              onClick={handleSubmitCreate}
              disabled={isDisabled}
            >
              Submit
            </Button>
            <Button
              variant="outlined"
              color="error"
              onClick={() => router.push('/touriest')}
            >
              Cancel
            </Button>
          </Stack>
        </Box>
      </GlassCard>
    </Box>
  )
}

export default CreateTouriest
