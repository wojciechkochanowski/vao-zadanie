import { ReactNode } from 'react'
import Box from '@mui/material/Box'
import Header from './Header'

export default function Layout({children}: { children?: ReactNode }) {

  return (
    <Box component="div" sx={{display: 'flex'}}>
      <Header/>
      <Box 
        component="main"
        sx={{
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
          display: 'flex',
          flexDirection: 'column'
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
        >
          { children }
        </Box>
      </Box>
    </Box>
  )
}