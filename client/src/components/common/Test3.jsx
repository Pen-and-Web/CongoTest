import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import { NavLink } from "react-router-dom";
import Abutton from "./Abutton";
import { MdTimer } from "react-icons/md";
import { GoPrimitiveDot } from "react-icons/go";
import InputAdornment from "@material-ui/core/InputAdornment";
import Checkbox from "@material-ui/core/Checkbox";
import axios from "axios";

import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Link } from "react-router-dom";

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
    width: "20rem",
    height: "10rem",

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
  const [minutes, setMinutes] = useState(2);
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
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [value1, setValue1] = useState();
  const [value2, setValue2] = useState();
  const [value3, setValue3] = useState();
  const [value4, setValue4] = useState();
  const [value5, setValue5] = useState();
  const [value6, setValue6] = useState();
  const [value7, setValue7] = useState();
  const [value8, setValue8] = useState();

  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    window.location = "/home";
  };

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
      if (!open) {
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
          result();
        }
      }
    }, 1000);
  }, [seconds]);

  const result = async () => {
    let correct = 0;
    let wrong = 0;

    if (segment1 === true) {
      if (value1 === 10 || value1 === 5) {
        correct += 1;
      } else {
        wrong += 1;
      }
    }

    if (segment2 === true) {
      if (value2 === 20 || value2 === 15) {
        correct += 1;
      } else {
        wrong += 1;
      }
    }

    if (segment3 === true) {
      if (value3 === 9 || value3 === 4) {
        correct += 1;
      } else {
        wrong += 1;
      }
    }

    if (segment4 === true) {
      if (value4 === 30 || value4 === 29) {
        correct += 1;
      } else {
        wrong += 1;
      }
    }

    if (segment5 === true) {
      if (value5 === 10 || value5 === 10) {
        correct += 1;
      } else {
        wrong += 1;
      }
    }

    if (segment6 === true) {
      if (value6 === 10 || value6 === 5) {
        correct += 1;
      } else {
        wrong += 1;
      }
    }

    if (segment7 === true) {
      if (value7 === 100 || value7 === 5) {
        correct += 1;
      } else {
        wrong += 1;
      }
    }

    if (segment8 === true) {
      if (value8 === 24 || value8 === 47) {
        correct += 1;
      } else {
        wrong += 1;
      }
    }

    if (segment9 === true) {
      if (check2 === true || check3 === true) {
        correct += 1;
      } else {
        wrong += 1;
      }
    }

    let id = JSON.parse(localStorage.getItem("user"));
    console.log("ID: ", id.id);

    let result = ((correct - wrong / 2) / 6) * 100;

    setCorrect(correct);
    setWrong(wrong);
    await axios
      .post("http://localhost:3100/api/tests/postResult", {
        userId: `${id.id}`,
        testName: "Cognitive Reflection",
        accuracy: result,
        minutes: 3 - minutes,
        seconds: 59 - seconds,
        wrong: wrong,
        correct: correct,
      })
      .then((response) => {
        console.log("Post Response: ", response);
      })
      .catch((error) => {
        console.log(error, "this error");
      });
    handleOpen();
    // setCorrect(tempCorrect);
    // setWrong(tempWrong);
    //   alert(`Your Score is: ${correct - wrong / 2}
    // And mistakes are: ${wrong}
    // Accuracy : ${((correct - wrong / 2) / 6) * 100}%`);
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
      // align="center"
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
        align="center"
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
          align="center"
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
                src="images/crt 2.png"
                alt="A"
                className="home__hero-img"
                style={{ maxWidth: 100, minWidth: 10 }}
              />
              <br />
              Cognitive Reflection Test (CRT)
            </Typography>
          </Grid>
        </Grid>
      </Paper>

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
                value={value1}
                onChange={(e) => setValue1(e.target.value)}
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
                value={value2}
                onChange={(e) => setValue2(e.target.value)}
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
                value={value3}
                onChange={(e) => setValue3(e.target.value)}
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
                value={value4}
                onChange={(e) => setValue4(e.target.value)}
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
                value={value5}
                onChange={(e) => setValue5(e.target.value)}
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
                value={value6}
                onChange={(e) => setValue6(e.target.value)}
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
                value={value7}
                onChange={(e) => setValue7(e.target.value)}
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
                value={value8}
                onChange={(e) => setValue8(e.target.value)}
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
                checked={check1}
                onChange={(e) => {
                  setCheck1(!e.target.check1);
                  setCheck2(e.target.check2);
                  setCheck3(e.target.check3);
                }}
                name="checkedB"
                color="primary"
              />{" "}
              Broken even in th stock market
            </Typography>
            <Typography>
              <Checkbox
                checked={check2}
                onChange={(e) => {
                  setCheck2(!e.target.check2);
                  setCheck1(e.target.check1);
                  setCheck3(e.target.check3);
                }}
                name="checkedB"
                color="primary"
              />{" "}
              Is ahead of where he began
            </Typography>
            <Typography>
              <Checkbox
                checked={check3}
                onChange={(e) => {
                  setCheck3(!e.target.check3);
                  setCheck2(e.target.check2);
                  setCheck1(e.target.check1);
                }}
                name="checkedB"
                color="primary"
              />{" "}
              Has lost money
            </Typography>
          </Grid>
        ) : null}
      </Grid>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box
            style={{
              textAlign: "center",
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
            }}
            className={classes.paper}
          >
            <Typography
              style={{ fontWeight: "bold" }}
              id="transition-modal-title"
            >
              Accuracy: {((correct - wrong / 2) / 6) * 100}%
            </Typography>
            <Typography>
              Time Taken: {3 - minutes} minutes and {59 - seconds} seconds{" "}
            </Typography>
            <Typography id="transition-modal-description">
              Your Score is: {correct - wrong / 2} and mistakes are: {wrong}
            </Typography>
            <Box className={classes.root}>
              <Link to="/home" className={classes.testLink}>
                <Button variant="outlined" color="primary">
                  Okay
                </Button>
              </Link>
            </Box>
          </Box>
        </Fade>
      </Modal>
      <Box align="center">
        <Button
          onClick={result}
          style={{ textAlign: "center" }}
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
    </Box>
  );
}
