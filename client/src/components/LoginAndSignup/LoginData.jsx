import React, { Component, useEffect, useState } from "react";
import { AdminPage } from "./../../Router/Admin-page/admin.dashboard.component";

import Home from "./../Home-coponent/home.component";

export default function LoginData() {
  const [userData, setUserData] = useState("");
  const [admin, setAdmin] = useState(false);
  const host = "http://localhost:5000";

  const loginData = async () => {
    const response = await fetch(`${host}/api/v1/loginData/`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        token: window.localStorage.getItem("token"),
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    });
    const data = await response.json();
    console.log(data, "lfn");
    if (data.user.userType == "Admin") {
      setAdmin(true);
    }

    setUserData(data.user);

    // if (data.data == "token expired") {
    //   alert("Token expired login again");
    //   window.localStorage.clear();
    //   window.location.href = "./login";
    // }
  };

  useEffect(() => {
    loginData();

    // fetch(`${host}/api/v1/loginData/`, {
    //     method: "POST",

    //     headers: {
    //       "Content-Type": "application/json",
    //       // token: localStorage.getItem("token"),
    //     },
    //     body: JSON.stringify({
    //       token: localStorage.getItem("token"),
    //     }),
    //   })
    // .then((res) => res.json())
    // .then((data) => {
    // console.log("user", data, "userData");
    // if (data.user.userType == "Admin") {
    //   setAdmin(true);
    // }
    // });

    // setUserData(data.data);

    // if (data.data == "token expired") {
    //   alert("Token expired login again");
    //   window.localStorage.clear();
    //   window.location.href = "./login";
    // }
  }, []);

  return admin ? <AdminPage /> : <Home />;
}
