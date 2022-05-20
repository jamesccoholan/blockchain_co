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
    name: "AWS",
    job: "Certified Solutions Architect Associate",
    img: "https://ik.imagekit.io/mbhxghyf1m2/Images2__fLMe4U70.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645153723074",
  },
  {
    name: "Virtual Production",
    job: "Unreal Engine Expert",
    img: "https://ik.imagekit.io/mbhxghyf1m2/Images1_4stx-zdRZzl.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645153724360",
  },
  {
    name: "Solidity",
    job: "Dapp Development",
    img: "https://ik.imagekit.io/mbhxghyf1m2/Images0_Z3xDvQ7i6.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645153724774",
  },
  // {
  //   name: "Media Production",
  //   job: "Video and Music Production",
  //   img: "https://ik.imagekit.io/mbhxghyf1m2/Images3_7mTBHrTis.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645153725576",
  // },
  {
    name: "Web Development",
    job: "Front End Web Programming",
    img: "https://ik.imagekit.io/mbhxghyf1m2/Images4_sJ2orbs9_Cu.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645153723936",
  },
  {
    name: "Strategy",
    job: "Growth and Go-To-Market Strategy",
    img: "https://ik.imagekit.io/mbhxghyf1m2/Images5_krfIkyTzE.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645153724381",
  },
  {
    name: "Investing",
    job: "Asset analysis and capital management",
    img: "https://ik.imagekit.io/mbhxghyf1m2/Screen_Shot_2022-05-11_at_3.06.02_PM_Kr2OsGNEm.png?ik-sdk-version=javascript-1.4.3&updatedAt=1652306872138",
  },
  // {
  //   name: "Dre",
  //   job: "Content Strategist and Promotion",
  //   img: "https://ik.imagekit.io/5ierklngtbt/img/NewSuits/9_1frbXBDJw?ik-sdk-version=javascript-1.4.3&updatedAt=1643773717216",
  // },
  // {
  //   name: "Alex",
  //   job: "Video Production",
  //   img: "https://ik.imagekit.io/5ierklngtbt/img/NewSuits/12_3G5yM3e2q?ik-sdk-version=javascript-1.4.3&updatedAt=1643773632536",
  // },
];

const useStyles = makeStyles(styles);

export default function TeamSection2() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Songs</h2>
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
