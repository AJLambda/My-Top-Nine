import React from "react";
import FilmsImg from "../images/films.png";
import MusicImg from "../images/music.png";
import SportsImg from "../images/sports.png";
import MusicIcon from "../images/musicicon.png";
import CreateImg from "../images/user12.png";
import SearchImg from "../images/user5.png";
import AddImg from "../images/user1.png";
import ShareImg from "../images/user6.png";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/Card";
import "../landing/landing.scss";

class LandingPage extends React.Component {
  render() {
    return (
      <>
        <div className="container">
          {/* CTA */}
          <section className="cta">
            <div className="cta-box">
              <h1 id="ctaHeading">Share your top 9 with the world.</h1>
              <div className="cta-btn">
                <button className="cta-btn1">
                  <a href="https://my-top-nine-logan.netlify.com/">
                    <span>Join us</span>
                  </a>
                </button>
              </div>
              <div className="cta-btn-mobile">
                <button className="cta-btn2">
                  <a href="https://my-top-nine-logan.netlify.com/">
                    Get Started!
                  </a>
                </button>
              </div>
            </div>
          </section>

          {/* Banner */}
          <section class="banner">
            <div className="banner-title">What is My Top Nine?</div>
            <div className="banner-text">
              Do you remember Myspace Top 8? If you do, our site will be a nice
              bit of social nostalgia. If not, well then welcome to a world
              where friends shared more than just their food choices for the
              day. My Top Nine is about sharing what you love most across nine
              different categories.{" "}
            </div>
          </section>

          {/* Top Content */}
          <section className="top-content">
            <div className="content-box">
              <img className="top-img" src={CreateImg} alt=""></img>
              <div className="top-title">Create</div>
              <div className="top-text">
                Create a profile and use your wall to build your Top Nine
              </div>
            </div>
            <div className="content-box">
              <img className="top-img" src={SearchImg} alt=""></img>
              <div className="top-title">Choose</div>
              <div className="top-text">
                Choose your favorite selections in a variety of categories
              </div>
            </div>
            <div className="content-box">
              <img className="top-img" src={AddImg} alt=""></img>
              <div className="top-title">Add</div>
              <div className="top-text">
                Add your new choice to your Top Nine wall
              </div>
            </div>
            <div className="content-box">
              <img className="top-img" src={ShareImg} alt=""></img>
              <div className="top-title">Share</div>
              <div className="top-text">
                Share your wall with your friends and compare!
              </div>
            </div>
          </section>

          {/* Middle Content */}
          <section className="middle-content">
            <div className="card-columns">
              <div className="card">
                <img
                  className="card-img-top"
                  src={MusicIcon}
                  alt="Card image cap"
                  style={{ width: "150px", height: "150px" }}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Card title that wraps to a new line
                  </h5>
                  <p className="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </div>
              <div className="card p-3">
                <blockquote className="blockquote mb-0 card-body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante.
                  </p>
                  <footer className="blockquote-footer">
                    <small className="text-muted">
                      Someone famous in{" "}
                      <cite title="Source Title">Source Title</cite>
                    </small>
                  </footer>
                </blockquote>
              </div>
              <div className="card">
                <img
                  className="card-img-top"
                  src=".../100px160/"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This card has supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
              <div className="card bg-primary text-white text-center p-3">
                <blockquote className="blockquote mb-0">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat.
                  </p>
                  <footer className="blockquote-footer">
                    <small>
                      Someone famous in{" "}
                      <cite title="Source Title">Source Title</cite>
                    </small>
                  </footer>
                </blockquote>
              </div>
              <div className="card text-center">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This card has a regular title and short paragraphy of text
                    below it.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
              <div className="card">
                <img
                  className="card-img"
                  src=".../100px260/"
                  alt="Card image"
                />
              </div>
              <div className="card p-3 text-right">
                <blockquote className="blockquote mb-0">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante.
                  </p>
                  <footer className="blockquote-footer">
                    <small className="text-muted">
                      Someone famous in{" "}
                      <cite title="Source Title">Source Title</cite>
                    </small>
                  </footer>
                </blockquote>
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is another card with title and supporting text below.
                    This card has some additional content to make it slightly
                    taller overall.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>

            <div classNameName="bottom-btn">
              <button className="bottom-btn1">
                <a
                  href="https://my-top-nine-logan.netlify.com/"
                  target="_blank"
                >
                  Sign Up
                </a>
              </button>
            </div>
          </section>

          {/* Bottom Content */}
          {/* <section class="bottom-content">
          <div class="bottom-btn">
            <button class="bottom-btn1">
              <a href="https://my-top-nine-logan.netlify.com/" target="_blank">
                Sign Up
              </a>
            </button>
          </div>
        </section> */}

          {/* Footer */}
        </div>
      </>
    );
  }
}

export default LandingPage;
