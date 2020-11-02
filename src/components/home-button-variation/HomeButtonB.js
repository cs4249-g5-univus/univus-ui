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
    // color: "#ffffff",
    lineHeight: "1",
    fontWeight: "700",
    position: "absolute",
    bottom: 16,
  },
});

export const HomeButtonB = ({ color, label, onClick }) => {
  const classes = useStyles();

  return (
    <ButtonBase onClick={() => onClick()} className={classes.root}>
      <Box borderRadius={8} bgcolor={color} p={2} className={classes.box}>
        <Typography align="left" className={classes.label}>
          {label}
        </Typography>
      </Box>
    </ButtonBase>
  );
};
