import React, { useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";
import { getData } from "./actions/pageActions";
import TicketList from "./containers/TicketList";
import "./main.scss";
import DrawBox from "./containers/DrawBox";
import notFound from "./containers/notFound";
import { Route, Switch } from "react-router-dom";

function App(props) {
  useEffect(() => {
    props.getData();
  }, []);

  const el = Array.from(props.store.data ? props.store.data : []);

  return (
    <div className="App">
      <div className="header-line">
        <p>Tikets</p>
      </div>
      <div className="menu-container">
        <div className="menu-input">
          <input type="text" placeholder="?" />
        </div>
        <div className="menu-ticket-list">
          <div className="menu-ticket-list-title">
            <p>
              OWNER &ensp; REPORTED &ensp; &ensp; &ensp; &ensp; &ensp; &ensp;
              &ensp; &ensp; ASSET &ensp; &ensp; &ensp; &ensp; &ensp; &ensp;
              &ensp; &ensp; &ensp; &ensp; &ensp; &ensp; &ensp; STATUS
            </p>
          </div>
          {el.map((d, i) => (
            <TicketList
              key={i}
              img={d.owner.avatar}
              repTime={d.reportedTime}
              assetName={d.asset.name}
              status={d.status}
              id={d.ticketId}
            />
          ))}
        </div>
      </div>
      <div className="draw-box">
        <Switch>
          <Route exact path="/:id" component={DrawBox} />
          <Route component={notFound} />
        </Switch>
      </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(App);
