// 'use client'
// import GlassCard from '@/components/GlassCard'
// import { Box, Typography } from '@mui/material'
// import React, { useEffect, useState } from 'react'
// import { getUserDetail } from '../../services'
// import SubHeadText from '@/components/SubHeadText'

// const Profile = () => {
//   const [dataUser, setDataUser] = useState()
//   useEffect(() => {
//     const getUser = async () => {
//       const res: any = await getUserDetail()
//       console.log(res)
//     }
//     getUser()
//   }, [])

//   return (
//     <Box
//       sx={{
//         paddingTop: '20px',
//         minHeight: '90vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//       }}
//     >
//       <GlassCard>
//         <SubHeadText>
//           Detail user
//         </SubHeadText>
//       </GlassCard>
//     </Box>
//   )
// }

// export default Profile
