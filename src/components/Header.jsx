import { useContext, useEffect, useState } from 'react'
import { TranslationContext } from '../context/TranslationContext'
import { Button, Link, Menu, MenuItem, Typography } from '@mui/material'
import {
  StyledDiv,
  StyledContainer,
  StyledLink,
} from '../assets/materialUi/Header.jsx'
import { SelectBox } from '../assets/materialUi/SelectBox.jsx'
import { useTranslation } from 'react-i18next'
import LoginIcon from '@mui/icons-material/Login'
import { ShoppingBasket } from '@mui/icons-material'
import StorefrontIcon from '@mui/icons-material/Storefront'
import BadgeIcon from '@mui/icons-material/Badge'
import { getDataFromLocalStorage } from './helper/getFromLocalStorage'
import { LoginContext } from '../context/LoginContext'
import { Navigate } from 'react-router-dom'
import i18next from 'i18next'

const Header = () => {
  const [open, setIsOpen] = useState(false)
  const [language, setLanguage] = useState('tr')
  const { t } = useTranslation()
  const { handleChangeLanguage } = useContext(TranslationContext)
  const { login, setLogin } = useContext(LoginContext)

  const handleLogOut = () => {
    localStorage.removeItem('isUserLogIn')
    setLogin(false)
  }

  useEffect(() => {
    if (getDataFromLocalStorage('language'))
      setLanguage(getDataFromLocalStorage('language'))
    i18next.changeLanguage(getDataFromLocalStorage('language'))
  }, [])
  return (
    <StyledDiv className='header'>
      <StyledContainer className='header_logo'>
        <StyledLink underline='none' href='/'>
          <StorefrontIcon
            fontSize='large'
            className='header_logo'
            sx={{ marginInline: '20px' }}
          />
          <h2 className='header_logo_title'>eShop</h2>
        </StyledLink>
      </StyledContainer>

      <StyledContainer
        className='header_nav'
        sx={{ display: { lg: 'flex', xs: 'none' } }}
      >
        {' '}
        <SelectBox
          id='select'
          value={language}
          onChange={(e) => {
            handleChangeLanguage(e.target.value)
            setLanguage(e.target.value)
          }}
          variant='outlined'
        >
          <MenuItem value='tr' selected>
            TR
          </MenuItem>
          <MenuItem value='en'>EN</MenuItem>
        </SelectBox>
        {!login && (
          <>
            <Link
              underline='none'
              href='/login'
              color='white'
              sx={{ ':hover': { color: 'greenyellow' } }}
            >
              {' '}
              <Typography
                className='nav_item'
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Typography variant='span' sx={{ fontSize: '.7rem' }}>
                  <LoginIcon />
                </Typography>
                <Typography
                  variant='span'
                  sx={{ fontSize: '.8rem', textAlign: 'center' }}
                >
                  {t('Sign In')}
                </Typography>
              </Typography>
            </Link>
            <Link
              underline='none'
              href='/register'
              color='white'
              sx={{ ':hover': { color: 'greenyellow' } }}
            >
              {' '}
              <Typography
                className='nav_item'
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  marginInline: '20px',
                }}
              >
                <Typography variant='span' sx={{ fontSize: '.7rem' }}>
                  <BadgeIcon />
                </Typography>
                <Typography
                  variant='span'
                  sx={{ fontSize: '.8rem', textAlign: 'center' }}
                >
                  {t('Sign Up')}
                </Typography>
              </Typography>
            </Link>
          </>
        )}
        {login && (
          <>
            <Link
              underline='none'
              href='/library'
              color='white'
              sx={{ ':hover': { color: 'greenyellow' } }}
            >
              <Typography
                className='nav_item'
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  marginRight: '1rem',
                  alignItems: 'center',
                }}
              >
                {' '}
                <ShoppingBasket fontSize='medium' />
                <span>{t('My Library')}</span>
              </Typography>
            </Link>
            <Link
              underline='none'
              href='/'
              onClick={handleLogOut}
              color='white'
              sx={{ ':hover': { color: 'greenyellow' } }}
            >
              <Typography
                className='nav_item'
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  marginRight: '1rem',
                  alignItems: 'center',
                }}
              >
                {' '}
                <LoginIcon fontSize='medium' />
                <span>{t('Log Out')}</span>
              </Typography>
            </Link>
          </>
        )}
      </StyledContainer>
      {getDataFromLocalStorage('isUserLogIn') === true ? (
        <StyledContainer
          sx={{ display: { lg: 'none', xs: 'flex' }, position: 'relative' }}
          onClick={() => setIsOpen(!open)}
        >
          <SelectBox
            id='select'
            value={language}
            onChange={(e) => {
              handleChangeLanguage(e.target.value)
              setLanguage(e.target.value)
            }}
            variant='outlined'
          >
            <MenuItem value='tr' selected>
              TR
            </MenuItem>
            <MenuItem value='en'>EN</MenuItem>
          </SelectBox>
          <Button
            id='demo-positioned-button'
            aria-controls={open ? 'demo-positioned-menu' : undefined}
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
          ></Button>

          <Menu
            id='demo-positioned-menu'
            aria-labelledby='demo-positioned-button'
            open={open}
            onClose={(e) => setIsOpen(false)}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <MenuItem
              onClick={() => {
                setIsOpen(false)
                ;<Navigate to='/library' />
              }}
            >
              {t('My library')}
            </MenuItem>
            <MenuItem onClick={() => handleLogOut()}>{t('Log Out')}</MenuItem>
          </Menu>
        </StyledContainer>
      ) : (
        <StyledContainer
          sx={{ display: { lg: 'none', xs: 'flex' }, position: 'relative' }}
          onClick={() => setIsOpen(!open)}
        >
          <SelectBox
            id='select'
            value={language}
            onChange={(e) => {
              handleChangeLanguage(e.target.value)
              setLanguage(e.target.value)
            }}
            variant='outlined'
          >
            <MenuItem value='tr' selected>
              TR
            </MenuItem>
            <MenuItem value='en'>EN</MenuItem>
          </SelectBox>
          <Button
            id='demo-positioned-button'
            aria-controls={open ? 'demo-positioned-menu' : undefined}
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
          ></Button>
          <Menu
            id='demo-positioned-menu'
            aria-labelledby='demo-positioned-button'
            open={open}
            onClose={(e) => setIsOpen(false)}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <MenuItem onClick={() => setIsOpen(false)}>
              <Link underline='none' href='/login'>
                {t('Sign In')}
              </Link>
            </MenuItem>
            <MenuItem onClick={() => setIsOpen(false)}>
              {' '}
              <Link underline='none' href='/register'>
                {t('Sign Up')}
              </Link>
            </MenuItem>
          </Menu>
        </StyledContainer>
      )}
    </StyledDiv>
  )
}
export default Header
