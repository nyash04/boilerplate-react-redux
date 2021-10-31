import React from "react";
import { render } from "react-dom";
import {store, persistor} from "./redux/store";
import App from "./app/App";
import "./index.scss";

render(
  <App store={store} persistor={persistor} basename={process.env.PUBLIC_URL} />,
  document.getElementById('root')
);