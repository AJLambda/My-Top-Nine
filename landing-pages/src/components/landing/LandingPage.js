import React from "react";
import MusicImg from "../images/musicwall.jpg";
import FilmsImg from "../images/filmswall2.jpg";
import VilliansImg from "../images/villainswall.jpg";
import DestinationImg from "../images/destinationwall.jpg";
import VideoGameImg from "../images/videogamewall.jpg";
import HerosImg from "../images/heroswall.jpg";
import MoviesImg from "../images/movieswall.jpg";
import TvImg from "../images/tvwall.jpg";
import SportsImg from "../images/sportswall.jpg";
import SportsIcon from "../images/sportsicon.png";
import MusicIcon from "../images/musicicon.png";
import CreateImg from "../images/user12.png";
import SearchImg from "../images/user5.png";
import AddImg from "../images/user1.png";
import ShareImg from "../images/user6.png";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/Card";
import "../landing/landing.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

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
          <section className="banner">
            <div className="banner-info">
              <div className="banner-title">What is My Top Nine?</div>
              <div className="banner-text">
                Do you remember Myspace Top 8? If you do, our site will be a
                nice bit of social nostalgia. If not, well then welcome to a
                world where friends shared more than just their food choices for
                the day. My Top Nine is about sharing what you love most across
                <span> nine different categories</span>.{" "}
              </div>
            </div>

            <Carousel
              // autoPlay
              // dynamicHeight={true}
              infiniteLoop
              showArrows={false}
              interval={3000}
              transitionTime={900}
              showThumbs={false}
              showStatus={false}
              width="500px"
              height="500px"
              centerMode
              centerSlidePercentage={33}
              className="banner-carousel"

              // transitionTime={100}
            >
              <div className="slideimg-container">
                <img className="slideimg" src={MusicIcon} />
              </div>
              <div className="slideimg-container">
                <img className="slideimg" src={SportsIcon} />
              </div>
              <div className="slideimg-container">
                <img className="slideimg" src={MusicIcon} />
              </div>
              <div className="slideimg-container">
                <img className="slideimg" src={SportsIcon} />
              </div>
              <div className="slideimg-container">
                <img className="slideimg" src={MusicIcon} />
              </div>
              <div className="slideimg-container">
                <img className="slideimg" src={SportsIcon} />
              </div>
              <div className="slideimg-container">
                <img className="slideimg" src={MusicIcon} />
              </div>
              <div className="slideimg-container">
                <img className="slideimg" src={MusicIcon} />
              </div>
              <div className="slideimg-container">
                <img className="slideimg" src={MusicIcon} />
              </div>
            </Carousel>
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
            <div className="card-container">
              <div className="card">
                <img
                  className="card-img-top"
                  src={MusicImg}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h3 className="card-title">Music Artists</h3>
                  <p className="card-text">
                    This is a longer card with supporting text below as a
                  </p>
                </div>
              </div>
              <div className="card">
                <img
                  className="card-img-top"
                  src={SportsImg}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h3 className="card-title">Sports Teams</h3>
                  <p className="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </div>
              <div className="card">
                <img
                  className="card-img-top"
                  src={MoviesImg}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h3 className="card-title">Movies</h3>
                  <p className="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </div>
              <div className="card">
                <img
                  className="card-img-top"
                  src={TvImg}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h3 className="card-title">TV Shows</h3>
                  <p className="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </div>
              <div className="card">
                <img
                  className="card-img-top"
                  src={DestinationImg}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h3 className="card-title">Destinations</h3>
                  <p className="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </div>
              <div className="card">
                <img
                  className="card-img-top"
                  src={VilliansImg}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h3 className="card-title">Villains</h3>
                  <p className="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </div>
              <div className="card">
                <img
                  className="card-img-top"
                  src={VideoGameImg}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h3 className="card-title">Video Games</h3>
                  <p className="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </div>
              <div className="card">
                <img
                  className="card-img-top"
                  src={HerosImg}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h3 className="card-title">Heros</h3>
                  <p className="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </div>
            </div>

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
