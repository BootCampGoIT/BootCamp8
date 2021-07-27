import axios from "axios";
import React, { Component, useState, useEffect } from "react";
import { createCopy } from "../../utils/deepCopy";
import { ProductFormStyled } from "./ProductFormStyled";

const categories = ["Tools", "Toys"];

const INITIAL_STATE = {
  name: "",
  image: "",
  description: "",
  price: 0,
  category: categories[0],
  isSale: false,
  isAddData: false,
  changed: false,
};

function toDataURL(element) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(element.files[0]);
  });
}

const ProductForm = ({ addNewProduct }) => {
  const [state, setState] = useState(INITIAL_STATE);
  const onHandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://shopbc8-30b11-default-rtdb.firebaseio.com/products.json",
        state
      );
      addNewProduct({ ...state, id: response.data.name });
    } catch (error) {
      setState((prev) => ({ ...prev, error: error.response.data.error }));
    }

    setState({ ...INITIAL_STATE });
  };

  const onHandleChange = async (e) => {
    const { name, value, checked, type } = e.target;
    if (type === "checkbox") {
      setState((prev) => ({ ...prev, [name]: checked }));
      return;
    }

    if (type === "file") {
      const result = await toDataURL(e.target);
      console.log("result :>> ", result);
      setState((prev) => ({ ...prev, [name]: result }));
      return;
    }
    setState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <ProductFormStyled>
      <form onSubmit={onHandleSubmit} className='productForm'>
        <label className='productLabel'>
          Name
          <input
            type='text'
            name='name'
            value={state.name}
            onChange={onHandleChange}
            className='productInput'
          />
        </label>
        <label className='productLabel'>
          Image
          <input
            type='file'
            name='image'
            onChange={onHandleChange}
            className='productInput'
          />
        </label>
        <label className='productLabel'>
          Description
          <textarea
            name='description'
            cols='30'
            rows='10'
            value={state.description}
            onChange={onHandleChange}
            className='productArea'
          />
        </label>
        <label className='productLabel'>
          Price
          <input
            type='number'
            name='price'
            value={state.price}
            onChange={onHandleChange}
            className='productInput'
          />
        </label>
        <label className='productLabel'>
          Category
          <select
            name='category'
            value={state.category}
            onChange={onHandleChange}
            className='productSelect'>
            {categories.map((category) => (
              <option value={category.toLowerCase()} key={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
        <label className='advFormLabelCheckBox'>
          Is sale
          <input
            type='checkbox'
            name='isSale'
            checked={state.isSale}
            onChange={onHandleChange}
            className='advFormCheckBox '
          />
        </label>

        <button type='submit' className='productButton'>
          Add product
        </button>
      </form>
    </ProductFormStyled>
  );
};

export default ProductForm;
