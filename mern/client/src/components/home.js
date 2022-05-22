import React from "react";
import "../myStyle.css";
import profile from "../images/IMG-3724.png";
//import { useNavigate } from "react-router";

export default function Login() {
  return (
    <div>
      <div className="home-title">Home</div>
      <div className="home-content">
        Hello, my name is Alex Kaszynski. Thank you for visiting my website.
        Feel free to visit the About page to learn more about me and what I do,
        or the Projects page to see what I've been working on lately, or even
        the Gallery to discover what I make in my spare time!
      </div>

      <div className="home-todo">
        Website ToDo List:<br></br>
        - make links for the different pages using router
        <br />
        - make footer elements that link to different social sites (LinkedIn,
        Github, Handshake, etc.) that stick to the bottom of the page
        <br />
        - Fill in about page with resume information
        <br />
        - Have links in Projects page linking to my different public Github Projects
        <br />
        - Contact can be deleted if/once sticky footer elements are installed
        <br />
      </div>
    </div>
  );
}
