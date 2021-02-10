import styled from '@emotion/styled'
import Proptypes from 'prop-types'

export const TextLogo = styled.h2`
  font-family: RobotoRegular;
  font-size: 16px;
  color: ${(props) => props.color}
`

TextLogo.propTypes = {
  color: Proptypes.string
}

TextLogo.defaultProps = {
  color: '#fff'
}

export const Strong = styled.strong`
  font-family: RobotoBold;
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  font-weight: normal;
`

Strong.propTypes = {
  color: Proptypes.string,
  fontSize: Proptypes.string
}

Strong.defaultProps = {
  color: '#fff',
  fontSize: '16px'
}
