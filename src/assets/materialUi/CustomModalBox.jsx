import { Box } from '@mui/material'
import { styled } from '@mui/system'

export const CustomBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: '95%',
}))
