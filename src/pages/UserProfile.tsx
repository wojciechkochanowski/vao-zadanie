import { useParams, Link as RouterLink } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Breadcrumbs, Typography, Link, Container, Paper, Box, Button, Divider, Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import FieldText from '../components/form/FieldText'
import CenteredProgress from '../components/CenteredProgress'
import useUserDetails from '../hooks/useUserDetails'
import FieldSwitch from '../components/form/FieldSwitch'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Evaluations from './Evaluations'


export default function UserProfile() {
  const { userId } = useParams()
  const { handleSubmit, control, reset } = useForm()
  const user = useUserDetails(userId, reset)
  if (!user) {
    return <CenteredProgress/>
  }
  const onSubmit = (data: any) => {
    console.log(data)
  }
  return (
    <Container>
      <Breadcrumbs>
        <Link 
          component={RouterLink}
          to={'/users'}
          underline="hover"
        >
          Użytkownicy
        </Link>  
        <Typography>{ user.name }</Typography>
      </Breadcrumbs>
      <Paper sx={{ marginTop: 3, p: 2 }}>
        <Box component='form' sx={{ my: 2, maxWidth: '300px' }}>
          <FieldText name='name' label='Nazwa' control={control}/>
          <FieldText name='email' label='Email' control={control}/>
          <FieldSwitch name='isAdmin' label='Admin' control={control}/>
          <Button onClick={handleSubmit(onSubmit)} variant='contained'>Zapisz</Button>
        </Box>
        <Divider/>
        <Accordion disableGutters elevation={0}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="users"
            id="users"
            sx={{ p: 0 }}
          >
            <Typography variant='h6'>Oceny</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ px: 0 }}>
            <Evaluations userId={user.id}/>
          </AccordionDetails>
        </Accordion>
      </Paper>
    </Container>
  )
}
