import React, { useRef, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
const Navbar = () => {
  // const styles = {
  //   color: "#FCA311",
  //   fontWeight: "500",
  //   borderBottomWidth: "solid 4px #FCA311",
  //   padding: "1.5rem 0",
  // };

  const mobileMenuRef = useRef(null);
  let mobileMenu = "";
  let width = 0;
  useEffect(() => {
    mobileMenu = mobileMenuRef.current;
    width = mobileMenu.clientWidth;

    mobileMenu.style.marginRight = -width + "px";
    mobileMenu.classList.remove("hidden");
  }, []);
  const toggleMenu = () => {
    mobileMenu = mobileMenuRef.current;
    if (!mobileMenu.classList.contains("shown")) {
      mobileMenu.style.transition = "all 0.3s ease-in-out";
      // mobileMenu.style = "translateX(" + -width + "px)";
      mobileMenu.style.marginRight = 0;
      mobileMenu.classList.add("shown");
    } else {
      mobileMenu.classList.remove("shown");
      mobileMenu.style.marginRight = -width + "px";
    }
  };
  return (
    <>
      <section className="shadow-md fixed w-full bg-white  z-10  md:block hidden">
        <nav className="fluid-container flex space-x-10  text-lg  text-s-dark-blue cursor-pointer  w-full">
          <p className="py-6 active:text-s-dark-blue hover:text-s-orange">
            <NavLink to="/">Home</NavLink>
          </p>
          <p className="py-6 active:text-s-dark-blue hover:text-s-orange">
            <NavLink to="#skills">Skills</NavLink>
          </p>
          <p className="py-6 active:text-s-dark-blue hover:text-s-orange">
            <NavLink to="#projects">Projects</NavLink>
          </p>
          <p className="py-6 active:text-s-dark-blue hover:text-s-orange">
            <NavLink to="#aboutme">About me</NavLink>
          </p>
          <p className="py-6 active:text-s-dark-blue hover:text-s-orange">
            <NavLink to="#contact">Contact</NavLink>
          </p>
          <p className="py-6 active:text-s-dark-blue hover:text-s-orange">
            <NavLink to="/">Resume</NavLink>
          </p>
        </nav>
      </section>
      <section className="fixed bottom-0 z-30 right-0 ">
        <nav
          ref={mobileMenuRef}
          className="bg-white shadow-xl mb-16 p-4 pr-8 rounded-lg  "
        >
          <p className="py-2 active:text-s-dark-blue hover:text-s-orange">
            <NavLink to="/">Home</NavLink>
          </p>
          <p className="py-2 active:text-s-dark-blue hover:text-s-orange">
            <NavLink to="#skills">Skills</NavLink>
          </p>
          <p className="py-2 active:text-s-dark-blue hover:text-s-orange">
            <NavLink to="#projects">Projects</NavLink>
          </p>
          <p className="py-2 active:text-s-dark-blue hover:text-s-orange">
            <NavLink to="#aboutme">About me</NavLink>
          </p>
          <p className="py-2 active:text-s-dark-blue hover:text-s-orange">
            <NavLink to="#contact">Contact</NavLink>
          </p>
          <p className="py-2 active:text-s-dark-blue hover:text-s-orange">
            <NavLink to="/">Resume</NavLink>
          </p>
        </nav>
        <div className="relative">
          <div
            onClick={toggleMenu}
            className="absolute right-0 bottom-0 bg-s-orange p-3 pt-5 pl-5 rounded-tl-full text-white cursor-pointer active:bg-s-dark-blue"
          >
            <div className="text-2xl">
              <IoMdMenu />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
