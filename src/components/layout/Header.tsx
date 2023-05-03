import { useState } from 'react'
import { AppBar, Toolbar, Box, Button, IconButton, Menu, MenuItem, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'
import Login from '../authentication/Login'

const pages = ['Użytkownicy', 'Projekty']

export default function Header() {
  const [activeMenu, setActiveMenu] = useState<null | HTMLElement>(null)
  const openMenu = (event: React.MouseEvent<HTMLElement>) => {
    setActiveMenu(event.currentTarget)
  }
  const menuClick = () => {
    setActiveMenu(null)
    //todo: redirect
  }
  return (
    <AppBar>
      <Toolbar sx={{px: 1}}>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {pages.map((page) => (
            <Button key={page} sx={{ color: 'white' }} onClick={menuClick}>
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
            {pages.map((page) => (
              <MenuItem key={page} onClick={menuClick}>
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
