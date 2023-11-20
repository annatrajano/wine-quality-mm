// Main imports
import React from "react";
import ReactDOM from "react-dom/client";

// Style
import "./index.css";

// Routes
import AppRoutes from "./routes";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);
