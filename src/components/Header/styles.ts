import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: var(--header-height);
  padding: 0 var(--global-padding);

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  background-color: var(--terciary-color);

  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--z-fixed);

  @media (min-width: 760px) {
    gap: 30px;
  }

  @media (min-width: 1240px) {
    gap: 50px;
  }
`
export const Cart = styled.button`
  width: 52px;
  height: 26px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10.24px;

  background-color: #ffffff;
  color: #000000;
  border-radius: 8px;

  font-size: 12px;
  font-weight: 700;

  i {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000000;
  }

  &:hover {
    filter: opacity(0.8);
  }

  @media (min-width: 760px) {
    width: 65px;
    height: 36px;
    font-size: 14px;
  }

  @media (min-width: 1240px) {
    width: 80px;
    height: 45px;
    gap: 15.99px;
    font-size: 18px;
  }
`
export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  span:last-child {
    color: #ffffff;
    padding-top: 4px;
    margin-left: 10px;

    display: block;

    font-weight: 300;
    font-size: 16px;
    line-height: 19px;

    @media (min-width: 760px) {
      font-size: 18px;
    }

    @media (min-width: 1240px) {
      font-size: 20px;
    }
  }
`
export const LogoName = styled.a`
  color: #ffffff;
  flex: 2;
  display: flex;
  align-items: center;

  font-weight: 600;
  font-size: 32px;

  @media (min-width: 760px) {
    font-size: 36px;
  }

  @media (min-width: 1240px) {
    font-size: 40px;
  }
`
export const IconCart = styled.div`
  margin-left: 20px;
`
export const WrapperIcons = styled.div`
  color: var(--secondary-color-200);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-right: 30px;
`
