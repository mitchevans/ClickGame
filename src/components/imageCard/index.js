import React from "react";
import "./style.css";

function ImageCard(props) {
  return (
    <div className="col-md-2">
    <img className="rounded mx-auto d-block img-fluid img-thumbnail" onClick={() => props.handleClick(props.id)} alt={props.id} src={props.image} />
  </div>
  );
}
   

export default ImageCard;
