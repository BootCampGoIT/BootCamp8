import axios from "axios";
import React, { Component } from "react";

import { createNewAdv } from "../../services/productsAPI/products";

import { ProductFormStyled } from "./ProductFormStyled";

const categories = ["tools", "toys", "cars"];

const INITIAL_STATE = {
  name: "",
  image: "",
  description: "",
  price: 0,
  category: categories[0],
  isSale: false,
  isLoading: false,
  error: ""
};

function toDataURL(element) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(element.files[0]);
  });
}

class ProductForm extends Component {
  state = { ...INITIAL_STATE };

  onHandleSubmit = async (e) => {
    e.preventDefault();
    const { name, image, description, price, category, isSale } = this.state;
    this.setState({ isLoading: true });
    try {
      const response = await createNewAdv({
        name,
        image,
        description,
        price,
        category,
        isSale,
      });
      this.props.addNewProduct({ ...this.state, id: response.data.name });
      this.setState({ ...INITIAL_STATE });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  onHandleChange = async (e) => {
    const { name, value, checked, type } = e.target;
    if (type === "checkbox") {
      this.setState({ [name]: checked });
      return;
    }

    if (type === "file") {
      const result = await toDataURL(e.target);
      this.setState({ [name]: result });
      return;
    }
    this.setState({ [name]: value });
  };
  render() {
    const { name, description, price, category, isSale, isLoading } =
      this.state;
    return (
      <ProductFormStyled>
        {isLoading && <p>...loading</p>}
        <form onSubmit={this.onHandleSubmit} className='productForm'>
          <label className='productLabel'>
            Name
            <input
              type='text'
              name='name'
              value={name}
              onChange={this.onHandleChange}
              className='productInput'
            />
          </label>
          <label className='productLabel'>
            Image
            <input
              type='file'
              name='image'
              onChange={this.onHandleChange}
              className='productInput'
            />
          </label>
          <label className='productLabel'>
            Description
            <textarea
              name='description'
              cols='30'
              rows='10'
              value={description}
              onChange={this.onHandleChange}
              className='productArea'
            />
          </label>
          <label className='productLabel'>
            Price
            <input
              type='number'
              name='price'
              value={price}
              onChange={this.onHandleChange}
              className='productInput'
            />
          </label>
          <label className='productLabel'>
            Category
            <select
              name='category'
              value={category}
              onChange={this.onHandleChange}
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
              checked={isSale}
              onChange={this.onHandleChange}
              className='advFormCheckBox '
            />
          </label>

          <button type='submit' className='productButton'>
            Add product
          </button>
        </form>
      </ProductFormStyled>
    );
  }
}

export default ProductForm;
