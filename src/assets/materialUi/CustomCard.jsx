import { styled } from '@mui/system'
import { Card } from '@mui/material'
export const CustomCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '50px',
}))
