import React from "react";
// import { Link } from "react-router-dom";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavLogo from "../images/logo5.png";
import Underline6 from "../images/underline6.png";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";
import Button from "@material-ui/core/Button";
import "../landing/landing.scss";

const useStyles = makeStyles(theme => ({
  navBtn: {
    width: "200px",
    height: "50px",
    fontFamily: "Nunito",
    fontSize: "16px",
    color: "white",
    fontWeight: "bold",
    backgroundColor: "#bb0a21",
    "&:hover": {
      backgroundColor: "#A3091D"
    },
    margin: theme.spacing(1)
  },
  button: {
    fontSize: "14px",

    "&:hover": {
      color: "#fbf9f8"
    },
    border: "none",
    color: "#d9e8f1",
    "&:focus": {
      outline: "none"
    },
    "&:hover": {
      color: "white"
    }
  }
}));

const scrollTo = () => {
  scroller.scrollTo("scroll-to-element", {
    duration: 800,
    delay: 0,
    smooth: "easeInOutQuart"
  });
};

export default function Navigation() {
  const classes = useStyles();
  return (
    <>
      <Navbar className="nav">
        <Navbar.Brand href="#">
          <img
            src={NavLogo}
            width="70"
            height="70"
            className="d-inline-block align-bottom"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <a className="logo" href="#">
          My Top Nine
          <img className="underline-logo" src={Underline6} alt="" />
        </a>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav style={{ margin: "0 auto" }}>
            <Link
              activeClass="active"
              className="team"
              to="team"
              spy={true}
              smooth={true}
              offset={-40}
              // duration={2000}
            >
              <Button
                size="large"
                variant="outlined"
                // href="#outlined-buttons"
                className={classes.button}
              >
                About Us
              </Button>
            </Link>
            <Link
              activeClass="active"
              className="what"
              to="what"
              spy={true}
              smooth={true}
              offset={-40}
              // duration={2000}
            >
              <Button
                size="large"
                variant="outlined"
                // href="#outlined-buttons"
                className={classes.button}
              >
                intro
              </Button>
            </Link>
            <Link
              activeClass="active"
              className="works"
              to="works"
              spy={true}
              smooth={true}
              offset={-40}
              // duration={2000}
            >
              <Button
                size="large"
                variant="outlined"
                // href="#outlined-buttons"
                className={classes.button}
              >
                How it Works
              </Button>
            </Link>
            <Link
              activeClass="active"
              className="wall"
              to="wall"
              spy={true}
              smooth={true}
              offset={-80}
              // duration={2000}
            >
              <Button
                size="large"
                variant="outlined"
                // href="#outlined-buttons"
                className={classes.button}
              >
                Top nine wall
              </Button>
            </Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              <div className="nav-btn">
                <Button
                  variant="contained"
                  // color="primary"
                  aria-label="add"
                  className={classes.navBtn}
                >
                  GET STARTED
                </Button>
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
