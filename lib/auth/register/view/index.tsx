'use client'
import { Avatar, Box, Button, TextField, Typography } from '@mui/material'

import AppRegistrationIcon from '@mui/icons-material/AppRegistration'

import { useState } from 'react'
import { formValueTypes } from '../types'
import { registerUser } from '../services'
import { useRouter } from 'next/navigation'
import { loginUser } from '../../login/services'
import GlassCard from '@/components/GlassCard'

const RegisterView = () => {
  const router = useRouter()
  const [formValue, setFormValue] = useState<formValueTypes>({
    name: '',
    email: '',
    password: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value

    const field = e.target.name

    let updatedForm: any = formValue

    updatedForm[field] = val
    setFormValue({ ...updatedForm })
  }

  const handleSubmit = async () => {
    const res: any = await registerUser(formValue)
    if (res.status === 201) {
      const resLogin: any = await loginUser(formValue)
      if (resLogin.status === 201) {
        router.push('/')
      }
    } else {
      const msg = `${res.response.data[0].field} ${res.response.data[0].message}`
      alert(msg)
    }
  }

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url(bg-regis.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* refactor glass card */}
      <GlassCard>
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <AppRegistrationIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <Box sx={{ mt: 1, px: '10px' }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            value={formValue.email}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Username"
            name="name"
            autoFocus
            value={formValue.name}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={formValue.password}
            onChange={handleChange}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, backgroundColor: '#00838f' }}
            onClick={handleSubmit}
          >
            Sign In
          </Button>
        </Box>
      </GlassCard>
    </Box>
  )
}

export default RegisterView
