import * as React from 'react'
import Modal from '@mui/material/Modal'
import SingleItemCard from '../SingleItemCard'
import { CustomBox } from '../../assets/materialUi/CustomModalBox'

export default function CustomModal({ open, handleClose, game }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <CustomBox>
        <SingleItemCard
          title={game.Name}
          description={game.Summary}
          price={game.Price}
          id={game.Id}
          game={game}
        />
      </CustomBox>
    </Modal>
  )
}
