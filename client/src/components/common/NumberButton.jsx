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
    color: "white",
    marginRight: "2px",
    marginLeft: "2px",
    marginTop: "2px",
    background: "grey",
  },
  green: {
    color: "white",
    marginRight: "2px",
    marginLeft: "2px",
    marginTop: "2px",
    background: "grey",
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

export default function NumberButton(props) {
  const {
    addCorrect,
    addWrong,
    addClicked,
    checkSelectedValue,
    index,
    word,
    selectedValues,
  } = props;

  const [disabled, setDisabled] = useState(false);

  return (
    <Button
      onClick={() => {
        let array = checkSelectedValue(word, index);

        if (array.length < 11) {
          setDisabled(!disabled);
        }
      }}
      variant={!disabled ? "outlined" : "contained"}
      style={{ marginBottom: "2%", width: 160 }}
      color="primary"
    >
      {props.word}
    </Button>
  );
}
