import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from 'styled-components'
import App from "./App";
import myThemez from './theme/index'

import "./index.css";

ReactDOM.render(
  <ThemeProvider theme={myThemez}>
  <App />
  </ThemeProvider>,
  document.getElementById("root")
);
