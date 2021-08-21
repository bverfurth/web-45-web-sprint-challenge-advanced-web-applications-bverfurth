import axios from "axios";
import React, { useState, useEffect } from "react";

const Login = (props) => {
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleOnChange = (e) => {
    setError("");
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (formData.username !== "Lambda" || formData.password !== "School") {
      setError("Login information is incorrect");
    }
    axios
      .post("http://localhost:5000/api/login", formData)
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/bubblepage");
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <form
          className="d-flex flex-column justify-content-center align-items-center p-3"
          onSubmit={handleOnSubmit}
        >
          <input
            name="username"
            placeholder="Username"
            className="mb-2"
            id="username"
            onChange={handleOnChange}
          />
          <input
            id="password"
            name="password"
            placeholder="Password"
            type="password"
            className="mb-2"
            onChange={handleOnChange}
          />
          <button type="submit" className="mt-0" id="submit">
            Submit
          </button>
        </form>
      </div>

      <p id="error" className="error">
        {error}
      </p>
    </div>
  );
};

export default Login;
