import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { HomeButtonA } from "./HomeButtonA";
import { HomeButtonPlaceholderA } from "./HomeButtonPlaceholderA";
import { useHistory, useRouteMatch } from "react-router-dom";

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

export const HomeButtonSectionA = ({ hasDeclaration = true }) => {
  const classes = useStyles();
  let history = useHistory();
  let { path } = useRouteMatch();
  return (
    <div className={classes.root}>
      <HomeButtonPlaceholderA
        label="Exam Results"
        imgSrc="/images/baseButton-results.jpg"
      />
      {hasDeclaration ? (
        <HomeButtonA
          label="Health Declaration"
          imgSrc="/images/baseButton-declare.jpg"
          onClick={() => {
            history.push(`${path}/declaration`);
          }}
        />
      ) : null}

      <HomeButtonPlaceholderA
        label="NUSafe"
        imgSrc="/images/baseButton-nusafe.jpg"
      />
    </div>
  );
};
