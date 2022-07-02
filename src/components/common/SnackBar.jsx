import { Alert, Snackbar } from '@mui/material'
import { t } from 'i18next'
import React, { useState } from 'react'

function SnackBar(props) {
  const { open, setOpen } = props
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={open}
      onClose={() => setOpen(false)}
    >
      <Alert
        onClose={() => setOpen(false)}
        severity='error'
        sx={{ width: '100%' }}
      >
        {t('Your info did not match. Please check your information')}
        <br />
        {t('If you did not registered yet please register first...')}
      </Alert>
    </Snackbar>
  )
}

export default SnackBar
