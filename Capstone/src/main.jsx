import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { fetchTodaysMenu } from "../features/todays_menuSlice.js";
import store from "../app/store";
import App from "./App.jsx";
import "./index.css";

store.dispatch(fetchTodaysMenu());

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
