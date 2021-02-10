import { Box, Flex } from 'rebass'
import Footer from '../Footer'
import Header from '../Header'

const Layout = ({ children }) => {
  return (
    <Flex height='100vh' width={1} flexDirection='column'>
      <Box flex='none' as='header' width={1}> <Header /> </Box>
      <Flex flex='auto' as='main' width={1}> {children} </Flex>
      <Box flex='none' as='footer' width={1}> <Footer /> </Box>
    </Flex>
  )
}

export default Layout
