import React from "react";
import { data } from "../../data/data";
import ProductsListItem from "./ProductsListItem";
import "./productsList.css";

const ProductsList = ({ category = "tools" }) => {
  return (
    <ul className='productList'>
      {data.products[category].map((product) => (
        <ProductsListItem {...product} key={product.id} />
      ))}
    </ul>
  );
};

// ProductsList.defaultProps = {
//   category: "tools",
// };

export default ProductsList;
