import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { NavLink } from "react-router-dom";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import { MdTimer } from "react-icons/md";
import axios from "axios";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

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
  table: {
    minWidth: 700,
  },
}));

export default function Results() {
  const [data, setData] = useState([]);
  //let state = [];

  const getResults = async () => {
    let id = JSON.parse(localStorage.getItem("user"));

    await axios
      .get(
        `https://surveyapp786.herokuapp.com/api/tests/getUserResult?userId=${id.id}`
      )
      .then((res) => {
        console.log("Tests: ", res.data);
        //state = res.data;
        setData(res.data);
        //console.log("Data: ", data);
        //setData(res.Data);
        //return res.data;
      })
      .catch((err) => console.log(err));
  };

  const deleteResults = async () => {
    let id = JSON.parse(localStorage.getItem("user"));
    await axios
      .delete(
        `https://surveyapp786.herokuapp.com/api/tests/deleteUserResult?userId=${id.id}`
      )
      .then((res) => {
        console.log("Tests: ", res.data);
        //state = res.data;
        setData(res.data);
        //console.log("Data: ", data);
        //setData(res.Data);
        //return res.data;
      })
      .catch((err) => console.log(err));
  };

  //const [data, setData] = useState(getResults());
  useEffect(() => {
    getResults();
    //setState(getResults());
    // setShuffle(populateWords(words));
  }, []);

  const classes = useStyles();

  if (!data) {
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
      //height="100vh"
      //display="flex"
    >
      <Typography variant="h4">Tests Results</Typography>

      <Grid
        container
        spacing={0}
        style={{ marginTop: 100 }}
        //direction="row"
        //alignItems="center"
        //justify="center"
      >
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Test Name</StyledTableCell>
                <StyledTableCell align="right">Attempt#</StyledTableCell>
                <StyledTableCell align="right">Accuracy</StyledTableCell>
                <StyledTableCell align="right">Minutes</StyledTableCell>
                <StyledTableCell align="right">Seconds</StyledTableCell>
                <StyledTableCell align="right">Correct</StyledTableCell>
                <StyledTableCell align="right">Wrong</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data
                ? data.map((d, index) => (
                    <StyledTableRow key={index}>
                      <StyledTableCell component="th" scope="row">
                        {d.testName}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {d.attempt}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {d.accuracy}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {d.minutes}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {d.seconds}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {d.correct}
                      </StyledTableCell>
                      <StyledTableCell align="right">{d.wrong}</StyledTableCell>
                    </StyledTableRow>
                  ))
                : null}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>

      <Button
        //className={classes.testLink}
        onClick={() => {
          deleteResults();
        }}
        variant="contained"
        color="#F0F8FF"
      >
        Reset
      </Button>
    </Box>
  );
}
