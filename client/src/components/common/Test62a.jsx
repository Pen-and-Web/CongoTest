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
import { useHistory } from "react-router-dom";
import { GoPrimitiveDot } from "react-icons/go";
import InputAdornment from "@material-ui/core/InputAdornment";
import Checkbox from "@material-ui/core/Checkbox";
import axios from "axios";
import Paper from "@material-ui/core/Paper";

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

export default function Test62a(props) {
  let history = useHistory();
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [seconds, setSeconds] = useState(29);
  const [minutes, setMinutes] = useState(2);
  const [timerBg, setTimerBg] = useState("#3f51b5");
  const [pen, setPen] = useState();
  const [mirror, setMirror] = useState();
  const [rugbyBall, setRugbyBall] = useState();
  const [bucket, setBucket] = useState();
  const [lawBook, setLawBook] = useState();
  const [pin, setPin] = useState();
  const [dogSeating, setDogSeating] = useState();
  const [vase, setVase] = useState();
  const [screwDriver, setScrewDriver] = useState();
  const [thermometer, setThermometer] = useState();
  const [petBrush, setPetBrush] = useState();
  const [shoe, setShoe] = useState();
  const [hi, setHi] = useState();
  const [iron, setIron] = useState();
  const [shovel, setShovel] = useState();

  const calculateResult = async () => {
    let previous = props.history.location.state;
    console.log("Previous: ", previous);
    let tempCorrect = previous.correct;
    let tempWrong = previous.wrong;

    if (hi === 32) {
      tempCorrect = tempCorrect + 1;
    } else {
      tempWrong = tempWrong + 1;
    }

    if (iron === 88) {
      tempCorrect = tempCorrect + 1;
    } else {
      tempWrong = tempWrong + 1;
    }

    if (shovel === 86) {
      tempCorrect = tempCorrect + 1;
    } else {
      tempWrong = tempWrong + 1;
    }

    if (dogSeating === 27) {
      tempCorrect = tempCorrect + 1;
    } else {
      tempWrong = tempWrong + 1;
    }

    if (vase === 13) {
      tempCorrect = tempCorrect + 1;
    } else {
      tempWrong = tempWrong + 1;
    }

    if (screwDriver === 51) {
      tempCorrect = tempCorrect + 1;
    } else {
      tempWrong = tempWrong + 1;
    }

    if (thermometer === 15) {
      tempCorrect = tempCorrect + 1;
    } else {
      tempWrong = tempWrong + 1;
    }

    if (petBrush === 24) {
      tempCorrect = tempCorrect + 1;
    } else {
      tempWrong = tempWrong + 1;
    }

    if (shoe === 98) {
      tempCorrect = tempCorrect + 1;
    } else {
      tempWrong = tempWrong + 1;
    }

    if (pen === 62) {
      tempCorrect = tempCorrect + 1;
    } else {
      tempWrong = tempWrong + 1;
    }

    if (mirror === 82) {
      tempCorrect = tempCorrect + 1;
    } else {
      tempWrong = tempWrong + 1;
    }

    if (rugbyBall === 74) {
      tempCorrect = tempCorrect + 1;
    } else {
      tempWrong = tempWrong + 1;
    }

    if (bucket === 73) {
      tempCorrect = tempCorrect + 1;
    } else {
      tempWrong = tempWrong + 1;
    }

    if (lawBook === 99) {
      tempCorrect = tempCorrect + 1;
    } else {
      tempWrong = tempWrong + 1;
    }

    if (pin === 30) {
      tempCorrect = tempCorrect + 1;
    } else {
      tempWrong = tempWrong + 1;
    }
    let id = JSON.parse(localStorage.getItem("user"));
    console.log("ID: ", id.id);

    let result = ((tempCorrect - tempWrong / 2) / 21) * 100;

    await axios
      .post("http://localhost:3100/api/tests/postResult", {
        userId: `${id.id}`,
        testName: "Picture Number",
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
  Accuracy : ${((tempCorrect - tempWrong / 2) / 21) * 100}%`);
    window.location = `/home`;
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
        // history.push({
        //   pathname: "/home",
        // });
        //window.location = `/home`;
      }
    }, 1000);
  }, [seconds]);

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
                src="images/picture comparison.png"
                alt="A"
                className="home__hero-img"
                style={{ maxWidth: 100, minWidth: 10 }}
              />
              <br />
              Time to guess ..
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
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Box border={1}>
            <Grid container alignItems="center">
              <Grid item xs={6}>
                <Box borderRight={1}>
                  <img
                    src="images/007-pen.png"
                    alt="pen"
                    className="home__hero-img"
                  />
                </Box>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  value={pen}
                  onChange={(e) => setPen(e.target.value)}
                  //id="standard-number"
                  //label="Number"
                  //type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Box border={1}>
            <Grid container alignItems="center">
              <Grid item xs={6}>
                <Box borderRight={1}>
                  <img
                    src="images/012-mirror.png"
                    alt="mirror"
                    className="home__hero-img"
                  />
                </Box>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  value={mirror}
                  onChange={(e) => setMirror(e.target.value)}
                  //id="standard-number"
                  //label="Number"
                  //type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Box border={1}>
            <Grid container alignItems="center">
              <Grid item xs={6}>
                <Box borderRight={1}>
                  <img
                    src="images/017-rugby-ball.png"
                    alt="Rugby ball"
                    className="home__hero-img"
                  />
                </Box>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  value={rugbyBall}
                  onChange={(e) => setRugbyBall(e.target.value)}
                  //id="standard-number"
                  //label="Number"
                  //type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Box border={1}>
            <Grid container alignItems="center">
              <Grid item xs={6}>
                <Box borderRight={1}>
                  <img
                    src="images/008-bucket.png"
                    alt="Bucket"
                    className="home__hero-img"
                  />
                </Box>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  value={bucket}
                  onChange={(e) => setBucket(e.target.value)}
                  //id="standard-number"
                  //label="Number"
                  //type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Box border={1}>
            <Grid container alignItems="center">
              <Grid item xs={6}>
                <Box borderRight={1}>
                  <img
                    src="images/013-law-book.png"
                    alt="Book"
                    className="home__hero-img"
                  />
                </Box>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  value={lawBook}
                  onChange={(e) => setLawBook(e.target.value)}
                  //id="standard-number"
                  //label="Number"
                  //type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Box border={1}>
            <Grid container alignItems="center">
              <Grid item xs={6}>
                <Box borderRight={1}>
                  <img
                    src="images/018-safety-pin.png"
                    alt="Safety Pin"
                    className="home__hero-img"
                  />
                </Box>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  //id="standard-number"
                  //label="Number"
                  //type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Box border={1}>
            <Grid container alignItems="center">
              <Grid item xs={6}>
                <Box borderRight={1}>
                  <img
                    src="images/009-dog-seating.png"
                    alt="Dog Seating"
                    className="home__hero-img"
                  />
                </Box>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  value={dogSeating}
                  onChange={(e) => setDogSeating(e.target.value)}
                  //id="standard-number"
                  //label="Number"
                  //type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Box border={1}>
            <Grid container alignItems="center">
              <Grid item xs={6}>
                <Box borderRight={1}>
                  <img
                    src="images/014-shovel.png"
                    alt="Shovel"
                    className="home__hero-img"
                  />
                </Box>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  value={shovel}
                  onChange={(e) => setShovel(e.target.value)}
                  //id="standard-number"
                  //label="Number"
                  //type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Box border={1}>
            <Grid container alignItems="center">
              <Grid item xs={6}>
                <Box borderRight={1}>
                  <img
                    src="images/019-vase.png"
                    alt="Vase"
                    className="home__hero-img"
                  />
                </Box>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  value={vase}
                  onChange={(e) => setVase(e.target.value)}
                  //id="standard-number"
                  //label="Number"
                  //type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Box border={1}>
            <Grid container alignItems="center">
              <Grid item xs={6}>
                <Box borderRight={1}>
                  <img
                    src="images/010-screw-driver.png"
                    alt="Screw Driver"
                    className="home__hero-img"
                  />
                </Box>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  value={screwDriver}
                  onChange={(e) => setScrewDriver(e.target.value)}
                  //id="standard-number"
                  //label="Number"
                  //type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Box border={1}>
            <Grid container alignItems="center">
              <Grid item xs={6}>
                <Box borderRight={1}>
                  <img
                    src="images/015-thermometer.png"
                    alt="Thermometer"
                    className="home__hero-img"
                  />
                </Box>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  value={thermometer}
                  onChange={(e) => setThermometer(e.target.value)}
                  //id="standard-number"
                  //label="Number"
                  //type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Box border={1}>
            <Grid container alignItems="center">
              <Grid item xs={6}>
                <Box borderRight={1}>
                  <img
                    src="images/020-pet-brush.png"
                    alt="Pet Brush"
                    className="home__hero-img"
                  />
                </Box>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  value={petBrush}
                  onChange={(e) => setPetBrush(e.target.value)}
                  //id="standard-number"
                  //label="Number"
                  //type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Box border={1}>
            <Grid container alignItems="center">
              <Grid item xs={6}>
                <Box borderRight={1}>
                  <img
                    src="images/011-shoe.png"
                    alt="Shoe"
                    className="home__hero-img"
                  />
                </Box>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  //value={shoe}
                  //onChange={(e) => setShoe(e.target.value)}
                  //id="standard-number"
                  //label="Number"
                  //type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Box border={1}>
            <Grid container alignItems="center">
              <Grid item xs={6}>
                <Box borderRight={1}>
                  <img
                    src="images/016-hi.png"
                    alt="Hand"
                    className="home__hero-img"
                  />
                </Box>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  value={hi}
                  onChange={(e) => setHi(e.target.value)}
                  //id="standard-number"
                  //label="Number"
                  //type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Box border={1}>
            <Grid container alignItems="center">
              <Grid item xs={6}>
                <Box borderRight={1}>
                  <img
                    src="images/021-iron.png"
                    alt="Iron"
                    className="home__hero-img"
                  />
                </Box>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  value={iron}
                  onChange={(e) => setIron(e.target.value)}
                  //id="standard-number"
                  //label="Number"
                  //type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
      <Button
        onClick={calculateResult}
        //className={classes.testLink}
        //         onClick={() => {
        //           alert(`Your Score is: ${correct - wrong / 2}
        // And mistakes are: ${wrong}
        // Accuracy : ${((correct - wrong / 2) / 16) * 100}%`);
        //           window.location = "/home";
        //         }}
        variant="contained"
        color="#F0F8FF"
      >
        Submit
      </Button>
    </Box>
  );
}
