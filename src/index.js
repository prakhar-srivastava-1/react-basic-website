//Create a react app from scratch.
import React from "react";
import ReactDOM from "react-dom";

//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
ReactDOM.render(
  <div>
    <h1>Hello there!</h1>
    <p>Welcome to this hideous website!</p>
    <p>Just playing around with React ;P</p>
    <div>
      Created by: Prakhar
      <br />
      &copy; Copyright {new Date().getFullYear()}
    </div>
  </div>,
  document.getElementById("root")
);
