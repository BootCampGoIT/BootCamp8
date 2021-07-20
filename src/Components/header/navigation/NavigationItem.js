import propTypes from "prop-types";
import React from "react";
// import { darkColors } from "../../../styles/colors";
import { StyledListItem } from "./NavigationListItemStyled";

const NavigationItem = ({ item, colors }) => {
  return (
    <StyledListItem colors={colors}>
      <a href='/#' className='navigationItemAnchor'>
        {item}
      </a>
    </StyledListItem>
  );
};

NavigationItem.propType = {
  item: propTypes.String,
};

export default NavigationItem;
