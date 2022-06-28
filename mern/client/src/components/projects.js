import React from "react";
import "../myStyle.css";
import example1 from "../images/Stylized_project_list_1.png";
import example2 from "../images/Stylized_project_list_2.png";

export default function Projects() {
  return (
    <div>
      <div className="home-title">Projects</div>
      <div className="home-content">
        This is the projects page.
        <br />
        This Page will contain a stylized table made out of the combined styles
        of what is seen below.
        <br />
        <table>
          <img
            src={example1}
            className="home-image"
            alt="projects_table_example_1"
          />
          <img
            src={example2}
            className="home-image"
            alt="projects_table_example_2"
          />
        </table>
      </div>
      <div className="home-todo">
        Projects ToDo List:<br></br>
        - make table based on images above
        <br />
      </div>
    </div>
  );
}
