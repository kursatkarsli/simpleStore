import { Link } from '@mui/material'
import { styled } from '@mui/system'

export const StyledDiv = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#4D4C7D',
  color: 'white',
  padding: '10px',
  position: 'sticky',
  zIndex: '3',
  top: '0',
}))
export const StyledContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  textAlign: 'center',
}))
export const StyledLink = styled(Link)(() => ({
  display: 'flex',
  alignItems: 'center',
  color: '#E9D5CA',
}))
