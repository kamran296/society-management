import React, { Component, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginCss.css";

export default function SignUp() {
  const navigate = useNavigate();
  const [secretKey, setSecretKey] = useState("");
  const [credentials, setCredentials] = useState({
    userName: "",
    email: "",
    password: "",
    flatNo: "",
    authority: "",
    parkingAllot: "",
    parkingUse: "",
    userType: "",
  });
  const host = "http://localhost:5000";
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (credentials.userType == "Admin" && secretKey != "1234") {
      e.preventDefault();

      alert("Invalid Admin");
    } else {
      e.preventDefault();

      //   console.log(userName, email, password, authority, flatNo);
      const response = await fetch(`${host}/api/v1/signup/`, {
        method: "POST",
        // crossDomain: true,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName: credentials.userName,
          email: credentials.email,
          password: credentials.password,
          flatNo: credentials.flatNo,
          authority: credentials.authority,
          parkingAllot: credentials.parkingAllot,
          parkingUse: credentials.parkingUse,
          userType: credentials.userType,
        }),
      });
      const json = await response.json();
      console.log(json, "hi");
      console.log(localStorage.getItem("token"));
      if (json.success && credentials.userType === "Admin") {
        // Save the auth token and redirect
        localStorage.setItem("token", json.authtoken);
        navigate("/admin");
        alert("registered successfuly");
      } else if (json.success && credentials.userType === "User") {
        navigate("/");
      } else {
        alert("Invalid credentials");
      }
    }
  };
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handleSubmit}>
          <h3>Sign Up</h3>
          <div>
            Register As
            <input
              type="radio"
              name="userType"
              value="User"
              onChange={onChange}
            />
            User
            <input
              type="radio"
              name="userType"
              value="Admin"
              onChange={onChange}
            />
            Admin
          </div>
          {credentials.userType == "Admin" ? (
            <div className="mb-3">
              <label>Secret Key</label>
              <input
                type="text"
                className="form-control"
                placeholder="Secret Key"
                onChange={(e) => setSecretKey(e.target.value)}
              />
            </div>
          ) : null}

          <div className="mb-3">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              name="userName"
              value={credentials.userName}
              onChange={onChange}
              //   onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              name="email"
              value={credentials.email}
              onChange={onChange}
              //   onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              name="password"
              value={credentials.password}
              onChange={onChange}
              //   onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label>Flat No</label>
            <input
              type="Number"
              className="form-control"
              name="flatNo"
              value={credentials.flatNo}
              onChange={onChange}
              //   onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label>Authority</label>
            <input
              type="text"
              className="form-control"
              placeholder="Owner"
              name="authority"
              value={credentials.authority}
              onChange={onChange}
              //   onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>parking alloted</label>
            <input
              type="Number"
              className="form-control"
              name="parkingAllot"
              value={credentials.parkingAllot}
              onChange={onChange}
              //   onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label>parking in use</label>
            <input
              type="Number"
              className="form-control"
              name="parkingUse"
              value={credentials.parkingUse}
              onChange={onChange}
              //   onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="">
              Sign Up
            </button>
          </div>
          <p className="forgot-password text-right">
            Already registered <Link to="/login">login?</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
