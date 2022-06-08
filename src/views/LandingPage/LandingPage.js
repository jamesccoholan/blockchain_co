import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
// import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import Fade from "react-reveal/Fade";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
// import ProductSection from "./Sections/ProductSection.js";
import VideoSection from "./Sections/VideoSection.js";
import TeamSection from "./Sections/TeamSection.js";
import WorkSection from "./Sections/RoadmapSection.js";
import Gallery from "./Sections/Gallery.js";
import Story from "./Sections/Story.js";
import TeamSection2 from "./Sections/TeamSection2.js";
// import FAQ from "./Sections/FAQ.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        // brand="James Coholan"
        // rightLinks={<HeaderLinks />}
        absolute
        {...rest}
      />
      <Parallax
        filter
        image={
          "https://ik.imagekit.io/mbhxghyf1m2/1920-1080053_u3T0LGZnp.JPG?ik-sdk-version=javascript-1.4.3&updatedAt=1653004649012"
        }
        alt="SYB"
      >
        <Fade duration={2000} bottom cascade>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>SYB Creative</h1>
                <h2 className={classes.subtitle}>
                  NFT Consulting and Production
                </h2>
                <h4>NFTs, Media, Music</h4>

                <br />
                <Button
                  color="twitter"
                  size="lg"
                  href="https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbEpzV3lOYVRiMWlsaEFpSzNBQkFBckc3MFVpQXxBQ3Jtc0tsTzdSdXNDU1VyNjlDYXRwLUQ0Y1RzbEZndFhFd1A4cDFnSEh6b0FYam4tVVBfVmdod1R5dk92WVdyemRQczhoT1FrNXlxZDB3V2FGOE1KRnhFOXY2Q3JSVXBkX0UyS1podmlKZGZ1S3hxRnVxVExxNA&q=https%3A%2F%2Fopen.spotify.com%2Fartist%2F7lQsPgl572B3J9tARp1N66&v=KrXQL-BSVnU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.titleButton}
                >
                  {/* <i className="fas fa-play" /> */}
                  Spotify
                </Button>
                <Button
                  color="twitter"
                  size="lg"
                  href="https://www.instagram.com/savyungblanc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.titleButton}
                >
                  Instagram
                </Button>
                <Button
                  color="twitter"
                  size="lg"
                  href="https://www.youtube.com/channel/UC0bjvhsexag1eW0GWqjm2DA/videos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.titleButton}
                >
                  YouTube
                </Button>
                <h1></h1>
                {/* <h4>CodeWars Rank</h4>
                <img src="https://www.codewars.com/users/jamesccoholan/badges/large" /> */}
              </GridItem>
            </GridContainer>
          </div>
        </Fade>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <TeamSection />
        </div>
      </div>
      <div>
        <VideoSection />
        <WorkSection />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <Gallery />
          </div>
        </div>
        <Story />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <TeamSection2 />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
