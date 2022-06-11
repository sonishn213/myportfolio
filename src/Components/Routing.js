import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "../App";
import Home from "./Home";
import ViewProject from "./VIewProjectPage/ViewProject";
const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path=":id" element={<ViewProject />} />
      </Route>
    </Routes>
  );
};

export default Routing;
