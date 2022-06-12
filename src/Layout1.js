import React from "react";
import Navbar, { NavbarLink } from "./Components/Navbar";

import { Outlet } from "react-router-dom";

function Layout1() {
  return (
    <main className="relative">
      <Navbar>
        <NavbarLink to="/">Home</NavbarLink>
        <NavbarLink to="#skills">Skills</NavbarLink>
        <NavbarLink to="#projects">Projects</NavbarLink>
        <NavbarLink to="#aboutme">About me</NavbarLink>
        <NavbarLink to="#contact">Contact</NavbarLink>
        <NavbarLink to="/">Resume</NavbarLink>
      </Navbar>
      <Outlet />
    </main>
  );
}

export default Layout1;
