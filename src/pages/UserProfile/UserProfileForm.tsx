import { useForm } from 'react-hook-form'
import { Box, Button } from '@mui/material'
import { TUser } from '../../types/types'
import FieldText from '../../components/form/FieldText'
import FieldSwitch from '../../components/form/FieldSwitch'

type TComponentProps = {
  user: TUser
}

export default function UserProfileForm({ user }: TComponentProps) {
  const { handleSubmit, control } = useForm({
    defaultValues: user
  })
  const onSubmit = (data: any) => {
    console.log(data)
  }
  return (
    <Box component='form' sx={{ my: 2, maxWidth: '300px' }}>
      <FieldText name='name' label='Nazwa' control={control}/>
      <FieldText name='email' label='Email' control={control}/>
      <FieldSwitch name='isAdmin' label='Admin' control={control}/>
      <Button onClick={handleSubmit(onSubmit)} variant='contained'>Zapisz</Button>
    </Box>
  )
}
