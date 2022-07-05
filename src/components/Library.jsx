import { Grid, Stack, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { CustomStack } from '../assets/materialUi/Home'
import { LibraryContext } from '../context/LibraryContext'
import InputBox from './common/InputBox'
import InputBoxCategories from './common/InputBoxCategories'
import CardItem from './CardItem'
import { InformationContext } from '../context/informationContext'
import {
  filterGames,
  fiterGamesAccordingToCategories,
} from './helper/filterGames'

function Library() {
  const { library } = useContext(LibraryContext)
  const { InputValue, inputType, categoryInputValue } =
    useContext(InformationContext)
  const { t } = useTranslation()
  return (
    <Grid
      container
      justifyContent='center'
      alignItems='center'
      marginTop='20px'
      spacing={1}
    >
      <Grid item xs={12} sx={{ marginX: { xs: '0', sm: '10px' } }}>
        <CustomStack direction={{ xs: 'column', sm: 'row' }}>
          <InputBox library={library} />
          <InputBoxCategories library={true} />
        </CustomStack>
      </Grid>{' '}
      <>
        {library.length < 1 ? (
          <Typography component='h5' variant='h5' marginTop={20}>
            {t('You do not have any game in your basket')}
          </Typography>
        ) : library && library.length && !InputValue && !categoryInputValue ? (
          library.map((game, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              lg={4}
              xl={3}
              sx={{ marginBlock: '30px' }}
              key={game.Name}
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
        ) : inputType === 'category' ? (
          fiterGamesAccordingToCategories(library, categoryInputValue)?.map(
            (game, index) => (
              <Grid item xs={12} sx={{ marginBlock: '30px' }} key={game.Id}>
                <CardItem
                  image={game.Cover}
                  title={game.Name}
                  description={game.Summary}
                  price={game.Price}
                  id={game.Id}
                  game={game}
                />{' '}
              </Grid>
            )
          )
        ) : inputType !== 'category' ? (
          filterGames(library, InputValue)?.map((game, index) => (
            <Grid item xs={12} sx={{ marginBlock: '30px' }} key={game.Id}>
              <CardItem
                image={game.Cover}
                title={game.Name}
                description={game.Summary}
                price={game.Price}
                id={game.Id}
                game={game}
              />{' '}
            </Grid>
          ))
        ) : (
          <Grid item>
            {' '}
            <Stack>{t('You do not have any game in your basket')}</Stack>
          </Grid>
        )}
      </>
    </Grid>
  )
}

export default Library
