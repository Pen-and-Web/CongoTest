import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
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

export default function Test62(props) {
  let history = useHistory();
  const [seconds, setSeconds] = useState(29);
  const [minutes, setMinutes] = useState(2);
  const [timerBg, setTimerBg] = useState("#3f51b5");

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
        let previous = props.history.location.state;
        console.log("Previous:", previous);
        history.push({
          pathname: "/Test62a",
          state: {
            minutes: previous.minutes,
            seconds: previous.seconds,
            wrong: previous.wrong,
            correct: previous.correct,
          },
        });
        // window.location = `/Test7a?seven=${seven}`;
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
      align="center"
      className={classes.root}
      style={{ background: "#A4D3EE" }}
      height="100vh"
      //display="flex"
    >
      <Grid
        container
        spacing={0}
        alignItems="center"
        style={{ marginBottom: 25 }}
      >
        <Grid item xs={12} sm={8} md={10} lg={10} xl={10}></Grid>
        <Grid
          item
          xs={12}
          sm={4}
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
              marginBottom: 5,
            }}
          >
            <MdTimer /> {minutes}:{seconds < 10 ? 0 : null}
            {seconds === 60 ? 0 : seconds}
          </Typography>
        </Grid>
      </Grid>
      <Paper style={{}}>
        <Grid
          container
          spacing={0}
          alignItems="center"
          style={{ marginBottom: 25 }}
        >
          <Grid
            item
            xs={12}
            // sm={12}
            // md={10}
            // lg={10}
            // xl={10}
            //align="center"
            //alignItems="center"
          >
            <Typography
              variant="h4"
              style={{
                fontFamily: "fantasy",
                //alignSelf: "center",
                //textAlign: "center",
                //alignContent: "center",
                //align: "center",
              }}
            >
              {"   "}
              <img
                src="images/picture comparison.png"
                alt="A"
                className="home__hero-img"
                style={{ maxWidth: 100, minWidth: 10 }}
              />
              <br />
              Picture Number Test (2)
            </Typography>
          </Grid>
        </Grid>
      </Paper>

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
                    src="images/007-pen.png"
                    alt="pen"
                    className="home__hero-img"
                  />
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h1">62</Typography>
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
                    src="images/012-mirror.png"
                    alt="mirror"
                    className="home__hero-img"
                  />
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h1">82</Typography>
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
                    src="images/017-rugby-ball.png"
                    alt="Rugby ball"
                    className="home__hero-img"
                  />
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h1">74</Typography>
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
                    src="images/008-bucket.png"
                    alt="Bucket"
                    className="home__hero-img"
                  />
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h1">73</Typography>
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
                    src="images/013-law-book.png"
                    alt="Book"
                    className="home__hero-img"
                  />
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h1">99</Typography>
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
                    src="images/018-safety-pin.png"
                    alt="Safety Pin"
                    className="home__hero-img"
                  />
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h1">30</Typography>
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
                    src="images/009-dog-seating.png"
                    alt="Dog Seating"
                    className="home__hero-img"
                  />
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h1">27</Typography>
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
                    src="images/014-shovel.png"
                    alt="Dog Seating"
                    className="home__hero-img"
                  />
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h1">86</Typography>
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
                    src="images/019-vase.png"
                    alt="Vase"
                    className="home__hero-img"
                  />
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h1">13</Typography>
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
                    src="images/010-screw-driver.png"
                    alt="Screw Driver"
                    className="home__hero-img"
                  />
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h1">51</Typography>
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
                    src="images/015-thermometer.png"
                    alt="Thermometer"
                    className="home__hero-img"
                  />
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h1">15</Typography>
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
                    src="images/020-pet-brush.png"
                    alt="Pet Brush"
                    className="home__hero-img"
                  />
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h1">24</Typography>
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
                    src="images/011-shoe.png"
                    alt="Shoe"
                    className="home__hero-img"
                  />
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h1">98</Typography>
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
                    src="images/016-hi.png"
                    alt="Hand"
                    className="home__hero-img"
                  />
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h1">32</Typography>
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
                    src="images/021-iron.png"
                    alt="Iron"
                    className="home__hero-img"
                  />
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h1">88</Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
