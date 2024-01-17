import Typography from '@mui/material/Typography'

const HeadText = ({ children }: { children: React.ReactNode }) => {
  return (
    <Typography
      variant="h1"
      sx={{
        fontWeight: '800',
        lineHeight: '1.15',
        color: '#0277bd',
        fontSize: '60px',
      }}
    >
      {children}
    </Typography>
  )
}

export default HeadText
