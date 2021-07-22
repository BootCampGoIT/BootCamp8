import React from "react";
import { darkColors } from "../../styles/colors";
import CartItem from "./cartItem/CartItem";
import { CartStyled } from "./CartStyled";

const Cart = ({ cart, removeFromCart, addItem, removeItem }) => {
  const getTotalPrice = () => {
    return cart.reduce(
      (acc, product) => (acc += product.price * product.quantity),
      0
    );
  };
  return (
    <CartStyled colors={darkColors}>
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
      {getTotalPrice() ? (
        <p className='totalCount'>
          <span>Total:</span> <span>{getTotalPrice()} UAH</span>
        </p>
      ) : (
        <p>No products!</p>
      )}
    </CartStyled>
  );
};

export default Cart;
