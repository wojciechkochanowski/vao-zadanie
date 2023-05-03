import { useState } from 'react'
import { AppBar, Toolbar, Box, Button, IconButton, Menu, MenuItem, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'
import Login from '../authentication/Login'
import { Link } from 'react-router-dom'

const pages = {
  '/users': 'Użytkownicy', 
  '/projects': 'Projekty'
}

export default function Header() {
  const [activeMenu, setActiveMenu] = useState<null | HTMLElement>(null)
  const openMenu = (event: React.MouseEvent<HTMLElement>) => {
    setActiveMenu(event.currentTarget)
  }
  const closeMenu = () => {
    setActiveMenu(null)
  }
  return (
    <AppBar>
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {Object.entries(pages).map(([link, page]) => (
            <Button 
              key={page} 
              sx={{ color: 'white' }} 
              onClick={closeMenu}
              component={Link}
              to={link}>
              {page}
            </Button>
          ))}
        </Box>
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={openMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={!!activeMenu}
            anchorEl={activeMenu}
            onClose={() => setActiveMenu(null)}
          >
            {Object.entries(pages).map(([link, page]) => (
              <MenuItem 
                key={page} 
                onClick={closeMenu}
                component={Link}
                to={link}>
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <Login/>
      </Toolbar>
    </AppBar>
  )
}
