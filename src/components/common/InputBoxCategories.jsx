import * as React from 'react'
import Autocomplete from '@mui/material/Autocomplete'
import { CustomTextField } from '../../assets/materialUi/Inputbox'
import { InformationContext } from '../../context/informationContext'
import { gameCategories } from '../helper/gameCategories'
import { useTranslation } from 'react-i18next'
export default function FreeSoloCreateOption() {
  const {
    categoryInputValue,
    setCategoryInputValue,
    setInputType,
    setInputValue,
  } = React.useContext(InformationContext)
  const { t } = useTranslation()
  return (
    <Autocomplete
      value={categoryInputValue}
      onFocus={() => {
        setInputType('category')
        setInputValue('')
      }}
      onChange={(event, newValue) => {
        if (typeof newValue === 'string') {
          setCategoryInputValue(newValue)
        } else if (newValue && newValue.inputValue) {
          setCategoryInputValue(newValue.inputValue)
        } else {
          if (newValue) setCategoryInputValue(newValue.category)
          else setCategoryInputValue('')
        }
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id='free-solo-with-text-demo'
      options={gameCategories}
      getOptionLabel={(option) => {
        if (typeof option === 'string') {
          return option
        }
        if (option.inputValue) {
          return option.inputValue
        }
        return option.category
      }}
      renderOption={(props, option) => <li {...props}>{option.category}</li>}
      sx={{ width: 400, marginRight: '20px' }}
      freeSolo
      renderInput={(params) => (
        <CustomTextField
          {...params}
          label={t('Search Game Category')}
          size='small'
        />
      )}
    />
  )
}
