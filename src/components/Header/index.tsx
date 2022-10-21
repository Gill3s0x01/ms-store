import { useContext } from 'react'
import {
  HeaderContainer,
  Logo,
  LogoName,
  IconCart,
  WrapperIcons,
} from './styles'
import { FaShoppingCart } from 'react-icons/fa'
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'

interface Props {
  toggleTheme(): void
}

export const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { title } = useContext(ThemeContext)
  return (
    <HeaderContainer>
      <Logo>
        <LogoName>MKS</LogoName>
        <span>Sistemas</span>
      </Logo>
      <WrapperIcons>
        <Switch
          onChange={toggleTheme}
          checked={title === 'dark'}
          onColor={'#85b0f0'}
          offColor={'#4a4b4d'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
        />
        <IconCart>
          <FaShoppingCart size={20} color={'#000000'} />
        </IconCart>
      </WrapperIcons>
    </HeaderContainer>
  )
}
