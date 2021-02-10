import { useTheme } from '@emotion/react'
import { Box, Flex } from 'rebass'
import { url } from '../../util'
import { TitleMovie, TextYear } from './styleComponents'
import { actions } from '../../actions'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'

const ItemMovies = ({
  posterPath, id, title, dateYear
}) => {
  const theme = useTheme()
  const dispatch = useDispatch()
  const yearString = dateYear.slice(0, 4)

  const handleGetId = (event) => {
    const target = event.target
    if (typeof parseInt(target.id) === 'number') {
      return dispatch(actions.getId(parseInt(target.id)))
    }
  }

  return (
    <Flex
      flexDirection='column'
      alignItems='center'
      flex='none'
      mx={3}
      mb={5}
      sx={{
        width: '170px',
        height: '300px',
        overflow: 'hidden',
        borderRadius: '10px',
        position: 'relative'

      }}
    >
      <Box
        sx={{
          width: '170px',
          height: '300px',
          position: 'absolute',
          backgroundColor: theme.colors.bgMenu,
          top: '0px',
          left: '0px',
          zIndex: 100,
          opacity: 0,
          transition: 'all 0.5s',
          ':hover': {
            backgroundColor: theme.colors.bgMenu,
            opacity: '0.8'
          }
        }}
      >
        <Flex
          height='300px'
          justifyContent='center'
          alignItems='center'
        >
          <Box
            sx={{
              border: 'solid 1px red',
              transition: 'all 0.5s ease-in-out',
              cursor: 'pointer',
              padding: '10px 20px',
              ':hover': {
                background: 'red'
              }
            }}
          >
            <NavLink
              to='/movies'
              activeStyle={{ color: '#ffffff' }}
            >
              <TitleMovie
                color={theme.text.primary}
                id={id}
                onClick={handleGetId}
              > Ver detalles
              </TitleMovie>
            </NavLink>
          </Box>
        </Flex>
      </Box>

      <Box
        flex='auto'
        width='170px'
        sx={{
          background: posterPath
            ? `url(${url.viewIgm}${posterPath}) center center no-repeat`
            : `url(${process.env.PUBLIC_URL}${'/image/v-1.png'}) center center no-repeat`,
          backgroundSize: 'cover',
          zIndex: 0
        }}
      />

      <Flex
        flexDirection='column'
        flex='none'
        height='80px'
        bg='#fff'
        width={1}
        padding='10px'
        sx={{ boxSizing: 'border-box' }}
      >
        <Box mb='5px' sx={{ overflow: 'hidden' }}>
          <TitleMovie> {title} </TitleMovie>
        </Box>
        <Box>
          <TextYear color={theme.colors.textFooter}>
            {`Año: ${yearString}`}
          </TextYear>
        </Box>
      </Flex>
    </Flex>
  )
}

export default ItemMovies
