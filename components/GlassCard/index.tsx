import { Box } from '@mui/material'
import React from 'react'

const GlassCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '500px',
        minHeight: '300px',
        background: 'rgba(236, 236, 236, 0.18)',
        borderRadius: '16px',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(5px)',
        border: '1px solid rgba(236, 236, 236, 0.3)',
        color: '#fff',
      }}
    >
      {children}
    </Box>
  )
}

export default GlassCard
