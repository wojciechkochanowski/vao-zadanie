import { useForm } from 'react-hook-form'
import { Box, Button } from '@mui/material'
import FieldText from '../../components/form/FieldText'
import { formatDate } from '../../utils'
import FieldDropdown from '../../components/form/FieldDropdown'
import { TProject } from '../../types/types'

type TComponentProps = {
  project: TProject
}

export default function ProjectDetailsForm({ project }: TComponentProps) {
  const { handleSubmit, control } = useForm({
    defaultValues: project
  })
  const onSubmit = (data: any) => {
    console.log(data)
  }
  const handleClose = () => {
    console.log('close')
  }
  return (
    <Box component='form' sx={{ my: 2, maxWidth: '300px' }}>
      <FieldText name='name' label='Nazwa' control={control}/>
      <FieldText 
        name='open' 
        label='Status'
        control={control} 
        readOnly={true} 
        format={value => (value ? 'Otwarty' : 'Zamknięty')}
      />
      <FieldText 
        name='timestamp' 
        label='Data utworzenia' 
        control={control} 
        readOnly={true} 
        format={value => formatDate(parseInt(value+''))}
      />
      <FieldDropdown
        name='weight'
        label='Priorytet'
        control={control}
        options={[
          { label: 'Wysoki', value: 3 },
          { label: 'Normalny', value: 2 },
          { label: 'Niski', value: 1 },
        ]}
      />
      <Button onClick={handleSubmit(onSubmit)} variant='contained'>Zapisz</Button>
      { project.open &&
        <Button onClick={handleClose} variant='outlined' sx={{ ml: 2 }}>Zamknij projekt</Button>
      }
    </Box>
  )
}
