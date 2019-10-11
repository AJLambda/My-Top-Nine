import React from "react";
import "./App.css";
import LandingPage from "./components/landing/LandingPage";
import Navigation from "./components/nav/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />

      <LandingPage />
    </div>
  );
}

export default App;
