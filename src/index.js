import React from "react";
import ReactDOM from "react-dom";
import {
  HashRouter as Router
} from "react-router-dom";
import App from "./App";

const rootElement = document.getElementById("content");

ReactDOM.render(
  <React.StrictMode>
    <Router hashType="hashbang">
      <App />
    </Router>
  </React.StrictMode>,
  rootElement
);
