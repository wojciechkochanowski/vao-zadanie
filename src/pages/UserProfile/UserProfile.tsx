import { useParams, Link as RouterLink } from 'react-router-dom'
import { Breadcrumbs, Typography, Link, Container, Paper, Divider, Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import CenteredProgress from '../../components/CenteredProgress'
import useUserDetails from '../../hooks/useUserDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Evaluations from '../Evaluations'
import UserProfileForm from './UserProfileForm'


export default function UserProfile() {
  const { userId } = useParams()
  const { isLoading, user } = useUserDetails(userId)
  if (isLoading || !user) {
    return <CenteredProgress/>
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
        <UserProfileForm user={user}/>
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
