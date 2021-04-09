import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import { NavLink } from "react-router-dom";
import Abutton from "./Abutton";
import { MdTimer } from "react-icons/md";
import { GoPrimitiveDot } from "react-icons/go";
import InputAdornment from "@material-ui/core/InputAdornment";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  box: {
    margin: "auto",
    width: "50%",
    height: "25rem",
    width: "30rem",
    padding: "10px",
  },
  test: {
    color: "black",
    display: "flex",
    justifyContent: "flex-left",
    fontSize: "2rem",
    cursor: "pointer",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #fff",
    // boxShadow: theme.shadows[5],
    width: "30rem",
    height: "18rem",

    padding: theme.spacing(2, 4, 3),
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
    cursor: "pointer",
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
  testLink: {
    textDecoration: "none",
  },
  arr: {
    //marginBlock: "5rem",
    marginRight: "2px",
    marginLeft: "2px",
    marginTop: "2px",
  },
  red: {
    color: "red",
    marginRight: "2px",
    marginLeft: "2px",
    marginTop: "2px",
  },
}));

export default function Test3() {
  const [seconds, setSeconds] = useState(59);
  const [minutes, setMinutes] = useState(3);
  const [timerBg, setTimerBg] = useState("#3f51b5");
  const [segment1, setSegment1] = useState(false);
  const [segment2, setSegment2] = useState(false);
  const [segment3, setSegment3] = useState(false);
  const [segment4, setSegment4] = useState(false);
  const [segment5, setSegment5] = useState(false);
  const [segment6, setSegment6] = useState(false);
  const [segment7, setSegment7] = useState(false);
  const [segment8, setSegment8] = useState(false);
  const [segment9, setSegment9] = useState(false);
  const [segments, setSegments] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const populateSegments = () => {
    let temp = segments.sort(() => Math.random() - 0.5);
    temp.length = 6;
    console.log("Temp: ", temp);
    for (var i = 0; i < temp.length; i++) {
      let filter = temp.filter((number) => number === temp[i]);
      if (filter[0] === 1) {
        setSegment1(true);
      }
      if (filter[0] === 2) {
        setSegment2(true);
      }
      if (filter[0] === 3) {
        setSegment3(true);
      }
      if (filter[0] === 4) {
        setSegment4(true);
      }
      if (filter[0] === 5) {
        setSegment5(true);
      }
      if (filter[0] === 6) {
        setSegment6(true);
      }
      if (filter[0] === 7) {
        setSegment7(true);
      }
      if (filter[0] === 8) {
        setSegment8(true);
      }
      if (filter[0] === 9) {
        setSegment9(true);
      }
      console.log("Filter: ", filter);
    }
    return temp;
  };

  useEffect(() => {
    populateSegments();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (seconds > 0 && minutes >= 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }

      if (seconds <= 45 && minutes === 0) {
        setTimerBg("red");
      }
    }, 1000);
  }, [seconds]);

  const classes = useStyles();

  return (
    <Box
      justifyContent="center"
      alignContent="center"
      //display="flex"
      //flexDirection="column"
      //alignItems="stretch"
      padding={10}
      // bgcolor="warning.main"
      //align="center"
      className={classes.root}
      style={{ background: "#94e4f7" }}
      height="100vh"
      //display="flex"
    >
      <Grid
        container
        spacing={0}
        //alignItems="center"
        style={{ marginBottom: 25 }}
      >
        <Grid item xs={0} sm={0} md={10} lg={10} xl={10}></Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={2}
          lg={2}
          xl={2}
          style={{ paddingLeft: 25, paddingRight: 25 }}
        >
          <Typography
            style={{
              background: timerBg,
              color: "white",
              fontFamily: "fantasy",
              alignSelf: "center",
              textAlign: "center",
              alignContent: "center",
              align: "center",
              borderRadius: 5,
              fontSize: 25,
            }}
          >
            <MdTimer /> {minutes}:{seconds < 10 ? 0 : null}
            {seconds === 60 ? 0 : seconds}
          </Typography>
        </Grid>
      </Grid>
      <Typography variant="h4">Cognitive Reflection Test (CRT)</Typography>

      <Grid
        container
        spacing={0}
        style={{ marginTop: 50 }}
        //direction="row"
        //alignItems="center"
        //justify="center"
      >
        {segment1 === true ? (
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Typography>
              <GoPrimitiveDot />
              If three elves can wrap three toys in an hour, how many elves are
              needed to wrap six toys in 2 hours?{" "}
              <TextField
                //id="standard-number"
                //label="Number"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Typography>
          </Grid>
        ) : null}

        {segment2 === true ? (
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Typography>
              <GoPrimitiveDot />
              In an athletics team, tall members are three times more likely to
              win a medal than short members. This year the team has won 60
              medals so far. How many of these have been won by short athletes?{" "}
              <TextField
                //id="standard-number"
                //label="Number"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Typography>
          </Grid>
        ) : null}
        {segment3 === true ? (
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Typography>
              <GoPrimitiveDot />
              If John can drink one barrel of water in 6 days, and Mary can
              drink one barrel of water in 12 days, how long would it take them
              to drink one barrel of water together?{" "}
              <TextField
                //id="standard-number"
                //label="Number"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Typography>
          </Grid>
        ) : null}
        {segment4 === true ? (
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Typography>
              <GoPrimitiveDot />
              Jerry received both the 15th highest and the 15th lowest mark in
              the class. How many students are in the class?{" "}
              <TextField
                //id="standard-number"
                //label="Number"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Typography>
          </Grid>
        ) : null}
        {segment5 === true ? (
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Typography>
              <GoPrimitiveDot />A man buys a pig for $60, sells it for $70, buys
              it back for $80, and sells it finally for $90. How much has he
              made?{" "}
              <TextField
                //id="standard-number"
                //label="Number"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Typography>
          </Grid>
        ) : null}
        {segment6 === true ? (
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Typography>
              <GoPrimitiveDot />A bat and a ball cost $1.10 in total. The bat
              costs $1.00 more than the ball. How much does the ball cost?{" "}
              <TextField
                //id="standard-number"
                //label="Number"
                // endAdornment={
                //   <InputAdornment position="end">cents</InputAdornment>
                // }
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">cents</InputAdornment>
                  ),
                }}
              />
            </Typography>
          </Grid>
        ) : null}
        {segment7 === true ? (
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Typography>
              <GoPrimitiveDot />
              If it takes 5 machines 5 minutes to make 5 widgets, how long would
              it take 100 machines to make 100 widgets?{" "}
              <TextField
                //id="standard-number"
                //label="Number"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">minutes</InputAdornment>
                  ),
                }}
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Typography>
          </Grid>
        ) : null}
        {segment8 === true ? (
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Typography>
              <GoPrimitiveDot />
              In a lake there is a patch of lily pads. Every day, the patch
              doubles in size. If it takes 48 days for the patch to cover the
              entire lake, how long would it take for the patch to cover half
              the lake?{" "}
              <TextField
                //id="standard-number"
                //label="Number"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">days</InputAdornment>
                  ),
                }}
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Typography>
          </Grid>
        ) : null}
        {segment9 === true ? (
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Typography>
              <GoPrimitiveDot />
              Simon decided to invest $8,000 in the stock market one day early
              in 2008. Six months after he invested, on July 17, the stocks he
              had purchased were down 50 %. Fortunately for Simon, from July 17
              to October 17, the stocks he had purchased went up 75%. At this
              point, Simon has:{" "}
            </Typography>
            <Typography>
              <Checkbox
                //checked={state.checkedB}
                //onChange={handleChange}
                name="checkedB"
                color="primary"
              />{" "}
              Broken even in th stock market
            </Typography>
            <Typography>
              <Checkbox
                //checked={state.checkedB}
                //onChange={handleChange}
                name="checkedB"
                color="primary"
              />{" "}
              Is ahead of where he began
            </Typography>
            <Typography>
              <Checkbox
                //checked={state.checkedB}
                //onChange={handleChange}
                name="checkedB"
                color="primary"
              />{" "}
              Has lost money
            </Typography>
          </Grid>
        ) : null}
      </Grid>

      <Button
        //className={classes.testLink}
        //         onClick={() => {
        //           alert(`Your Score is: ${correct - wrong / 2}
        // And mistakes are: ${wrong}
        // Accuracy : ${((correct - wrong / 2) / 16) * 100}%`);
        //           window.location = "/home";
        //         }}
        variant="contained"
        color="#F0F8FF"
      >
        Submit
      </Button>
    </Box>
  );
}
