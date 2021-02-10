import Layout from '../Layout'
import MoviesDetail from '../MoviesDetail'
import { Container } from './styleComponents'

const Movies = (props) => {
  return (
    <Layout>
      <Container
        width={1}
        justifyContent=''
        alignItems=''
        overflow='auto'
        flex='none'
      >
        <MoviesDetail />
      </Container>
    </Layout>
  )
}

export default Movies
