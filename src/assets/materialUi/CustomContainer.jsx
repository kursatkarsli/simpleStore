import { Grid } from '@mui/material'
import { styled } from '@mui/system'

export const CustomContainer = styled(Grid)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '84vh',
}))
