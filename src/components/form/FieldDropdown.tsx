import { Control, Controller, FieldValues, FieldPath } from 'react-hook-form'
import { Box, MenuItem, Select, FormControl, InputLabel } from '@mui/material'

type TComponentProps<T extends FieldValues> = {
  name: FieldPath<T>,
  label: string,
  control: Control<T>,
  options: {
    label: string,
    value: number
  }[]
}

export default function FieldDropdown<T extends FieldValues>({ name, label, control, options }: TComponentProps<T>) {
  const generateOptions = () => {
    return options.map((option) => {
      return (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      )
    })
  }

  return (
    <Box pb={2}>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value }}) => (
          <FormControl>
            <InputLabel id={`select-${name}-label`}>{label}</InputLabel>
            <Select
              label={label}
              value={value}
              onChange={onChange}
              fullWidth={true}
            >
              {generateOptions()}
            </Select>
          </FormControl>
        )}
      />
    </Box>
  )
}
