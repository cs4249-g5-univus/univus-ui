import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useSetUser, useUser } from "../contexts/UserState";
import { useHistory } from "react-router-dom";
import {
  useDispatchTrialCount,
  useTrialCount,
} from "../contexts/TrialCountState";
import { TESTING_ORDER } from "../Constants";

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

export const LoginPage = () => {
  const classes = useStyles();
  const user = useUser();
  const trialCount = useTrialCount();
  const setUser = useSetUser();
  const dispatchTrialCount = useDispatchTrialCount();
  const [participantID, setParticipantID] = useState("");
  let history = useHistory();

  useEffect(() => {
    if (user !== "") {
      const arrNum = user ? parseInt(user, 16) % 8 : 0;
      const interfaceNumber = TESTING_ORDER[arrNum][trialCount - 1];
      switch (interfaceNumber) {
        case 0:
          history.push("/interface-a");
          break;
        case 1:
          history.push("/interface-b");
          break;
        case 2:
          history.push("/interface-c");
          break;
        case 3:
          history.push("/interface-d");
          break;
        case 4:
          history.push("/interface-e");
          break;
        case 5:
          history.push("/interface-f");
          break;
        default:
          throw new Error(`Unknown interface number: ${interfaceNumber}`);
      }
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
        <Typography>
          Welcome! Enter your assigned participant ID to begin the UI testing.
        </Typography>
        <Box height={32} />
        <form noValidate autoComplete="off">
          <TextField
            required
            id="participant-id"
            label="Enter your ID"
            variant="outlined"
            value={participantID}
            onChange={(event) => setParticipantID(event.target.value)}
          />
        </form>
        <Box height={32} />
        <Button
          variant="contained"
          disableElevation
          className={classes.submit}
          onClick={() => {
            setUser(participantID);
            dispatchTrialCount({ type: "INCREMENT" });
            const arrNum = participantID ? parseInt(user, 16) % 8 : 0;
            const interfaceNumber = TESTING_ORDER[arrNum][0];
            switch (interfaceNumber) {
              case 0:
                history.push("/interface-a");
                break;
              case 1:
                history.push("/interface-b");
                break;
              case 2:
                history.push("/interface-c");
                break;
              case 3:
                history.push("/interface-d");
                break;
              case 4:
                history.push("/interface-e");
                break;
              case 5:
                history.push("/interface-f");
                break;
              default:
                throw new Error(`Unknown interface number: ${interfaceNumber}`);
            }
          }}
        >
          Submit
        </Button>
      </Container>
    </React.Fragment>
  );
};
