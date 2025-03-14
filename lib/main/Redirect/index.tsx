'use client'
import GlassCard from '@/components/GlassCard'
import { Box, Button, Dialog,  MenuItem, Select, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const RedirectPage = () => {
  const router = useRouter()
  const [open, setOpen] = useState(true)
   const [counter, setCounter] = useState(0);
  const [limit, setLimit] = useState(50);

  const handleRedirect = () => {
    setOpen(false)
    router.push('/login')
  }

  const handleClick = () => {

    window.open("https://www.effectiveratecpm.com/qyszu9ib?key=d2631095e677c94c8449218b2aedb31b", "_blank");
    setCounter((prev) => {
      const newCount = prev + 1;
      return newCount;
    });
  };
  
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100vw',
        height: '100vh',

        background: 'linear-gradient(to right, #ffd194, #70e1f5)',
      }}
    >
      <GlassCard>
        <Typography sx={{ mb: '24px' }}>Click count: {counter}</Typography>
        <a href="https://www.sigmatraffic.com/blog/10-tips-to-reduce-website-bounce-rate-what-s-the-average-bounce-rate?ref=307049">Reduce bounce rates</a>

        <Button onClick={handleClick} variant="contained" disabled={counter >= limit}>
          Login
        </Button>
        <Select
        value={limit}
        onChange={(e) => setLimit(Number(e.target.value))}
        style={{ marginTop: "10px" }}
      >
        {[50, 80, 100, 120].map((value) => (
          <MenuItem key={value} value={value}>
            {value}
          </MenuItem>
        ))}
      </Select>
      </GlassCard>
    </Box>
  )
}

export default RedirectPage
