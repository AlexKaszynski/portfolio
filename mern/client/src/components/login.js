import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router";

export default function Login(props) {
  const [user, setUser] = useState({
        name: "",
        pass: "",
        email: "",
        admin: false,
  });  
  const navigate = useNavigate();

  async function onSubmit(e) {
    e.preventDefault();
    props.changeLogin(user);
    navigate("/bugs");
  }

  function updateForm(value) {
    return setUser((prev) => {
      return { ...prev, ...value };
    });
  }
  
  return (
    <div>
      <br />
      <br />
      <h3 style={{ width: "50%", marginLeft: "25%", textAlign: "center" }}>
        <strong>Login</strong>
      </h3>
      <form onSubmit={onSubmit}>
        <div className="form-group" style={{ width: "50%", marginLeft: "25%" }}>
          <label htmlFor="name">
            <strong>Username</strong>
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={user.name}
            onChange={(e) => updateForm({ name: e.target.value })}
            required
          />
        </div>
        <div className="form-group" style={{ width: "50%", marginLeft: "25%" }}>
          <label htmlFor="description">
            <strong>Password</strong>
          </label>
          <input
            type="password"
            className="form-control"
            id="description"
            value={user.pass}
            onChange={(e) => updateForm({ pass: e.target.value })}
            required
          />
        </div>
        <br />
        <div className="form-group" style={{}}>
          <input
            type="submit"
            value="Login"
            className="btn btn-primary"
            style={{
              backgroundColor: "#282c34",
              width: "10%",
              marginLeft: "45%",
              marginRight: "45%",
            }}
          />
        </div>
      </form>
    </div>
  );
}
