import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { NavLink } from "react-router-dom";
import NumberButton from "./NumberButton";
import { MdTimer } from "react-icons/md";
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

export default function Test4() {
  let history = useHistory();
  const [words, setWords] = useState([
    "659:659",
    "7343801:7343801",
    "73845:73855",
    "18824:18824",
    "1624:1624",
    "705216831:795216831",
    "438:436",
    "971:971",
    "4821459:4814259",
    "446014721:446014721",
    "658331:656331",
    "5173869:5172869",
    "11653:11652",
    "6430017:6430017",
    "617439428:617439428",
    "518198045:518168045",
    "1860439:1860439",
    "55179:55097",
    "90776105:90716105",
    "63216067:63216057",
  ]);

  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [clicked, setClicked] = useState(0);
  const [seconds, setSeconds] = useState(30);
  const [minutes, setMinutes] = useState(1);
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
      a === "73845:73855" ||
      a === "705216831:795216831" ||
      a === "438:436" ||
      a === "4821459:4814259" ||
      a === "658331:656331" ||
      a === "5173869:5172869" ||
      a === "11653:11652" ||
      a === "518198045:518168045" ||
      a === "55179:55097" ||
      a === "90776105:90716105" ||
      a === "63216067:63216057"
    ) {
      return true;
    } else {
      return false;
    }
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
    setCorrect(tempCorrect);
    setWrong(tempWrong);
    history.push({
      pathname: "/Test42",
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
