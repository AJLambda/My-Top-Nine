import React from "react";
import "./App.css";
import LandingPage from "./components/landing/LandingPage";

import Navigation from "./components/nav/Navigation";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navigation />

      <Route exact path="/" render={props => <LandingPage {...props} />} />
    </div>
  );
}

export default App;
