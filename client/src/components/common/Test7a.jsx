import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { NavLink } from "react-router-dom";
import ItemButton from "./ItemButton";
import { MdTimer } from "react-icons/md";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import Paper from "@material-ui/core/Paper";

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

export default function Test7a(props) {
  const [seconds, setSeconds] = useState(30);
  const [minutes, setMinutes] = useState(1);
  const [timerBg, setTimerBg] = useState("#3f51b5");
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState("");
  const [value5, setValue5] = useState("");
  const [value6, setValue6] = useState("");
  const [value7, setValue7] = useState("");
  // const [correct, setCorrect] = useState(0);
  // const [wrong, setWrong] = useState(0);

  const result = async () => {
    let correct = 0;
    let wrong = 0;

    if (value1 === seven[0].first) {
      correct += 1;
    } else {
      wrong += 1;
    }
    if (value2 === seven[1].first) {
      correct += 1;
    } else {
      wrong += 1;
    }
    if (value3 === seven[2].first) {
      correct += 1;
    } else {
      wrong += 1;
    }
    if (value4 === seven[3].first) {
      correct += 1;
    } else {
      wrong += 1;
    }
    if (value5 === seven[4].first) {
      correct += 1;
    } else {
      wrong += 1;
    }
    if (value6 === seven[5].first) {
      correct += 1;
    } else {
      wrong += 1;
    }
    if (value7 === seven[6].first) {
      correct += 1;
    } else {
      wrong += 1;
    }
    console.log("A:B", correct, wrong);

    let id = JSON.parse(localStorage.getItem("user"));
    console.log("ID: ", id.id);

    let result = ((correct - wrong / 2) / 7) * 100;

    await axios
      .post("http://localhost:3100/api/tests/postResult", {
        userId: `${id.id}`,
        testName: "First and Last name",
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

    alert(`Your Score is: ${correct - wrong / 2}
And mistakes are: ${wrong}
Accuracy : ${((correct - wrong / 2) / 7) * 100}%`);
    window.location = `/home`;
  };

  const [seven, setSeven] = useState(null);
  const populateNames = (arr) => {
    arr.sort(() => Math.random() - 0.5);

    return arr;
  };

  useEffect(() => {
    setSeven(populateNames(props.history.location.state));
    console.log("Seven A: ", seven);
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

      if (seconds === 0 && minutes === 0) {
        // history.push({
        //   pathname: "/home",
        // });
        //window.location = `/home`;
        result();
      }
    }, 1000);
  }, [seconds]);

  const classes = useStyles();

  if (!seven) {
    return null;
  }

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
                src="images/first and last name 1.png"
                alt="A"
                className="home__hero-img"
                style={{ maxWidth: 100, minWidth: 10 }}
              />
              <br />
              Time to guess ..
            </Typography>
          </Grid>
        </Grid>
      </Paper>

      <Grid
        container
        spacing={0}
        style={{ marginTop: 100 }}
        //direction="row"
        //alignItems="center"
        //justify="center"
      >
        <Grid item xs={6} align="center">
          <Typography>
            <TextField
              value={value1}
              onChange={(e) => setValue1(e.target.value)}
              //id="standard-number"
              //label="Number"
              //type="number"
              InputLabelProps={{
                shrink: true,
              }}
            />{" "}
            {seven[0].second}
          </Typography>
        </Grid>
        <Grid item xs={6} align="center">
          <Typography>
            <TextField
              value={value2}
              onChange={(e) => setValue2(e.target.value)}
              //id="standard-number"
              //label="Number"
              //type="number"
              InputLabelProps={{
                shrink: true,
              }}
            />{" "}
            {seven[1].second}
          </Typography>
        </Grid>
        <Grid item xs={6} align="center">
          <Typography>
            <TextField
              value={value3}
              onChange={(e) => setValue3(e.target.value)}
              //id="standard-number"
              //label="Number"
              //type="number"
              InputLabelProps={{
                shrink: true,
              }}
            />{" "}
            {seven[2].second}
          </Typography>
        </Grid>
        <Grid item xs={6} align="center">
          <Typography>
            <TextField
              value={value4}
              onChange={(e) => setValue4(e.target.value)}
              //id="standard-number"
              //label="Number"
              //type="number"
              InputLabelProps={{
                shrink: true,
              }}
            />{" "}
            {seven[3].second}
          </Typography>
        </Grid>
        <Grid item xs={6} align="center">
          <Typography>
            <TextField
              value={value5}
              onChange={(e) => setValue5(e.target.value)}
              //id="standard-number"
              //label="Number"
              //type="number"
              InputLabelProps={{
                shrink: true,
              }}
            />{" "}
            {seven[4].second}
          </Typography>
        </Grid>
        <Grid item xs={6} align="center">
          <Typography>
            <TextField
              value={value6}
              onChange={(e) => setValue6(e.target.value)}
              //id="standard-number"
              //label="Number"
              //type="number"
              InputLabelProps={{
                shrink: true,
              }}
            />{" "}
            {seven[5].second}
          </Typography>
        </Grid>
        <Grid item xs={6} align="center">
          <Typography>
            <TextField
              value={value7}
              onChange={(e) => setValue7(e.target.value)}
              //id="standard-number"
              //label="Number"
              //type="number"
              InputLabelProps={{
                shrink: true,
              }}
            />{" "}
            {seven[6].second}
          </Typography>
        </Grid>
      </Grid>

      <Button
        //className={classes.testLink}
        onClick={async () => {
          result();
        }}
        variant="contained"
        color="#F0F8FF"
      >
        Submit
      </Button>
    </Box>
  );
}
