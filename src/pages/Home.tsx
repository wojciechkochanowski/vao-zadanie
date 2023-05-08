import { Box, Button } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { useEffect } from 'react'

export default function Home() {  
  const user = useSelector((state: RootState) => state.auth)
  const navigate = useNavigate()
  useEffect(() => {
    if(!user){
      navigate('/login')
    }
  }, [user, navigate])
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'calc(100vh - 100px)' }}>
      <Button component={Link} to='/users' variant='contained' size='large' sx={{mr: 4}}>Użytkownicy</Button>
      <Button component={Link} to='/projects' variant='contained' size='large'>Projekty</Button>
    </Box>
  )
}
