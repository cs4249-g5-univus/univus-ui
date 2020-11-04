import React from "react";

import { Box, Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    height: "680px",
    overflowY: "auto",
    padding: "2rem",
  },
  submit: {
    backgroundColor: "#002984",
    color: "#ffffff",
  },
});

export const CompletedPage = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container
        maxWidth="xs"
        className={classes.root}
        disableGutters
        component="div"
      >
        <Typography>You've completed the UI testing.</Typography>
        <Box height={16} />
        <Typography>Thank you for your participation.</Typography>
      </Container>
    </React.Fragment>
  );
};
