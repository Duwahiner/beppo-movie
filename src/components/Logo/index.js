import { useTheme } from '@emotion/react'
import { Box, Flex } from 'rebass'
import { TextLogo, Strong } from './styleComponents'

const Logo = (props) => {
  const theme = useTheme()
  return (
    <Flex width={1} justifyContent='center' alignItems='center'>
      <Box
        width={1}
        display='inline'
      >
        <TextLogo color={theme.colors.textMenu}>
          Beppo <Strong color={theme.colors.textLogo}> movie </Strong>
        </TextLogo>
      </Box>
    </Flex>
  )
}

export default Logo
