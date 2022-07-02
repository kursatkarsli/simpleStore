import { Grid, Stack } from '@mui/material'
import React, { useContext, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { LibraryContext } from '../context/LibraryContext'
import CardItem from './CardItem'

function Library() {
  const { library } = useContext(LibraryContext)
  const { t } = useTranslation()
  return (
    <Grid container justifyContent='center' marginTop='20px' spacing={1}>
      <>
        {library && library.length ? (
          library.map((game, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              lg={4}
              xl={3}
              sx={{ marginBlock: '30px' }}
              key={index}
            >
              <CardItem
                image={game.Cover}
                title={game.Name}
                description={game.Summary}
                price={game.Price}
                id={game.Id}
                game={game}
              />
            </Grid>
          ))
        ) : (
          <Grid item>
            {' '}
            <Stack>{t('You do not have any game')}</Stack>
          </Grid>
        )}
      </>
    </Grid>
  )
}

export default Library
