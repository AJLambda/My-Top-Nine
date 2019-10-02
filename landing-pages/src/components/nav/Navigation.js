import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import NavLogo from "../images/logo.png";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import "../landing/landing.scss";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={event => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
}));

export default function Navigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
            <Nav.Link className="home-link" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="about-link" href="#about">
              About
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs
            // variant="fullWidth"
            value={value}
            onChange={handleChange}
            aria-label="nav tabs example"
          >
            <LinkTab label="Page One" href="/drafts" {...a11yProps(0)} />
            <LinkTab label="Page Two" href="/trash" {...a11yProps(1)} />
            <LinkTab label="Page Three" href="/spam" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          Page One
        </TabPanel>
        <TabPanel value={value} index={1}>
          Page Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Page Three
        </TabPanel>
      </div>
    </>
  );
}
