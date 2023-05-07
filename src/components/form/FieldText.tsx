import { Control, Controller, FieldValues, FieldPath, PathValue, Path } from 'react-hook-form'
import { TextField, Box } from '@mui/material'

type TComponentProps<T extends FieldValues> = {
  name: FieldPath<T>,
  label: string,
  control: Control<T>,
  readOnly?: boolean,
  format?: (value: PathValue<T, Path<T>>) => PathValue<T, Path<T>>
}

export default function FieldText<T extends FieldValues>({ name, label, control, readOnly = false, format = v => v }: TComponentProps<T>) {
  const inputProps = { readOnly }
  return (
    <Box pb={2}>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value }}) => (
          <TextField
            label={label}
            onChange={onChange}
            value={format(value) || ''}
            fullWidth={true}
            inputProps={inputProps}
          />
        )}
      />
    </Box>
  )
}
