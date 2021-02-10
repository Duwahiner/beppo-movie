import styled from '@emotion/styled'
import Proptypes from 'prop-types'

export const TextItems = styled.span`
  font-family: RobotoBold;
  font-size: 12px;
  color: ${(props) => props.color};
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    color: #ffffff;
  }
`

TextItems.propTypes = {
  color: Proptypes.string
}

TextItems.defaultProps = {
  color: '#fff'
}
