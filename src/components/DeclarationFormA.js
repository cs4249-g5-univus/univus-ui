import React from "react";
import {
  Box,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Typography,
} from "@material-ui/core";
import { format } from "date-fns";
import { InfoOutlined } from "@material-ui/icons";

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
});

export const DeclarationFormA = () => {
  const classes = useStyles();
  const currentDate = format(new Date(), "dd/MM/yyyy, EEEE");
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
          <Box height={100} />
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
            {/* <InputLabel>Time</InputLabel> */}
            <Select>
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
            <RadioGroup name="symptoms" className={classes.row}>
              <FormControlLabel
                value="no"
                control={<Radio size="small" />}
                label="No"
              />
              <FormControlLabel
                value="yes"
                control={<Radio size="small" />}
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
            <RadioGroup name="symptoms" className={classes.row}>
              <FormControlLabel
                value="no"
                control={<Radio size="small" />}
                label="No"
              />
              <FormControlLabel
                value="yes"
                control={<Radio size="small" />}
                label="Yes"
              />
            </RadioGroup>
          </FormControl>
          <Box height={32} />
          <Typography variant="body2">My temperature reading is</Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
