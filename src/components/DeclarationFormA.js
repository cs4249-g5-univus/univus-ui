import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  root: {
    padding: "1rem 0",
  },
  icon: {
    width: "100%",
    height: "auto",
    objectFit: "contain",
  },
});

export const DeclarationFormA = () => {
  const classes = useStyles();
  //   const currentDate = new Date();
  //   const dd =
  return (
    <React.Fragment>
      <Typography align="left">
        I declare that the following information is correct and accurate.
      </Typography>
      <Grid container className={classes.root}>
        <Grid item xs={3}>
          <img
            className={classes.icon}
            alt="calendar"
            src={process.env.PUBLIC_URL + "/images/icon-calendar.svg"}
          />
          <Box height={100} />
          <img
            className={classes.icon}
            alt="calendar"
            src={process.env.PUBLIC_URL + "/images/icon-person.svg"}
          />
          <Box height={100} />
          <img
            className={classes.icon}
            alt="calendar"
            src={process.env.PUBLIC_URL + "/images/icon-thermometer.svg"}
          />
        </Grid>
        <Grid item xs={9}>
          <Typography variant="caption">
            Date:{"\n"}
            {/* {currentDate.getDate()} */}
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
