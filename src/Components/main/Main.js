import axios from "axios";
import React, { Component } from "react";
import {
  getProductByCategory,
  getProducts,
  removeProductByID,
} from "../../services/productsAPI/products";
import ProductForm from "../admin/ProductForm";
import AuthForm from "../auth/AuthForm";
import Cart from "../cart/Cart";
import Modal from "../modal/Modal";
import ProductsList from "../products/ProductsList";
import Section from "../section/Section";
import { MainStyled } from "./MainStyled";

class Main extends Component {
  state = {
    products: {
      tools: [],
      cars: [],
    },
    cart: [],
    visited: [],
  };

  // {name, price, decr, category}

  async componentDidMount() {
    try {
      const products = await getProducts();
      this.setState({ products: products });
    } catch (error) {
      console.log(error);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log("componentDidUpdate");
  }
  addNewProduct = (product) => {
    if (this.state.products.hasOwnProperty(product.category)) {
      this.setState((prev) => ({
        products: {
          ...prev.products,
          [product.category]: [...prev.products[product.category], product],
        },
      }));
    } else {
      this.setState((prev) => ({
        products: { ...prev.products, [product.category]: [product] },
      }));
    }
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
    const { products } = this.state;
    return (
      <MainStyled>
        <button
          id='-MfbM5ZoqsCUi820A67x'
          data-category='cars'
          onClick={(e) =>
            removeProductByID(e.target.dataset.category, e.target.id)
          }>
          Delete
        </button>
        <Section title='Administration'>
          <ProductForm addNewProduct={this.addNewProduct} />
        </Section>

        {Object.keys(products).map((category) => (
          <Section title={category} key={category}>
            <ProductsList
              products={this.state.products[category]}
              addToCart={this.addToCart}
            />
          </Section>
        ))}

        {/* ======================= */}

        {/* <Section title='Authorization'>
          <AuthForm />
        </Section> */}
        <Section title='Cart'>
          <Cart
            cart={this.state.cart}
            removeFromCart={this.removeFromCart}
            addItem={this.addItem}
            removeItem={this.removeItem}
          />
        </Section>
        {/* 

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

const getImages = async (query, page = 1) => {
  try {
    const response = await axios.get(
      `https://pixabay?query=${query}&page=${page}`
    );
    return response.data;
  } catch (error) {}
};

const state = {
  images: [],
  page: 1,
  query: "cat",
};

const find = () => {
  getImages(state.query).then((data) => {
    state.images = [...data];
    state.page = 2;
  });
};

const loadMore = () => {
  getImages(state.query, state.page).then((data) => {
    state.images = [...state.images, ...data];
    state.page += 1;
  });
};
