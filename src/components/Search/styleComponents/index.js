import styled from '@emotion/styled'

export const SearchInput = styled.input`
    width: 200px;
    height: 30px;
    font-family: RobotoBold;
    font-size: 12px;
    color: ${({ color }) => color};
    outline: none;
    border: none;
    border-radius: 20px;
    padding: 0px 10px;
    box-sizing: border-box;
    background-color: transparent;
    transition: all 0.6s;
    &::placeholder {
        font-family: RobotoBold;
        font-size: 12px;
        color: ${({ colorBorder }) => colorBorder};
    }
`
