import PropTypes from "prop-types";
import React from "react";
import { data } from "../../../data/data";
import { NavigationList } from "./NavigationStyled";

const Navigation = () => {
  return (
    <NavigationList>
      <ul className='navigationList'>
        {data.header.map((headerItem) => (
          <li key={headerItem.id} className='navigationListItem'>
            <a href={`${headerItem.name}`} className='navigationListItemAnchor'>
              {headerItem.name}
            </a>
          </li>
        ))}
      </ul>
    </NavigationList>
  );
};

export default Navigation;
