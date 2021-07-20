import React from "react";
import ProductsList from "../products/ProductsList";
import Section from "../section/Section";

const Main = () => {
  return (
    <main>
      <Section title='Tools'>
        <ProductsList category='tools' />
      </Section>
      <Section title='Toys'>
        <ProductsList category='toys' />
      </Section>
    </main>
  );
};

export default Main;
