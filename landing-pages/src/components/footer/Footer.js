import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  InputGroup,
  FormControl
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import "../landing/landing.scss";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="footer-top">
          <div className="footer-top-left">
            <div className="started">
              <h4>Getting Started</h4>
              <ul>
                <li>Starting your wall</li>
                <li>Selecting categories</li>
              </ul>
            </div>
            <div className="about">
              <h4>About Us</h4>
              <ul>
                <li>Our Ethos</li>
                <li>How It Works</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div className="contact">
              <h4>Connect</h4>
              <ul>
                <li>Contact Us</li>
                <li>
                  <FontAwesomeIcon
                    icon={faTwitter}
                    size={"xs"}
                    style={{ marginRight: "3px" }}
                  />
                  Twitter
                </li>
                <li style={{ fontSize: "13px" }}>
                  <FontAwesomeIcon
                    icon={faFacebookF}
                    size={"xs"}
                    style={{ marginRight: "6px", marginLeft: "1px" }}
                  />
                  Facebook
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faInstagram}
                    size={"xs"}
                    style={{ marginRight: "5px" }}
                  />
                  Instagram
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-top-right">
            <h4>Join our newsletter</h4>
            {/* <h4>Email</h4> */}
            <label htmlFor="email">Email</label>
            <InputGroup size="lg" className="mb-3">
              <FormControl
                placeholder="email@address.com"
                aria-label="email@address.com"
                aria-describedby="basic-addon2"
                id="email"
              />
              <InputGroup.Append>
                <Button
                  className="register-btn"
                  variant="outline-secondary"
                  style={{ backgroundColor: "firebrick", color: "white" }}
                >
                  REGISTER
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <p>
              <span>©</span>2019 My Top Nine
            </p>
          </div>
          <div className="footer-bottom-right">
            <a>Terms</a>
            <a>Privacy</a>
            <a>Security</a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
