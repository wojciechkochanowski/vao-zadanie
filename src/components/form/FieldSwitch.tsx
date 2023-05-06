import { Control, Controller, FieldValues, FieldPath } from 'react-hook-form'
import { Switch, Box, FormControlLabel } from '@mui/material'

type TComponentProps<T extends FieldValues> = {
  name: FieldPath<T>,
  label: string,
  control: Control<T>,
}

export default function FieldSwitch<T extends FieldValues>({ name, label, control }: TComponentProps<T>) {
  return (
    <Box pb={2}>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value }}) => (
          <FormControlLabel control={<Switch checked={value} onChange={onChange} />} label={label} />
        )}
      />
    </Box>
  )
}
