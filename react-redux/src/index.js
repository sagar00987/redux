import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import UserComponent from "./App";
import reportWebVitals from "./reportWebVitals";
import mainReducers from "./reducers";
import { createStore } from "redux";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

const store = createStore(mainReducers);

root.render(
  <Provider store={store}>
    <UserComponent/>
  </Provider>
);

reportWebVitals();
