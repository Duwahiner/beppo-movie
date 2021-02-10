import { useTheme } from '@emotion/react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Box, Flex } from 'rebass'
import { actions } from '../../actions'
import { searchMovies } from '../../api'
import { SearchInput } from './styleComponents'

const Search = (props) => {
  const theme = useTheme()
  const dispatch = useDispatch()
  const [value, setValue] = useState('')

  const onChange = (event) => {
    const value = event.target.value
    if (value !== '') setValue(value)
  }

  const handleLogin = async () => {
    const data = await searchMovies(value)
    if (Array.isArray(data.results)) dispatch(actions.searchMovies(data.results))
    else dispatch(actions.searchMovies([]))
  }

  return (
    <Flex
      width={1}
      justifyContent='space-between'
      alignItems='center'
      sx={{
        border: `solid 1px ${theme.colors.textMenu}`,
        borderRadius: '20px',
        transition: 'all 0.5s',
        ':hover': {
          border: `solid 1px ${theme.text.primary}`
        }
      }}
    >
      <Box>
        <SearchInput
          placeholder='Buscar película'
          color={theme.text.primary}
          colorBorder={theme.colors.textMenu}
          onChange={onChange}
          onKeyUp={(e) => {
            const tecla = e.key
            if (tecla === 'Enter') handleLogin()
          }}
        />
      </Box>
      <Flex px='10px' width='25' height='25' flex='none' color='#fff' />
    </Flex>
  )
}

export default Search
