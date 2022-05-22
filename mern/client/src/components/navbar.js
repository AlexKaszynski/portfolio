import React from "react";
import "../myStyle.css"; // We import bootstrap to make our application look better.
import logo from "../images/Tetra.png";
import { NavLink } from "react-router-dom"; // We import NavLink to utilize the react router.
//  <div className="nav-home"> Home </div>

export default function Navbar() {
  return (
    <header>
      <div className="navbar-container" id="nav-container">
        <img
          src={logo}
          className="nav-logo"
          alt="Home-Logo-Made-by-Dmitriy-Malayev"
        />

        <nav className="nav">
          <ul>
            <NavLink to="/">
              <li>Home</li>
            </NavLink>

            <NavLink to="/about">
              <li>About</li>
            </NavLink>

            <NavLink to="/gallery">
              <li>Gallery</li>
            </NavLink>

            <NavLink to="/projects">
              <li>Projects</li>
            </NavLink>

            <NavLink to="/contact">
              <li>Contact</li>
            </NavLink>

            <NavLink to="/placeholder">
              <li>Place-Holder</li>
            </NavLink>
          </ul>
        </nav>
      </div>
    </header>
  );
}
