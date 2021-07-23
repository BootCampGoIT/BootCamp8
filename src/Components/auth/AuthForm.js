import React, { Component } from "react";

const currentRoute = "/register";

class AuthForm extends Component {
  state = {
    email: "",
    password: "",
  };

  onHandleChange = (e) => {
    const { name, value } = e.target; //"email" //password
    this.setState({ [name]: value });
  };

  onHandleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    console.log({ email, password });
    this.setState({ email: "", password: "" });
  };

  render() {
    const { email, password } = this.state;
    return (
      <form className='authForm' onSubmit={this.onHandleSubmit}>
        <label className='authLabel'>
          Email
          <input
            type='text'
            name='email'
            value={email}
            onChange={this.onHandleChange}
          />
        </label>
        <label className='authLabel'>
          Password
          <input
            type='text'
            name='password'
            value={password}
            onChange={this.onHandleChange}
          />
        </label>
        <button type='submit'>
          {currentRoute === "/register" ? "Register" : "Login"}
        </button>
      </form>
    );
  }
}

export default AuthForm;
