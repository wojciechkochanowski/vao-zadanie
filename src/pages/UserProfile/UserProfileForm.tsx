import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { Box, Button } from '@mui/material'
import { TUser } from '../../types/types'
import FieldText from '../../components/form/FieldText'
import FieldSwitch from '../../components/form/FieldSwitch'
import { useSaveUserDetails } from '../../hooks/useUserDetails'
import { RootState } from '../../redux/store'

type TComponentProps = {
  user: TUser
}

export default function UserProfileForm({ user }: TComponentProps) {
  const currentUser = useSelector((state: RootState) => state.auth)
  const { handleSubmit, control, reset } = useForm({
    defaultValues: user
  })
  const { mutate } = useSaveUserDetails()
  useEffect(() => {
    reset(user)
  }, [user, reset])
  const onSubmit = (data: TUser) => {
    mutate(data)
  }
  return (
    <Box component='form' sx={{ my: 2, maxWidth: '300px' }}>
      <FieldText name='name' label='Nazwa' control={control} readOnly={!currentUser?.isAdmin}/>
      <FieldText name='email' label='Email' control={control} readOnly={!currentUser?.isAdmin}/>
      <FieldSwitch name='isAdmin' label='Admin' control={control} disabled={!currentUser?.isAdmin}/>
      {currentUser?.isAdmin &&
        <Button onClick={handleSubmit(onSubmit)} variant='contained'>Zapisz</Button>
      }
    </Box>
  )
}
