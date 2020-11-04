import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "45%",
    margin: "2.5%",
    height: "120px",
    position: "relative",
  },
  label: {
    // color: "#ffffff",
    lineHeight: "1",
    fontWeight: "700",
    position: "absolute",
    bottom: 16,
  },
  image: {
    height: "80%",
    width: "auto",
  },
});

export const HomeButtonPlaceholderB = ({ color, label, imgSrc }) => {
  const classes = useStyles();

  return (
    <Box borderRadius={8} bgcolor={color} p={2} className={classes.root}>
      <img
        className={classes.image}
        src={process.env.PUBLIC_URL + imgSrc}
        alt={label}
      />
      <Typography align="left" className={classes.label}>
        {label}
      </Typography>
    </Box>
  );
};
