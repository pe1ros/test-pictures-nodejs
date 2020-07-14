import React from "react";
import "../main.scss";

export default function PageDrawing(props) {
  return (
    <div className="partial">
      <div>
        <img src={props.img} alt="pic" className="image" />
        <h5>
          {props.fName} {props.lName}
        </h5>
      </div>
    </div>
  );
}
