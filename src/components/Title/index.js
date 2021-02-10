import styled from '@emotion/styled'
import Proptypes from 'prop-types'

export const Title = styled.span`
  font-family: ${(props) => props.fontFamily};
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color}
`

Title.propTypes = {
  color: Proptypes.string,
  fontSize: Proptypes.string,
  fontFamily: Proptypes.string
}

Title.defaultProps = {
  color: '#fff',
  fontSize: '12px',
  fontFamily: 'Roboto'
}
