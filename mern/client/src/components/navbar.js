import React from "react";
import "../myStyle.css"; // We import bootstrap to make our application look better.
import { NavLink } from "react-router-dom"; // We import NavLink to utilize the react router.

export default function Navbar() {
  return (
    <header style={{position: "fixed", top: 0, width: "100%"}}>
      
    <div className="navbar-container">
      <NavLink to="/">
        <div className="nav-home">Home</div>
      </NavLink>

      <nav className="nav">
        <ul>
          <NavLink to="/about">
            <li>About Me</li>
          </NavLink>

          <NavLink to="/gallery">
            <li>Gallery</li>
          </NavLink>

          <NavLink to="/projects">
            <li>Projects</li>
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
