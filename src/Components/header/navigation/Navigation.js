import PropTypes from "prop-types";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import NavigationItem from "./NavigationItem";
import { NavigationList } from "./NavigationStyled";

const Navigation = ({ navItems, colors }) => {
  return (
    <NavigationList>
      {navItems.map(({ name }) => (
        <NavigationItem item={name} key={uuidv4()} colors={colors} />
      ))}
    </NavigationList>
  );
};

Navigation.propTypes = {
  navItems: PropTypes.arrayOf(PropTypes.object),
};

export default Navigation;
