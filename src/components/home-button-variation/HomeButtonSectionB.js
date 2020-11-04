import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { HomeButtonB } from "./HomeButtonB";
import { HomeButtonPlaceholderB } from "./HomeButtonPlaceholderB";
import { useHistory, useRouteMatch } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexWrap: "wrap",
  },
  label: {
    color: "#fffff",
  },
});

export const HomeButtonSectionB = () => {
  const classes = useStyles();
  let history = useHistory();
  let { path } = useRouteMatch();
  return (
    <div className={classes.root}>
      <HomeButtonPlaceholderB
        label="Exam Results"
        color="#ffffff"
        imgSrc="/images/baseButton-results.jpg"
      />
      <HomeButtonB
        label="Health Declaration"
        color="#ffffff"
        onClick={() => history.push(`${path}/declaration`)}
        imgSrc="/images/baseButton-declare.jpg"
      />
      <HomeButtonPlaceholderB
        label="NUSafe"
        color="#ffffff"
        imgSrc="/images/baseButton-nusafe.jpg"
      />
    </div>
  );
};
