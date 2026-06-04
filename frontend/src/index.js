import React from "react";

import ReactDOM from "react-dom/client";

import "./index.css";

import App from "./App";

import reportWebVitals from "./reportWebVitals";

import {
  Toaster,
} from "react-hot-toast";

import NotificationProvider
from "./context/NotificationContext";

import ThemeProvider
from "./context/ThemeContext";



const root =
ReactDOM.createRoot(

  document.getElementById(
    "root"
  )

);



root.render(

  <React.StrictMode>

    <ThemeProvider>

      <NotificationProvider>

        <App />

        <Toaster
          position="top-right"
        />

      </NotificationProvider>

    </ThemeProvider>

  </React.StrictMode>

);



reportWebVitals();