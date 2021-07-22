import React from "react";
import CartItem from "./cartItem/CartItem";

const Cart = ({ cart, removeFromCart, addItem, removeItem }) => {
  return (
    <>
      <ul className='cartList'>
        {cart.map((product) => (
          <CartItem
            {...product}
            key={product.id}
            removeFromCart={removeFromCart}
            addItem={addItem}
            removeItem={removeItem}
          />
        ))}
      </ul>
      <hr />
      <p className='totalCount'>
        Total: {cart.reduce((acc, product) => (acc += product.price), 0)}
      </p>
    </>
  );
};

export default Cart;
