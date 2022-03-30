import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function timeDiff(date) {
  let oldTime = new Date(date);
  let newTime = new Date();
  //console.log(oldTime, newTime);
  let updateTime = Math.round((oldTime - newTime) / (24 * 60 * 60 * 1000));
  if (updateTime <= 0) {
    //console.log("set color to red.");
    //document.getElementById("card").style.border = "1px solid red";
  }
  return updateTime;
}

const Record = (props) => (
  <div id="card" className="w3-container"  style={{ border: "none" }}>
    <div className="w3-card-4" style={{ maxWidth: "50%", borderRadius: "8px" }}>
      <header
        className="w3-container"
        style={{
          textAlign: "center",
          backgroundColor: "#282c34",
          color: "white",
          minHeight: "35px",
          borderRadius: "8px 8px 0 0",
        }}
      >
        <h3>{props.record.name}</h3>
      </header>
      <div
        className="w3-container"
        style={{ minHeight: "70px", marginTop: "10px", wordWrap: "break-word" }}
      >
        {props.record.description}
      </div>
      <div className="w3-container w3-light-grey">
        <p style={{ float: "left", paddingTop: "10px" }}>
          <strong>Assigned By: </strong>
          {props.record.level}
        </p>
        <p style={{ color: "blue", float: "right", paddingTop: "10px" }}>
          <strong>{timeDiff(props.record.time)} Days left</strong>
        </p>
        <br />
      </div>

      <div
        className="w3-container"
        style={{ backgroundColor: "#282c34", borderRadius: "0 0 8px 8px" }}
      >
        <Link className="w3-button" to={`/edit/${props.record._id}`}>
          <i
            className="edit alternate outline icon large"
            style={{
              color: "cyan",
              marginRight: "20px",
              float: "left",
            }}
          />
        </Link>
        <i
          className="trash alternate outline icon large"
          style={{
            color: "red",
            marginRight: "20px",
            marginTop: "7px",
            float: "right",
          }}
          onClick={() => {
            props.deleteRecord(props.record._id);
          }}
        />
      </div>
    </div>
    <br />
  </div>
);

export default function RecordList() {
  const [records, setRecords] = useState([]);

  // Gets items
  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:5000/record/`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const records = await response.json();
      setRecords(records);
    }
    getRecords();

    return;
  }, [records.length]);

  // delete
  async function deleteRecord(id) {
    await fetch(`http://localhost:5000/${id}`, {
      method: "DELETE",
    });

    const newRecords = records.filter((el) => el._id !== id);
    setRecords(newRecords);
  }

  function recordList() {
    //console.log(records);
    return records.map((record) => {
      return (
        <Record
          record={record}
          deleteRecord={() => deleteRecord(record._id)}
          key={record._id}
        />
      );
    });
  }

  // Display Items
  return (
    <div>
      <br />
      <h3
        style={{
          marginTop: 20,
          textAlign: "center",
          width: "50%",
          justifyContent: "center",
          marginLeft: "25%",
        }}
      >
        <strong>Bug List</strong>
      </h3>
      <div
        className="w3-table"
        style={{
          marginTop: 20,
          justifyContent: "center",
          marginLeft: "25%",
          marginRight: "25%",
        }}
      >
        {recordList()}
      </div>
    </div>
  );
}
