import { useTheme } from '@emotion/react'
import { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Flex } from 'rebass'
import { actions } from '../../actions'
import { getInitMovies } from '../../api'
import { consts } from '../../const'
import ItemMovies from '../ItemMovie'
import { ButtonNextPage } from './styleComponents'

const RenderMovies = (props) => {
  const theme = useTheme()
  const dispatch = useDispatch()
  const { movies, pageCounter } = useSelector((state) => state)

  const nextPage = (action) => {
    if (action === 'increment') {
      dispatch(actions.incrementConuter(1))
    }

    if (action === 'decrement' && pageCounter > 1) {
      dispatch(actions.decrementConuter(1))
    }
  }

  const getInit = useCallback(
    async (numPage) => {
      const data = await getInitMovies(numPage)
      if (Array.isArray(data.results)) dispatch(actions.getMovies(data.results))
      else return dispatch({ type: consts.GET_INIT_MOVIES, payload: [] })
    }, [dispatch]
  )

  useEffect(() => {
    getInit(pageCounter)
  }, [pageCounter, getInit])

  return (
    <Flex
      width={1}
      px='30px'
      py='20px'
      bg='#E3E8F0'
      flexDirection='column'
      sx={{
        borderTop: `solid 1px ${theme.colors.border}`
      }}
    >
      <Flex
        width={1}
        flex='auto'
        justifyContent='center'
        flexWrap='wrap'
      >
        {
          movies.map((item, index) => {
            return (
              <Flex width='auto' height='auto' key={index}>
                <ItemMovies
                  posterPath={item.poster_path}
                  id={item.id}
                  title={item.title}
                  dateYear={item.release_date}
                />
              </Flex>
            )
          })
        }
      </Flex>

      <Flex
        height='40px'
        flex='none'
        justifyContent='center'
        alignItems='center'
      >
        <Box mr={3} width='100px'>
          <ButtonNextPage color={theme.colors.text} onClick={() => nextPage('decrement')}>
            Anterio
          </ButtonNextPage>
        </Box>
        <Box width='100px'>
          <ButtonNextPage color={theme.colors.text} onClick={() => nextPage('increment')}>
            Siguiente
          </ButtonNextPage>
        </Box>
      </Flex>
    </Flex>
  )
}

export default RenderMovies
