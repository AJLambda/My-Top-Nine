import React from "react";
import "../landing/landing.scss";

class Navigation extends React.Component {
  render() {
    return (
      <header>
        <div class="nav">
          <div class="nav-logo">
            <h1 class="logo">
              <a href="index.html">
                mytop9.com<sup>&reg</sup>
              </a>
            </h1>
          </div>
          <div class="nav-btns">
            <button class="nav-btn1">
              <a href="./about.html">About Us</a>
            </button>
            <button class="nav-btn2">
              <a href="https://my-top-nine-logan.netlify.com/">Login</a>
            </button>
          </div>
        </div>
      </header>
    );
  }
}

export default Navigation;
