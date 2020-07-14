import React, { useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";
import { getData } from "./actions/pageActions";
import PageDrawing from "./containers/PageDrawing";
import "./main.scss";

function App(props) {
  useEffect(() => {
    props.getData();
  }, []);

  const el = Array.from(props.store.data ? props.store.data : []);

  return (
    <div className="App">
      {el.map((d, i) => (
        <PageDrawing
          key={i}
          img={d.owner.avatar}
          fName={d.owner.firstName}
          lName={d.owner.lastName}
        />
      ))}
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
