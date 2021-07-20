import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import { data } from "./data/data";
import "./index.module.css";
import "modern-normalize/modern-normalize.css";

ReactDOM.render(
  <App navItems={data.header} />,
  document.getElementById("root")
);
