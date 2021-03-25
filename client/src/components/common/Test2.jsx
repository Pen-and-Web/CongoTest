import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";
import ItemButton from "./ItemButton";

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
  const [seconds, setSeconds] = useState(180);

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
      setSeconds(seconds - 1);
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
    <>
      <h2>Sum to 10</h2>
      <h3>
        Instruction:{" "}
        <h4>
          You will be presented with a bunch of 2 digit numbers and you have to
          select the ones that add u to 10, for example no 82 -{">"} 8 + 2 = 10
          Good luck!
        </h4>{" "}
        {`Time Left: ${seconds}`}
      </h3>
      <Grid container spacing={0}>
        {/* {`Seconds: ${seconds}`} */}
        {arr.map((number, index) => (
          <Grid key={index} item xs={2} md={2} lg={2} sm={2} xl={2}>
            <ItemButton
              number={number}
              addCorrect={addCorrect}
              addWrong={addWrong}
              addClicked={addClicked}
            />
            {/* <Button
              onClick={() => {
                customClass === "arr"
                  ? setCustomClass("red")
                  : setCustomClass("arr");
              }}
              variant="outlined"
              color="primary"
              className={renderClass()}
            >
              {number}
            </Button> */}
          </Grid>
        ))}
      </Grid>

      <Button
        className={classes.testLink}
        onClick={() => {
          alert(`Your Score is: ${correct - wrong / 2}
And mistakes are: ${wrong}
Accuracy : ${((correct - wrong / 2) / 16) * 100}%`);
          window.location = "/home";
        }}
        variant="outlined"
        color="primary"
      >
        Submit
      </Button>
    </>
  );
}
