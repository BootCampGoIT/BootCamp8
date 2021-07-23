import axios from "axios";
import React, { Component } from "react";
import ProductForm from "../admin/ProductForm";
import AuthForm from "../auth/AuthForm";
import Cart from "../cart/Cart";
import ProductsList from "../products/ProductsList";
import Section from "../section/Section";
import { MainStyled } from "./MainStyled";

class Main extends Component {
  state = {
    products: [],
    cart: [],
    visited: [],
  };
  async componentDidMount() {
    const response = await axios.get(
      "https://shopbc8-30b11-default-rtdb.firebaseio.com/products.json"
    );
    const data = Object.keys(response.data).map((item) => ({
      ...response.data[item],
      id: item,
    }));

    this.setState({ products: data });
  }

  addNewProduct = (product) => {
    //{name, price, id}
    this.setState((prev) => ({ products: [...prev.products, product] }));
  };

  addToCart = (product) => {
    if (this.state.cart.some((cartItem) => cartItem.id === product.id)) {
      this.setState((prev) => ({
        cart: prev.cart.map((cartItem) =>
          cartItem.id === product.id
            ? {
                ...cartItem,
                quantity: cartItem.quantity + 1,
              }
            : cartItem
        ),
      }));
      return;
    }
    this.setState((prev) => ({
      cart: [...prev.cart, product],
    }));
  };

  removeFromCart = (id) => {
    this.setState((prev) => ({
      cart: prev.cart.filter((product) => product.id !== id),
      visited: [
        ...prev.visited,
        prev.cart.find((product) => product.id === id),
      ],
    }));
  };

  addItem = (id) => {
    this.setState((prev) => ({
      cart: prev.cart.map((cartItem) =>
        cartItem.id === id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ),
    }));
  };

  removeItem = (id) => {
    this.setState((prev) => ({
      cart: prev.cart.map((cartItem) =>
        cartItem.id === id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      ),
    }));
  };

  render() {
    return (
      <MainStyled>
        <Section title='Administration'>
          <ProductForm addNewProduct={this.addNewProduct} />
        </Section>
        {/* <Section title='Authorization'>
          <AuthForm />
        </Section> */}

        {/* <Section title='Cart'>
          <Cart
            cart={this.state.cart}
            removeFromCart={this.removeFromCart}
            addItem={this.addItem}
            removeItem={this.removeItem}
          />
        </Section>

        <Section title='Tools'>
          <ProductsList category='tools' addToCart={this.addToCart} />
        </Section>
        <Section title='Toys'>
          <ProductsList category='toys' addToCart={this.addToCart} />
        </Section> */}
      </MainStyled>
    );
  }
}

export default Main;
