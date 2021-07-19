import PropTypes from "prop-types";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import NavigationItem from "./NavigationItem";

const Navigation = ({ navItems }) => {
  return (
    <ul className='navigationList'>
      {navItems.map(({ name }) => (
        <NavigationItem item={name} key={uuidv4()} />
      ))}
    </ul>
  );
};

Navigation.propTypes = {
  navItems: PropTypes.arrayOf(PropTypes.object),
};

export default Navigation;
