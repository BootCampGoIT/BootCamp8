import React from "react";
import Navigation from "./navigation/Navigation";

const Header = ({ navItems }) => {
  return (
    <header>
      <h2>Shop</h2>
      <nav>
        <Navigation navItems={navItems} />
      </nav>
    </header>
  );
};

export default Header;
