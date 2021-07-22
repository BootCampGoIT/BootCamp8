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
}) => {
  const addNewProduct = () => {
    addToCart({ name, price, id, quantity: 1 });
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
      <p className='productDescription'>
        <b>
          <em>
            <span>Decription: </span>
          </em>
        </b>
        {description}
      </p>
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
        <button type='button' className='button detailsButton'>
          Details
        </button>
      </div>
    </ProductsListItemStyled>
  );
};

export default ProductsListItem;
