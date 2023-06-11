import React, { Component, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginCss.css";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const host = "http://localhost:5000";
  function handleSubmit(e) {
    e.preventDefault();

    console.log(email, password);
    fetch(`${host}/api/v1/login/`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("fer", data, "userRegister");
        console.log(data.success);
        if (data.success) {
          alert("login successful");
          console.log(data.authToken);
          window.localStorage.setItem("token", data.authToken);
          window.localStorage.setItem("loggedIn", true);
          window.location.href = "./loginData";
          // navigate("./loginData");
        }
      });
  }

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handleSubmit}>
          <h3>Sign In</h3>

          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>

          <div className="d-grid">
            <button type="submit">Submit</button>
          </div>
          <p className="forgot-password text-right">
            <Link to="/signup">Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
