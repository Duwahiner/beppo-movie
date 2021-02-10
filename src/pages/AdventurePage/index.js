import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { actions } from '../../actions'
import { searchMovies } from '../../api'
import Adventure from '../../components/Adventure'

const AdventurePage = (props) => {
  const dispatch = useDispatch()

  useEffect(() => {
    const handleLogin = async () => {
      const data = await searchMovies('adventures')
      if (Array.isArray(data.results)) dispatch(actions.searchMovies(data.results))
      else dispatch(actions.searchMovies([]))
    }
    handleLogin()
  }, [dispatch])

  return (
    <Adventure />
  )
}
export default AdventurePage
