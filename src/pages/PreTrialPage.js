import React, { useEffect } from "react";

import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useUser } from "../contexts/UserState";
import { useHistory } from "react-router-dom";
import { useTrialCount } from "../contexts/TrialCountState";

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

const UIList = ["A", "B", "C", "D", "E", "F"];

export const PreTrialPage = () => {
  const classes = useStyles();
  const user = useUser();
  const trialCount = useTrialCount();

  const arrNum = user ? parseInt(user, 16) % 8 : 0;

  let history = useHistory();

  useEffect(() => {
    if (user == "") {
      history.push("/");
    }
  });

  return (
    <React.Fragment>
      <Container
        maxWidth="xs"
        className={classes.root}
        disableGutters
        component="div"
      >
        <Typography>Welcome Participant {user}.</Typography>
        <Box height={16} />
        <Typography>You are about to attempt Trial #{trialCount}.</Typography>
        <Box height={16} />
        <Typography>
          You will be testing UI - {UIList[trialCount - 1]}.
        </Typography>
        <Box height={16} />
        <Typography>DO NOT REFRESH PAGE DURING TRIAL.</Typography>
        <Box height={32} />
        <Button
          variant="contained"
          disableElevation
          className={classes.submit}
          onClick={() => {
            history.push("/default-home-a");
          }}
        >
          Begin
        </Button>
      </Container>
    </React.Fragment>
  );
};
