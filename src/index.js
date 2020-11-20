import "~/src/scss/index.scss";
import App from "~/src/components/app/App";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { resetContext, getContext } from "kea";
import { Provider } from "react-redux";

resetContext({
  // 👈 add this
  createStore: {
    // options for redux (e.g. middleware, reducers, ...)
  },
  plugins: [
    // additional kea plugins
  ],
});

const mountNode = document.getElementById("app");

const mainContent = (
  <Provider store={getContext().store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

ReactDOM.render(mainContent, mountNode);
