import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { HomeButtonB } from "./HomeButtonB";
import { HomeButtonPlaceholderB } from "./HomeButtonPlaceholderB";
import { useHistory } from "react-router-dom";

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
  return (
    <div className={classes.root}>
      <HomeButtonPlaceholderB label="Exam Results" color="#ffc107" />
      <HomeButtonB
        label="Health Declaration"
        color="#ffc107"
        onClick={() => history.push("/declaration-b")}
      />
      <HomeButtonPlaceholderB label="NUSafe" color="#ffc107" />
    </div>
  );
};
