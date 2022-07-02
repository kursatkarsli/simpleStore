import React, { memo, useContext, useEffect, useState } from 'react'
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
import { addToLocalStorage } from './helper/addToLocalStorage'
import CustomModal from './common/Modal'
import { useTranslation } from 'react-i18next'
import { getDataFromLocalStorage } from './helper/getFromLocalStorage'
import { LibraryContext } from '../context/LibraryContext'

function CardItem(props) {
  const { addToFavorite, removeFromFavorite } = useContext(FavoritesContext)
  const { removeFromBasket, addToBasket } = useContext(BasketContext)
  const { setLibrary } = useContext(LibraryContext)

  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const { t } = useTranslation()
  const { image, title, description, price, id, game } = props

  const handleAddBasket = () => {
    addToBasket(game)
    setLibrary(
      getDataFromLocalStorage('games')?.filter((item) => item.inBasket === true)
    )
  }
  const handleRemoveBasket = () => {
    removeFromBasket(game)
    setLibrary(
      getDataFromLocalStorage('games')?.filter((item) => item.inBasket === true)
    )
  }
  return (
    <Card sx={{ maxWidth: { sm: 400, md: 400, lg: 350 } }} className='card'>
      <Stack
        onClick={() => {
          addToLocalStorage(id, game)
          handleOpen()
        }}
      >
        <StyledCardImage
          component='img'
          height='140'
          image={image}
          alt={title}
        />
      </Stack>
      <CardContent>
        <Typography
          gutterBottom
          variant='subtitle1'
          component='div'
          sx={{ fontWeight: '600' }}
        >
          {title}
        </Typography>
        <Typography
          variant='body2'
          color='text.secondary'
          className='content'
          paragraph={true}
        >
          {t(description)}
        </Typography>
        <Typography variant='subtitle1' color='text.secondary'>
          {price}$
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
            {' '}
            {game.inBasket ? (
              <Button size='small' onClick={handleRemoveBasket}>
                <ShoppingBagIcon sx={{ color: '#069901c1' }} />
              </Button>
            ) : (
              <Button size='small' onClick={handleAddBasket}>
                <ShoppingBagOutlinedIcon sx={{ color: '#777777' }} />
              </Button>
            )}
          </>
        )}
      </CardActions>
      <CustomModal open={open} handleClose={handleClose} game={game} />
    </Card>
  )
}

export default memo(CardItem)
