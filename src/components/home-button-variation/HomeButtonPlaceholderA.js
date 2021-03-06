import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    margin: "1rem 0.5rem",
  },
  label: {
    color: "#ffffff",
    margin: "0.5rem 0",
    maxWidth: "64px",
    lineHeight: "1",
    fontSize: "12px",
    fontWeight: "700",
  },
  image: {
    objectFit: "contain",
    width: "56px",
    height: "56px",
  },
});

export const HomeButtonPlaceholderA = ({ label, imgSrc }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box borderRadius={12} bgcolor="#ffffff" width={64} height={64} p={0.5}>
        <img
          className={classes.image}
          src={process.env.PUBLIC_URL + imgSrc}
          alt={label}
        />
      </Box>
      <Typography className={classes.label}>{label}</Typography>
    </div>
  );
};
