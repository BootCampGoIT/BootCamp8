import React from "react";
import { data } from "../../data/data";
import ProductsListItem from "./ProductsListItem";
import "./productsList.css";

const ProductsList = ({ category = "tools", addToCart }) => {
  return (
    <>
      <ul className='productList'>
        {data.products[category].map((product) => (
          <ProductsListItem {...product} key={product.id} addToCart={addToCart}/>
        ))}
      </ul>
    </>
  );
};

export default ProductsList;
