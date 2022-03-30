import React from "react";
import "bootstrap/dist/css/bootstrap.css"; // We import bootstrap to make our application look better.
import { NavLink } from "react-router-dom"; // We import NavLink to utilize the react router.

export default function Navbar() {
  return (
    <div>
      <NavLink className="navbar-header" to="/">
        <h1>Home</h1>
      </NavLink>

      <nav className="App-Header">
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
  );
}
