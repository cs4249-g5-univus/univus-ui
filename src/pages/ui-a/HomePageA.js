import React, { useState } from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  Container,
} from "@material-ui/core";
import { Home, Explore, Settings } from "@material-ui/icons";
import { BaseHomeButtonRow } from "../../components/BaseHomeButtonRow";

export const HomePageA = () => {
  const [bottomIndex, setBottomIndex] = useState(0);
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
          style={{ backgroundColor: "#ffffff", height: "80px" }}
        ></Container>
        <Container style={{ backgroundColor: "#002984", height: "120px" }}>
          <BaseHomeButtonRow />
        </Container>
        <Container style={{ backgroundColor: "#ffffff" }}></Container>
      </Container>
      <Container maxWidth="xs" disableGutters component="div">
        <BottomNavigation
          style={{ bottom: "0", backgroundColor: "#fafafa" }}
          value={bottomIndex}
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
