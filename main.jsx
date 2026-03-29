// i wrote the imports 
import React from "react";
import "leaflet/dist/leaflet.css"; //import leaflet for map of data
import ReactDOM from "react-dom/client"; //connects react to the actual application
import { BrowserRouter } from "react-router-dom"; //routes information from code to app
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
