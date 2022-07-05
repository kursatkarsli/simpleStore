import { Grid } from '@mui/material'
import React, { memo, useContext } from 'react'
import InputBox from './common/InputBox'
import InputBoxCategories from './common/InputBoxCategories'
import { CustomStack } from '../assets/materialUi/Home'
import { InformationContext } from '../context/informationContext'
import CardItem from './CardItem'
import {
  filterGames,
  fiterGamesAccordingToCategories,
} from './helper/filterGames'
import { getDataFromLocalStorage } from './helper/getFromLocalStorage'

function Home() {
  const { InputValue, inputType, categoryInputValue } =
    useContext(InformationContext)

  return (
    <Grid
      container
      spacing={1}
      marginTop='20px'
      justifyContent='center'
      alignItems='center'
    >
      <Grid item xs={12} sx={{ marginX: { xs: '0', sm: '10px' } }}>
        <CustomStack direction={{ xs: 'column', sm: 'row' }}>
          <InputBox />
          <InputBoxCategories />
        </CustomStack>
      </Grid>

      {getDataFromLocalStorage('games') && !InputValue && !categoryInputValue
        ? getDataFromLocalStorage('games')?.map((game, index) => (
            <Grid
              item
              xs={12}
              sm={4}
              lg={3}
              sx={{ marginBlock: '30px' }}
              key={game.Id}
            >
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
        : inputType === 'category'
        ? fiterGamesAccordingToCategories(
            getDataFromLocalStorage('games'),
            categoryInputValue
          )?.map((game, index) => (
            <Grid
              item
              xs={12}
              sm={4}
              lg={3}
              sx={{ marginBlock: '30px' }}
              key={game.Id}
            >
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
        : inputType !== 'category' &&
          filterGames(getDataFromLocalStorage('games'), InputValue)?.map(
            (game, index) => (
              <Grid
                item
                xs={12}
                sm={4}
                lg={3}
                sx={{ marginBlock: '30px' }}
                key={game.Id}
              >
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
          )}
    </Grid>
  )
}

export default memo(Home)
