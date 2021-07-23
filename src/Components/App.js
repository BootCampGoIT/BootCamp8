import React from "react";
import Header from "./header/Header";
import Main from "./main/Main";

const App = ({ navItems }) => {
  return (
    <>
      <Header navItems={navItems} />
      <Main />
    </>
  );
};

export default App;
