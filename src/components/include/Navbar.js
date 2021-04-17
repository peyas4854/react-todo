import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
        <a className="navbar-brand" href="#">
          React
        </a>
        <ul className="navbar-nav ml-auto">
          <li>
            <Link to={"/"} className="nav-link">
              {" "}
              Home{" "}
            </Link>
          </li>
          <li>
            <Link to={"/contact"} className="nav-link">
              Contact
            </Link>
          </li>
          <li>
            <Link to={"/about"} className="nav-link">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
