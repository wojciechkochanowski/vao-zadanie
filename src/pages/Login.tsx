import { Box, Button, Divider, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
import { useDispatch } from "react-redux"
import jwt from 'jwt-decode'
import FieldText from '../components/form/FieldText'
import { useEffect, useRef } from 'react'
import { addAlert } from '../redux/alert'
import { TLoginData } from '../types/types'
import { useSignIn } from '../hooks/useSignIn'
import { GoogleLogin   } from '@react-oauth/google'

export default function Login() {  
  const doSignIn = useSignIn()
  const dispatch = useDispatch()
  const { handleSubmit, control } = useForm<TLoginData>({
    defaultValues: { email: '', password: '' }
  })
  const loginRef = useRef<HTMLElement>(null)

  useEffect(() => {
    loginRef.current?.focus()
  }, [])
  
  const onSubmit = (data: TLoginData) => {
    doSignIn(data)
  }
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>    
      <Typography variant='h2' my={6}>Zaloguj się</Typography>
      <Box component='form' sx={{ my: 2, maxWidth: '300px', width: '100%' }}>
        <FieldText inputRef={loginRef} name='email' label='Email' control={control}/>
        <FieldText name='password' label='Hasło' type='password' control={control}/>
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Button onClick={handleSubmit(onSubmit)} variant='contained' sx={{width: '100%'}}>Zaloguj</Button>
          <Divider sx={{my: 1}}/>
          <GoogleLogin
            onSuccess={credentialResponse => {
              dispatch(addAlert({type: 'success', message: 'Zalogowano'}))
              const userData: any = jwt(credentialResponse.credential || '')
              console.log(userData)
              doSignIn({
                email: userData.email,
                password: '',
                oauth: true
              })
            }}
            onError={() => {
              dispatch(addAlert({type: 'error', message: 'Nie zalogowano'}))
            }}
            useOneTap
          />
        </Box>
      </Box>
    </Box>
  )
}
