import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { NavLink } from "react-router-dom";
import NumberButton from "./NumberButton";
import { MdTimer } from "react-icons/md";

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
  const [words, setWords] = useState([
    "eok35:eko35",
    "7343801:7343801",
    "w563g:w536g",
    "18824:18824",
    "aslk5:asl5k",
    "705216831:795216831",
    "dwl53:dwi53",
    "971:971",
    "qk4kg:gk4kg",
    "446014721:446014721",
    "frk3r:frkr3",
    "5173869:5172869",
    "gfm35:gfn35",
    "6430017:6430017",
    "a9u47:a9u74",
    "518198045:518168045",
    "flk64:fik64",
    "55179:55097",
    "twnl3:townl3",
    "m35ja:m35ga",
  ]);

  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [clicked, setClicked] = useState(0);
  const [seconds, setSeconds] = useState(59);
  const [minutes, setMinutes] = useState(2);
  const [timerBg, setTimerBg] = useState("#3f51b5");
  const [shuffle, setShuffle] = useState([]);
  const [selectedValues, setSelectedValues] = useState([]);

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
      if (selectedValues.length < 11) {
        selectedValues.push(obj);
      } else {
        alert("You have aleadry selected 16 numbers");
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

  const checkA = (a) => {
    // addClicked();

    if (
      a === "twnl3:townl3" ||
      a === "m35ja:m35ga" ||
      a === "eok35:eko35" ||
      a === "w563g:w536g" ||
      a === "aslk5:asl5k" ||
      a === "dwl53:dwi53" ||
      a === "qk4kg:gk4kg" ||
      a === "frk3r:frkr3" ||
      a === "gfm35:gfn35" ||
      a === "a9u47:a9u74" ||
      a === "flk64:fik64"
    ) {
      return true;
    } else {
      return false;
    }
  };

  const calculateResult = () => {
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
    setCorrect(tempCorrect);
    setWrong(tempWrong);
    alert(`Your Score is: ${tempCorrect - tempWrong / 2}
  And mistakes are: ${tempWrong}
  Accuracy : ${((tempCorrect - tempWrong / 2) / 24) * 100}%`);
    window.location = "/home";
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
      align="center"
      className={classes.root}
      style={{ background: "#94e4f7" }}
      //height="100vh"
      //display="flex"
    >
      <Grid
        container
        spacing={0}
        alignItems="center"
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
      <Typography variant="h4">Number Comparison Test 1</Typography>

      <Grid
        container
        spacing={0}
        style={{ marginTop: 100 }}
        //direction="row"
        //alignItems="center"
        //justify="center"
      >
        {shuffle.map((word, index) => (
          <Grid
            key={index}
            item
            xs={12}
            sm={6}
            md={2}
            lg={2}
            xl={2}
            align="center"
          >
            <NumberButton
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

      <Button
        //className={classes.testLink}
        onClick={() => {
          calculateResult();
        }}
        variant="contained"
        color="#F0F8FF"
      >
        Submit
      </Button>
    </Box>
  );
}
