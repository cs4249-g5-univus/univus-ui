import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { HomeButtonA } from "./HomeButtonA";
import { HomeButtonPlaceholderA } from "./HomeButtonPlaceholderA";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  label: {
    color: "#fffff",
  },
});

export const HomeButtonSectionA = () => {
  const classes = useStyles();
  let history = useHistory();
  return (
    <div className={classes.root}>
      <HomeButtonPlaceholderA
        label="Exam Results"
        imgSrc="/images/baseButton-results.jpg"
      />
      <HomeButtonA
        label="Health Declaration"
        imgSrc="/images/baseButton-declare.jpg"
        onClick={() => {
          history.push("/declaration-a");
        }}
      />
      <HomeButtonPlaceholderA
        label="NUSafe"
        imgSrc="/images/baseButton-nusafe.jpg"
      />
    </div>
  );
};
