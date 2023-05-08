import { useForm } from 'react-hook-form'
import { Box, Button } from '@mui/material'
import { useSelector } from 'react-redux'
import FieldText from '../../components/form/FieldText'
import { formatDate } from '../../utils'
import FieldDropdown from '../../components/form/FieldDropdown'
import { TProject } from '../../types/types'
import { useSaveProjectDetails } from '../../hooks/useProjectDetails'
import { useEffect } from 'react'
import { RootState } from '../../redux/store'

type TComponentProps = {
  project: TProject
}

export default function ProjectDetailsForm({ project }: TComponentProps) {
  const user = useSelector((state: RootState) => state.auth)
  const { handleSubmit, control, reset } = useForm({
    defaultValues: project
  })
  const { mutate } = useSaveProjectDetails()
  useEffect(() => {
    reset(project)
  }, [project, reset])
  const onSubmit = (data: TProject) => {
    mutate(data)
  }
  const handleClose = () => {
    mutate({
      ...project,
      open: false
    })
  }
  return (
    <Box component='form' sx={{ my: 2, maxWidth: '300px' }}>
      <FieldText 
        name='name' 
        label='Nazwa' 
        control={control} 
        readOnly={!user?.isAdmin} 
      />
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
        readOnly={!user?.isAdmin}
      />
      { user?.isAdmin &&
        <>
          <Button onClick={handleSubmit(onSubmit)} variant='contained'>Zapisz</Button>
          { project.open &&
            <Button onClick={handleClose} variant='outlined' sx={{ ml: 2 }}>Zamknij projekt</Button>
          }
        </>
      }
    </Box>
  )
}
