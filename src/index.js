import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

//import reducer function to use in creating store
import { reducer } from "./components/reducer.js";

//import function to create a redux store and aaplyMiddleware
import { createStore, applyMiddleware } from "redux";

//import component to wrap App in store
import { Provider } from "react-redux";

//importing thunk to do.... something?
import thunk from "redux-thunk";

const store = createStore(reducer, applyMiddleware(thunk)); //run applyMiddleware with thunk because reasons

ReactDOM.render(
  // wrap App in Provider to pass the store on
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
