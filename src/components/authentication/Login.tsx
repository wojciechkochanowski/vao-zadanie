
import { IconButton } from "@mui/material"
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { useGoogleLogin } from '@react-oauth/google'

export default function Login() {
  
  const login = useGoogleLogin({
    onSuccess: () => {
      console.log('login success')
    }
  })
  
  return (
    <IconButton
      color="inherit"
      aria-label="Zaloguj"
      size="medium"
      onClick={() => login()}
    >
      <AccountCircleIcon />
    </IconButton>
  )
}
