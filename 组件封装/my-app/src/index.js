import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.jsx";
import App2 from "./App2";
import reportWebVitals from "./reportWebVitals";
import { ToastContextProvider } from "./context/ToastContext";
import Toast2 from "./component/toast2/Toast2";
import Pagination from "./component/pagination/Pagination";
ReactDOM.render(
  <React.StrictMode>
    {/* <ToastContextProvider>
      <App />
    </ToastContextProvider>
    <App2 /> */}
    {/* <Toast2></Toast2> */}
    <Pagination />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
