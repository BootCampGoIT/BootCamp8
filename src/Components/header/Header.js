import React, { Component } from "react";

import Navigation from "./navigation/Navigation";

import { HeaderStyled } from "./HeaderStyled";
import { darkColors, lightColors } from "../../styles/colors";
import sprite from "../../icons/header/header-sprite.svg";
import Modal from "../modal/Modal";

class Header extends Component {
  state = {
    width: window.innerWidth,
    breakPoint: 768,
    isModalOpen: false,
    colors: { darkColors, lightColors },
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResizeWindow);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResizeWindow);
  }

  handleResizeWindow = () => this.setState({ width: window.innerWidth });

  setModalState = () =>
    this.setState((prev) => ({ isModalOpen: !prev.isModalOpen }));

  render() {
    const { width, breakPoint, isModalOpen } = this.state;
    return (
      <HeaderStyled colors={this.state.colors.darkColors}>
        <svg className='headerIcon'>
          <use href={sprite + "#icon-home"} />
        </svg>

        {width < breakPoint ? (
          <svg className='headerIcon' onClick={this.setModalState}>
            <use href={sprite + "#icon-menu"} />
          </svg>
        ) : (
          <Navigation
            navItems={this.props.navItems}
            colors={this.state.colors.darkColors}
          />
        )}

        {isModalOpen && (
          <Modal hideModal={this.setModalState}>
            <Navigation
              navItems={this.props.navItems}
              colors={this.state.colors.darkColors}
            />
          </Modal>
        )}

        {/* <button type='button' className='button' onClick={setColor}>
        Change color
      </button> */}
      </HeaderStyled>
    );
  }
}

export default Header;
