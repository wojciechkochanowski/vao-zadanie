import Box from '@mui/material/Box'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import { Container } from '@mui/material'

export default function Layout() {

  return (
    <Box component="div" sx={{display: 'flex'}}>
      <Header/>
      <Box 
        component="main"
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh'
        }}
      >
        <Box 
          component="div" 
          className="appBarSpacer"
          sx={theme => theme.mixins.toolbar}
        />
        <Box 
          component="div"
          className="content"
          sx={{
            flexGrow: 1,            
            position: 'relative'
          }}
        >
          <Container sx={{pt: 4}}>
            <Outlet/>
          </Container>
        </Box>
      </Box>
    </Box>
  )
}