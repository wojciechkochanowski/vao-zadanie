import { Box, Typography } from '@mui/material'

export default function NotFound() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100%'
      }}
    >
      <Typography variant="h1">
        404
      </Typography>
    </Box>
  )
}
