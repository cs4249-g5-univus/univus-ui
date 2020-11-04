import React, { useState } from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  Card,
  CardContent,
  Container,
  Typography,
} from "@material-ui/core";
import { Home, Explore, Settings } from "@material-ui/icons";
import { HomeButtonSectionA } from "../../components/home-button-variation/HomeButtonSectionA";
import { useUser } from "../../contexts/UserState";
import { DeclarationFormB } from "../../components/declaration-ui-variation/DeclarationFormB";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  card: {
    margin: "0 1rem 1rem",
    minHeight: "400px",
    padding: "1rem 1rem 0",
  },
});

export const CombinedHomePageB = () => {
  const user = useUser();
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container
        maxWidth="xs"
        style={{
          backgroundColor: "#ffffff",
          height: "600px",
          overflowY: "auto",
        }}
        disableGutters
        component="div"
      >
        <Container
          style={{
            backgroundColor: "#ffffff",
            height: "80px",
            padding: "40px 24px 0",
          }}
        >
          <Typography align="left">Hi Participant {user},</Typography>
        </Container>
        <Container
          style={{
            backgroundColor: "#002984",
            height: "180px",
            borderRadius: "48px 0 0 0",
          }}
        >
          <Typography
            align="left"
            style={{
              color: "#ffffff",
              fontWeight: "900",
              fontSize: "22px",
              padding: "1rem 1rem 0",
            }}
          >
            OTHER SERVICES
          </Typography>
          <HomeButtonSectionA hasDeclaration={false} />
        </Container>
        <Container style={{ backgroundColor: "#002984" }} disableGutters>
          <Container
            style={{
              backgroundColor: "#ffc107",
              minHeight: "120px",
              borderRadius: "48px 0 0 0",
              padding: "0 1rem 1rem",
            }}
          >
            <Typography
              align="left"
              style={{
                color: "#002984",
                fontWeight: "900",
                fontSize: "22px",
                padding: "1rem",
              }}
            >
              TEMPERATURE DECLARATION
            </Typography>
            <Card className={classes.card}>
              <CardContent>
                <DeclarationFormB />
              </CardContent>
            </Card>
          </Container>
        </Container>
        <Container style={{ backgroundColor: "#ffc107" }} disableGutters>
          <Container
            style={{
              backgroundColor: "#ffffff",
              minHeight: "120px",
              borderRadius: "48px 0 0 0",
            }}
          >
            <Typography
              align="left"
              style={{
                color: "#002984",
                fontWeight: "900",
                fontSize: "22px",
                padding: "1rem",
              }}
            >
              NEWS
            </Typography>
            <Container
              style={{
                height: "300px",
                width: "80%",
                backgroundColor: "#bdbdbd",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography
                align="center"
                style={{
                  color: "#ffffff",
                  fontSize: "22px",
                  padding: "1rem",
                }}
              >
                This section is irrevelant to the UI testing.
              </Typography>
            </Container>
          </Container>
        </Container>
      </Container>
      <Container maxWidth="xs" disableGutters component="div">
        <BottomNavigation
          style={{ bottom: "0", backgroundColor: "#fafafa" }}
          value={0}
          showLabels
        >
          <BottomNavigationAction label="Home" icon={<Home />} />
          <BottomNavigationAction label="Discover" icon={<Explore />} />
          <BottomNavigationAction label="Settings" icon={<Settings />} />
        </BottomNavigation>
      </Container>
    </React.Fragment>
  );
};
