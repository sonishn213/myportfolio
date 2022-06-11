import React from "react";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <main className="relative">
      <Navbar />
      <Outlet />
    </main>
  );
}

export default App;
