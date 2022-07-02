import { Container, Grid } from '@mui/material'
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
    <Container maxWidth='xl'>
      <Grid container marginTop='3rem' spacing={1} marginLeft='0'>
        <Grid item xs={12}>
          <CustomStack direction='row'>
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
                key={index}
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
                xs={
                  fiterGamesAccordingToCategories(
                    getDataFromLocalStorage('games'),
                    categoryInputValue
                  ).length < 2
                    ? 12
                    : 3
                }
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
                />{' '}
              </Grid>
            ))
          : inputType !== 'category' &&
            filterGames(getDataFromLocalStorage('games'), InputValue)?.map(
              (game, index) => (
                <Grid item xs={12} sx={{ marginBlock: '30px' }} key={index}>
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
    </Container>
  )
}

export default memo(Home)
