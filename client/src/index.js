import React from "react";
import ReactDOM from "react-dom";
import WebFont from "webfontloader";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// WebFont.load({
//   google: {
//     families: ['Titillium Web:300,400,700', 'sans-serif', 'Fira Sans']
//   }
// });

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
