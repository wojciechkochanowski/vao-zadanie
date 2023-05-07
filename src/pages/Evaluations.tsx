import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper, Link } from '@mui/material'
import useEvaluations from '../hooks/useEvaluations'
import { formatDate } from '../utils'
import { Link as RouterLink } from 'react-router-dom'
import CenteredProgress from '../components/CenteredProgress'

type TComponentProps = {
  userId?: number
}

export default function Evaluations({ userId }: TComponentProps) {
  const { isLoading, evaluations } = useEvaluations(userId)
  if(isLoading){
    return <CenteredProgress/>
  }
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 450 }}>
          <TableHead>
            <TableRow>
              <TableCell>Projekt</TableCell>
              <TableCell align="right">Data</TableCell>
              <TableCell align="right">Ocena</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {evaluations.map((evaluation) => (
              <TableRow
                key={evaluation.id}
                sx={{
                  '&:last-child td, &:last-child th': { border: 0 },
                  'a': { textDecoration: 'none' }
                }}
              >
                <TableCell component="th" scope="row">
                  <Link component={RouterLink} to={`/evaluation/${evaluation.id}`}>
                    {evaluation.projectName}
                  </Link>
                </TableCell>
                <TableCell align="right">{formatDate(evaluation.timestamp)}</TableCell>
                <TableCell align="right">{evaluation.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
