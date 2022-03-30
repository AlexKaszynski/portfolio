import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function Create(login) {
  console.log(login.login);
  const [form, setForm] = useState({
    name: "",
    description: "",
    level: "",
    time: "",
  });
  const navigate = useNavigate();

  //update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  // eslint-disable-next-line no-extend-native
  Date.prototype.addDays = function (days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  };

  //handle submit
  async function onSubmit(e) {
    e.preventDefault();
    form.time = new Date().addDays(3);
    //console.log(login.login);//console.log(form.time);//console.log((form.time-new Date())/(24*60*60*1000));
    form.level = login.login;
  
    const newPerson = { ...form };
    await fetch("http://localhost:5000/record/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPerson),
    }).catch((error) => {
      window.alert(error);
      return;
    });

    setForm({ name: "", description: "", level: "" });
    navigate("/bugs");
  }
  return (
    <div>
      <br/><br/>
      <h3 style={{ width: "50%", marginLeft: "25%", textAlign: "center" }}><strong>Create New Bug</strong></h3>
      <form onSubmit={onSubmit}>
        <div className="form-group" style={{ width: "50%", marginLeft: "25%" }}>
          <label htmlFor="name"><strong>Name</strong></label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={form.name}
            onChange={(e) => updateForm({ name: e.target.value })}
          />
        </div>
        <div className="form-group" style={{ maxWidth: "50%", marginLeft: "25%" }}>
          <label htmlFor="description"><strong>Description</strong></label>
          <textarea
            style={{ height: "100px"}}
            className="form-control"
            id="description"
            value={form.description}
            onChange={(e) => updateForm({ description: e.target.value })}
          />
        </div>
        <br />
        <div className="form-group" style={{ width: "10%", marginLeft: "48%", justifyContent: "center" }}>
          <input type="submit" value="Create Bug" className="btn btn-primary" style={{backgroundColor: "#282c34",}}/>
        </div>
      </form>
    </div>
  );
}
