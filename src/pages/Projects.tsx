import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper, Typography, Link } from '@mui/material'
import useProjects from '../hooks/useProjects'
import { formatDate } from '../utils'
import { Link as RouterLink } from 'react-router-dom'
import CenteredProgress from '../components/CenteredProgress'

export default function Projects() {
  const { isLoading, projects} = useProjects()
  if(isLoading){
    return <CenteredProgress/>
  }
  return (
    <>
      <Typography variant='h3' mb={2} component='h1' fontWeight={300}>Projekty</Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 450 }}>
          <TableHead>
            <TableRow>
              <TableCell>Nazwa</TableCell>
              <TableCell align="right">Data utworzenia</TableCell>
              <TableCell align="right">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {projects.map((project) => (
              <TableRow
                key={project.id}
                sx={{
                  '&:last-child td, &:last-child th': { border: 0 },
                  'a': { textDecoration: 'none' }
                }}
              >
                <TableCell component="th" scope="row">
                  <Link component={RouterLink} to={`/project/${project.id}`}>
                    {project.name}
                  </Link>
                </TableCell>
                <TableCell align="right">{formatDate(project.timestamp)}</TableCell>
                <TableCell align="right">{project.open ? 'Otwarty': 'Zamknięty'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
