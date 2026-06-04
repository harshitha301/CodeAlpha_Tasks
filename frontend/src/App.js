import React from "react";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Login from "./pages/Login";

import Register from "./pages/Register";

import Dashboard from "./pages/Dashboard";

import MyPasses from "./pages/MyPasses";

import AdminPanel from "./pages/AdminPanel";


function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Login />}
        />



        <Route
          path="/register"
          element={<Register />}
        />



        <Route
          path="/dashboard"
          element={<Dashboard />}
        />



        <Route
          path="/mypasses"
          element={<MyPasses />}
        />

<Route
  path="/admin"
  element={<AdminPanel />}
/>

       

      </Routes>

    </BrowserRouter>

  );
}

export default App;