import React from "react";
import FilmsImg from "../images/films.png";
import MusicImg from "../images/music.png";
import SportsImg from "../images/sports.png";
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
          {/* <section class="banner">
          <h2></h2>
        </section> */}

          {/* Top Content */}
          {/* <section class="top-content">
          <div class="transition-line">
            <h2>Choose your top nine in a variety of categories</h2>
          </div>
        </section> */}

          {/* Middle Content */}
          <section className="middle-content">
            <section className="content-section1">
              <div className="img-content">
                <img src={FilmsImg} alt="Guy playing guitar and singing"></img>
              </div>
              <div className="text-content">
                <h3>Films</h3>
                <p>Display your favorite films!</p>
              </div>
            </section>

            <section className="content-section2">
              <div className="text-content">
                <h3>Music</h3>
                <p>Display your favorite music!</p>
              </div>
              <div className="img-content">
                <img src={MusicImg} alt="Inside of movie theater"></img>
              </div>
            </section>

            <section className="content-section3">
              <div className="img-content">
                <img src={SportsImg} alt="guy surfing"></img>
              </div>
              <div className="text-content">
                <h3>Sports</h3>
                <p>Display your favorite sports!</p>
              </div>
            </section>

            <div className="bottom-btn">
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
