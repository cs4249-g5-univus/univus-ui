import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  Input,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Slider,
  Typography,
} from "@material-ui/core";
import { format } from "date-fns";
import { InfoOutlined, MicNone } from "@material-ui/icons";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  root: {
    padding: "1rem 0",
  },
  icon: {
    width: "100%",
    height: "auto",
    objectFit: "contain",
  },
  padded: {
    padding: "0 1.5rem",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  question: {
    flex: 5,
  },
  disclaimer: {
    flex: 1,
  },
  tempValue: {
    flex: 1,
    margin: "0 2rem 0 3rem",
  },
  mic: {
    flex: 1,
    margin: "0 2rem",
  },
  margins: {
    margin: "1rem 0",
  },
  swipe: {
    width: "48px",
    height: "auto",
  },
  button: {
    backgroundColor: "#002984",
    color: "#ffffff",
  },
  centered: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export const DeclarationFormA = ({ onSubmit }) => {
  const classes = useStyles();
  const currentDate = format(new Date(), "dd/MM/yyyy, EEEE");
  const [time, setTime] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [household, setHousehold] = useState("");
  const [temperature, setTemparature] = useState("");

  return (
    <React.Fragment>
      <Typography align="left">
        I declare that the following information is correct and accurate.
      </Typography>
      <Grid container className={classes.root}>
        <Grid item xs={3}>
          <img
            className={classes.icon}
            alt="calendar"
            src={process.env.PUBLIC_URL + "/images/icon-calendar.svg"}
          />
          <Box height={100} />
          <img
            className={classes.icon}
            alt="calendar"
            src={process.env.PUBLIC_URL + "/images/icon-person.svg"}
          />
          <Box height={160} />
          <img
            className={classes.icon}
            alt="calendar"
            src={process.env.PUBLIC_URL + "/images/icon-thermometer.svg"}
          />
        </Grid>
        <Grid item xs={9} className={classes.padded}>
          <Typography variant="body2">Date:</Typography>
          <Typography variant="body2">{currentDate}</Typography>
          <FormControl>
            <Select
              value={time}
              onChange={(event) => setTime(event.target.value)}
            >
              <MenuItem value="AM">AM</MenuItem>
              <MenuItem value="PM">PM</MenuItem>
            </Select>
          </FormControl>
          <Box height={32} />
          <div className={classes.row}>
            <Typography
              variant="body2"
              align="left"
              className={classes.question}
            >
              Do you have any COVID-19 symptoms that you recently acquired?
            </Typography>
            <InfoOutlined className={classes.disclaimer} />
          </div>
          <Box height={16} />
          <FormControl component="fieldset">
            <RadioGroup
              name="symptoms"
              className={classes.row}
              value={symptoms}
              onChange={(event) => setSymptoms(event.target.value)}
            >
              <FormControlLabel
                value="no"
                control={<Radio size="small" color="primary" />}
                label="No"
              />
              <FormControlLabel
                value="yes"
                control={<Radio size="small" color="primary" />}
                label="Yes"
              />
            </RadioGroup>
          </FormControl>
          <Box height={32} />
          <div className={classes.row}>
            <Typography
              variant="body2"
              align="left"
              className={classes.question}
            >
              Do you have anyone in the same household having fever, and/or
              showing the above stated symptoms?
            </Typography>
          </div>
          <Box height={16} />
          <FormControl component="fieldset">
            <RadioGroup
              name="symptoms"
              className={classes.row}
              value={household}
              onChange={(event) => setHousehold(event.target.value)}
            >
              <FormControlLabel
                value="no"
                control={<Radio size="small" color="primary" />}
                label="No"
              />
              <FormControlLabel
                value="yes"
                control={<Radio size="small" color="primary" />}
                label="Yes"
              />
            </RadioGroup>
          </FormControl>
          <Box height={32} />
          <Typography variant="body2">My temperature reading is</Typography>
          <div className={classes.row + " " + classes.margins}>
            <Input
              className={classes.tempValue}
              value={
                typeof temperature === "number"
                  ? Number(temperature).toFixed(1)
                  : ""
              }
            ></Input>
            <MicNone className={classes.mic} />
          </div>
          <Slider
            value={
              typeof temperature === "number"
                ? Number(temperature).toFixed(1)
                : 36.5
            }
            onChange={(event, newValue) => setTemparature(newValue)}
            min={35.0}
            max={40.0}
            step={0.1}
            color={
              typeof temperature === "number"
                ? temperature > 37.5
                  ? "secondary"
                  : "primary"
                : "primary"
            }
          />
          <Box height={8} />
          <img
            className={classes.swipe}
            alt="slider"
            src={process.env.PUBLIC_URL + "/images/icon-swipe.svg"}
          />
          <Box height={16} />
        </Grid>
        <div className={classes.centered}>
          <Button
            variant="contained"
            disableElevation
            className={classes.button}
            onClick={() => onSubmit()}
          >
            Submit
          </Button>
        </div>
      </Grid>
    </React.Fragment>
  );
};
