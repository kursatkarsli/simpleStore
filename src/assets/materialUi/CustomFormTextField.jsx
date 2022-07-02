import { TextField } from '@mui/material'
import { styled } from '@mui/system'

export const CustomTextField = styled(TextField)(({ theme }) => ({
  color: 'black',
  backgroundColor: 'white',
  '::placeholder': { backgroundColor: 'white', color: 'black' },
  borderRadius: '10px',
  border: '1px solid black',
  marginBlock: '10px',
}))
