import { styled } from '@mui/system'
import { CardMedia } from '@mui/material'
export const StyledCardImage = styled(CardMedia)(({ theme }) => ({
  objectFit: 'contain',
  marginTop: '10px',
}))
