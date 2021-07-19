import propTypes from "prop-types";
import React from "react";

const NavigationItem = ({ item }) => {
  return (
    <li className='navigationItem'>
      <a href='/#' className='anchor'>
        {item}
      </a>
    </li>
  );
};

NavigationItem.propType = {
  item: propTypes.String,
};

export default NavigationItem;
