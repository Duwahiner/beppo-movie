import { useTheme } from '@emotion/react'
import { Flex } from 'rebass'
import Logo from '../Logo'
import Menu from '../Menu'

const Header = (props) => {
  const theme = useTheme()
  return (
    <Flex
      width={1}
      bg={theme.colors.bgMenu}
      px={30}
      height='48px'
    >
      <Flex
        mr='20px'
        flex='none'
        width='auto'
        maxWidth='200px'
      > <Logo />
      </Flex>
      <Flex
        height='48px'
        flex='auto'
        width={1}
      > <Menu />
      </Flex>
    </Flex>
  )
}

export default Header
