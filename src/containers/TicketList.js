import React from "react";
import "../main.scss";
import moment from "moment";
import { NavLink } from "react-router-dom";

export default function TicketList(props) {
  return (
    <NavLink
      exact={true}
      className="ticket-link"
      activeClassName="ticket-link-active"
      to={"/" + props.id}
    >
      <div className="grid">
        <div className="partial">
          <img src={props.img} alt="pic" className="image" />
        </div>
        <div className="partial-reptime">
          {moment(props.repTime).format("DD/MM/YY hh:mm")}
        </div>
        <div className="partial-asset">{props.assetName}</div>
        <div className="partial-status">
          {props.status === "assigned" ? (
            <div className="partial-status-ASD">ASD</div>
          ) : props.status === "completed" ? (
            <div className="partial-status-COM">COM</div>
          ) : (
            <div className="partial-status-UNA">UNA</div>
          )}
        </div>
      </div>
    </NavLink>
  );
}
