'use client'
import GlassCard from '@/components/GlassCard'
import { Box, Button, Dialog, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const RedirectPage = () => {
  const router = useRouter()
  const [open, setOpen] = useState(true)
  const handleRedirect = () => {
    setOpen(false)
    router.push('/login')
  }
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100vw',
        height: '95vh',

        background: 'linear-gradient(to right, #ffd194, #70e1f5)',
      }}
    >
      <GlassCard>
        <Typography sx={{ mb: '24px' }}>Please login first!</Typography>
        <Button onClick={handleRedirect} variant="contained">
          Login
        </Button>
      </GlassCard>
    </Box>
  )
}

export default RedirectPage
