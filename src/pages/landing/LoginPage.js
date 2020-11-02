import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@material-ui/core";
import { Home, Explore, Settings } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { HomeButtonSectionA } from "../../components/home-button-variation/HomeButtonSectionA";

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
  const [participantID, setParticipantID] = useState("");
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
        <Button variant="contained" disableElevation className={classes.submit}>
          Submit
        </Button>
      </Container>
    </React.Fragment>
  );
};
