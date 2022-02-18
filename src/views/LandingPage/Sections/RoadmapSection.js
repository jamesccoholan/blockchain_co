import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import Fade from "react-reveal/Fade";

import styles from "assets/jss/material-kit-react/views/landingPageSections/roadmapStyle";

const useStyles = makeStyles(styles);

const roadmapItems = [
  {
    phase: "Disco Astronaut Club",
    img: "https://ik.imagekit.io/mbhxghyf1m2/226580_IUC1wV5Kvn3.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645152762381",
    items: [
      {
        title:
          "Pushing the boundaries of entertainment on the blockchain (Pre-Launch)",
        description:
          "NFT Mint. The First On-Chain, Virtually Native Media Franchise. A higher bar for art, music and visual media. The DAC leverages advanced virtual production techniques to create radically compelling entertainment and bring the Disconauts to life. Next-Gen Immersive Virtual Media and 3D Art.",
      },
      {
        title: "Original Music",
        description:
          "A Percentage of Music Royalties. Incredible Original and Generative Music. The artist as an investible asset. DAC will have original music drops that the community takes an ownership stake in. Holders will get music royalties according to the number of DAC NFTs they posses. 10,000 unique generative pieces of music will be ascribed to the NFTs.",
      },
    ],
  },
  {
    phase: "LightTwist",
    img: "https://ik.imagekit.io/mbhxghyf1m2/226580_IUC1wV5Kvn3.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645152762381",
    items: [
      {
        title: "Democratizing Access to High End Virtual Production",
        description:
          "Unforgettable Live Events, VIP Access to DAC Concerts, Private Events and Destination Music Festivals. Owning a DAC NFT acts as a VIP access token to live concerts, club nights, private events, DAC club-houses, and curated destination music festivals.",
      },
      {
        title: "Luxury Fashion",
        description:
          "Access to Exclusive and Limited Edition Luxury Fashion Merchandise. Each Disconaut has a unique look that leans into various sub-genres of music culture. Own the physical merchandise of your on-chain NFT.",
      },
    ],
  },
  {
    phase: "SYB Creative",
    img: "https://ik.imagekit.io/mbhxghyf1m2/226580_IUC1wV5Kvn3.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645152762381",
    items: [
      {
        title: "Media Production and Live Events",
        description:
          "The full festival experience, virtualized. First Access to Our Virtual Concert Platform Virtualized Music Festivals; custom light shows and visuals, live DJ Sets, and larger than life venues. Accessible through streaming services and VR. NFT Staking to Accumulate a Social and Governance Token, Giving the Holder Increasing Voting Rights in Project Activities and Access to Future Whitelists.",
      },
    ],
  },
];

export default function WorkSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <Fade duration={1000} bottom cascade>
            <div>
              <h1 className={classes.title}>Projects</h1>
              <h4 className={classes.description}>
                {
                  "Technology and innovation-focused former founder, product developer, project manager, and growth driver. Extensive experience across the entertainment industry, including major label, major talent agency, music & film production, and finance."
                }
              </h4>
            </div>
          </Fade>
          <div className={classes.roadmapContainer}>
            {roadmapItems.map((r) => (
              <Fade duration={1000} bottom cascade key={r.phase}>
                <div className={classes.roadmapSectionContainer}>
                  <img
                    src={r.img}
                    alt="Disconaut Helmet"
                    className={classes.roadmapDot}
                  />
                  <div className={classes.roadmapSection}>
                    <h1 className={classes.roadmapPhase}>{r.phase}</h1>
                    {r.items.map((item) => (
                      <div key={item.title}>
                        <h3 className={classes.roadmapItemTitle}>
                          {item.title}
                        </h3>
                        <p>{item.description}</p>
                      </div>
                    ))}
                  </div>
                  <div className={classes.roadmapDivider} />
                </div>
              </Fade>
            ))}
          </div>
        </GridItem>
      </GridContainer>
    </div>
  );
}
