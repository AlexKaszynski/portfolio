import React, { useState } from "react";
import { Route, Routes } from "react-router-dom"; // We use Route in order to define the different routes of our application
import Navbar from "./components/navbar";
import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";
import Login from "./components/login";
import Home from "./components/home";
import Projects from "./components/projects";
//import About from "./components/about";
//import Gallery from "./components/gallery";
import "./myStyle.css";

const App = () => {
  const [login, setLogin] = useState("Anonymous");
  const changeLogin = async (newLog) => {
    console.log("App", newLog);
    setLogin(newLog.name);
    console.log(login);
  };
  document.title = "Home";
  return (
    <div className="app-container">
      <Navbar />
      <div id="body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            exact
            path="/login"
            element={<Login changeLogin={changeLogin} login={login} />}
          />
          <Route path="/buglist" element={<RecordList />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/create" element={<Create login={login} />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;


//<Route path="/about" element={<About />} />
//<Route path="/gallery" element={<Gallery />} />
//<Route path="/placeholder" element={<Placeholder />} />
