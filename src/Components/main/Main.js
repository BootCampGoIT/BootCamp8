import React from "react";
import Section from "../section/Section";

const data1 = {
  title: "Information",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibusodit vel expedita mollitia quae est, unde officia porro maiores nisi!",
};

const data2 = {
  title: "contacts",
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantiumquod, porro impedit commodi totam sed molestias adipisci velit. Velvoluptate tenetur doloremque reiciendis blanditiis fugiat debitis,porro nesciunt a voluptates? Quo aut voluptas in quia, obcaecatiprovident eligendi fugit iure. Dolorum fugiat veniam eligendi abmolestias harum voluptate natus quibusdam!",
};

const Main = () => {
  return (
    <main>
      <Section description={data1.description}>
        <button>Click me!</button>
      </Section>

      <Section {...data2}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui obcaecati
          explicabo id quis optio cumque maxime ipsa aliquam quae facilis!
        </p>
      </Section>
    </main>
  );
};

export default Main;
