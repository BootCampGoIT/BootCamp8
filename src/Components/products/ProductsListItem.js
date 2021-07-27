import React from "react";
import { darkColors } from "../../styles/colors";

import { ProductsListItemStyled } from "./ProductsListItemStyled";

const ProductsListItem = ({
  name,
  image,
  description,
  price,
  id,
  addToCart,
  addPopular,
}) => {
  const addNewProduct = () => {
    addToCart({ name, price, id, quantity: 1 });
  };

  const onHandleClick = () => {
    addPopular({ id, name });
  };

  return (
    <ProductsListItemStyled colors={darkColors}>
      <h2 className={"productTitle"}>{name}</h2>
      <img
        src={image}
        alt={name}
        className='productImage'
        width='200'
        height='200'
      />
     
      <p className='productPrice'>
        <b>
          <em>
            <span>Price: </span>
          </em>
        </b>
        {price}
      </p>
      <div className='optionButtons'>
        <button
          type='button'
          className='button addButton'
          onClick={addNewProduct}>
          Add to cart
        </button>
        <button
          type='button'
          className='button detailsButton'
          onClick={onHandleClick}>
          Details
        </button>
      </div>
    </ProductsListItemStyled>
  );
};

export default ProductsListItem;
