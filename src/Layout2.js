import React from "react";
import Navbar, { NavbarLink } from "./Components/Navbar";

import { Outlet, useParams } from "react-router-dom";

function Layout2() {
  const { id } = useParams();
  console.log(id);
  return (
    <main className="relative">
      <Navbar>
        <NavbarLink to="/">Home</NavbarLink>
        <NavbarLink to="/#skills">Skills</NavbarLink>
        <NavbarLink to="/#projects">Projects</NavbarLink>
        <NavbarLink to="/#aboutme">About me</NavbarLink>
        <NavbarLink to="/#contact">Contact</NavbarLink>

        <NavbarLink to={"/" + id + "#screenshots"}>Screenshots</NavbarLink>
        <NavbarLink to={"/" + id + "#aboutproject"}>About Project</NavbarLink>
        <NavbarLink to="/resume">Resume</NavbarLink>
      </Navbar>
      <Outlet />
    </main>
  );
}

export default Layout2;
