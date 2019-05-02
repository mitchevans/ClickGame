import React from "react";
import "./style.css";

function Title(props) {
  return <h1 className="twin-peaks-title text-center" >{props.children}</h1>;
}

export default Title;