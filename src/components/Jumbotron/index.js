import React from "react";
import "./style.css";

function Jumbotron(props) {
  return (
    <div className="container">
      <div className="jumbotron text-success text-center bg-transparent">
        <h1 class="twin-peaks">Twin Clicks</h1>
        <hr class="my-4"></hr>
        <p className="text-light">Who killed Laura Palmer? Click on each character once, AND ONLY ONCE, to solve the case. <span className="text-danger">WARNING: SPOILER ALERT</span></p>
      </div>
    </div>
  );
}

export default Jumbotron;
