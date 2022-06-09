import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaPizzaSlice } from "react-icons/fa";

const Navbar = ({ toggle }) => {

  return (
    <div className="nav">
      <div className="navLink">
        <Link to="/">Pizza</Link>
      </div>
      <div className="navIcon">
        <p>Menu</p>
        <i onClick={toggle}>
          <FaPizzaSlice />
        </i>
      </div>
    </div>
  );
};

export default Navbar;
