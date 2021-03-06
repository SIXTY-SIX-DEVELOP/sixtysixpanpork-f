
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/css/style.css";
import "assets/scss/style.scss";
// pages
import App from "./App.jsx";
import NucleoIcons from "views/NucleoIcons.jsx";
import LandingPage from "views/examples/LandingPage.jsx";
import ProfilePage from "views/examples/ProfilePage.jsx";
import RegisterPage from "views/examples/RegisterPage.jsx";
// others

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" render={(props) => <App {...props} />} />
      {/* <Route path="/home" exact={true} render={(props) => <Home {...props} />} /> */}
      <Route
        path="/nucleo-icons"
        render={(props) => <NucleoIcons {...props} />}
      />
      <Route
        path="/landing-page"
        render={(props) => <LandingPage {...props} />}
      />
      <Route
        path="/profile-page"
        render={(props) => <ProfilePage {...props} />}
      />
      <Route
        path="/register-page"
        render={(props) => <RegisterPage {...props} />}
      />
      <Redirect to="/index" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
