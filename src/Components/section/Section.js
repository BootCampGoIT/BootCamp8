import React from "react";
import { darkColors } from "../../styles/colors";
import { SectionStyled } from "./SectonStyled";


const Section = ({ title, children }) => {
  return (
    <SectionStyled colors={darkColors}>
      <h2 className='sectionTitle'>{title || "No title"}</h2>
      {children}
    </SectionStyled>
  );
};

export default Section;
