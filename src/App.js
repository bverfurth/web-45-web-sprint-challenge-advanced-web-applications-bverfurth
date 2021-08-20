import "./styles.scss";
import React from "react";
import Login from "./components/Login";
import BubblePage from "./components/BubblePage";
import PrivateRoute from "./components/PrivateRoute";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { axiosWithAuth } from "./helpers/axiosWithAuth";

function App() {
  const logout = () => {
    axiosWithAuth()
      .post("http://localhost:5000/api/logout")
      .then((res) => {
        console.log("logout res:", res);
        localStorage.removeItem("token");
        window.location.href = "/";
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  };
  return (
    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <a onClick={logout} data-testid="logoutButton" href="#">
            logout
          </a>
        </header>
        <PrivateRoute exact path="/bubbles" component={BubblePage} />
        <Route exact path="/" component={Login} />
      </div>
    </Router>
  );
}

export default App;
//Task List:
//1. Add in two routes that link to the Login Component, one for the default path '/' and one for the '/login'.
//2. Render BubblePage as a PrivateRoute
//2. Build the logout button to call the logout endpoint, remove the localStorage Item and redirect to the login page.
