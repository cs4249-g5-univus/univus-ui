import React from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  Container,
  Typography,
} from "@material-ui/core";
import { Home, Explore, Settings } from "@material-ui/icons";
import { HomeButtonSectionB } from "../components/home-button-variation/HomeButtonSectionB";
import { useUser } from "../contexts/UserState";

export const DefaultHomePageB = () => {
  const user = useUser;
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
            minHeight: "132px",
            borderRadius: "48px 0 0 0",
            padding: "1rem 1rem",
          }}
        >
          <HomeButtonSectionB />
        </Container>
        <Container style={{ backgroundColor: "#002984" }} disableGutters>
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
          //   onChange={(event, newValue) => setBottomIndex(newValue)}
        >
          <BottomNavigationAction label="Home" icon={<Home />} />
          <BottomNavigationAction label="Discover" icon={<Explore />} />
          <BottomNavigationAction label="Settings" icon={<Settings />} />
        </BottomNavigation>
      </Container>
    </React.Fragment>
  );
};
