import { CounterItemContainer, Counter, ButtonCounter } from './styles'

export interface CounterItemProps {
  quantity: number
  onAdd: () => void
  onSub: () => void
}

export const CounterItem = ({
  onSub,
  quantity = 1,
  onAdd,
}: CounterItemProps) => {
  return (
    <CounterItemContainer>
      <ButtonCounter
        disabled={quantity === 1}
        onClick={onSub}
        style={{ fontSize: '24px', lineHeight: '29px' }}
      >
        -
      </ButtonCounter>
      <Counter>{quantity}</Counter>
      <ButtonCounter
        onClick={onAdd}
        style={{ fontSize: '22px', lineHeight: '27px' }}
      >
        +
      </ButtonCounter>
    </CounterItemContainer>
  )
}
