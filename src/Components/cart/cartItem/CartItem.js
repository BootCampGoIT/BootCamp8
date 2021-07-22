import React from "react";
import { CartItemStyled } from "./CartItemStyled";
import sprite from "../../../icons/cart/cart-sprite.svg";
import { darkColors } from "../../../styles/colors";

const CartItem = ({
  id,
  name,
  price,
  quantity,
  removeFromCart,
  addItem,
  removeItem,
}) => {
  const deleteItem = () => {
    removeFromCart(id);
  };

  const add = () => {
    addItem(id);
  };

  const remove = () => {
    removeItem(id);
  };
  return (
    <CartItemStyled key={id} colors={darkColors}>
      <h3 className='cartItemTitle'>{name}</h3>
      <p className='cartItemPrice'>{price}</p>
      <div className='options'>
        <button type='button' disabled={quantity === 1} onClick={remove}>
          <svg className='buttonIcon'>
            <use href={sprite + "#icon-minus"} />
          </svg>
        </button>
        <p className='cartItemQuantity'>{quantity}</p>
        <button type='button' onClick={add}>
          <svg className='buttonIcon'>
            <use href={sprite + "#icon-plus"} />
          </svg>
        </button>

        <button type='button' onClick={deleteItem}>
          <svg className='buttonIcon'>
            <use href={sprite + "#icon-cross"} />
          </svg>
        </button>
      </div>
    </CartItemStyled>
  );
};

export default CartItem;
