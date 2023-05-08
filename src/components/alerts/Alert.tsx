import { memo, useState } from 'react'
import { Fade, Alert } from '@mui/material'
import { TAlert } from '../../types/types'

const AlertBox = ({ alert }: { alert: TAlert }) => {  
  const [visible, setVisible] = useState(true)

  return(
    <Fade
      in={visible}
      timeout={{ enter: 500, exit: 500 }}
      addEndListener={() => {
        setTimeout(() => {
          setVisible(false)
        }, 2500)
      }}
      >
      <Alert severity={alert.type} variant="standard" className="alert">
        {alert.message}
      </Alert>
    </Fade>
  )
}
export default memo(AlertBox)