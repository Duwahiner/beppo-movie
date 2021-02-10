import Layout from '../Layout'
import RenderMovies from '../RenderMovies'
import { Container } from './styleComponents'

const Home = (props) => {
  return (
    <Layout>
      <Container
        width={1}
        justifyContent=''
        alignItems=''
        overflow='auto'
        flex='none'
      >
        <RenderMovies />
      </Container>
    </Layout>
  )
}

export default Home
