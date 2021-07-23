import axios from "axios";
import React, { Component } from "react";
import { ProductFormStyled } from "./ProductFormStyled";

const categories = ["Tools", "Toys"];

const INITIAL_STATE = {
  name: "",
  image: "",
  description: "",
  price: 0,
  category: categories[0],
  isSale: false,
};

function toDataURL(element) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(element.files[0]);
  });
}

class ProductForm extends Component {
  state = { ...INITIAL_STATE, error: "" };

  onHandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://shopbc8-30b11-default-rtdb.firebaseio.com/products.json",
        this.state
      );
      this.props.addNewProduct({ ...this.state, id: response.data.name });
    } catch (error) {
      //   console.log(error.response.data.error);
      this.setState({ error: error.response.data.error });
    }

    this.setState({ ...INITIAL_STATE });
  };

  onHandleChange = async (e) => {
    const { name, value, checked, type } = e.target;
    if (type === "checkbox") {
      this.setState({ [name]: checked });
      return;
    }

    if (type === "file") {
      const result = await toDataURL(e.target);
      console.log("result :>> ", result);
      this.setState({ [name]: result });
      return;
    }
    this.setState({ [name]: value });
  };

  render() {
    const { name, image, description, price, category, isSale } = this.state;
    return (
      <ProductFormStyled>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onHandleSubmit} className='productForm'>
          <label>
            Name
            <input
              type='text'
              name='name'
              value={name}
              onChange={this.onHandleChange}
            />
          </label>
          <label>
            Image
            <input
              type='file'
              name='image'
              onChange={this.onHandleChange}
            />
          </label>
          <label>
            Description
            <textarea
              name='description'
              cols='30'
              rows='10'
              value={description}
              onChange={this.onHandleChange}
            />
          </label>
          <label>
            Price
            <input
              type='number'
              name='price'
              value={price}
              onChange={this.onHandleChange}
            />
          </label>
          <label>
            Category
            <select
              name='category'
              value={category}
              onChange={this.onHandleChange}>
              {categories.map((category) => (
                <option value={category.toLowerCase()} key={category}>
                  {category}
                </option>
              ))}
            </select>
          </label>
          <label>
            Is sale
            <input
              type='checkbox'
              name='isSale'
              checked={isSale}
              onChange={this.onHandleChange}
            />
          </label>

          <button type='submit'>Add product</button>
        </form>
      </ProductFormStyled>
    );
  }
}

export default ProductForm;

// const user = {
//   "name": "Alex",
//   "age": 30,
// };
// console.log(user.name);

// console.log(user["name"]); //Alex

// console.log(user.age);

// const getInfo = (key) => {
//   console.log(user[key]);
// };

// getInfo("name");
// getInfo("age");
