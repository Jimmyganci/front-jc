import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import App from "./App";
import "./styles/styles.scss";

ReactDOM.render(
  <HashRouter basename="/">
    <App />
  </HashRouter>,
  document.getElementById("root")
);
