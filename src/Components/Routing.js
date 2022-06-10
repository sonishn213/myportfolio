import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "../App";
import Home from "./Home";
const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />

        {/* <Route path=":id" element={<ViewBlog />} /> */}
      </Route>
    </Routes>
  );
};

export default Routing;
