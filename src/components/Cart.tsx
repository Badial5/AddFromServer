import React from 'react'

interface Props {
    cartItems: string[];
    onClear: () => void;
    onAdd: () => void;
}

const Cart = ({cartItems, onClear, onAdd}: Props) => {
  return (
    <div>
      Cart: 

      <ul>
        {cartItems.map(item => <li key={item}>{item}</li> )}
      </ul>

      <button onClick={onClear}>Clear</button>
      <button onClick={onAdd}>Revert</button>
    </div>
  )
}

export default Cart
