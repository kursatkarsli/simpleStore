import { TextField } from '@mui/material'
import { styled } from '@mui/system'

export const CustomTextField = styled(TextField)(({ theme }) => ({
  color: 'white',
  backgroundColor: '#9c9c9c',
  '::placeholder': { backgroundColor: 'white' },
  borderRadius: '10px',
}))
