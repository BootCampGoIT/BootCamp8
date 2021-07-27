import React from "react";
import { data } from "../../data/data";
import ProductsListItem from "./ProductsListItem";
import "./productsList.css";

const ProductsList = ({
  category = "tools",
  addToCart,

  products,
}) => {
  return (
    <>
      <ul className='productList'>
        {products.map((product) => (
          <ProductsListItem
            {...product}
            key={product.id}
            addToCart={addToCart}
       
          />
        ))}
      </ul>
    </>
  );
};

export default ProductsList;
