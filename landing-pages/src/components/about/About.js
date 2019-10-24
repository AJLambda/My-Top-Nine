import React from "react";
import AustinImg from "../images/Austin7.jpg";
import BrandonImg from "../images/Brandon.jpg";
import JenuelImg from "../images/Jenuel.jpg";
import LoganImg from "../images/Logan.jpg";
import PadraicImg from "../images/Padraic.jpg";
import MoinImg from "../images/Moin.jpg";
import Underline5 from "../images/underline5.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Element } from "react-scroll";
// import Zoom from "react-reveal/Zoom";

export default function About() {
  return (
    <Element name="team" className="element">
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
                <img className="card-img-top" src={MoinImg} alt="Card cap" />
              </div>
              <div className="card-body">
                <h3 className="member-title">Moin</h3>
                <h4 className="member-role">
                  Team Lead
                  <span style={{ display: "block" }}>
                    <img src={Underline5} alt=""></img>
                  </span>
                </h4>
                <p className="member-text">
                  The man behind the curtain. The coordinator of everything Top
                  Nine.
                </p>
                <div className="link-wrapper">
                  <div className="card-link">
                    <FontAwesomeIcon icon={faGithub} size={"2x"} />
                  </div>
                  <div className="card-link">
                    <FontAwesomeIcon icon={faLinkedin} size={"2x"} />
                  </div>
                  <div className="card-link">
                    <FontAwesomeIcon icon={faInstagram} size={"2x"} />
                  </div>
                </div>
              </div>
            </div>

            {/* Austin */}
            <div className="card">
              <div className="img-wrapper">
                <img className="card-img-top" src={AustinImg} alt="Card cap" />
              </div>
              <div className="card-body">
                <h3 className="member-title">Austin</h3>
                <h4 className="member-role">
                  UI Developer
                  <span style={{ display: "block" }}>
                    <img src={Underline5} alt=""></img>
                  </span>
                </h4>
                <p className="member-text">
                  The creator of this landing page. A developer with a love for
                  design.
                </p>
                <a
                  href="https://github.com/AJLambda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-link"
                >
                  <FontAwesomeIcon icon={faGithub} size={"2x"} />
                </a>
                <a
                  href="https://www.linkedin.com/in/austinpjames"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-link"
                >
                  <FontAwesomeIcon icon={faLinkedin} size={"2x"} />
                </a>
                <a
                  href="https://www.instagram.com/__austinj__/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-link"
                >
                  <FontAwesomeIcon icon={faInstagram} size={"2x"} />
                </a>
              </div>
            </div>

            {/* Brandon */}
            <div className="card">
              <div className="img-wrapper">
                <img className="card-img-top" src={BrandonImg} alt="Card cap" />
              </div>
              <div className="card-body">
                <h3 className="member-title">Brandon</h3>
                <h4 className="member-role">
                  UI Developer
                  <span style={{ display: "block" }}>
                    <img src={Underline5} alt=""></img>
                  </span>
                </h4>
                <p className="member-text">
                  The creator of another landing page. A developer with a love
                  for design.
                </p>
                <div className="link-wrapper">
                  <div className="card-link">
                    <FontAwesomeIcon icon={faGithub} size={"2x"} />
                  </div>
                  <div className="card-link">
                    <FontAwesomeIcon icon={faLinkedin} size={"2x"} />
                  </div>
                  <div className="card-link">
                    <FontAwesomeIcon icon={faInstagram} size={"2x"} />
                  </div>
                </div>
              </div>
            </div>

            {/* Logan */}
            <div className="card">
              <div className="img-wrapper">
                <img className="card-img-top" src={LoganImg} alt="Card cap" />
              </div>
              <div className="card-body">
                <h3 className="member-title">Logan</h3>
                <h4 className="member-role">
                  Front End Developer
                  <span style={{ display: "block" }}>
                    <img src={Underline5} alt=""></img>
                  </span>
                </h4>
                <p className="member-text">
                  A seasoned React developer and an excellent team player.
                </p>
                <div className="link-wrapper">
                  <div className="card-link">
                    <FontAwesomeIcon icon={faGithub} size={"2x"} />
                  </div>
                  <div className="card-link">
                    <FontAwesomeIcon icon={faLinkedin} size={"2x"} />
                  </div>
                  <div className="card-link">
                    <FontAwesomeIcon icon={faInstagram} size={"2x"} />
                  </div>
                </div>
              </div>
            </div>

            {/* Jay */}
            <div className="card">
              <div className="img-wrapper">
                <img className="card-img-top" src={JenuelImg} alt="Card cap" />
              </div>
              <div className="card-body">
                <h3 className="member-title">Jay</h3>
                <h4 className="member-role">
                  Front End Developer
                  <span style={{ display: "block" }}>
                    <img src={Underline5} alt=""></img>
                  </span>
                </h4>
                <p className="member-text">
                  A seasoned React developer and an excellent team player.
                </p>
                <div className="link-wrapper">
                  <div className="card-link">
                    <FontAwesomeIcon icon={faGithub} size={"2x"} />
                  </div>
                  <div className="card-link">
                    <FontAwesomeIcon icon={faLinkedin} size={"2x"} />
                  </div>
                  <div className="card-link">
                    <FontAwesomeIcon icon={faInstagram} size={"2x"} />
                  </div>
                </div>
              </div>
            </div>

            {/* Padraic */}
            <div className="card">
              <div className="img-wrapper">
                <img className="card-img-top" src={PadraicImg} alt="Card cap" />
              </div>
              <div className="card-body">
                <h3 className="member-title">Padraic</h3>
                <h4 className="member-role">
                  Back End Developer
                  <span style={{ display: "block" }}>
                    <img src={Underline5} alt=""></img>
                  </span>
                </h4>
                <p className="member-text">
                  The data brain. An efficient problem solver and critical
                  thinker.
                </p>
                <div className="link-wrapper">
                  <div className="card-link">
                    <FontAwesomeIcon icon={faGithub} size={"2x"} />
                  </div>
                  <div className="card-link">
                    <FontAwesomeIcon icon={faLinkedin} size={"2x"} />
                  </div>
                  <div className="card-link">
                    <FontAwesomeIcon icon={faInstagram} size={"2x"} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
}
