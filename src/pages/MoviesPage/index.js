import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Flex } from 'rebass'
import { actions } from '../../actions'
import { getDetailMovies } from '../../api'
import LoginUser from '../../components/LoginUser'
import Movies from '../../components/Movies'

const MoviesPage = (props) => {
  const { user, idDetail } = useSelector((state) => state)
  const dispatch = useDispatch()

  useEffect(() => {
    const handleDetail = async () => {
      if (user.name) {
        const data = await getDetailMovies(idDetail)
        dispatch(actions.getDetail(data))
      }
    }
    handleDetail()
  }, [idDetail, dispatch, user])

  return (
    <Flex width={1}>
      {user.name ? <Movies /> : <LoginUser />}
    </Flex>
  )
}

export default MoviesPage
