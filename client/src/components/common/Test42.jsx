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

export default function Test42() {
  const populateArr = (arr) => {
    while (arr.length < 36) {
      var r = Math.floor(Math.random() * 89) + 10;
      if (arr.length < 20) {
        if (!checkEqualToTen(r)) {
          arr.push(r);
        }
      } else {
        if (checkEqualToTen(r)) {
          arr.push(r);
        }
      }
    }
    let arr1 = [];
    arr1 = arr.sort(() => Math.random() - 0.5);
    return arr1;
  };

  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [clicked, setClicked] = useState(0);
  const [seconds, setSeconds] = useState(59);
  const [minutes, setMinutes] = useState(3);
  const [timerBg, setTimerBg] = useState("#3f51b5");

  const addCorrect = () => {
    setCorrect(correct + 1);
  };
  const addWrong = () => {
    setWrong(wrong + 1);
  };
  const addClicked = () => {
    setClicked(clicked + 1);
  };

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

  useEffect(() => {
    setTimeout(() => {
      setClicked(16);
    }, 1800000);
  }, []);

  useEffect(() => {
    if (clicked === 16) {
      alert(`Your Score is: ${correct - wrong / 2}
And mistakes are: ${wrong}
Accuracy : ${((correct - wrong / 2) / 16) * 100}%`);
      window.location = "/home";
    }
  }, [clicked]);

  const checkEqualToTen = (x) => {
    let v1 = x / 10;
    let v2 = x % 10;
    if (parseInt(v1 + v2) === 10) {
      return true;
    } else {
      return false;
    }
  };
  // var arr = Array.from(
  //   { length: 36 },
  //   () => Math.floor(Math.random() * 89) + 10
  // );
  const [arr, setArr] = useState(populateArr([]));
  console.log(arr);
  const classes = useStyles();
  const [customClass, setCustomClass] = useState("arr");
  const renderClass = () => {
    if (customClass === "arr") {
      return classes.red;
    } else {
      return classes.arr;
    }
  };
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
      <Typography variant="h4">Number Comparison test Part 2</Typography>

      <Grid
        container
        spacing={1}
        style={{ marginTop: 50 }}
        align="center"

        //direction="row"
        //alignItems="center"
        //justify="center"
      >
        <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
          <Button
            //onClick={() => checkEqualToTen(props.number)}
            variant="outlined"
            //color="primary"
            // disabled={disabled}
            // disableElevation={true}
            //className={renderClass()}
          >
            fdsp2:fdsp2
          </Button>
        </Grid>
        <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
          <Button
            //onClick={() => checkEqualToTen(props.number)}
            variant="outlined"
            //color="primary"
            // disabled={disabled}
            // disableElevation={true}
            //className={renderClass()}
          >
            sa245:sa245
          </Button>
        </Grid>
        <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
          <Button
            //onClick={() => checkEqualToTen(props.number)}
            variant="outlined"
            //color="primary"
            // disabled={disabled}
            // disableElevation={true}
            //className={renderClass()}
          >
            dfvm4:dfvm4
          </Button>
        </Grid>
        <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
          <Button
            //onClick={() => checkEqualToTen(props.number)}
            variant="outlined"
            //color="primary"
            // disabled={disabled}
            // disableElevation={true}
            //className={renderClass()}
          >
            w563g:w536g
          </Button>
        </Grid>
        <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
          <Button
            //onClick={() => checkEqualToTen(props.number)}
            variant="outlined"
            //color="primary"
            // disabled={disabled}
            // disableElevation={true}
            //className={renderClass()}
          >
            eok35:eko35
          </Button>
        </Grid>
        <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
          <Button
            //onClick={() => checkEqualToTen(props.number)}
            variant="outlined"
            //color="primary"
            // disabled={disabled}
            // disableElevation={true}
            //className={renderClass()}
          >
            dkwp3:dkwp3
          </Button>
        </Grid>
        <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
          <Button
            //onClick={() => checkEqualToTen(props.number)}
            variant="outlined"
            //color="primary"
            // disabled={disabled}
            // disableElevation={true}
            //className={renderClass()}
          >
            wek46:wek46
          </Button>
        </Grid>
        <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
          <Button
            //onClick={() => checkEqualToTen(props.number)}
            variant="outlined"
            //color="primary"
            // disabled={disabled}
            // disableElevation={true}
            //className={renderClass()}
          >
            kp57d:kp57d
          </Button>
        </Grid>
        <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
          <Button
            //onClick={() => checkEqualToTen(props.number)}
            variant="outlined"
            //color="primary"
            // disabled={disabled}
            // disableElevation={true}
            //className={renderClass()}
          >
            adp53:adp53
          </Button>
        </Grid>
        <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
          <Button
            //onClick={() => checkEqualToTen(props.number)}
            variant="outlined"
            //color="primary"
            // disabled={disabled}
            // disableElevation={true}
            //className={renderClass()}
          >
            sdlp4:sdlp4
          </Button>
        </Grid>
        <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
          <Button
            //onClick={() => checkEqualToTen(props.number)}
            variant="outlined"
            //color="primary"
            // disabled={disabled}
            // disableElevation={true}
            //className={renderClass()}
          >
            fnk3k:fnk3k
          </Button>
        </Grid>
        <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
          <Button
            //onClick={() => checkEqualToTen(props.number)}
            variant="outlined"
            //color="primary"
            // disabled={disabled}
            // disableElevation={true}
            //className={renderClass()}
          >
            aslk5:asl5k
          </Button>
        </Grid>
        <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
          <Button
            //onClick={() => checkEqualToTen(props.number)}
            variant="outlined"
            //color="primary"
            // disabled={disabled}
            // disableElevation={true}
            //className={renderClass()}
          >
            aoj53:aoj53
          </Button>
        </Grid>
        <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
          <Button
            //onClick={() => checkEqualToTen(props.number)}
            variant="outlined"
            //color="primary"
            // disabled={disabled}
            // disableElevation={true}
            //className={renderClass()}
          >
            vmpt4:vmpt4
          </Button>
        </Grid>
        <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
          <Button
            //onClick={() => checkEqualToTen(props.number)}
            variant="outlined"
            //color="primary"
            // disabled={disabled}
            // disableElevation={true}
            //className={renderClass()}
          >
            repk3:repk3
          </Button>
        </Grid>
        <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
          <Button
            //onClick={() => checkEqualToTen(props.number)}
            variant="outlined"
            //color="primary"
            // disabled={disabled}
            // disableElevation={true}
            //className={renderClass()}
          >
            dwl53:dwi53
          </Button>
        </Grid>
        <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
          <Button
            //onClick={() => checkEqualToTen(props.number)}
            variant="outlined"
            //color="primary"
            // disabled={disabled}
            // disableElevation={true}
            //className={renderClass()}
          >
            5r9t4:5r9t4
          </Button>
        </Grid>
        <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
          <Button
            //onClick={() => checkEqualToTen(props.number)}
            variant="outlined"
            //color="primary"
            // disabled={disabled}
            // disableElevation={true}
            //className={renderClass()}
          >
            grkp4:grkp4
          </Button>
        </Grid>
        <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
          <Button
            //onClick={() => checkEqualToTen(props.number)}
            variant="outlined"
            //color="primary"
            // disabled={disabled}
            // disableElevation={true}
            //className={renderClass()}
          >
            gfm35:gfn35
          </Button>
        </Grid>
        <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
          <Button
            //onClick={() => checkEqualToTen(props.number)}
            variant="outlined"
            //color="primary"
            // disabled={disabled}
            // disableElevation={true}
            //className={renderClass()}
          >
            dl35jt:dl35jt
          </Button>
        </Grid>
      </Grid>

      <Button
        //className={classes.testLink}
        onClick={() => {
          alert(`Your Score is: ${correct - wrong / 2}
And mistakes are: ${wrong}
Accuracy : ${((correct - wrong / 2) / 16) * 100}%`);
          window.location = "/home";
        }}
        variant="contained"
        color="#F0F8FF"
      >
        Submit
      </Button>
    </Box>
  );
}
