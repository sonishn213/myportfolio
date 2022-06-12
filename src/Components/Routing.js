import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout1 from "../Layout1";
import Layout2 from "../Layout2";
import Home from "./Home";
import ViewProject from "./VIewProjectPage/ViewProject";
const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout1 />}>
        <Route index element={<Home />} />
      </Route>
      <Route path=":id" element={<Layout2 />}>
        <Route index element={<ViewProject />} />
      </Route>
    </Routes>
  );
};

export default Routing;
