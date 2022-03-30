import React, { useState } from "react";
import { Route, Routes } from "react-router-dom"; // We use Route in order to define the different routes of our application
import Navbar from "./components/navbar";
import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";
import Login from "./components/login";

const App = () => {
  const [login, setLogin] = useState("Anonymous");
  const changeLogin = async (newLog) => {
    console.log("App", newLog);
    setLogin(newLog.name);
    console.log(login);
  };
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          exact
          path="/"
          element={<Login changeLogin={changeLogin} login={login} />}
        />
        <Route path="/bugs" element={<RecordList />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/create" element={<Create login={login} />} />
      </Routes>
    </div>
  );
};

export default App;
