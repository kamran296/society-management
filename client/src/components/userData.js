import React, { Component, useEffect, useState } from "react";
import Admin from "./Admin-Dashboard-component/admin-dashboard.componet";

import Home from "./Home-coponent/home.component";

export default function UserDetails() {
  const [userData, setUserData] = useState("");
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/loginData", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        if (data.data.userType == "Admin") {
          setAdmin(true);
        }

        setUserData(data.data);

        // if (data.data == "token expired") {
        //   alert("Token expired login again");
        //   window.localStorage.clear();
        //   window.location.href = "./login";
        // }
      });
  }, []);

  return admin ? <Admin /> : <Home />;
}
