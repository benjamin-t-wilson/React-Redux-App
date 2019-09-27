import React, { useEffect } from "react";
import "./App.scss";

import { getFact } from "./components/actions";

import { connect } from "react-redux";

function App(props) {

  //setting a local function to prevent default of button press, and running action creator
  const getCatFact = e => {
    e.preventDefault();
    props.getFact();
  };


  //use effect runs the action once to render the page with data
  useEffect(() => {
    props.getFact();
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Feline Factinator</h1>
        <h2>your one stop shop for cat-fact needs</h2>
      </header>
      <div className="catTown">
        <h1>{props.catFact}</h1>
        <h2 className="error">{props.error}</h2>
        <p>
          <span>{props.catCount}</span> facts served.
        </p>
        <button
          onClick={e => {
            getCatFact(e);
          }}
        >
          Fact Me
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    catCount: state.catCount,
    catFact: state.catFact,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  {getFact}
)(App);
