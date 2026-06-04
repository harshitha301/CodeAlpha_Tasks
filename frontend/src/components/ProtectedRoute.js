import React from "react";

import {
  Navigate,
} from "react-router-dom";



function ProtectedRoute({

  children,

  adminOnly = false,

}) {

  let token = null;

  let user = null;



  try {

    token =
      window.sessionStorage.getItem(
        "token"
      );



    const storedUser =
      window.sessionStorage.getItem(
        "user"
      );



    if (storedUser) {

      user =
        JSON.parse(
          storedUser
        );

    }

  } catch (error) {

    console.log(
      "Session Error:",
      error
    );

  }



  /* NOT LOGGED */
  if (!token) {

    return <Navigate to="/" />;

  }



  /* ADMIN CHECK */
  if (

    adminOnly &&

    user?.role !==
      "admin"

  ) {

    return (
      <Navigate
        to="/dashboard"
      />
    );

  }



  return children;
}

export default ProtectedRoute;