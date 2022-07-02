import * as React from 'react'
import Autocomplete from '@mui/material/Autocomplete'
import { CustomTextField } from '../../assets/materialUi/Inputbox'
import { InformationContext } from '../../context/informationContext'
import { getDataFromLocalStorage } from '../helper/getFromLocalStorage'
import { useTranslation } from 'react-i18next'

export default function FreeSoloCreateOption() {
  const { InputValue, setInputValue, setInputType, setCategoryInputValue } =
    React.useContext(InformationContext)
  const { t } = useTranslation()
  return (
    <Autocomplete
      value={InputValue}
      onFocus={() => {
        setInputType('title')
        setCategoryInputValue('')
      }}
      onChange={(event, newValue) => {
        if (typeof newValue === 'string') {
          setInputValue(newValue)
        } else if (newValue && newValue.inputValue) {
          // Create a new value from the user input
          setInputValue(newValue.inputValue)
        } else {
          if (newValue) setInputValue(newValue.Name)
          else setInputValue('')
        }
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id='free-solo-with-text-demo'
      options={getDataFromLocalStorage('games') ?? []}
      getOptionLabel={(option) => {
        if (typeof option === 'string') {
          return option
        }
        if (option.inputValue) {
          return option.inputValue
        }
        return option.Name
      }}
      renderOption={(props, option) => <li {...props}>{option.Name}</li>}
      sx={{ width: 400, marginRight: '20px' }}
      freeSolo
      renderInput={(params) => (
        <CustomTextField {...params} label={t('Search Game')} size='small' />
      )}
    />
  )
}
