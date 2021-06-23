import * as React from "react";
import { render } from "react-dom";
import styled from "styled-components";
import CssBaseline from "@material-ui/core/CssBaseline";
import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer } from "react-toastify";

import {Main} from "./components/Main";

function App() {
  return <Main />
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
