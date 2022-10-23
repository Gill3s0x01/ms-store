import styled from 'styled-components'

export const PriceItemContainer = styled.span`
  display: flex;
  align-items: center;
  width: fit-content;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: #373737;
  color: #fff;
  font-weight: 700;
  font-size: 15px;
  line-height: 15px;
  padding: 4px 6px;
  height: 35px;
  @media screen and (min-width: 768px) {
    color: #000000;
    background-color: transparent;
  }
`
