'use client'

import Navbar from '@/components/Navbar'
import { Box } from '@mui/material'
import styles from './page.module.css'
import { useRouter } from 'next/navigation'
import checkAuth from '@/helper/useAuth'
import RedirectPage from '@/lib/main/Redirect'

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { accessToken, userId } = checkAuth()

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        minHeight: '100vh',
      }}
      id="protected-layout"
    >
      {!accessToken && !userId ? (
        <RedirectPage />
      ) : (
        <>
          <Navbar />
          <main className={styles.main}>{children}</main>
        </>
      )}
    </Box>
  )
}
