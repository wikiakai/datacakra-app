import Typography from '@mui/material/Typography'

const SubHeadText = ({ children }: { children: React.ReactNode }) => {
  return (
    <Typography
      variant="h1"
      sx={{
        fontWeight: '500',
        color: '#212121',
        fontSize: '26px',
      }}
    >
      {children}
    </Typography>
  )
}

export default SubHeadText
