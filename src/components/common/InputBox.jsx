import * as React from 'react'
import Autocomplete from '@mui/material/Autocomplete'
import { CustomTextField } from '../../assets/materialUi/Inputbox'
import { InformationContext } from '../../context/informationContext'
import { getDataFromLocalStorage } from '../helper/getFromLocalStorage'
import { useTranslation } from 'react-i18next'

export default function InputBox(props) {
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
      options={props.library ?? getDataFromLocalStorage('games') ?? []}
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
      sx={{
        width: { xs: 300, sm: 400 },
        marginRight: '20px',
        marginBottom: '5px',
      }}
      freeSolo
      renderInput={(params) => (
        <CustomTextField {...params} label={t('Search Game')} size='small' />
      )}
    />
  )
}
