import React from "react";
import "./styles.css";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/home/animation" />
        <Route exact path="/home/:page?" render={props => <Home {...props} />} />
      </Switch>
    </Router>
  );
}
