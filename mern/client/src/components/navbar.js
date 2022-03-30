import React from "react";
import "bootstrap/dist/css/bootstrap.css"; // We import bootstrap to make our application look better.
import { NavLink } from "react-router-dom"; // We import NavLink to utilize the react router.

export default function Navbar() {
  return (
    
    <div>
      <nav className="App-Header">
        <NavLink className="navbar-brand" to="/bugs">
          <h1
            className="App-header"
            style={{
              backgroundColor: "#282c34",
              minHeight: "7vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "calc(10px + 2vmin)",
              color: "white",
            }}
          >
            Bug Tracker
          </h1>
        </NavLink>

        <br />
        <button style={{
              backgroundColor: "#282c34",
              border: "none",
              color: "white",
              margin: "5px",
              marginTop: "-10px",
              padding: "10px 32px",
              textAlign: "center",
              textDecoration: "none",
              display: "inline-block",
              fontSize: "16px",
              float: "right",
              borderRadius: "8px",
            }}>
              <NavLink style={{color:"white",textDecoration: "none",}} to="/create">
                Create New Bug
              </NavLink>
          </button>
          <button style={{
              backgroundColor: "#282c34",
              border: "none",
              color: "white",
              margin: "5px",
              marginTop: "-10px",
              padding: "10px 32px",
              textAlign: "center",
              textDecoration: "none",
              display: "inline-block",
              fontSize: "16px",
              float: "right",
              borderRadius: "8px",
            }}>
              <NavLink style={{color:"white",textDecoration: "none",}} to="/login">
                Login
              </NavLink>
          </button>
      </nav>
    </div>
  );
}
