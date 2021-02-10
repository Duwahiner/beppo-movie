import styled from '@emotion/styled'

export const TextModal = styled.span`
  font-family: Roboto;
  font-size: 20px;
  color: ${(props) => props.color}
`

export const LoginInput = styled.input`
    width: 100%;
    font-family: RobotoBold;
    font-size: 14px;
    color: ${({ color }) => color};
    border: solid 1px ${({ colorBorder }) => colorBorder};
    outline: none;
    border-radius: 40px;
    padding: 0px 20px;
    box-sizing: border-box;
    background-color: transparent;
    line-height: 45px;
    transition: all 0.6s;
    &::placeholder {
        font-family: Roboto;
        font-size: 14px;
        color: ${({ colorBorder }) => colorBorder};
    }
`

export const LoginButton = styled.button`
    font-family: RobotoBold;
    display: inline;
    font-size: 14px;
    text-align: center;
    color: ${({ color }) => color};
    outline: none;
    border: none;
    padding: 20px 28px;
    border-radius: 20px;
    box-sizing: border-box;
    background-color: ${({ bg }) => bg};
    transition: all 0.6s;
    cursor: pointer;
    &:hover{
        background-color: #7002bf;
        color: #fff
    }
`
export const CancelButton = styled.button`
    font-family: Roboto;
    display: inline;
    font-size: 12px;
    text-align: center;
    color: ${({ color }) => color};
    outline: none;
    border: none;
    padding: 15px 25px;
    border-radius: 20px;
    box-sizing: border-box;
    background-color: ${({ bg }) => bg};
    transition: all 0.6s;
    cursor: pointer;
    &:hover{
        background-color: #7002bf;
        color: #fff
    }
`
