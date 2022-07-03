import React, { memo, useContext, useState } from 'react'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Stack,
  Typography,
} from '@mui/material'
import { StyledCardImage } from '../assets/materialUi/CardImage'
import { FavoritesContext } from '../context/favoritesContext'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
import { BasketContext } from '../context/BasketContext'
import { useTranslation } from 'react-i18next'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import { getDataFromLocalStorage } from './helper/getFromLocalStorage'

function SingleCartItem(props) {
  const { addToFavorite, removeFromFavorite } = useContext(FavoritesContext)
  const { removeFromBasket, addToBasket } = useContext(BasketContext)
  const { title, description, price, game } = props
  const { t } = useTranslation()

  const responsive = {
    0: { items: 2 },
    568: { items: 2 },
    1024: { items: 3 },
  }

  return (
    <Card
      sx={{
        maxWidth: { xs: 450, sm: 600 },
        maxHeight: { xs: 100 },
        overflow: 'auto',
        position: 'relative',
      }}
      className='single-card'
    >
      <span className='close-button' onClick={props.handleClose}>
        X
      </span>
      <Stack direction='row'>
        <AliceCarousel
          mouseTracking
          responsive={responsive}
          autoHeight
          items={game.Screenshots.map((image, index) => (
            <StyledCardImage
              component='img'
              height='140'
              key={index}
              image={image}
              alt={title}
            />
          ))}
        />
      </Stack>
      <CardContent>
        <Typography
          gutterBottom
          variant='subtitle2'
          component='div'
          sx={{ fontWeight: '600' }}
        >
          {title}
        </Typography>
        <Typography variant='body2' color='text.secondary' paragraph={true}>
          {t(description)}
        </Typography>
        <Typography variant='subtitle1' component='span' color='text.secondary'>
          {price}$
        </Typography>
        <Typography
          variant='subtitle1'
          component='span'
          color='text.secondary'
          sx={{ float: 'right' }}
        >
          {t('Release Date')}:{' '}
          {`${t(
            new Date(game.ReleaseDate).toLocaleString('default', {
              month: 'long',
            })
          )}-${new Date(game.ReleaseDate).getDate()}-${new Date(
            game.ReleaseDate
          ).getFullYear()}`}
        </Typography>
      </CardContent>
      <CardActions className='card-actions'>
        {game.isFavorite ? (
          <Button
            size='small'
            color='error'
            onClick={() => removeFromFavorite(game)}
          >
            <FavoriteIcon />
            {game.Likes}
          </Button>
        ) : (
          <Button
            size='small'
            color='error'
            onClick={() => addToFavorite(game)}
          >
            <FavoriteBorderIcon />
            {game.Likes}
          </Button>
        )}{' '}
        {getDataFromLocalStorage('isUserLogIn') && (
          <>
            {game.inBasket ? (
              <Button size='small' onClick={() => removeFromBasket(game)}>
                <ShoppingBagIcon sx={{ color: '#069901c1' }} />
              </Button>
            ) : (
              <Button size='small' onClick={() => addToBasket(game)}>
                <ShoppingBagOutlinedIcon sx={{ color: '#777777' }} />
              </Button>
            )}
          </>
        )}
      </CardActions>
    </Card>
  )
}

export default memo(SingleCartItem)
