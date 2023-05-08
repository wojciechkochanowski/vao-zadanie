import { useEffect, useState } from 'react'
import { useSelector } from "react-redux"
import { Box } from '@mui/material'
import { RootState } from '../../redux/store'
import { TAlert } from '../../types/types'
import AlertBox from './Alert'

export default function AlertHandler() {
  const alerts = useSelector((state: RootState) => state.alerts)
  const [alert, setAlert] = useState<TAlert | null>(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (alerts.length > 0) {
      setAlert(alerts[alerts.length - 1])
      setShow(true)
      setTimeout(() => {
        setShow(false)
      }, 3000)
    }
  }, [alerts])
  
  return (show && alert) ? (
    <Box sx={{ position: 'absolute', right: 20, top: 20, pointerEvents: 'none' }}>
      <AlertBox alert={alert}/>
    </Box>
  ) : null
}
