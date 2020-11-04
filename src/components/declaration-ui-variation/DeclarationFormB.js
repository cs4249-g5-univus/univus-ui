import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  NativeSelect,
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
  margins: {
    margin: "1rem 0",
  },
  submit: {
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
  button: {
    margin: "1rem 0.25rem 0",
  },
  tempInput: {
    width: "120px",
  },
});

const range = (start, stop, step = 1) =>
  Array(Math.ceil((stop - start) / step))
    .fill(start)
    .map((x, y) => x + y * step);

const options = [...range(35.0, 40, 0.1), 40].map((value) => {
  return (
    <option value={value} key={value}>
      {Number(value).toFixed(1)}
    </option>
  );
});

export const DeclarationFormB = () => {
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
          <Button
            variant={time === "AM" ? "contained" : "outlined"}
            onClick={() => setTime("AM")}
            color="primary"
            disableElevation
            className={classes.button}
            size="large"
          >
            AM
          </Button>
          <Button
            variant={time === "PM" ? "contained" : "outlined"}
            onClick={() => setTime("PM")}
            color="primary"
            disableElevation
            className={classes.button}
            size="large"
          >
            PM
          </Button>
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
          <Button
            variant={symptoms === "no" ? "contained" : "outlined"}
            onClick={() => setSymptoms("no")}
            color="primary"
            disableElevation
            className={classes.button}
            size="large"
          >
            No
          </Button>
          <Button
            variant={symptoms === "yes" ? "contained" : "outlined"}
            onClick={() => setSymptoms("yes")}
            color="primary"
            disableElevation
            className={classes.button}
            size="large"
          >
            Yes
          </Button>
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
          <Button
            variant={household === "no" ? "contained" : "outlined"}
            onClick={() => setHousehold("no")}
            color="primary"
            disableElevation
            className={classes.button}
            size="large"
          >
            No
          </Button>
          <Button
            variant={household === "yes" ? "contained" : "outlined"}
            onClick={() => setHousehold("yes")}
            color="primary"
            disableElevation
            className={classes.button}
            size="large"
          >
            Yes
          </Button>
          <Box height={32} />
          <Typography variant="body2">My temperature reading is</Typography>
          <Box height={16} />
          <FormControl>
            <InputLabel htmlFor="select-temperature">
              Set Temperature
            </InputLabel>
            <NativeSelect
              className={classes.tempInput}
              value={
                typeof temperature === "number"
                  ? Number(temperature).toFixed(1).toString()
                  : ""
              }
              onChange={(event) => {
                setTemparature(event.target.value);
              }}
            >
              {options}
            </NativeSelect>
          </FormControl>

          <Box height={32} />
        </Grid>
        <div className={classes.centered}>
          <Button
            variant="contained"
            disableElevation
            className={classes.submit}
          >
            Submit
          </Button>
        </div>
      </Grid>
    </React.Fragment>
  );
};
