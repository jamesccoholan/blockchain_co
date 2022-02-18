import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>
            Driving Entertinament Franchises on the Blockchain
          </h2>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Growth Driver"
              description="10,000 Unique Pieces of Generative 3D Art and Music."
              icon={
                "https://ik.imagekit.io/mbhxghyf1m2/226580_IUC1wV5Kvn3.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645152762381"
              }
              alt="Disconaut NFT"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Creative Direction"
              description="Music and Visual Media Drops. Royalties Distributed to NFT Holders."
              icon={
                "https://ik.imagekit.io/mbhxghyf1m2/226580_IUC1wV5Kvn3.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645152762381"
              }
              alt="Disconaut NFT"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Blockchain Engineering"
              description="Virtual Music Festivals, Live Concerts and Exclusive After-parties."
              icon={
                "https://ik.imagekit.io/mbhxghyf1m2/226580_IUC1wV5Kvn3.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645152762381"
              }
              alt="Disconaut NFT"
              vertical
            />
          </GridItem>
        </GridContainer>
        <GridContainer justify="center">
          <h2 className={classes.title}> </h2>
        </GridContainer>
      </div>
    </div>
  );
}
