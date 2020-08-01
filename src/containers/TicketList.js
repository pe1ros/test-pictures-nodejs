import React from "react";
import "../main.scss";
import moment from "moment";
import { NavLink } from "react-router-dom";
import Status from "./Status";

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
          <Status status={props.status} />
        </div>
      </div>
    </NavLink>
  );
}
