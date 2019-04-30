import React from "react";
import "./style.css";

function ImageCard(props) {
  return (
    <div class="col-md-2">
    <img class="rounded mx-auto d-block img-fluid img-thumbnail" onClick={() => props.handleClick(props.id)} alt={props.id} src={props.image} />
  </div>
  );
}
   

export default ImageCard;
