import { useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Home from '../../components/Home'
import { getInitMovies } from '../../api'
import { actions } from '../../actions'
import { consts } from '../../const'

const HomePage = (props) => {
  const dispatch = useDispatch()

  const getInit = useCallback(
    async (numPage) => {
      const data = await getInitMovies(numPage)
      if (Array.isArray(data.results)) dispatch(actions.getMovies(data.results))
      else return dispatch({ type: consts.GET_INIT_MOVIES, payload: [] })
    }, [dispatch]
  )

  useEffect(() => {
    getInit(1)

    // Limpiando funciones.
    return () => getInit(1)
  }, [getInit])

  return (
    <Home />
  )
}

export default HomePage
