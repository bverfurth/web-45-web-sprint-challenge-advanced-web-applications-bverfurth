import "./styles.scss";
import Login from "./components/Login";
import React from "react";
import BubblePage from "./components/BubblePage";
import PrivateRoute from "./components/PrivateRoute";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const logout = () => {
  localStorage.removeItem("token");
  window.location.href = "login";
};

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <a data-testid="logoutButton" href="/" onClick={logout}>
            Logout
          </a>
        </header>
        <Switch>
          <PrivateRoute exact path="/BubblePage" component={BubblePage} />
          <Route exact path="/" component={Login} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Add in two routes that link to the Login Component, one for the default path '/' and one for the '/login'.
//2. Render BubblePage as a PrivateRoute
//2. Build the logout button to call the logout endpoint, remove the localStorage Item and redirect to the login page.
