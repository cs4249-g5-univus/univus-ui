import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { BaseHomeButton } from "./BaseHomeButton";
import { BaseHomeButtonPlaceholder } from "./BaseHomeButtonPlaceholder";

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

export const BaseHomeButtonRow = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <BaseHomeButtonPlaceholder
        label="Exam Results"
        imgSrc="/images/baseButton-results.jpg"
      />
      <BaseHomeButton
        label="Health Declaration"
        imgSrc="/images/baseButton-declare.jpg"
      />
      <BaseHomeButtonPlaceholder
        label="NUSafe"
        imgSrc="/images/baseButton-nusafe.jpg"
      />
    </div>
  );
};
