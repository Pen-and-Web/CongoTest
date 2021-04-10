import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { NavLink } from "react-router-dom";
import ItemButton from "./ItemButton";
import { MdTimer } from "react-icons/md";
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

export default function Test2(props) {
  // 19, 28, 37, 46, 55, 64, 73, 82, 91
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
  const [seconds, setSeconds] = useState(30);
  const [minutes, setMinutes] = useState(0);
  const [selectedValues, setSelectedValues] = useState([]);
  const [timerBg, setTimerBg] = useState("#3f51b5");
  const [userId, setUserId] = useState();

  const getUserId = () => {
    let id = localStorage.getItem("user");
    console.log("ID: ", id);
    if (id !== null) {
      console.log("ID: ", id);
      // setUserId(JSON.parse(id.id));
      console.log("User ID: ", userId);
    }
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
      if (selectedValues.length < 16) {
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
      }
    }, 1000);
  }, [seconds]);

  useEffect(() => {
    // getUserId();
  }, []);

  const checkEqualToTen = (x) => {
    // addClicked();
    let v1 = x / 10;
    let v2 = x % 10;
    if (parseInt(v1 + v2) === 10) {
      return true;
    } else {
      return false;
    }
  };

  const checkEqualToTenFinal = (x) => {
    // addClicked();
    let v1 = x / 10;
    let v2 = x % 10;
    if (parseInt(v1 + v2) === 10) {
      addCorrect();
    } else {
      addWrong();
    }
  };

  const calculateResult = async () => {
    let tempCorrect = 0;
    let tempWrong = 0;
    selectedValues.map((item) => {
      let result = checkEqualToTen(item.value);
      if (result) {
        tempCorrect = tempCorrect + 1;
      } else {
        tempWrong = tempWrong + 1;
      }
    });
    let id = JSON.parse(localStorage.getItem("user"));
    console.log("ID: ", id.id);

    let result = ((tempCorrect - tempWrong / 2) / 16) * 100;

    await axios
      .post("http://localhost:3100/api/tests/postResult", {
        userId: `${id.id}`,
        testName: "Sum to 10",
        accuracy: result,
        minutes: 2 - minutes,
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
    setCorrect(tempCorrect);
    setWrong(tempWrong);
    alert(`Your Score is: ${tempCorrect - tempWrong / 2}
  And mistakes are: ${tempWrong}
  Accuracy : ${((tempCorrect - tempWrong / 2) / 16) * 100}%`);
    // window.location = "/home";
  };

  // var arr = Array.from(
  //   { length: 36 },
  //   () => Math.floor(Math.random() * 89) + 10
  // );
  const [arr, setArr] = useState(populateArr([]));
  // console.log(arr);
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
      align="center"
      className={classes.root}
      style={{ background: "#94e4f7" }}
      height="100vh"
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
      <Typography variant="h4">Sum to 10</Typography>

      <Grid
        container
        spacing={0}
        style={{ marginTop: 100 }}
        //direction="row"
        //alignItems="center"
        //justify="center"
      >
        {/* {`Seconds: ${seconds}`} */}
        {arr.map((number, index) => (
          <Grid
            key={index}
            item
            xs={6}
            sm={6}
            md={2}
            lg={2}
            sm={2}
            xl={2}
            align="center"
          >
            <ItemButton
              number={number}
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
