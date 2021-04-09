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

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    alignContent: "center",
    fontFamily: "Fira Sans",
    display: "flex",
    alignItems: "center",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    alignItems: "center",
    alignContent: "center",
    typography: {
      fontFamily: "Fira Sans",
    },
  },
}));

export default function TestOneSegment({
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

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="stretch"
      padding={10}
      bgcolor="#A4D3EE"
      className={classes.root}
    >
      <Grid container spacing={0} alignItems="center">
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          {/* <Paper className={classes.paper}> */}
          <Box className="home__hero-text-wrapper">
            {/* <div className="top-line">{topLine}</div> */}
            <ThemeProvider theme={theme}>
              <Typography
                //className="App"
                variant="h2"
                className={lightText ? "heading" : "heading dark"}
                //classes={{ font: classes.font }}
              >
                {headline}
              </Typography>

              <Typography
                className={
                  lightTextDesc
                    ? "home__hero-subtitle"
                    : "home__hero-subtitle dark"
                }
                classes={{}}
              >
                {description}
              </Typography>
              <Link to={link}>
                <Button variant="contained" color="#F0F8FF">
                  {buttonLabel}
                </Button>
              </Link>
            </ThemeProvider>
          </Box>
          {/* </Paper> */}
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          {/* <Paper className={classes.paper}> */}
          <Box
            //className="home__hero-img-wrapper"
            display="flex"
            justifyContent="flex-end"
          >
            <img src={img} alt={alt} className="home__hero-img" />
          </Box>
          {/* </Paper> */}
        </Grid>
      </Grid>
    </Box>
  );
}
