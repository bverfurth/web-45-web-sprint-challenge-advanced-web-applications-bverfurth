import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axiosWithAuth from "../helpers/axiosWithAuth";

const Login = (props) => {
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState();

  const handleChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", userInfo)
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/bubbles");
      })
      .catch((error) => setError(error.response.data.error));
  };

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <h2>Build login form here</h2>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <br />
          <input
            id="username"
            data-testid="username"
            name="username"
            value={userInfo.username}
            onchange={handleChange}
          />
          <label htmlFor="password">Password</label>
          <br />
          <input
            id="password"
            data-testid="password"
            name="password"
            value={userInfo.password}
            onchange={handleChange}
          />
          <button id="submit">Login</button>
        </form>
      </div>

      <p id="error" className="error">
        {error}
      </p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state necessary for form functioning.
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to "Lambda" / "School", save that token to localStorage and redirect to a BubblePage route.
//6. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE id="username" and id="password"
//7. MAKE SURE YOUR SUBMIT BUTTON INCLUDES id="submit"
//8. MAKE SURE YOUR ERROR p tag contains the id="error"
