import React from "react";
import Footer from "../footer/Footer";
import MusicCat from "../images/cat2.png";
import TvCat from "../images/cat8.png";
import MoviesCat from "../images/cat4.png";
import DestinationsCat from "../images/cat14.png";
import VideoGamesCat from "../images/cat5.png";
import FoodsCat from "../images/cat11.png";
import SportsCat from "../images/cat15.png";
import HerosCat from "../images/cat12.png";
import VillainsCat from "../images/cat13.png";
import FriendsCat from "../images/cat16.png";
import AvatarImg from "../images/avatar1.png";
import SportsIcon from "../images/sportsicon.png";
import MusicIcon from "../images/musicicon.png";
import CreateImg from "../images/user12.png";
import SearchImg from "../images/user5.png";
import AddImg from "../images/user1.png";
import ShareImg from "../images/user6.png";
import QuoteImg1 from "../images/quoteimg1.png";
import QuoteImg2 from "../images/quoteimg2.png";
import QuoteImg3 from "../images/quoteimg3.png";
import Logo from "../images/logo.png";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import "../landing/landing.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const useStyles = makeStyles(theme => ({
  topBtn: {
    width: "225px",
    height: "50px",
    fontFamily: "Nunito",
    fontSize: "16px",
    color: "#fbf9f8",
    fontWeight: "bold",
    backgroundColor: "#bb0a21",
    "&:hover": {
      backgroundColor: "#A3091D"
    },
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

export default function LandingPage() {
  const classes = useStyles();
  return (
    <>
      <div className="container">
        {/* CTA */}
        <section className="cta">
          <div className="cta-box">
            <h1 id="ctaHeading">
              Share your <span>top nine</span> with friends.
            </h1>

            {/* <div className="cta-btn">
                <button className="cta-btn1">
                  <a href="https://my-top-nine-logan.netlify.com/">
                    <span>Sign Up</span>
                  </a>
                </button>
              </div> */}
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
            <div className="banner-title">
              <h2>What is My Top Nine?</h2>
            </div>
            <div className="banner-text">
              Do you remember Myspace Top 8? If so, our site will be a nice bit
              of social nostalgia. <br />
              If not, well welcome to a world where friends shared more than
              their food choices for the day. <br /> My Top Nine is about
              sharing what you love most across
              <span> nine different categories:</span>{" "}
            </div>
          </div>

          <Carousel
            autoPlay
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
          <div className="banner-two"></div>
        </section>

        {/* Top Content */}
        <section className="top-content">
          <div className="top-title">
            <h2>How does it work?</h2>
          </div>
          <div className="top-wrapper">
            <div className="content-box">
              <div className="top-circle">
                <span>
                  <img className="top-img" src={CreateImg} alt="" />
                </span>
              </div>
              <div className="top-title">Create</div>
              <div className="top-text">
                Create a profile and use your wall to{" "}
                <span className="underline"> build your Top Nine</span>
              </div>
            </div>
            <div className="content-box">
              <div className="top-circle">
                <span>
                  <img className="top-img" src={SearchImg} alt="" />
                </span>
              </div>
              <div className="top-title">Choose</div>
              <div className="top-text">
                Choose your{" "}
                <span className="underline">favorite selections</span> from each
                category
              </div>
            </div>
            <div className="content-box">
              <div className="top-circle">
                <span>
                  <img className="top-img" src={AddImg} alt="" />
                </span>
              </div>
              <div className="top-title">Add</div>
              <div className="top-text">
                Add your new choice to your Top Nine wall
              </div>
            </div>
            <div className="content-box">
              <div className="top-circle">
                <span>
                  <img className="top-img" src={ShareImg} alt="" />
                </span>
              </div>
              <div className="top-title">Share</div>
              <div className="top-text">
                <span className="underline">Share your wall</span> with your
                friends and compare!
              </div>
            </div>
          </div>
          <div className="top-btn">
            <Fab
              variant="extended"
              // color="primary"
              aria-label="add"
              className={classes.topBtn}
            >
              GET STARTED
            </Fab>
          </div>
        </section>

        {/* Middle Content */}
        <section className="middle-content">
          <div className="middle-header">
            <div className="ribbon">
              <span className="ribbon5">
                <div className="shadow-box">
                  <div className="content">
                    <h2>My Top Nine Wall</h2>
                  </div>
                </div>
              </span>
            </div>

            {/* <div className="middle-title">
                <h3>
                  Create and customize your wall and see which friends share
                  similar taste!
                </h3>
              </div> */}
          </div>

          <div className="card-container">
            <div className="card" style={{ gridArea: "one" }}>
              <div className="img-wrapper">
                <img
                  className="card-img-top"
                  src={MusicCat}
                  alt="Card image cap"
                />
              </div>
              <div className="card-body">
                <h3 className="card-title">
                  Music Artists
                  <span style={{ display: "block", width: "70%" }}>
                    <img
                      src="https://d9hhrg4mnvzow.cloudfront.net/welcome.zola.com/allproducts_desktop_ct3/1fd9wuh-invites-underline-2x_02s006021004000000.png"
                      alt=""
                      // style={{ display: "block" }}
                    ></img>
                  </span>
                </h3>
                <p className="card-text">
                  This is a longer card with supporting text below as a
                </p>
              </div>
            </div>
            <div className="card" style={{ gridArea: "eight" }}>
              <div className="img-wrapper">
                <img
                  className="card-img-top"
                  src={SportsCat}
                  alt="Card image cap"
                />
              </div>
              <div className="card-body">
                <h3 className="card-title">
                  Sports Teams
                  <span style={{ display: "block", width: "50%" }}>
                    <img
                      src="https://d9hhrg4mnvzow.cloudfront.net/welcome.zola.com/allproducts_desktop_ct3/1fd9wuh-invites-underline-2x_02s006021004000000.png"
                      alt=""
                      // style={{ display: "block" }}
                    ></img>
                  </span>
                </h3>

                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
            <div
              className="card"
              id="profilecard"
              style={{
                gridArea: "ten",
                marginTop: "5px",
                marginBottom: "5px"
              }}
            >
              <div className="profileimg-wrapper">
                <img
                  id="profileimg"
                  className="card-img-top"
                  src={AvatarImg}
                  alt="Card image cap"
                />
              </div>
              <div className="card-body">
                <h3 className="card-title" id="alyssa">
                  <span className="logo-span">
                    <img className="logo-img" src={Logo} alt="" />
                  </span>
                  Alyssa B.
                  <span className="logo-span">
                    <img className="logo-img" src={Logo} alt="" />
                  </span>
                </h3>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer. This is a longer card with supporting text below as a
                  natural lead-in to additional content. This content is a
                  little bit longer.
                </p>
              </div>
            </div>
            <div
              className="card"
              style={{
                gridArea: "two",
                alignSelf: "start",
                margin: "0 5%",
                marginBottom: "10%"
              }}
            >
              <div className="img-wrapper">
                <img
                  className="card-img-top"
                  src={MoviesCat}
                  alt="Card image cap"
                />
              </div>
              <div className="card-body">
                <h3 className="card-title">
                  Movies
                  <span style={{ display: "block", width: "50%" }}>
                    <img
                      src="https://d9hhrg4mnvzow.cloudfront.net/welcome.zola.com/allproducts_desktop_ct3/1fd9wuh-invites-underline-2x_02s006021004000000.png"
                      alt=""
                      // style={{ display: "block" }}
                    ></img>
                  </span>
                </h3>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
            <div
              className="card"
              style={{
                gridArea: "three",
                alignSelf: "start",
                margin: "0 5%"
              }}
            >
              <div className="img-wrapper">
                <img
                  className="card-img-top"
                  src={TvCat}
                  alt="Card image cap"
                />
              </div>
              <div className="card-body">
                <h3 className="card-title">
                  TV Shows
                  <span style={{ display: "block", width: "70%" }}>
                    <img
                      src="https://d9hhrg4mnvzow.cloudfront.net/welcome.zola.com/allproducts_desktop_ct3/1fd9wuh-invites-underline-2x_02s006021004000000.png"
                      alt=""
                      // style={{ display: "block" }}
                    ></img>
                  </span>
                </h3>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
            <div className="card" style={{ gridArea: "five" }}>
              <div className="img-wrapper">
                <img
                  className="card-img-top"
                  src={FoodsCat}
                  alt="Card image cap"
                />
              </div>
              <div className="card-body">
                <h3 className="card-title">
                  Foods
                  <span style={{ display: "block", width: "50%" }}>
                    <img
                      src="https://d9hhrg4mnvzow.cloudfront.net/welcome.zola.com/allproducts_desktop_ct3/1fd9wuh-invites-underline-2x_02s006021004000000.png"
                      alt=""
                      // style={{ display: "block" }}
                    ></img>
                  </span>
                </h3>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
            <div className="card" style={{ gridArea: "eleven" }}>
              <div className="img-wrapper">
                <img
                  className="card-img-top"
                  src={FriendsCat}
                  alt="Card image cap"
                />
              </div>
              <div className="card-body">
                <h3 className="card-title">
                  Friends
                  <span style={{ display: "block", width: "50%" }}>
                    <img
                      src="https://d9hhrg4mnvzow.cloudfront.net/welcome.zola.com/allproducts_desktop_ct3/1fd9wuh-invites-underline-2x_02s006021004000000.png"
                      alt=""
                      // style={{ display: "block" }}
                    ></img>
                  </span>
                </h3>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
            <div className="card" style={{ gridArea: "four" }}>
              <div className="img-wrapper">
                <img
                  className="card-img-top"
                  src={DestinationsCat}
                  alt="Card image cap"
                />
              </div>
              <div className="card-body">
                <h3 className="card-title">
                  Destinations
                  <span style={{ display: "block", width: "60%" }}>
                    <img
                      src="https://d9hhrg4mnvzow.cloudfront.net/welcome.zola.com/allproducts_desktop_ct3/1fd9wuh-invites-underline-2x_02s006021004000000.png"
                      alt=""
                      // style={{ display: "block" }}
                    ></img>
                  </span>
                </h3>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
            <div
              className="card"
              style={{ gridArea: "six", alignSelf: "end", margin: "0 5%" }}
            >
              <div className="img-wrapper">
                <img
                  className="card-img-top"
                  src={VillainsCat}
                  alt="Card image cap"
                />
              </div>
              <div className="card-body">
                <h3 className="card-title">
                  Villains
                  <span style={{ display: "block", width: "60%" }}>
                    <img
                      src="https://d9hhrg4mnvzow.cloudfront.net/welcome.zola.com/allproducts_desktop_ct3/1fd9wuh-invites-underline-2x_02s006021004000000.png"
                      alt=""
                      // style={{ display: "block" }}
                    ></img>
                  </span>
                </h3>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
            <div
              className="card"
              style={{
                gridArea: "nine"
              }}
            >
              <div className="img-wrapper">
                <img
                  className="card-img-top"
                  src={VideoGamesCat}
                  alt="Card image cap"
                />
              </div>
              <div className="card-body">
                <h3 className="card-title">
                  Video Games
                  <span style={{ display: "block", width: "80%" }}>
                    <img
                      src="https://d9hhrg4mnvzow.cloudfront.net/welcome.zola.com/allproducts_desktop_ct3/1fd9wuh-invites-underline-2x_02s006021004000000.png"
                      alt=""
                      // style={{ display: "block" }}
                    ></img>
                  </span>
                </h3>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
            <div
              className="card"
              style={{
                gridArea: "seven",
                alignSelf: "end",
                margin: "0 5%"
              }}
            >
              <div className="img-wrapper">
                <img
                  className="card-img-top"
                  src={HerosCat}
                  alt="Card image cap"
                />
              </div>
              <div className="card-body">
                <h3 className="card-title">
                  Heros
                  <span style={{ display: "block", width: "50%" }}>
                    <img
                      src="https://d9hhrg4mnvzow.cloudfront.net/welcome.zola.com/allproducts_desktop_ct3/1fd9wuh-invites-underline-2x_02s006021004000000.png"
                      alt=""
                      // style={{ display: "block" }}
                    ></img>
                  </span>
                </h3>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          {/* <div className="bottom-btn">
              <button className="bottom-btn1">
                <a
                  href="https://my-top-nine-logan.netlify.com/"
                  target="_blank"
                >
                  Sign Up
                </a>
              </button>
            </div> */}
        </section>

        {/* Bottom Content */}
        <section className="bottom-content">
          <div className="bottom-banner">
            <h2>Express your interests and get to know your friends better!</h2>{" "}
            <div className="bottom-btn">
              <Fab
                variant="extended"
                color="primary"
                aria-label="add"
                className={classes.topBtn}
              >
                CREATE YOUR WALL
              </Fab>
            </div>
          </div>
          <div className="bottom-container">
            <h4 className="bottom-title">"Who's Using It?"</h4>
            <div className="bottom-text">
              <h5>
                My Top Nine is used by a large variety of satisfied customers
                throughout 30 countries. Here's what a few had to say:
              </h5>
            </div>
            <div className="quotes-container">
              <div className="bottom-quotes">
                <h5>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </h5>
                <div className="info-wrapper">
                  <img
                    className="bottom-img"
                    src={QuoteImg1}
                    alt="Card image cap"
                  />
                  <div className="bottom-name">Jonathan</div>
                </div>
              </div>

              <div className="bottom-quotes">
                <h5>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </h5>
                <div className="info-wrapper">
                  <img
                    className="bottom-img"
                    src={QuoteImg2}
                    alt="Card image cap"
                  />
                  <div className="bottom-name">Susan</div>
                </div>
              </div>
              <div className="bottom-quotes">
                <h5>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </h5>
                <div className="info-wrapper">
                  <img
                    className="bottom-img"
                    src={QuoteImg3}
                    alt="Card image cap"
                  />
                  <div className="bottom-name">Jill</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
