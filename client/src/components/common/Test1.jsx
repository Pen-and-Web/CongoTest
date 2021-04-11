import React, { useState, useEffect } from "react";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
  makeStyles,
} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import { NavLink } from "react-router-dom";
import Abutton from "./Abutton";
import { MdTimer } from "react-icons/md";
import axios from "axios";

import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Link } from "react-router-dom";

// import Snackbar from "@material-ui/core/Snackbar";
// import MuiAlert from "@material-ui/lab/Alert";

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

export default function Test1(props) {
  const [words, setWords] = useState([
    "cider",
    "cast",
    "stripe",
    "insert",
    "defend",
    "bough",
    "blind",
    "coarse",
    "court",
    "settle",
    "fudge",
    "chord",
    "govern",
    "pearl",
    "lodge",
    "greet",
    "solar",
    "perfect",
    "bridle",
    "oaken",
    "fault",
    "spoon",
    "special",
    "recess",
    "crown",
    "leap",
    "piece",
    "consist",
    "soapy",
    "quest",
    "count",
    "rinse",
    "mostly",
    "able",
    "glimpse",
    "shore",
    "drawn",
    "shrink",
    "pledge",
    "every",
    "easel",
    "fleet",
    "pencil",
    "refuse",
    "break",
    "define",
    "sense",
    "hinder",
    "better",
    "where",
    "entire",
    "uncle",
    "solace",
    "patrol",
    "thorn",
    "ghost",
    "white",
    "keeper",
    "judge",
    "pause",
    "knife",
    "coach",
    "night",
    "defect",
    "hence",
    "hedge",
    "south",
    "clock",
    "trust",
    "short",
    "petal",
    "period",
    "picnic",
    "other",
    "person",
    "scope",
    "miller",
    "smart",
    "straw",
    "warm",
    "ripen",
    "slogan",
    "finger",
    "noisy",
    "juice",
    "under",
    "height",
    "useful",
    "defer",
    "enter",
    "heard",
    "event",
    "slowly",
    "field",
    "ordeal",
    "quite",
    "bond",
    "meant",
    "mend",
    "nurse",
    "jump",
    "west",
    "quick",
    "skill",
    "cool",
  ]);

  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [result, setResult] = useState(0);
  const [clicked, setClicked] = useState(0);
  const [seconds, setSeconds] = useState(59);
  const [minutes, setMinutes] = useState(2);
  const [timerBg, setTimerBg] = useState("#3f51b5");
  const [shuffle, setShuffle] = useState([]);
  const [selectedValues, setSelectedValues] = useState([]);

  // function Alert(props) {
  //   return <MuiAlert elevation={6} variant="filled" {...props} />;
  // }

  // const handleClose = (event, reason) => {
  //   if (reason === "clickaway") {
  //     return;
  //   }

  //   setOpen(false);
  // };

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    window.location = "/home";
  };

  const checkSelectedValue = (data, index) => {
    const obj = { id: index, value: data };
    let push = true;
    selectedValues.map((item) => {
      if (item.id === index) {
        push = false;
      }
    });
    let newArray = selectedValues.filter((item) => item.id != index);
    if (push) {
      if (selectedValues.length < 24) {
        selectedValues.push(obj);
      } else {
        alert("You have already selected 24 values!");
      }
    } else {
      setSelectedValues(newArray);
    }
    console.log(newArray, "array");
    return newArray;
  };

  const addCorrect = () => {
    setCorrect(correct + 1);
  };
  const addWrong = () => {
    setWrong(wrong + 1);
  };
  const addClicked = () => {
    setClicked(clicked + 1);
  };

  const populateWords = (arr) => {
    arr.sort(() => Math.random() - 0.5);

    return arr;
  };

  useEffect(() => {
    setShuffle(populateWords(words));
    console.log("Shuffled: ", shuffle);
  }, []);

  useEffect(() => {
    return () => {
      props.history.push("/home");
    };
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
          calculateResult();
        }
      }
    }, 1000);
  }, [seconds]);

  const checkA = (x) => {
    // addClicked();
    let check = x.includes("a");
    if (check) {
      return true;
    } else {
      return false;
    }
  };

  const handleClick = () => {
    setOpen(true);
  };

  const calculateResult = async () => {
    let tempCorrect = 0;
    let tempWrong = 0;
    selectedValues.map((item) => {
      let result = checkA(item.value);
      if (result) {
        tempCorrect = tempCorrect + 1;
      } else {
        tempWrong = tempWrong + 1;
      }
    });

    let id = JSON.parse(localStorage.getItem("user"));
    console.log("ID: ", id.id);

    let result = ((tempCorrect - tempWrong / 2) / 24) * 100;
    setResult(result);
    setCorrect(tempCorrect);
    setWrong(tempWrong);
    await axios
      .post("http://localhost:3100/api/tests/postResult", {
        userId: `${id.id}`,
        testName: "Finding A's",
        accuracy: `${result < 0 ? 0 : result}`,
        minutes: 2 - minutes,
        seconds: 59 - seconds,
        wrong: tempWrong,
        correct: `${
          tempCorrect - tempWrong / 2 < 0 ? 0 : tempCorrect - tempWrong / 2
        }`,
      })
      .then((response) => {
        console.log("Post Response: ", response);
      })
      .catch((error) => {
        console.log(error, "this error");
      });

    handleOpen();
  };

  const classes = useStyles();

  return (
    <Box
      justifyContent="center"
      alignContent="center"
      //display="flex"
      //flexDirection="column"
      //alignItems="stretch"
      padding={{ xs: 1, sm: 2, lg: 10, md: 5, xl: 10 }}
      // px={{ xs: 5, sm: 2, md: 3 }}
      // bgcolor="warning.main"
      align="center"
      //className={classes.root}
      style={{ background: "#A4D3EE" }}
      //height="100vh"
      //display="flex"
    >
      <Grid
        container
        spacing={0}
        alignItems="center"
        style={{ marginBottom: "2%" }}
      >
        <Grid item xs={12} sm={8} md={10} lg={10} xl={10}></Grid>
        <Grid
          item
          xs={12}
          sm={4}
          md={2}
          lg={2}
          xl={2}
          //style={{ paddingLeft: "5%", paddingRight: "5%" }}
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
              {/* {"   "}
              <img
                src="images/finding a's2.png"
                alt="A"
                className="home__hero-img"
                style={{ maxWidth: 100, minWidth: 10 }}
              />
              <br /> */}
              Finding A's Test
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      <Grid
        container
        spacing={0}
        style={{ marginTop: "5%" }}
        //direction="row"
        //alignItems="center"
        //justify="center"
      >
        {shuffle.map((word, index) => (
          <Grid
            key={index}
            item
            xs={3}
            sm={3}
            md={2}
            lg={2}
            xl={2}
            align="center"
          >
            <Abutton
              word={word}
              index={index}
              addCorrect={addCorrect}
              addWrong={addWrong}
              addClicked={addClicked}
              checkSelectedValue={checkSelectedValue}
              selectedValues={selectedValues}
            />
          </Grid>
        ))}
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
              Accuracy:{" "}
              {((correct - wrong / 2) / 24) * 100 < 0
                ? 0
                : ((correct - wrong / 2) / 24) * 100}
              %
            </Typography>
            <Typography>
              Time Taken: {2 - minutes} minutes and {59 - seconds} seconds{" "}
            </Typography>
            <Typography id="transition-modal-description">
              Your Score is: {correct - wrong / 2 < 0 ? 0 : correct - wrong / 2}
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

      <Button
        //className={classes.testLink}
        onClick={() => {
          calculateResult();
        }}
        variant="contained"
        color="#F0F8FF"
        style={{ marginTop: "5%" }}
      >
        Submit
      </Button>
    </Box>
  );
}
