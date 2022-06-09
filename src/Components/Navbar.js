import React from "react";

const Navbar = () => {
  return (
    <section className="shadow-md">
      <nav className="fluid-container flex space-x-10  text-lg  text-s-dark-blue cursor-pointer">
        <p className="text-s-orange font-medium border-b-4 border-b-s-orange py-6">
          Home
        </p>
        <p className="py-6">Skills</p>
        <p className="py-6">Projects</p>
        <p className="py-6">About me</p>
        <p className="py-6">Contact</p>
        <p className="py-6">Resume</p>
      </nav>
    </section>
  );
};

export default Navbar;
