import React from "react";
import AustinImg from "../images/Austin7.jpg";
import BrandonImg from "../images/Brandon.jpg";
import JenuelImg from "../images/Jenuel.jpg";
import LoganImg from "../images/Logan.jpg";
import PadraicImg from "../images/Padraic.jpg";
import MoinImg from "../images/Moin.jpg";
import Card from "react-bootstrap/Card";
import Underline1 from "../images/underline1.png";
import Underline5 from "../images/underline5.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

class About extends React.Component {
  render() {
    return (
      <section>
        <div className="about-container">
          <div className="about-header">
            <h2 className="about-title">Meet the Team</h2>
            <h3 className="about-text">
              We are a group of passionate developers dedicated to helping you
              build your wall one brick at a time.
            </h3>
          </div>
          <div className="team-members-wrapper">
            {/* Moin */}
            <div className="card">
              <div className="img-wrapper">
                <img
                  className="card-img-top"
                  src={MoinImg}
                  alt="Card image cap"
                />
              </div>
              <div className="card-body">
                <h3 className="member-title">Moin</h3>
                <h4 className="member-role">
                  Team Lead
                  <span style={{ display: "block" }}>
                    <img
                      src={Underline5}
                      alt=""
                      // style={{ display: "block" }}
                    ></img>
                  </span>
                </h4>
                <p className="member-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
                <a href="#" className="card-link">
                  <FontAwesomeIcon
                    icon={faGithub}
                    size={"2x"}
                    // style={{ marginRight: "3px" }}
                  />
                </a>
                <a href="#" className="card-link">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    size={"2x"}
                    // style={{ marginRight: "3px" }}
                  />
                </a>
                <a href="#" className="card-link">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    size={"2x"}
                    // style={{ marginRight: "3px" }}
                  />
                </a>
              </div>
            </div>

            {/* Austin */}
            <div className="card">
              <div className="img-wrapper">
                <img
                  className="card-img-top"
                  src={AustinImg}
                  alt="Card image cap"
                />
              </div>
              <div className="card-body">
                <h3 className="member-title">Austin</h3>
                <h4 className="member-role">
                  UI Developer
                  <span style={{ display: "block" }}>
                    <img
                      src={Underline5}
                      alt=""
                      // style={{ display: "block" }}
                    ></img>
                  </span>
                </h4>
                <p className="member-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
                <a href="#" className="card-link">
                  <FontAwesomeIcon
                    icon={faGithub}
                    size={"2x"}
                    // style={{ marginRight: "3px" }}
                  />
                </a>
                <a href="#" className="card-link">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    size={"2x"}
                    // style={{ marginRight: "3px" }}
                  />
                </a>
                <a href="#" className="card-link">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    size={"2x"}
                    // style={{ marginRight: "3px" }}
                  />
                </a>
              </div>
            </div>

            {/* Brandon */}
            <div className="card">
              <div className="img-wrapper">
                <img
                  className="card-img-top"
                  src={BrandonImg}
                  alt="Card image cap"
                />
              </div>
              <div className="card-body">
                <h3 className="member-title">Brandon</h3>
                <h4 className="member-role">
                  UI Developer
                  <span style={{ display: "block" }}>
                    <img
                      src={Underline5}
                      alt=""
                      // style={{ display: "block" }}
                    ></img>
                  </span>
                </h4>
                <p className="member-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
                <a href="#" className="card-link">
                  <FontAwesomeIcon
                    icon={faGithub}
                    size={"2x"}
                    // style={{ marginRight: "3px" }}
                  />
                </a>
                <a href="#" className="card-link">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    size={"2x"}
                    // style={{ marginRight: "3px" }}
                  />
                </a>
                <a href="#" className="card-link">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    size={"2x"}
                    // style={{ marginRight: "3px" }}
                  />
                </a>
              </div>
            </div>

            {/* Logan */}
            <div className="card">
              <div className="img-wrapper">
                <img
                  className="card-img-top"
                  src={LoganImg}
                  alt="Card image cap"
                />
              </div>
              <div className="card-body">
                <h3 className="member-title">Logan</h3>
                <h4 className="member-role">
                  Front End Developer
                  <span style={{ display: "block" }}>
                    <img
                      src={Underline5}
                      alt=""
                      // style={{ display: "block" }}
                    ></img>
                  </span>
                </h4>
                <p className="member-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
                <a href="#" className="card-link">
                  <FontAwesomeIcon
                    icon={faGithub}
                    size={"2x"}
                    // style={{ marginRight: "3px" }}
                  />
                </a>
                <a href="#" className="card-link">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    size={"2x"}
                    // style={{ marginRight: "3px" }}
                  />
                </a>
                <a href="#" className="card-link">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    size={"2x"}
                    // style={{ marginRight: "3px" }}
                  />
                </a>
              </div>
            </div>

            {/* Jay */}
            <div className="card">
              <div className="img-wrapper">
                <img
                  className="card-img-top"
                  src={JenuelImg}
                  alt="Card image cap"
                />
              </div>
              <div className="card-body">
                <h3 className="member-title">Jay</h3>
                <h4 className="member-role">
                  Front End Developer
                  <span style={{ display: "block" }}>
                    <img
                      src={Underline5}
                      alt=""
                      // style={{ display: "block" }}
                    ></img>
                  </span>
                </h4>
                <p className="member-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
                <a href="#" className="card-link">
                  <FontAwesomeIcon
                    icon={faGithub}
                    size={"2x"}
                    // style={{ marginRight: "3px" }}
                  />
                </a>
                <a href="#" className="card-link">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    size={"2x"}
                    // style={{ marginRight: "3px" }}
                  />
                </a>
                <a href="#" className="card-link">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    size={"2x"}
                    // style={{ marginRight: "3px" }}
                  />
                </a>
              </div>
            </div>

            {/* Padraic */}
            <div className="card">
              <div className="img-wrapper">
                <img
                  className="card-img-top"
                  src={PadraicImg}
                  alt="Card image cap"
                />
              </div>
              <div className="card-body">
                <h3 className="member-title">Padraic</h3>
                <h4 className="member-role">
                  Back End Developer
                  <span style={{ display: "block" }}>
                    <img
                      src={Underline5}
                      alt=""
                      // style={{ display: "block" }}
                    ></img>
                  </span>
                </h4>
                <p className="member-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
                <a href="#" className="card-link">
                  <FontAwesomeIcon
                    icon={faGithub}
                    size={"2x"}
                    // style={{ marginRight: "3px" }}
                  />
                </a>
                <a href="#" className="card-link">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    size={"2x"}
                    // style={{ marginRight: "3px" }}
                  />
                </a>
                <a href="#" className="card-link">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    size={"2x"}
                    // style={{ marginRight: "3px" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
