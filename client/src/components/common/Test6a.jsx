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
import { useHistory } from "react-router-dom";
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

export default function Test6a() {
  let history = useHistory();
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [seconds, setSeconds] = useState(59);
  const [minutes, setMinutes] = useState(0);
  const [timerBg, setTimerBg] = useState("#3f51b5");
  const [dining, setDining] = useState();
  const [torch, setTorch] = useState();
  const [boiling, setBoiling] = useState();
  const [rat, setRat] = useState();
  const [cup, setCup] = useState();
  const [ship, setShip] = useState();

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

      if (seconds === 0 && minutes === 0) {
        calculateResult();
        // window.location = `/Test7a?seven=${seven}`;
      }
    }, 1000);
  }, [seconds]);

  const calculateResult = () => {
    let tempCorrect = 0;
    let tempWrong = 0;

    if (dining === 34) {
      tempCorrect = tempCorrect + 1;
    } else {
      tempWrong = tempWrong + 1;
    }

    if (torch === 46) {
      tempCorrect = tempCorrect + 1;
    } else {
      tempWrong = tempWrong + 1;
    }

    if (boiling === 55) {
      tempCorrect = tempCorrect + 1;
    } else {
      tempWrong = tempWrong + 1;
    }

    if (rat === 73) {
      tempCorrect = tempCorrect + 1;
    } else {
      tempWrong = tempWrong + 1;
    }

    if (cup === 69) {
      tempCorrect = tempCorrect + 1;
    } else {
      tempWrong = tempWrong + 1;
    }

    if (ship === 10) {
      tempCorrect = tempCorrect + 1;
    } else {
      tempWrong = tempWrong + 1;
    }

    setCorrect(tempCorrect);
    setWrong(tempWrong);
    history.push({
      pathname: "/Test62",
      state: {
        minutes: minutes,
        seconds: seconds,
        wrong: tempWrong,
        correct: tempCorrect,
      },
    });
    //   alert(`Your Score is: ${tempCorrect - tempWrong / 2}
    // And mistakes are: ${tempWrong}
    // Accuracy : ${((tempCorrect - tempWrong / 2) / 24) * 100}%`);
    //   window.location = "/home";
  };

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
      <Typography variant="h4">Picture Number Test 1</Typography>

      <Grid
        container
        spacing={1}
        style={{ marginTop: 50 }}
        align="center"
        //direction="row"
        //alignItems="center"
        //justify="center"
      >
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Box border={1}>
            <Grid container alignItems="center">
              <Grid item xs={6}>
                <Box borderRight={1}>
                  <img
                    src="images/001-dining.png"
                    alt="chair"
                    className="home__hero-img"
                  />
                </Box>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  value={dining}
                  onChange={(e) => setDining(e.target.value)}
                  //id="standard-number"
                  //label="Number"
                  //type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Box border={1}>
            <Grid container alignItems="center">
              <Grid item xs={6}>
                <Box borderRight={1}>
                  <img
                    src="images/002-torch.png"
                    alt="chair"
                    className="home__hero-img"
                  />
                </Box>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  value={torch}
                  onChange={(e) => setTorch(e.target.value)}
                  //id="standard-number"
                  //label="Number"
                  //type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Box border={1}>
            <Grid container alignItems="center">
              <Grid item xs={6}>
                <Box borderRight={1}>
                  <img
                    src="images/003-boiling.png"
                    alt="chair"
                    className="home__hero-img"
                  />
                </Box>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  value={boiling}
                  onChange={(e) => setBoiling(e.target.value)}
                  //id="standard-number"
                  //label="Number"
                  //type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Box border={1}>
            <Grid container alignItems="center">
              <Grid item xs={6}>
                <Box borderRight={1}>
                  <img
                    src="images/004-rat.png"
                    alt="chair"
                    className="home__hero-img"
                  />
                </Box>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  value={rat}
                  onChange={(e) => setRat(e.target.value)}
                  //id="standard-number"
                  //label="Number"
                  //type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Box border={1}>
            <Grid container alignItems="center">
              <Grid item xs={6}>
                <Box borderRight={1}>
                  <img
                    src="images/005-coffee-cup.png"
                    alt="chair"
                    className="home__hero-img"
                  />
                </Box>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  value={cup}
                  onChange={(e) => setCup(e.target.value)}
                  //id="standard-number"
                  //label="Number"
                  //type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Box border={1}>
            <Grid container alignItems="center">
              <Grid item xs={6}>
                <Box borderRight={1}>
                  <img
                    src="images/006-ship.png"
                    alt="chair"
                    className="home__hero-img"
                  />
                </Box>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  value={ship}
                  onChange={(e) => setShip(e.target.value)}
                  //id="standard-number"
                  //label="Number"
                  //type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
