import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

export default function Edit() {
  const [form, setForm] = useState({
    name: "",
    description: "",
    level: "",
    time: new Date(),
    records: [],
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const id = params.id.toString();
      const response = await fetch(
        `http://localhost:5000/record/${params.id.toString()}`
      );

      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const record = await response.json();
      if (!record) {
        window.alert(`Record with id ${id} not found`);
        navigate("/");
        return;
      }

      setForm(record);
    }

    fetchData();

    return;
  }, [params.id, navigate]);

  // eslint-disable-next-line no-extend-native
  Date.prototype.addDays = function (days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  };

  //update state props.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  async function onSubmit(e) {
    e.preventDefault();
    const editedPerson = {
      name: form.name,
      description: form.description,
      level: form.level,
      time: new Date().addDays(3),
    };

    await fetch(`http://localhost:5000/update/${params.id}`, {
      method: "POST",
      body: JSON.stringify(editedPerson),
      headers: {
        "Content-Type": "application/json",
      },
    });

    navigate("/bugs");
  }

  //returns html form
  return (
    <div>
      <br />
      <br />
      <h3 style={{ width: "50%", marginLeft: "25%", textAlign: "center" }}>
        <strong>Update Bug Report</strong>
      </h3>
      <form onSubmit={onSubmit}>
        <div className="form-group" style={{ width: "50%", marginLeft: "25%" }}>
          <label htmlFor="name">
            <strong>Name</strong>
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={form.name}
            onChange={(e) => updateForm({ name: e.target.value })}
          />
        </div>
        <div className="form-group" style={{ width: "50%", marginLeft: "25%" }}>
          <label htmlFor="description">
            <strong>Description</strong>
          </label>
          <textarea
            style={{ height: "100px" }}
            type="text"
            className="form-control"
            id="description"
            value={form.description}
            onChange={(e) => updateForm({ description: e.target.value })}
          />
        </div>
        <br />

        <div className="form-group" style={{ width: "10%", marginLeft: "48%", justifyContent: "center" }}>
          <input type="submit" value="Update Bug" className="btn btn-primary" style={{backgroundColor: "#282c34",}} />
        </div>
      </form>
    </div>
  );
}
