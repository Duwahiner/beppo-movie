import { useTheme } from '@emotion/react'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Box, Flex } from 'rebass'
import { url } from '../../util'
import { Title } from '../Title'

const MoviesDetail = (props) => {
  const theme = useTheme()
  const { movieDetail } = useSelector((state) => state)
  const [gender, setGender] = useState([])
  const { poster_path, overview, title, release_date, tagline } = movieDetail

  useEffect(() => {
    if (Array.isArray(movieDetail.genres)) {
      const results = movieDetail.genres.map((item) => item.name).join(', ')
      setGender(results)
    }
  }, [movieDetail, setGender])

  return (
    <Flex
      width={1}
      px='30px'
      py='20px'
      bg={theme.colors.background}
      flexDirection=''
      justifyContent='center'
      alignItems='center'
      sx={{
      }}
    >
      <Flex
        minWidth='700px'
        width={1 / 1.5}
        padding={3}
        sx={{
          borderRadius: '20px',
          border: `solid 1px ${theme.colors.border}`,
          borderBottom: `solid 1px ${theme.colors.border}`
        }}
      >
        <Box
          flex='none'
          width='290px'
          height='450px'
          mr={3} ur
          sx={{
            background: poster_path
              ? `url(${url.viewIgm}${poster_path}) center center no-repeat`
              : `url(${process.env.PUBLIC_URL}${'/image/v-1.png'}) center center no-repeat`,
            backgroundSize: 'cover',
            zIndex: 0,
            overflow: 'hidden',
            borderRadius: '13px'
          }}
        />
        <Flex
          flex='auto'
          flexDirection='column'
          justifyContent='center'
          p={3}
          bg=''
        >
          <Box mb={1}>
            <Title
              fontFamily='RobotoBold'
              color={theme.colors.bgMenu}
              fontSize='40px'
            >
              {title ? title : 'No se encontramos detalles'}
            </Title>
          </Box>

          <Box mb={0}>
            <Title
              fontFamily='Roboto'
              color={theme.colors.textFooter}
              fontSize='18px'
            > {release_date?.slice(0, 4)}
            </Title>
          </Box>

          <Box mb={4}>
            <Title
              fontFamily='Roboto'
              color={theme.colors.textFooter}
              fontSize='14px'
            > {gender}
            </Title>
          </Box>

          <Box mb={1}>
            <Title
              fontFamily='Roboto'
              color={theme.colors.textFooter}
              fontSize='13px'
            > {tagline}
            </Title>
          </Box>

          <Box>
            <Title
              fontFamily='RobotoBold'
              color={theme.colors.bgMenu}
              fontSize='23px'
            > {title ? 'Overview ' : '--------------------------------------------'}
            </Title>
          </Box>

          <Box>
            <Title
              fontFamily='Roboto'
              color={theme.colors.textFooter}
              fontSize='14px'
            > {overview}
            </Title>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default MoviesDetail
