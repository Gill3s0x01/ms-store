import { PriceTag } from '../PriceTag'
import {
  ShoppingCartContainer,
  RemoveFromCartButton,
  Image,
  ProductName,
  WrapperShoppingCart,
} from './styles'
import { CounterItem } from '../CounterItem'
import {
  addItem,
  CountedProduct,
  reduceItem,
  removeItem,
} from '../../store/store'
import { useAppDispatch } from '../../Hooks/redux'
import { ImCross } from 'react-icons/im'

export interface ShoppingCartCardProps {
  product: CountedProduct
}

export const ShoppingCartCard = ({ product }: ShoppingCartCardProps) => {
  const dispatch = useAppDispatch()

  const decrement = () => {
    if (product.quantity > 1) {
      dispatch(reduceItem(product))
    }
  }

  return (
    <ShoppingCartContainer>
      <RemoveFromCartButton onClick={() => dispatch(removeItem(product))}>
        <ImCross
          size={8}
          style={{
            verticalAlign: 'middle',
            margin: '-1 0 0 -1',
            color: '#fff',
          }}
        />
      </RemoveFromCartButton>
      <Image src={product.photo} alt={product.name} />
      <ProductName>{product.name}</ProductName>
      <WrapperShoppingCart>
        <CounterItem
          quantity={product.quantity}
          onAdd={() => dispatch(addItem(product))}
          onSub={decrement}
        ></CounterItem>
        <PriceTag style={{ height: 35 }} price={+product.price} />
      </WrapperShoppingCart>
    </ShoppingCartContainer>
  )
}
