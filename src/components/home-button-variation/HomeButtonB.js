import React from "react";
import { ButtonBase, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "45%",
    margin: "2.5%",
    height: "120px",
    position: "relative",
  },
  box: {
    width: "100%",
    height: "100%",
    padding: "1rem",
  },
  label: {
    lineHeight: "1",
    fontWeight: "700",
    position: "absolute",
    bottom: 16,
    zIndex: 10,
  },
  image: {
    height: "80%",
    width: "auto",
  },
});

export const HomeButtonB = ({ color, label, imgSrc, onClick }) => {
  const classes = useStyles();

  return (
    <ButtonBase onClick={() => onClick()} className={classes.root}>
      <Box borderRadius={8} bgcolor={color} p={2} className={classes.box}>
        <img
          className={classes.image}
          src={process.env.PUBLIC_URL + imgSrc}
          alt={label}
        />
        <Typography align="left" className={classes.label}>
          {label}
        </Typography>
      </Box>
    </ButtonBase>
  );
};
