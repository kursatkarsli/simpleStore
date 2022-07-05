import React, { useContext, useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { CustomTextField } from '../assets/materialUi/CustomFormTextField'
import { CustomCard } from '../assets/materialUi/CustomCard'
import { CustomContainer } from '../assets/materialUi/CustomContainer'
import { addToLocalStorage } from './helper/addToLocalStorage'
import SendIcon from '@mui/icons-material/Send'
import { Grid, Button, CardHeader } from '@mui/material'
import SnackBar from './common/SnackBar'
import { getDataFromLocalStorage } from './helper/getFromLocalStorage'
import { LoginContext } from '../context/LoginContext'
import HomeIcon from '@mui/icons-material/Home'

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const { t } = useTranslation()
  const { setLogin } = useContext(LoginContext)

  const handleCheckUser = (data) => {
    const user = getDataFromLocalStorage('user')
    if (user && user.email === data.email && user.password === data.password) {
      addToLocalStorage('isUserLogIn', true)
      setLogin(true)
      navigate('/')
    } else setOpen(true)
  }
  return (
    <CustomContainer container style={{ padding: 30 }}>
      <CustomCard>
        <CardHeader title={t('Login')} />

        <form onSubmit={handleSubmit((data) => handleCheckUser(data))}>
          <Grid item sm={12}>
            <CustomTextField
              {...register('email', {
                required: true,
                pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
              })}
              placeholder='Email'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item sm={12}>
            {errors.email?.type === 'required' && (
              <span style={{ color: 'red' }}>
                {t('Email field is required')}
              </span>
            )}
          </Grid>
          <Grid item sm={12}>
            {errors.email?.type === 'pattern' && (
              <span style={{ color: 'red' }}>
                {t('Please provide your email correct pattern')}
              </span>
            )}
          </Grid>
          <Grid item sm={12}>
            <CustomTextField
              value={password}
              {...register('password', {
                required: true,
              })}
              placeholder={t('Password')}
              type='password'
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
          <Grid item sm={12}>
            {errors.email?.type === 'required' && (
              <span style={{ color: 'red' }}>{t('Password is required')}</span>
            )}
          </Grid>
          <Button
            variant='contained'
            type='submit'
            endIcon={<SendIcon />}
            sx={{ marginTop: '10px' }}
          >
            {t('Login')}
          </Button>{' '}
          <Button
            variant='contained'
            color='secondary'
            type='button'
            endIcon={<HomeIcon />}
            sx={{ marginTop: '10px' }}
            onClick={() => navigate('/')}
          >
            {t('Main Page')}
          </Button>{' '}
        </form>
      </CustomCard>
      <SnackBar open={open} setOpen={setOpen} />
    </CustomContainer>
  )
}

export default Login
