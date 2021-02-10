import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { actions } from '../../actions'
import { searchMovies } from '../../api'
import Comedy from '../../components/Comedy'

const AdventurePage = (props) => {
  const dispatch = useDispatch()

  useEffect(() => {
    const handleLogin = async () => {
      const data = await searchMovies('comedys')
      if (Array.isArray(data.results)) dispatch(actions.searchMovies(data.results))
      else dispatch(actions.searchMovies([]))
    }
    handleLogin()
  }, [dispatch])

  return (
    <Comedy />
  )
}
export default AdventurePage
