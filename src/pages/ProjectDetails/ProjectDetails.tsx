import { Breadcrumbs, Typography, Link, Paper, Accordion, AccordionSummary, AccordionDetails, Divider } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useParams, Link as RouterLink } from 'react-router-dom'
import useProjectDetails from '../../hooks/useProjectDetails'
import CenteredProgress from '../../components/CenteredProgress'
import Users from '../Users'
import ProjectDetailsForm from './ProjectDetailsForm'

export default function ProjectDetails() {
  const { projectId } = useParams()
  const { isLoading, project } = useProjectDetails(projectId)
  if (isLoading || !project) {
    return <CenteredProgress/>
  }
  return (
    <>
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
        <ProjectDetailsForm project={project}/>
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
    </>
  )
}
