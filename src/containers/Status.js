import React from "react";

export default function Status(props) {
  return props.status === "assigned" ? (
    <div className="ASD">ASD</div>
  ) : props.status === "completed" ? (
    <div className="COM">COM</div>
  ) : (
    <div className="UNA">UNA</div>
  );
}
