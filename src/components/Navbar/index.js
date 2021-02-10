import { useTheme } from '@emotion/react'
import { NavLink } from 'react-router-dom'
import { Box, Flex } from 'rebass'
import { useUrl } from '../../hooks'
import Search from '../Search'
import User from '../User'
import { TextItems } from './styleComponents'

const NavBar = (props) => {
  const theme = useTheme()
  const [url] = useUrl()

  return (
    <Flex
      width={1}
      justifyContent='flex-end'
      alignItems='center'
    >
      <Box ml='0px' display='inline'>
        <NavLink
          to='/'
          activeStyle={{ color: '#ffffff' }}
        >
          <TextItems
            color={url === '/' ? theme.text.primary : theme.colors.textMenu}
          > INICIO
          </TextItems>
        </NavLink>
      </Box>

      <Box ml='30px' display='inline'>
        <NavLink to='/accion'>
          <TextItems
            color={url === '/accion' ? theme.text.primary : theme.colors.textMenu}
          > ACCIÓN
          </TextItems>
        </NavLink>
      </Box>

      <Box ml='30px' display='inline'>
        <NavLink to='/aventura'>
          <TextItems
            color={url === '/aventura' ? theme.text.primary : theme.colors.textMenu}
          > AVENTURA
          </TextItems>
        </NavLink>
      </Box>

      <Box ml='30px' display='inline'>
        <NavLink to='/comedia'>
          <TextItems
            color={url === '/comedia' ? theme.text.primary : theme.colors.textMenu}
          > COMEDIA
          </TextItems>
        </NavLink>
      </Box>

      <Box ml='50px' display='inline'>
        <Search />
      </Box>

      <Box ml='10px' display='inline'>
        <User />
      </Box>
    </Flex>
  )
}

export default NavBar
