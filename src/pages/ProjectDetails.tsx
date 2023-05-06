import { useForm } from 'react-hook-form'
import { Breadcrumbs, Typography, Link, Container, Paper, Accordion, AccordionSummary, AccordionDetails, Divider, Box, Button } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useParams, Link as RouterLink } from 'react-router-dom'
import useProjectDetails from '../hooks/useProjectDetails'
import CenteredProgress from '../components/CenteredProgress'
import FieldText from '../components/form/FieldText'
import { formatDate } from '../utils'
import Users from './Users'
import FieldDropdown from '../components/form/FieldDropdown'

export default function ProjectDetails() {
  const { projectId } = useParams()
  const { handleSubmit, control, reset } = useForm()
  const project = useProjectDetails(projectId, reset)
  if (!project) {
    return <CenteredProgress/>
  }
  const onSubmit = (data: any) => {
    console.log(data)
  }
  const handleClose = () => {
    console.log('close')
  }
  return (
    <Container>
      <Breadcrumbs>
        <Link 
          component={RouterLink}
          to={'/projects'}
          underline="hover"
        >
          Projekty
        </Link>  
        <Typography>{ project.name }</Typography>
      </Breadcrumbs>
      <Paper sx={{ marginTop: 3, p: 2 }}>
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
            format={value => formatDate(parseInt(value))}
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
        <Divider/>
        <Accordion disableGutters elevation={0}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="users"
            id="users"
            sx={{ p: 0 }}
          >
            <Typography variant='h6'>Użytkownicy</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ px: 0 }}>
            <Users projectId={project.id}/>
          </AccordionDetails>
        </Accordion>
      </Paper>
    </Container>
  )
}
