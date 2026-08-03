import React from 'react'

const Cart = ({ cartItems }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {/* TODO: Include items here in li tags with text 'ITEM.NAME is in your cart.' */}
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <li key={index}>{item.name} is in your cart.</li>
          ))
        ) : (
          <li>Your cart is empty.</li>
        )}
      </ul>
    </div>
  )
}

export default Cart
