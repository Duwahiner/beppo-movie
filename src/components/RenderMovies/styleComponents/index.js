import styled from '@emotion/styled'

export const ButtonNextPage = styled.button`
    font-family: RobotoBold;
    display: inline;
    font-size: 12px;
    text-align: center;
    color: ${({ color }) => color};
    outline: none;
    border: none;
    padding: 15px 30px;
    border-radius: 20px;
    box-sizing: border-box;
    background-color: transparent;
    transition: all 0.6s;
    border: solid 1px ${({ color }) => color};
    cursor: pointer;
    &:hover{
        background-color: ${({ color }) => color};
        color: #fff
    }
`
