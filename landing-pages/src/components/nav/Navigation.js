import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavLogo from "../images/logo6.png";
import Underline6 from "../images/underline6.png";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-scroll";
import Button from "@material-ui/core/Button";
import { slide as Menu } from "react-burger-menu";

const styles = theme => ({
  navBtn: {
    width: "200px",
    height: "50px",
    fontFamily: "Nunito",
    fontSize: "16px",
    color: "white",
    fontWeight: "bold",
    backgroundColor: "#81d0e1",
    "&:hover": {
      backgroundColor: "#71b8dd"
    },
    "&:visited": {
      color: "#fbf9f8"
    },
    "&:active": {
      color: "#fbf9f8"
    },
    margin: theme.spacing(1)
  },

  button: {
    fontSize: "14px",
    border: "none",
    color: "#d9e8f1",
    "&:focus": {
      outline: "none"
    },
    "&:hover": {
      color: "white"
    }
  }
});

const showSettings = event => {
  event.preventDefault();
};

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchNodes: "",
      menuOpen: false
    };
  }

  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }

  // const classes = useStyles();
  render() {
    const { classes } = this.props;
    return (
      <>
        <Menu
          isOpen={this.state.menuOpen}
          onStateChange={state => this.handleStateChange(state)}
        >
          <Link
            activeClass="active"
            className="team"
            to="team"
            spy={true}
            smooth={true}
            offset={-40}
            onSetActive={() => this.closeMenu()}
            onSetInactive={() => this.closeMenu()}
          >
            About Us
          </Link>
          <Link
            activeClass="active"
            className="what"
            to="what"
            spy={true}
            smooth={true}
            offset={-40}
            onSetActive={() => this.closeMenu()}
            onSetInactive={() => this.closeMenu()}
          >
            Introduction
          </Link>
          <Link
            activeClass="active"
            className="works"
            to="works"
            spy={true}
            smooth={true}
            offset={-40}
            onSetActive={() => this.closeMenu()}
            onSetInactive={() => this.closeMenu()}
          >
            How It Works
          </Link>
          <Link
            activeClass="active"
            className="wall"
            to="wall"
            spy={true}
            smooth={true}
            offset={-80}
            onSetActive={() => this.closeMenu()}
            onSetInactive={() => this.closeMenu()}
          >
            Top Nine Wall
          </Link>
        </Menu>
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
          <a className="logo" href="/">
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
              >
                <Button
                  size="large"
                  variant="outlined"
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
              >
                <Button
                  size="large"
                  variant="outlined"
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
              >
                <Button
                  size="large"
                  variant="outlined"
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
              >
                <Button
                  size="large"
                  variant="outlined"
                  className={classes.button}
                >
                  Top nine wall
                </Button>
              </Link>
            </Nav>
            <Nav>
              <Nav.Link href="/">
                <div className="nav-btn">
                  <Button
                    variant="contained"
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
}

export default withStyles(styles, { withTheme: true })(Navigation);
