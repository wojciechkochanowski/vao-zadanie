import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IconButton, Menu, MenuItem, Typography } from "@mui/material"
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { unsetUser } from '../../redux/authentication'

export default function Login() {
  const user = useSelector((state: RootState) => state.auth)
  const dispatch = useDispatch()
  const [activeMenu, setActiveMenu] = useState<null | HTMLElement>(null)  
  const navigate = useNavigate()
  const openMenu = (event: React.MouseEvent<HTMLElement>) => {
    setActiveMenu(event.currentTarget)
  }
  const closeMenu = () => {
    setActiveMenu(null)
  }
  const logout = () => {
    dispatch(unsetUser())
    closeMenu()
    navigate('/login')
  }
  
  return (
    <>
      {user &&
        <Typography>{user.name}</Typography>
      }
      <IconButton
        color="inherit"
        aria-label="Zaloguj"
        size="medium"
        onClick={openMenu}
      >
        <AccountCircleIcon />
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
        {!user && 
          <MenuItem
            onClick={closeMenu}
            component={Link}
            to='/login'>
            <Typography textAlign="center">Zaloguj</Typography>
          </MenuItem>
        }
        { user &&
          <MenuItem
            onClick={logout}>
            <Typography textAlign="center">Wyloguj</Typography>
          </MenuItem>
        }
      </Menu>
    </>
  )
}
