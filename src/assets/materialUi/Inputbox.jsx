import { TextField } from '@mui/material'
import { styled } from '@mui/system'

export const CustomTextField = styled(TextField)(({ theme }) => ({
  color: 'white',
  backgroundColor: 'rgb(156 156 156 / 38%)',
  '::placeholder': { backgroundColor: 'white' },
  borderRadius: '10px',
}))
