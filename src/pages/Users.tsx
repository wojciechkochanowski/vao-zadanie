
import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper, Typography, Link } from '@mui/material'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings'
import useUsers from '../hooks/useUsers'
import { Link as RouterLink } from 'react-router-dom'
import CenteredProgress from '../components/CenteredProgress'

type TComponentProps = {
  projectId?: number
}

export default function Users({ projectId }: TComponentProps) {
  const { isLoading, users } = useUsers(projectId)
  if(isLoading){
    return <CenteredProgress/>
  }
  return (
    <>
      {!projectId &&
        <Typography variant='h3' mb={2} component='h1' fontWeight={300}>Użytkownicy</Typography>
      }
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 450 }}>
          <TableHead>
            <TableRow>
              <TableCell>Nazwa</TableCell>
              <TableCell align="right">email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow
                key={user.id}
                sx={{
                  '&:last-child td, &:last-child th': { border: 0 },
                  'a': { textDecoration: 'none' }
                }}
              >
                <TableCell component="th" scope="row">
                  <Link component={RouterLink} to={`/user/${user.id}`}>
                    {user.name}
                    {user.isAdmin && <AdminPanelSettingsIcon 
                                       fontSize='small'
                                       titleAccess='admin'
                                       sx={{ ml: 1, verticalAlign: 'sub' }}
                                     />}
                  </Link>
                </TableCell>
                <TableCell align="right">{user.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
