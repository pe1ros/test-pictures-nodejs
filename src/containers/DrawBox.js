import React, { useEffect } from "react";
import "../main.scss";
import moment from "moment";

import { connect } from "react-redux";
import { getData } from "../actions/pageActions";

function DrawBox(props) {
  useEffect(() => {
    props.getData();
  }, []);

  const ticketId = props.match.params.id ? props.match.params.id : null;
  const el = Array.from(props.store.data ? props.store.data : []);

  return (
    <div className="main-draw">
      {el.map((d, i) =>
        d.ticketId == ticketId ? (
          <div key={i}>
            <div className="head-draw">
              <p>
                TIKET NO: <span>{d.number}</span>
              </p>
              <p>
                LAST UPDATED:{" "}
                {moment(d.lastUpdatedTime).format("DD/MM/YY hh:mm")}
              </p>
            </div>
            <div className="owner-draw">
              <p>Owner</p>
              <img src={d.owner.avatar} alt="pict" />
              <div className="owner-draw-fdiv">
                {d.owner.firstName} {d.owner.lastName}
              </div>
              <div className="owner-draw-sdiv">
                {d.owner.specialities[0].toUpperCase()}
              </div>
            </div>
            <div className="detalis-draw">
              <div className="detalis-draw-title">Detalis</div>
              <div className="detalis-draw-rep">
                <p>Reported</p>
                {moment(d.reportedTime).format("DD/MM/YY hh:mm")}
              </div>
              <div className="detalis-draw-status">
                <p>Status</p>
                {d.status === "assigned" ? (
                  <div className="detalis-draw-status-ASD">ASD</div>
                ) : d.status === "completed" ? (
                  <div className="detalis-draw-status-COM">COM</div>
                ) : (
                  <div className="detalis-draw-status-UNA">UNA</div>
                )}
              </div>
              <div className="detalis-draw-desctiption">
                <p>Description</p>
                {d.description}
              </div>
            </div>
            <div className="asset-draw">
              <div className="asset-draw-title">Asset</div>
              <div className="asset-draw-name">
                <p>Name</p>
                {d.asset.name}
              </div>
              <div className="asset-draw-geocode">
                <p>GeoCode</p>
                {d.asset.geoCode}
              </div>
              <div className="asset-draw-location">
                <p>Location</p>
                <span>{d.asset.kmFrom}</span>
                <span>{d.asset.kmTo}</span>
              </div>
            </div>
          </div>
        ) : (
          ""
        )
      )}
    </div>
  );
}

const mapStateToProps = (store) => {
  return { store };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getData: (data) => dispatch(getData()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DrawBox);
