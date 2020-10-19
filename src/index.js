import "~/src/scss/index.scss";
import App from "~/src/components/app/App";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
let mountNode = document.getElementById("app");

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  mountNode
);
