import axios from "axios";
import React, { Component } from "react";
import ProductForm from "../admin/ProductForm";
import AuthForm from "../auth/AuthForm";
import Cart from "../cart/Cart";
import Modal from "../modal/Modal";
import ProductsList from "../products/ProductsList";
import Section from "../section/Section";
import { MainStyled } from "./MainStyled";

class Main extends Component {
  state = {
    products: [],
    cart: [],
    visited: [],
    isFormOpen: false,
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

  componentDidUpdate(prevProps, prevState) {
    // console.log("componentDidUpdate");
  }

  addPopular = async (product) => {
    // console.log("post id");
    const response = await axios.patch(
      `https://shopbc8-30b11-default-rtdb.firebaseio.com/products/${product.id}.json`,
      {
        popular:
          this.state.products.find((item) => item.id === product.id).popular +
          1,
      }
    );

    this.setState((prev) => ({
      products: prev.products.map((item) =>
        item.id === product.id ? { ...item, popular: item.popular + 1 } : item
      ),
    }));
  };

  addNewProduct = (product) => {
    //{name, price, id}
    this.setState((prev) => ({
      products: [...prev.products, product],
      isFormOpen: !prev.isFormOpen,
    }));
  };

  addToCart = (product) => {
    this.addPopular(product);
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

  openEditForm = () => {
    this.setState((prev) => ({ isFormOpen: !prev.isFormOpen }));
  };

  render() {
    const { isFormOpen } = this.state;
    return (
      <MainStyled>
        <button type='button' onClick={this.openEditForm}>
          {isFormOpen ? "Close" : "Open"} edit form
        </button>
        {isFormOpen && (
          <Modal isOpen={isFormOpen} hideModal={this.openEditForm}>
            <Section title='Administration'>
              <ProductForm addNewProduct={this.addNewProduct} />
            </Section>
          </Modal>
        )}
        {/* <Section title='Authorization'>
          <AuthForm />
        </Section> */}
        {/* <Section title='Tools'>
          <ProductsList
            products={this.state.products}
            addToCart={this.addToCart}
            addPopular={this.addPopular}
          />
        </Section>
        <Section title='Cart'>
          <Cart
            cart={this.state.cart}
            removeFromCart={this.removeFromCart}
            addItem={this.addItem}
            removeItem={this.removeItem}
          />
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
          <ProductsList
            category='tools'
            addToCart={this.addToCart}
            addPopular={this.addPopular}
          />
        </Section>
        <Section title='Toys'>
          <ProductsList
            category='toys'
            addToCart={this.addToCart}
            addPopular={this.addPopular}
          />
        </Section> */}
      </MainStyled>
    );
  }
}

export default Main;
