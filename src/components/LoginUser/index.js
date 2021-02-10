import { useTheme } from '@emotion/react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Box, Flex } from 'rebass'
import { actions } from '../../actions'
import { Title } from '../Title'
import {
  LoginButton,
  LoginInput,
  TextModal,
  CancelButton
} from './styleComponents'

const LoginUser = (props) => {
  const theme = useTheme()
  const dispatch = useDispatch()
  const { input } = useSelector((state) => state)

  const onChange = (event) => {
    const value = event.target.value
    if (value !== '') dispatch(actions.input(value))
  }

  const handleLogin = () => {
    if (input !== '') dispatch(actions.loginUser(input))
  }

  return (
    <Flex
      justifyContent='center'
      alignItems='center'
      sx={{
        width: '100%',
        height: '100%',
        position: 'fixed',
        backgroundColor: theme.colors.bgModal,
        zIndex: '1000',
        top: '0px',
        left: '0px'
      }}
    >
      <Flex
        width='450px'
        height='300px'
        bg='#fff'
        p='20px'
        flexDirection='column'
        justifyContent='center'
        sx={{
          borderRadius: '8px',
          boxSizing: 'border-box',
          position: 'relative'
        }}
      >

        <NavLink
          to='/'
          activeStyle={{ color: '#ffffff' }}
        >
          <Box
            width='50px'
            height='20px'
            sx={{ position: 'absolute', top: '20px', right: '50px' }}
          >
            <CancelButton
              color={theme.colors.background}
              bg={theme.colors.bgCancel}
            > Cerrar
            </CancelButton>
          </Box>
        </NavLink>

        <Flex mb={4}>
          <Flex flexDirection='column'>
            <Title
              color={theme.colors.bgModal}
              fontFamily='RobotoBold'
              fontSize='35px'
            > Iniciar sesión
            </Title>

            <TextModal
              color={theme.colors.textMenu}
            > Para ver detalle de la pelicula
            </TextModal>
          </Flex>
        </Flex>

        <Flex width={1}>
          <Box width={1 / 1.3}>
            <LoginInput
              placeholder='Escriba su nombre'
              color={theme.text.textMenu}
              colorBorder={theme.colors.textFooter}
              onChange={onChange}
            />
          </Box>
        </Flex>

        <Flex mt={3}>
          <Box width='150px' onClick={handleLogin}>
            <LoginButton
              color={theme.colors.background}
              bg={theme.colors.bg}
            > Iniciar sesión
            </LoginButton>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default LoginUser
