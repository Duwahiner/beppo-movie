import { Flex } from 'rebass'
import Layout from '../Layout'
import RenderMovies from '../RenderMovies'

const Adventure = (props) => {
  return (
    <Layout>
      <Flex
        width={1}
        justifyContent=''
        alignItems=''
        overflow='auto'
        flex='none'
      >
        <RenderMovies />
      </Flex>
    </Layout>
  )
}

export default Adventure
