import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

const team = [
  {
    name: "DAC",
    job: "10K Music NFT Project",
    img: "https://ik.imagekit.io/mbhxghyf1m2/DAC_117_7HAFJPCDx.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647893991321",
    link: (
      <a
        href="https://www.discoastronautclub.com/"
        rel="noreferrer"
        target="_blank"
      >
        Website
      </a>
    ),
    link2: (
      <a
        href="https://testnets.opensea.io/collection/daclarge"
        rel="noreferrer"
        target="_blank"
      >
        OpenSea
      </a>
    ),
    link3: (
      <a
        href="https://www.youtube.com/watch?v=ezRnFj08KlI"
        rel="noreferrer"
        target="_blank"
      >
        Trailer
      </a>
    ),
    link4: (
      <a href="https://dacmint.netlify.app/" rel="noreferrer" target="_blank">
        Minting Dapp
      </a>
    ),
    link5: (
      <a
        href="https://rinkeby.etherscan.io/address/0x36FB97aC78767502488725480614eEFF78668d39#code"
        rel="noreferrer"
        target="_blank"
      >
        Contract
      </a>
    ),
    link6: (
      <a
        href="https://docsend.com/view/6ntxgs7f8iab6hxc"
        rel="noreferrer"
        target="_blank"
      >
        Deck
      </a>
    ),
    link7: (
      <a
        href="https://indd.adobe.com/view/30e69cf0-2477-4cb2-9c9a-e0696b616e06"
        rel="noreferrer"
        target="_blank"
      >
        Whitepaper
      </a>
    ),
  },
  {
    name: "Agora",
    job: "Virtual Concerts - Unreal Engine",
    img: "https://ik.imagekit.io/mbhxghyf1m2/Screen_Shot_2022-05-16_at_9.45.51_AM_FE_LMIImJ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1652719567473",
    link: (
      <a
        href="https://www.experienceagora.com/"
        rel="noreferrer"
        target="_blank"
      >
        Website
      </a>
    ),
    link2: (
      <a
        href="https://www.linkedin.com/pulse/agora-white-paper-james-coholan/"
        rel="noreferrer"
        target="_blank"
      >
        Whitepaper
      </a>
    ),
    link3: (
      <a
        href="https://www.youtube.com/watch?v=QeVeqU00p7M"
        rel="noreferrer"
        target="_blank"
      >
        Trailer
      </a>
    ),
    link4: (
      <a href="https://youtu.be/Xak8aGTgMTo" rel="noreferrer" target="_blank">
        Demo
      </a>
    ),
  },
  // {
  //   name: "Web3 Music Player",
  //   job: "Solidity, Hardhat, Javascript, Ethers.js, IPFS",
  //   img: "https://ik.imagekit.io/mbhxghyf1m2/Images4_sJ2orbs9_Cu.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645153723936",
  //   link: (
  //     <a
  //       href="https://github.com/jamesccoholan/web_3_music_player"
  //       rel="noreferrer"
  //       target="_blank"
  //     >
  //       Github
  //     </a>
  //   ),
  //   link2: (
  //     <a
  //       href="https://the-great-jamesccoholan-site.netlify.app/"
  //       rel="noreferrer"
  //       target="_blank"
  //     >
  //       Live App
  //     </a>
  //   ),
  //   // link3: (
  //   //   <a
  //   //     href="https://www.youtube.com/watch?v=ezRnFj08KlI"
  //   //     rel="noreferrer"
  //   //     target="_blank"
  //   //   >
  //   //     Trailer
  //   //   </a>
  //   // ),
  // },
  {
    name: "Diamond Bull Brigade",
    job: "Photo-Real, Animated NFTs",
    img: "https://ik.imagekit.io/mbhxghyf1m2/RBRIGHT_CUFZWa5HN.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647893971111",
    // link: (
    //   <a
    //     href="https://www.discoastronautclub.com/"
    //     rel="noreferrer"
    //     target="_blank"
    //   >
    //     Website
    //   </a>
    // ),
    link2: (
      <a
        href="https://testnets.opensea.io/collection/dbb"
        rel="noreferrer"
        target="_blank"
      >
        OpenSea Collection
      </a>
    ),
    link3: (
      <a
        href="https://rinkeby.etherscan.io/address/0xc2746B9960120d7976E16159b5f890eeC1253ABF#code"
        rel="noreferrer"
        target="_blank"
      >
        Etherscan Contract
      </a>
    ),
  },
  // {
  //   name: "Siren",
  //   job: "AI Text-To Speech at Scale",
  //   img: "https://ik.imagekit.io/mbhxghyf1m2/Screen_Shot_2022-04-04_at_11.04.18_AM_XNz3pUWIq.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649095482538",
  //   link: (
  //     <a href="https://youtu.be/EX0dzVga-3Q" rel="noreferrer" target="_blank">
  //       Backend Demo
  //     </a>
  //   ),
  //   link2: (
  //     <a
  //       href="https://www.youtube.com/channel/UCzETGOEaqbY-SQvbUUZw2Yw"
  //       rel="noreferrer"
  //       target="_blank"
  //     >
  //       YouTube Channel
  //     </a>
  //   ),

  // },

  // {
  //   name: "Blockchain Development Project",
  //   job: "Music and Photo Site",
  //   img: "https://ik.imagekit.io/mbhxghyf1m2/Images5_krfIkyTzE.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645153724381",
  //   link: (
  //     <a href="https://jamescoholan.me/" rel="noreferrer" target="_blank">
  //       Website
  //     </a>
  //   ),
  //   link2: (
  //     <a
  //       href="https://github.com/jamesccoholan/starter_kit_2"
  //       rel="noreferrer"
  //       target="_blank"
  //     >
  //       Github
  //     </a>
  //   ),
  //   // link3: (
  //   //   <a
  //   //     href="https://www.youtube.com/watch?v=ezRnFj08KlI"
  //   //     rel="noreferrer"
  //   //     target="_blank"
  //   //   >
  //   //     Trailer
  //   //   </a>
  //   // ),
  // },
];

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Videos</h2>
      <h4 className={classes.smallTitle}>Some tunes from SYB</h4>
      <div>
        <GridContainer>
          {team.map(function (member) {
            return (
              <GridItem key={member.name} xs={12} sm={12} md={4}>
                <Card plain>
                  <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                    <img
                      src={member.img}
                      alt="Team Member"
                      className={imageClasses}
                    />
                  </GridItem>

                  <h4 className={classes.cardTitle}>
                    {member.name}
                    <br />
                    <small className={classes.smallTitle}>{member.job}</small>
                    <br />
                    <small className={classes.smallTitle}>{member.link}</small>
                    &nbsp;&emsp;
                    <small className={classes.smallTitle}>{member.link2}</small>
                    &nbsp;&emsp;
                    <small className={classes.smallTitle}>{member.link3}</small>
                    <br />
                    <small className={classes.smallTitle}>{member.link4}</small>
                    &nbsp;&emsp;
                    <small className={classes.smallTitle}>{member.link5}</small>
                    &nbsp;&emsp;
                    <small className={classes.smallTitle}>{member.link6}</small>
                    &nbsp;&emsp;
                    <small className={classes.smallTitle}>{member.link7}</small>
                  </h4>
                  <CardBody></CardBody>
                  <CardFooter className={classes.justifyCenter}></CardFooter>
                </Card>
              </GridItem>
            );
          })}
        </GridContainer>
      </div>
    </div>
  );
}
