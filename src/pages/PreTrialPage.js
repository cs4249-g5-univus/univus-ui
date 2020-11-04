import React, { useEffect } from "react";

import { Box, Button, Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useUser } from "../contexts/UserState";
import { useHistory } from "react-router-dom";
import { useTrialCount } from "../contexts/TrialCountState";
import { TESTING_ORDER, UI_LIST } from "../Constants";

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

export const PreTrialPage = () => {
  const classes = useStyles();
  const user = useUser();
  const trialCount = useTrialCount();

  const arrNum = user ? parseInt(user, 16) % 8 : 0;
  const interfaceNumber = TESTING_ORDER[arrNum][trialCount - 1];
  const interfaceName = UI_LIST[interfaceNumber];

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
        <Typography>Welcome Participant {user}.</Typography>
        <Box height={16} />
        <Typography>You are about to attempt Trial #{trialCount}.</Typography>
        <Box height={16} />
        <Typography>You will be testing UI - {interfaceName}.</Typography>
        <Box height={16} />
        <Typography>DO NOT REFRESH PAGE DURING TRIAL.</Typography>
        <Box height={32} />
        <Button
          variant="contained"
          disableElevation
          className={classes.submit}
          onClick={() => {
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
          Begin
        </Button>
      </Container>
    </React.Fragment>
  );
};
