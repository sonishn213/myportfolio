import React from "react";
import ReactDOM from "react-dom/client";
import "./css/output.css";
import { BrowserRouter as Router } from "react-router-dom";

import Routing from "./Components/Routing";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routing />
    </Router>
  </React.StrictMode>
);
