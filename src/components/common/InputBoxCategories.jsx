import * as React from 'react'
import Autocomplete from '@mui/material/Autocomplete'
import { CustomTextField } from '../../assets/materialUi/Inputbox'
import { InformationContext } from '../../context/informationContext'
import { gameCategories } from '../helper/gameCategories'
import { useTranslation } from 'react-i18next'
import { getItemLibraryCategory } from '../helper/getLibraryGameCategory'
import { LibraryContext } from '../../context/LibraryContext'

export default function InputBoxCategories(props) {
  const {
    categoryInputValue,
    setCategoryInputValue,
    setInputType,
    setInputValue,
  } = React.useContext(InformationContext)
  const { library } = React.useContext(LibraryContext)

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
          if (newValue) setCategoryInputValue(newValue)
          else setCategoryInputValue('')
        }
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id='free-solo-with-text-demo'
      options={
        props.library && library
          ? getItemLibraryCategory(library)
          : gameCategories
      }
      getOptionLabel={(option) => {
        if (typeof option === 'string') {
          return option
        }
        if (option.inputValue) {
          return option.inputValue
        }
        return option
      }}
      renderOption={(props, option) => <li {...props}>{option}</li>}
      sx={{ width: { xs: 300, sm: 400 }, marginRight: '20px' }}
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
