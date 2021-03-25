import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      "&$disabled": {},
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
  green: {
    color: "green",
    marginRight: "2px",
    marginLeft: "2px",
    marginTop: "2px",
  },

  // overrides: {
  //   MuiCssBaseline: {
  //     "@global": {
  //       //override the pseudo-classes
  //       ".Mui-disabled": { opacity: 0.5 },
  //     },
  //   },
  // },
}));

export default function ItemButton(props) {
  const { addCorrect, addWrong, addClicked } = props;
  const classes = useStyles();
  const [customClass, setCustomClass] = useState("arr");
  const [disabled, setDisabled] = useState(false);
  const checkEqualToTen = (x) => {
    addClicked();
    let v1 = x / 10;
    let v2 = x % 10;
    if (parseInt(v1 + v2) === 10) {
      addCorrect();
      setCustomClass("green");
      setDisabled(true);
      return true;
    } else {
      addWrong();
      setCustomClass("red");
      setDisabled(true);
      return false;
    }
  };

  const renderClass = () => {
    if (customClass === "arr") {
      return classes.arr;
    } else if (customClass === "red") {
      return classes.red;
    } else {
      return classes.green;
    }
  };

  return (
    <>
      <Button
        onClick={() => (disabled ? null : checkEqualToTen(props.number))}
        variant="outlined"
        color="primary"
        // disabled={disabled}
        // disableElevation={true}
        className={renderClass()}
      >
        {props.number}
      </Button>
    </>
  );
}
