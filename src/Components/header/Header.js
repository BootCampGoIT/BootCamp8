import React, { useState } from "react";
import Navigation from "./navigation/Navigation";

import { HeaderStyled } from "./HeaderStyled";
import { darkColors, lightColors } from "../../styles/colors";

const Header = ({ navItems }) => {
  const colors = { darkColors, lightColors };
  const [state, setState] = useState("darkColors");

  const setColor = () => {
    state === "darkColors" ? setState("lightColors") : setState("darkColors");
  };
  
  return (
    <HeaderStyled colors={colors[state]}>
      <h2 className='headerLogo'>Shop</h2>
      <nav>
        <Navigation navItems={navItems} colors={colors[state]}/>
      </nav>
      <button type='button' className='button' onClick={setColor}>
        Change color
      </button>
    </HeaderStyled>
  );
};

export default Header;
