import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'

export class ListItem {
  key: string
  value: string

  constructor(key: string, value: string) {
    this.key = key
    this.value = value
  }
}

interface SelectProps {
    id: string
    title: string
    value: string
    required?: boolean
    items: ListItem[] | undefined
    includeEmpty?: boolean
    onChange: any
}

const SelectList = ({onChange, id, title, value, items, required = false, includeEmpty = true}: SelectProps) => {
  return (
    <FormControl fullWidth sx={{ mt: 2 }}>
      <InputLabel 
       required={required}
       id={`${id}-select-label`}
      >
        {title}
      </InputLabel>
      <Select
        labelId={`${id}-select-label`}
        id={`${id}-select`}
        value={value}
        label={title}
        onChange={onChange}
      >
        {
          includeEmpty &&
            <MenuItem key="" value="">...</MenuItem>
        }
        {
          items?.map(item => 
            <MenuItem key={item.key} value={item.key}>{item.value}</MenuItem>
          )
        }
      </Select>
    </FormControl>
  )
}

export default SelectList
