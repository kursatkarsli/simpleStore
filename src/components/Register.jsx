import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { CustomTextField } from '../assets/materialUi/CustomFormTextField'
import { CustomCard } from '../assets/materialUi/CustomCard'
import { CustomContainer } from '../assets/materialUi/CustomContainer'
import { addToLocalStorage } from './helper/addToLocalStorage'
import SendIcon from '@mui/icons-material/Send'
import { Grid, Button, Typography, CardHeader } from '@mui/material'

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const { t } = useTranslation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const handleSaveUserInfo = (data) => {
    addToLocalStorage('user', data)
    navigate('/login')
  }
  return (
    <CustomContainer container style={{ padding: 30 }}>
      <CustomCard>
        <CardHeader title={t('Register')} />

        <form onSubmit={handleSubmit((data) => handleSaveUserInfo(data))}>
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
              sx={{ background: 'white' }}
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
            {t('Register')}
          </Button>{' '}
        </form>
      </CustomCard>
    </CustomContainer>
  )
}

export default RegisterPage
