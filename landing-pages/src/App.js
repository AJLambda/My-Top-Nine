import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./components/landing/LandingPage";
import AboutPage from "./components/about/AboutPage";
import Navigation from "./components/nav/Navigation";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navigation />

      <Route exact path="/" render={props => <LandingPage {...props} />} />
      <Route exact path="/about" render={props => <AboutPage {...props} />} />
    </div>
  );
}

export default App;
