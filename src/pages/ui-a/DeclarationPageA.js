import React from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Card,
  CardContent,
  Container,
  Typography,
} from "@material-ui/core";
import { AddBox, List, Note, Settings } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { DeclarationFormA } from "../../components/DeclarationFormA";

const useStyles = makeStyles({
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    height: "48px",
  },
  welcome: {
    color: "#002984",
    fontWeight: "900",
    fontSize: "22px",
    padding: "1rem",
  },
  card: {
    margin: "0 1rem",
    minHeight: "400px",
  },
});

export const DeclarationPageA = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container
        maxWidth="xs"
        style={{
          backgroundColor: "#fdfdfd",
          height: "600px",
          overflowY: "auto",
        }}
        disableGutters
        component="div"
      >
        <Container maxWidth="xs" className={classes.header} disableGutters>
          <Box flex={1} bgcolor="#e65100" height={1} />
          <Box flex={3} bgcolor="#ffc107" height={1} />
          <Box flex={1} bgcolor="#00bcd4" height={1} />
        </Container>
        <Container disableGutters>
          <Typography align="left" className={classes.welcome}>
            Hi User
          </Typography>
          <Card className={classes.card}>
            <CardContent>
              <DeclarationFormA />
            </CardContent>
          </Card>
        </Container>
      </Container>
      <Container maxWidth="xs" disableGutters component="div">
        <BottomNavigation
          style={{ bottom: "0", backgroundColor: "#fafafa" }}
          value={0}
          showLabels
        >
          <BottomNavigationAction label="Declare" icon={<AddBox />} />
          <BottomNavigationAction label="History" icon={<List />} />
          <BottomNavigationAction label="FAQ" icon={<Note />} />
          <BottomNavigationAction label="Settings" icon={<Settings />} />
        </BottomNavigation>
      </Container>
    </React.Fragment>
  );
};
