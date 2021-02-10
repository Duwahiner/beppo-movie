import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { actions } from '../../actions'
import { searchMovies } from '../../api'
import Action from '../../components/Action'

const ActionPage = (props) => {
  const dispatch = useDispatch()

  useEffect(() => {
    const handleLogin = async () => {
      const data = await searchMovies('actions')
      if (Array.isArray(data.results)) dispatch(actions.searchMovies(data.results))
      else dispatch(actions.searchMovies([]))
    }
    handleLogin()
  }, [dispatch])

  return (
    <Action />
  )
}

export default ActionPage
