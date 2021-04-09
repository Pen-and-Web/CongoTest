import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import Box from "@material-ui/core/Box";
import { NavLink } from "react-router-dom";
import ItemButton from "./ItemButton";
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

export default function Test7(props) {
  let history = useHistory();
  //   const populateArr = (arr) => {
  //     while (arr.length < 36) {
  //       var r = Math.floor(Math.random() * 89) + 10;
  //       if (arr.length < 20) {
  //         if (!checkEqualToTen(r)) {
  //           arr.push(r);
  //         }
  //       } else {
  //         if (checkEqualToTen(r)) {
  //           arr.push(r);
  //         }
  //       }
  //     }
  //     let arr1 = [];
  //     arr1 = arr.sort(() => Math.random() - 0.5);
  //     return arr1;
  //   };

  const [seconds, setSeconds] = useState(30);
  const [minutes, setMinutes] = useState(0);
  const [timerBg, setTimerBg] = useState("#3f51b5");
  const [names, setNames] = useState([
    { first: "Claire", second: "Sullivan" },
    { first: "Jack", second: "Thompson" },
    { first: "Leon", second: "Chapin" },
    { first: "John", second: "Reynolds" },
    { first: "Joan", second: "White" },
    { first: "Donald", second: "Lambert" },
    { first: "Daniel", second: " Shaw" },
    { first: "Kenneth", second: "Murray" },
    { first: "Edward", second: "Nichols" },
    { first: "Jean", second: "Wolfe" },
    { first: "Carl", second: "Brown" },
    { first: "Blanche", second: "Clark" },
    { first: "Roger", second: "Lannon" },
    { first: "Eloise", second: "Cooper" },
    { first: "David", second: "Burgess" },
  ]);

  const [seven, setSeven] = useState([]);
  const populateNames = (arr) => {
    arr.sort(() => Math.random() - 0.5);
    arr.length = 7;
    return arr;
  };
  useEffect(() => {
    setSeven(populateNames(names));
    console.log("Seven: ", seven);
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
        history.push({
          pathname: "/Test7a",
          state: seven,
        });
        // window.location = `/Test7a?seven=${seven}`;
      }
    }, 1000);
  }, [seconds]);

  const classes = useStyles();
  const [customClass, setCustomClass] = useState("arr");

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
      <Typography variant="h4">First and Last name Test</Typography>

      {/* <Typography variant="h5">
        Instruction:{" "}
        <Typography variant="h5">
          You will be presented with a bunch of 2 digit numbers and you have to
          select the ones that add u to 10, for example no 82 -{">"} 8 + 2 = 10
          Good luck!
        </Typography>{" "}
      </Typography> */}
      <Grid
        container
        spacing={0}
        style={{ marginTop: 100 }}
        //direction="row"
        //alignItems="center"
        //justify="center"
      >
        {/* {`Seconds: ${seconds}`} */}
        {seven.map((seven, index) => (
          <Grid
            key={index}
            item
            xs={6}
            sm={6}
            md={4}
            lg={4}
            sm={4}
            xl={4}
            align="center"
          >
            <Typography>
              {seven.first} {seven.second}
            </Typography>
          </Grid>
        ))}
      </Grid>

      {/* <Button
        //className={classes.testLink}

        variant="contained"
        color="#F0F8FF"
      >
        Submit
      </Button> */}
    </Box>
  );
}
