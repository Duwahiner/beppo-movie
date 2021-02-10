import { useTheme } from '@emotion/react'
import { useSelector } from 'react-redux'
import { Box } from 'rebass'
import { TextItems } from './styleComponents'

const User = (props) => {
  const { user } = useSelector((state) => state)

  const theme = useTheme()
  return (
    <Box ml='0px' display='inline'>
      <TextItems
        color={theme.text.primary}
      > {user.name ? `Hola, ${user.name}` : 'Invitado'}
      </TextItems>
    </Box>
  )
}

export default User
