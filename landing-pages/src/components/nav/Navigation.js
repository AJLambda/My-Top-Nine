import React from "react";
import { Link } from "react-router-dom";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavLogo from "../images/logo.png";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import "../landing/landing.scss";

const useStyles = makeStyles(theme => ({
  navBtn: {
    width: "200px",
    height: "50px",
    fontFamily: "Nunito",
    fontSize: "16px",
    color: "#fbf9f8",
    fontWeight: "bold",
    // backgroundColor: "#bb0a21",
    // "&:hover": {
    //   backgroundColor: "#A3091D"
    // },
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

export default function Navigation() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const classes = useStyles();

  return (
    <>
      <Navbar className="nav">
        <Navbar.Brand href="#home">
          <img
            src={NavLogo}
            width="40"
            height="40"
            className="d-inline-block align-bottom"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Brand className="logo" href="#home">
          My Top Nine
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Tabs
              variant="fullWidth"
              value={value}
              onChange={handleChange}
              aria-label="nav tabs example"
            >
              <Tab
                label="Home"
                to="/"
                component={Link}
                style={{ fontSize: "18px" }}
              />
              <Tab
                label="About"
                component={Link}
                to="/about"
                style={{ fontSize: "18px" }}
              />
            </Tabs>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              <div className="nav-btn">
                <Fab
                  variant="extended"
                  color="primary"
                  aria-label="add"
                  className={classes.navBtn}
                >
                  GET STARTED
                </Fab>
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
