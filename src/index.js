import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  //renders the main app component
  // Puts it in an element with the id of root
  <App />,
  document.getElementById("root")
);
registerServiceWorker();
