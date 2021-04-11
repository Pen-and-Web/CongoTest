import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import { NavLink } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Abutton from "./Abutton";
import { MdTimer } from "react-icons/md";
import { GoPrimitiveDot } from "react-icons/go";
import InputAdornment from "@material-ui/core/InputAdornment";
import Checkbox from "@material-ui/core/Checkbox";
import { useHistory } from "react-router-dom";
import axios from "axios";

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

export default function Test52() {
  let history = useHistory();
  const [seconds, setSeconds] = useState(59);
  const [minutes, setMinutes] = useState(1);
  const [timerBg, setTimerBg] = useState("#3f51b5");
  const [one, setOne] = useState({
    a: "outlined",
    b: "outlined",
    c: "outlined",
    d: "outlined",
    e: "outlined",
  });
  const [two, setTwo] = useState({
    a: "outlined",
    b: "outlined",
    c: "outlined",
    d: "outlined",
    e: "outlined",
  });
  const [three, setThree] = useState({
    a: "outlined",
    b: "outlined",
    c: "outlined",
    d: "outlined",
    e: "outlined",
  });
  const [four, setFour] = useState({
    a: "outlined",
    b: "outlined",
    c: "outlined",
    d: "outlined",
    e: "outlined",
  });
  const [five, setFive] = useState({
    a: "outlined",
    b: "outlined",
    c: "outlined",
    d: "outlined",
    e: "outlined",
  });

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
        history.push({
          pathname: "/home",
        });
        // window.location = `/Test7a?seven=${seven}`;
      }
    }, 1000);
  }, [seconds]);

  const calculateResult = async () => {
    let tempCorrect = 0;
    let tempWrong = 0;

    if (one.c === "contained") {
      tempCorrect = tempCorrect + 1;
    } else {
      tempWrong = tempWrong + 1;
    }

    if (two.b === "contained") {
      tempCorrect = tempCorrect + 1;
    } else {
      tempWrong = tempWrong + 1;
    }

    if (three.d === "contained") {
      tempCorrect = tempCorrect + 1;
    } else {
      tempWrong = tempWrong + 1;
    }

    if (four.d === "contained") {
      tempCorrect = tempCorrect + 1;
    } else {
      tempWrong = tempWrong + 1;
    }

    if (five.d === "contained") {
      tempCorrect = tempCorrect + 1;
    } else {
      tempWrong = tempWrong + 1;
    }

    let id = JSON.parse(localStorage.getItem("user"));
    console.log("ID: ", id.id);

    let result = ((tempCorrect - tempWrong / 2) / 10) * 100;

    await axios
      .post("http://localhost:3100/api/tests/postResult", {
        userId: `${id.id}`,
        testName: "Letter Sets",
        accuracy: result,
        minutes: 3 - minutes,
        seconds: 59 - seconds,
        wrong: tempWrong,
        correct: tempCorrect,
      })
      .then((response) => {
        console.log("Post Response: ", response);
      })
      .catch((error) => {
        console.log(error, "this error");
      });
    // setCorrect(tempCorrect);
    // setWrong(tempWrong);
    alert(`Your Score is: ${tempCorrect - tempWrong / 2}
  And mistakes are: ${tempWrong}
  Accuracy : ${((tempCorrect - tempWrong / 2) / 10) * 100}%`);
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
                src="images/letter sets.png"
                alt="A"
                className="home__hero-img"
                style={{ maxWidth: 100, minWidth: 10 }}
              />
              <br />
              Letter Sets Test (2)
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
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Typography>
            1:{" "}
            <Button
              style={{ marginRight: "2%", width: 20 }}
              onClick={() => {
                one.a === "outlined"
                  ? setOne((oldState) => ({
                      ...oldState,
                      a: "contained",
                      b: "outlined",
                      c: "outlined",
                      d: "outlined",
                      e: "outlined",
                    }))
                  : setOne((oldState) => ({
                      ...oldState,
                      a: "outlined",
                      b: "outlined",
                      c: "outlined",
                      d: "outlined",
                      e: "outlined",
                    }));
              }}
              variant={one.a}
              //color="primary"
              // disabled={disabled}
              // disableElevation={true}
              //className={renderClass()}
            >
              AAPP
            </Button>
            <Button
              style={{ marginRight: "2%", width: 20 }}
              onClick={() => {
                one.b === "outlined"
                  ? setOne((oldState) => ({
                      ...oldState,
                      a: "outlined",
                      b: "contained",
                      c: "outlined",
                      d: "outlined",
                      e: "outlined",
                    }))
                  : setOne((oldState) => ({
                      ...oldState,
                      a: "outlined",
                      b: "outlined",
                      c: "outlined",
                      d: "outlined",
                      e: "outlined",
                    }));
              }}
              variant={one.b}
              //color="primary"
              // disabled={disabled}
              // disableElevation={true}
              //className={renderClass()}
            >
              CCRR
            </Button>
            <Button
              style={{ marginRight: "2%", width: 20 }}
              onClick={() => {
                one.c === "outlined"
                  ? setOne((oldState) => ({
                      ...oldState,
                      a: "outlined",
                      b: "outlined",
                      c: "contained",
                      d: "outlined",
                      e: "outlined",
                    }))
                  : setOne((oldState) => ({
                      ...oldState,
                      a: "outlined",
                      b: "outlined",
                      c: "outlined",
                      d: "outlined",
                      e: "outlined",
                    }));
              }}
              variant={one.c}
              //color="primary"
              // disabled={disabled}
              // disableElevation={true}
              //className={renderClass()}
            >
              QQBB
            </Button>
            <Button
              style={{ marginRight: "2%", width: 20 }}
              onClick={() => {
                one.d === "outlined"
                  ? setOne((oldState) => ({
                      ...oldState,
                      a: "outlined",
                      b: "outlined",
                      c: "outlined",
                      d: "contained",
                      e: "outlined",
                    }))
                  : setOne((oldState) => ({
                      ...oldState,
                      a: "outlined",
                      b: "outlined",
                      c: "outlined",
                      d: "outlined",
                      e: "outlined",
                    }));
              }}
              variant={one.d}
              //color="primary"
              // disabled={disabled}
              // disableElevation={true}
              //className={renderClass()}
            >
              EETT
            </Button>
            <Button
              style={{ marginRight: "2%", width: 20 }}
              onClick={() => {
                one.e === "outlined"
                  ? setOne((oldState) => ({
                      ...oldState,
                      a: "outlined",
                      b: "outlined",
                      c: "outlined",
                      d: "outlined",
                      e: "contained",
                    }))
                  : setOne((oldState) => ({
                      ...oldState,
                      a: "outlined",
                      b: "outlined",
                      c: "outlined",
                      d: "outlined",
                      e: "outlined",
                    }));
              }}
              variant={one.e}
              //color="primary"
              // disabled={disabled}
              // disableElevation={true}
              //className={renderClass()}
            >
              DDSS
            </Button>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Typography>
            2:{" "}
            <Button
              style={{ marginRight: "2%", width: 20 }}
              onClick={() => {
                two.a === "outlined"
                  ? setTwo((oldState) => ({
                      ...oldState,
                      a: "contained",
                      b: "outlined",
                      c: "outlined",
                      d: "outlined",
                      e: "outlined",
                    }))
                  : setTwo((oldState) => ({
                      ...oldState,
                      a: "outlined",
                      b: "outlined",
                      c: "outlined",
                      d: "outlined",
                      e: "outlined",
                    }));
              }}
              variant={two.a}
              //color="primary"
              // disabled={disabled}
              // disableElevation={true}
              //className={renderClass()}
            >
              ABDC
            </Button>
            <Button
              style={{ marginRight: "2%", width: 20 }}
              onClick={() => {
                two.b === "outlined"
                  ? setTwo((oldState) => ({
                      ...oldState,
                      a: "outlined",
                      b: "contained",
                      c: "outlined",
                      d: "outlined",
                      e: "outlined",
                    }))
                  : setTwo((oldState) => ({
                      ...oldState,
                      a: "outlined",
                      b: "outlined",
                      c: "outlined",
                      d: "outlined",
                      e: "outlined",
                    }));
              }}
              variant={two.b}
              //color="primary"
              // disabled={disabled}
              // disableElevation={true}
              //className={renderClass()}
            >
              EGFG
            </Button>
            <Button
              style={{ marginRight: "2%", width: 20 }}
              onClick={() => {
                two.c === "outlined"
                  ? setTwo((oldState) => ({
                      ...oldState,
                      a: "outlined",
                      b: "outlined",
                      c: "contained",
                      d: "outlined",
                      e: "outlined",
                    }))
                  : setTwo((oldState) => ({
                      ...oldState,
                      a: "outlined",
                      b: "outlined",
                      c: "outlined",
                      d: "outlined",
                      e: "outlined",
                    }));
              }}
              variant={two.c}
              //color="primary"
              // disabled={disabled}
              // disableElevation={true}
              //className={renderClass()}
            >
              IJLK
            </Button>
            <Button
              style={{ marginRight: "2%", width: 20 }}
              onClick={() => {
                two.d === "outlined"
                  ? setTwo((oldState) => ({
                      ...oldState,
                      a: "outlined",
                      b: "outlined",
                      c: "outlined",
                      d: "contained",
                      e: "outlined",
                    }))
                  : setTwo((oldState) => ({
                      ...oldState,
                      a: "outlined",
                      b: "outlined",
                      c: "outlined",
                      d: "outlined",
                      e: "outlined",
                    }));
              }}
              variant={two.d}
              //color="primary"
              // disabled={disabled}
              // disableElevation={true}
              //className={renderClass()}
            >
              OPRQ
            </Button>
            <Button
              style={{ marginRight: "2%", width: 20 }}
              onClick={() => {
                two.e === "outlined"
                  ? setTwo((oldState) => ({
                      ...oldState,
                      a: "outlined",
                      b: "outlined",
                      c: "outlined",
                      d: "outlined",
                      e: "contained",
                    }))
                  : setTwo((oldState) => ({
                      ...oldState,
                      a: "outlined",
                      b: "outlined",
                      c: "outlined",
                      d: "outlined",
                      e: "outlined",
                    }));
              }}
              variant={two.e}
              //color="primary"
              // disabled={disabled}
              // disableElevation={true}
              //className={renderClass()}
            >
              UVXW
            </Button>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Typography>
            3:{" "}
            <Button
              style={{ marginRight: "2%", width: 20 }}
              onClick={() => {
                three.a === "outlined"
                  ? setThree((oldState) => ({
                      ...oldState,
                      a: "contained",
                      b: "outlined",
                      c: "outlined",
                      d: "outlined",
                      e: "outlined",
                    }))
                  : setThree((oldState) => ({
                      ...oldState,
                      a: "outlined",
                      b: "outlined",
                      c: "outlined",
                      d: "outlined",
                      e: "outlined",
                    }));
              }}
              variant={three.a}
              //color="primary"
              // disabled={disabled}
              // disableElevation={true}
              //className={renderClass()}
            >
              CERT
            </Button>
            <Button
              style={{ marginRight: "2%", width: 20 }}
              onClick={() => {
                three.b === "outlined"
                  ? setThree((oldState) => ({
                      ...oldState,
                      a: "outlined",
                      b: "contained",
                      c: "outlined",
                      d: "outlined",
                      e: "outlined",
                    }))
                  : setThree((oldState) => ({
                      ...oldState,
                      a: "outlined",
                      b: "outlined",
                      c: "outlined",
                      d: "outlined",
                      e: "outlined",
                    }));
              }}
              variant={three.b}
              //color="primary"
              // disabled={disabled}
              // disableElevation={true}
              //className={renderClass()}
            >
              KMTV
            </Button>
            <Button
              style={{ marginRight: "2%", width: 20 }}
              onClick={() => {
                three.c === "outlined"
                  ? setThree((oldState) => ({
                      ...oldState,
                      a: "outlined",
                      b: "outlined",
                      c: "contained",
                      d: "outlined",
                      e: "outlined",
                    }))
                  : setThree((oldState) => ({
                      ...oldState,
                      a: "outlined",
                      b: "outlined",
                      c: "outlined",
                      d: "outlined",
                      e: "outlined",
                    }));
              }}
              variant={three.c}
              //color="primary"
              // disabled={disabled}
              // disableElevation={true}
              //className={renderClass()}
            >
              FHXZ
            </Button>
            <Button
              style={{ marginRight: "2%", width: 20 }}
              onClick={() => {
                three.d === "outlined"
                  ? setThree((oldState) => ({
                      ...oldState,
                      a: "outlined",
                      b: "outlined",
                      c: "outlined",
                      d: "contained",
                      e: "outlined",
                    }))
                  : setThree((oldState) => ({
                      ...oldState,
                      a: "outlined",
                      b: "outlined",
                      c: "outlined",
                      d: "outlined",
                      e: "outlined",
                    }));
              }}
              variant={three.d}
              //color="primary"
              // disabled={disabled}
              // disableElevation={true}
              //className={renderClass()}
            >
              BODQ
            </Button>
            <Button
              style={{ marginRight: "2%", width: 20 }}
              onClick={() => {
                three.e === "outlined"
                  ? setThree((oldState) => ({
                      ...oldState,
                      a: "outlined",
                      b: "outlined",
                      c: "outlined",
                      d: "outlined",
                      e: "contained",
                    }))
                  : setThree((oldState) => ({
                      ...oldState,
                      a: "outlined",
                      b: "outlined",
                      c: "outlined",
                      d: "outlined",
                      e: "outlined",
                    }));
              }}
              variant={three.e}
              //color="primary"
              // disabled={disabled}
              // disableElevation={true}
              //className={renderClass()}
            >
              HJPR
            </Button>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Typography>
            4:{" "}
            <Button
              style={{ marginRight: "2%", width: 20 }}
              onClick={() => {
                four.a === "outlined"
                  ? setFour((oldState) => ({
                      ...oldState,
                      a: "contained",
                      b: "outlined",
                      c: "outlined",
                      d: "outlined",
                      e: "outlined",
                    }))
                  : setFour((oldState) => ({
                      ...oldState,
                      a: "outlined",
                      b: "outlined",
                      c: "outlined",
                      d: "outlined",
                      e: "outlined",
                    }));
              }}
              variant={four.a}
              //color="primary"
              // disabled={disabled}
              // disableElevation={true}
              //className={renderClass()}
            >
              CFCR
            </Button>
            <Button
              style={{ marginRight: "2%", width: 20 }}
              onClick={() => {
                four.b === "outlined"
                  ? setFour((oldState) => ({
                      ...oldState,
                      a: "outlined",
                      b: "contained",
                      c: "outlined",
                      d: "outlined",
                      e: "outlined",
                    }))
                  : setFour((oldState) => ({
                      ...oldState,
                      a: "outlined",
                      b: "outlined",
                      c: "outlined",
                      d: "outlined",
                      e: "outlined",
                    }));
              }}
              variant={four.b}
              //color="primary"
              // disabled={disabled}
              // disableElevation={true}
              //className={renderClass()}
            >
              JCVC
            </Button>
            <Button
              style={{ marginRight: "2%", width: 20 }}
              onClick={() => {
                four.c === "outlined"
                  ? setFour((oldState) => ({
                      ...oldState,
                      a: "outlined",
                      b: "outlined",
                      c: "contained",
                      d: "outlined",
                      e: "outlined",
                    }))
                  : setFour((oldState) => ({
                      ...oldState,
                      a: "outlined",
                      b: "outlined",
                      c: "outlined",
                      d: "outlined",
                      e: "outlined",
                    }));
              }}
              variant={four.c}
              //color="primary"
              // disabled={disabled}
              // disableElevation={true}
              //className={renderClass()}
            >
              CGCS
            </Button>
            <Button
              style={{ marginRight: "2%", width: 20 }}
              onClick={() => {
                four.d === "outlined"
                  ? setFour((oldState) => ({
                      ...oldState,
                      a: "outlined",
                      b: "outlined",
                      c: "outlined",
                      d: "contained",
                      e: "outlined",
                    }))
                  : setFour((oldState) => ({
                      ...oldState,
                      a: "outlined",
                      b: "outlined",
                      c: "outlined",
                      d: "outlined",
                      e: "outlined",
                    }));
              }}
              variant={four.d}
              //color="primary"
              // disabled={disabled}
              // disableElevation={true}
              //className={renderClass()}
            >
              CLXC
            </Button>
            <Button
              style={{ marginRight: "2%", width: 20 }}
              onClick={() => {
                four.e === "outlined"
                  ? setFour((oldState) => ({
                      ...oldState,
                      a: "outlined",
                      b: "outlined",
                      c: "outlined",
                      d: "outlined",
                      e: "contained",
                    }))
                  : setFour((oldState) => ({
                      ...oldState,
                      a: "outlined",
                      b: "outlined",
                      c: "outlined",
                      d: "outlined",
                      e: "outlined",
                    }));
              }}
              variant={four.e}
              //color="primary"
              // disabled={disabled}
              // disableElevation={true}
              //className={renderClass()}
            >
              KCWC
            </Button>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Typography>
            5:{" "}
            <Button
              style={{ marginRight: "2%", width: 20 }}
              onClick={() => {
                five.a === "outlined"
                  ? setFive((oldState) => ({
                      ...oldState,
                      a: "contained",
                      b: "outlined",
                      c: "outlined",
                      d: "outlined",
                      e: "outlined",
                    }))
                  : setFive((oldState) => ({
                      ...oldState,
                      a: "outlined",
                      b: "outlined",
                      c: "outlined",
                      d: "outlined",
                      e: "outlined",
                    }));
              }}
              variant={five.a}
              //color="primary"
              // disabled={disabled}
              // disableElevation={true}
              //className={renderClass()}
            >
              CAEZ
            </Button>
            <Button
              style={{ marginRight: "2%", width: 20 }}
              onClick={() => {
                five.b === "outlined"
                  ? setFive((oldState) => ({
                      ...oldState,
                      a: "outlined",
                      b: "contained",
                      c: "outlined",
                      d: "outlined",
                      e: "outlined",
                    }))
                  : setFive((oldState) => ({
                      ...oldState,
                      a: "outlined",
                      b: "outlined",
                      c: "outlined",
                      d: "outlined",
                      e: "outlined",
                    }));
              }}
              variant={five.b}
              //color="primary"
              // disabled={disabled}
              // disableElevation={true}
              //className={renderClass()}
            >
              CEIZ
            </Button>
            <Button
              style={{ marginRight: "2%" }}
              onClick={() => {
                five.c === "outlined"
                  ? setFive((oldState) => ({
                      ...oldState,
                      a: "outlined",
                      b: "outlined",
                      c: "contained",
                      d: "outlined",
                      e: "outlined",
                    }))
                  : setFive((oldState) => ({
                      ...oldState,
                      a: "outlined",
                      b: "outlined",
                      c: "outlined",
                      d: "outlined",
                      e: "outlined",
                    }));
              }}
              variant={five.c}
              //color="primary"
              // disabled={disabled}
              // disableElevation={true}
              //className={renderClass()}
            >
              CIOZ
            </Button>
            <Button
              style={{ marginRight: "2%", width: 20 }}
              onClick={() => {
                five.d === "outlined"
                  ? setFive((oldState) => ({
                      ...oldState,
                      a: "outlined",
                      b: "outlined",
                      c: "outlined",
                      d: "contained",
                      e: "outlined",
                    }))
                  : setFive((oldState) => ({
                      ...oldState,
                      a: "outlined",
                      b: "outlined",
                      c: "outlined",
                      d: "outlined",
                      e: "outlined",
                    }));
              }}
              variant={five.d}
              //color="primary"
              // disabled={disabled}
              // disableElevation={true}
              //className={renderClass()}
            >
              CGVZ
            </Button>
            <Button
              style={{ marginRight: "2%", width: 20 }}
              onClick={() => {
                five.e === "outlined"
                  ? setFive((oldState) => ({
                      ...oldState,
                      a: "outlined",
                      b: "outlined",
                      c: "outlined",
                      d: "outlined",
                      e: "contained",
                    }))
                  : setFive((oldState) => ({
                      ...oldState,
                      a: "outlined",
                      b: "outlined",
                      c: "outlined",
                      d: "outlined",
                      e: "outlined",
                    }));
              }}
              variant={five.e}
              //color="primary"
              // disabled={disabled}
              // disableElevation={true}
              //className={renderClass()}
            >
              CAUZ
            </Button>
          </Typography>
        </Grid>
      </Grid>

      <Button onClick={() => {}} variant="contained" color="#F0F8FF">
        Submit
      </Button>
    </Box>
  );
}
