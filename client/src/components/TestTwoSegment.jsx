import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "./TestOne.css";
import "../App.css";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    alignContent: "center",
    //display: "flex",
    //alignItems: "center",
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
    height: "25rem",

    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TestTwoSegment({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
  link,
}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="stretch"
      padding={{ xs: 1, sm: 5, lg: 10, md: 10, xl: 10 }}
      bgcolor="#B0E2FF"
      className={classes.root}
    >
      <Grid container spacing={0} alignItems="center">
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          {/* <Paper className={classes.paper}> */}
          <Box
            //className="home__hero-img-wrapper"
            display="flex"
            justifyContent="flex-start"
          >
            <img src={img} alt={alt} className="home__hero-img" />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Box className="home__hero-text-wrapper">
            <ThemeProvider theme={theme}>
              <Typography
                style={{ fontFamily: "fantasy" }}
                // className="App"
                variant="h2"
                className={lightText ? "heading" : "heading dark"}
              >
                {headline}
              </Typography>
              {/* <Typography
                className={
                  lightTextDesc
                    ? "home__hero-subtitle"
                    : "home__hero-subtitle dark"
                }
                style={{ fontFamily: "fantasy" }}
              >
                {description}
              </Typography> */}
              {/* <Link to={link}> */}
              <Button
                onClick={() => {
                  handleOpen();
                }}
                style={{ marginTop: 5 }}
                variant="contained"
                color="#F0F8FF"
              >
                {buttonLabel}
              </Button>
              {/* </Link> */}
            </ThemeProvider>
          </Box>
        </Grid>
      </Grid>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Instructions</h2>
            <p id="transition-modal-description">{description}</p>
            <div className={classes.root}>
              <Link to={link} className={classes.testLink}>
                <Button variant="outlined" color="primary">
                  Continue
                </Button>
              </Link>
            </div>
          </div>
        </Fade>
      </Modal>
    </Box>
  );
}
