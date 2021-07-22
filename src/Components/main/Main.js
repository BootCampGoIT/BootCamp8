import React from "react";
import ProductsList from "../products/ProductsList";
import Section from "../section/Section";
import { MainStyled } from "./MainStyled";

const Main = () => {
  return (
    <MainStyled>
      <Section title='Tools'>
        <ProductsList category='tools' />
      </Section>
      <Section title='Toys'>
        <ProductsList category='toys' />
      </Section>
    </MainStyled>
  );
};

export default Main;
