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
import {
  useDispatchTrialCount,
  useTrialCount,
} from "../contexts/TrialCountState";

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

export const PostTrialPage = () => {
  const classes = useStyles();
  const user = useUser();
  const trialCount = useTrialCount();
  const dispatchTrialCount = useDispatchTrialCount();

  let history = useHistory();

  useEffect(() => {
    if (user === "") {
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
        <Typography>You've completed Trial #{trialCount}.</Typography>
        <Box height={16} />
        <Button
          variant="contained"
          disableElevation
          className={classes.submit}
          onClick={() => {
            dispatchTrialCount({ type: "INCREMENT" });
            history.push("/pre-trial");
          }}
        >
          Continue
        </Button>
      </Container>
    </React.Fragment>
  );
};
