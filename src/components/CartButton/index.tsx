import { FaShoppingCart } from 'react-icons/fa'
import { CardButtonContainer, Counter } from './styles'
import { selectProductsCount } from '../../store/store'
import { useAppSelector } from '../../Hooks/redux'

export interface CartButtonProps {
  onClick?: () => void
}

export const CartButton = ({ onClick }: CartButtonProps) => {
  const cartProductsCount = useAppSelector(selectProductsCount)
  return (
    <CardButtonContainer onClick={onClick}>
      <FaShoppingCart />
      <Counter>{cartProductsCount}</Counter>
    </CardButtonContainer>
  )
}
