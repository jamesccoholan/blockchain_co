import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

const useStyles = makeStyles(styles);

export default function Gallery() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    // classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <div>
        {/* <h2 className={classes.title}>Photos</h2> */}
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={100} sm={100} md={100} className={classes.itemGrid}>
                <img
                  src={
                    "https://ik.imagekit.io/mbhxghyf1m2/Screen_Shot_2022-05-15_at_3.51.29_PM_xdquxBseV4.png?ik-sdk-version=javascript-1.4.3&updatedAt=1652655106848"
                  }
                  alt="Image"
                  className={imageClasses}
                />
              </GridItem>
            </Card>
          </GridItem>
          {/* <h3>JamesCoholan@Gmail.com</h3> */}
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              {/* <GridItem xs={100} sm={100} md={100} className={classes.itemGrid}>
                <img
                  src={
                    "https://ik.imagekit.io/5ierklngtbt/img/NewSuits/9_nn8PuGDK0?ik-sdk-version=javascript-1.4.3&updatedAt=1643834347824"
                  }
                  alt="Disconaut Suit"
                  className={imageClasses}
                />
              </GridItem> */}
              <h3></h3>
              <br />
              <h3></h3>
              <br />
              <h3>JamesCoholan@Gmail.com</h3>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              {/* <GridItem xs={100} sm={100} md={100} className={classes.itemGrid}>
                <img
                  src={
                    "https://ik.imagekit.io/5ierklngtbt/img/NewSuits/14_c2NJaspPcQM.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643834233162"
                  }
                  alt="Disconaut Suit"
                  className={imageClasses}
                />
              </GridItem> */}
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
