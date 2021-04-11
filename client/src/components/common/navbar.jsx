import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import "../TestOne.css";
// import "../App.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  title: {
    flexGrow: 1,
    textDecoration: "none",
    color: "#fff",
    textAlign: "start",
    marginLeft: "5px",
  },
  link: {
    margin: "0 10px",
    textDecoration: "none",
    color: "#fff",
  },
}));

export default function Navbar({ user, onLogout }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: "#6CA6CD" }}>
        <Toolbar color="#6CA6CD">
          <NavLink color="inherit" to="/" className={classes.title}>
            {/* //The Test */}
            <img
              src="images/cover.png"
              alt="chair"
              className="home__hero-img"
              style={{ maxWidth: 180, minWidth: 10 }}
            />
          </NavLink>

          {!user && (
            <>
              {" "}
              <NavLink color="inherit" to="/login" className={classes.link}>
                Login
              </NavLink>
              <NavLink color="inherit" to="/register" className={classes.link}>
                Register
              </NavLink>
            </>
          )}

          {user && (
            <>
              {" "}
              <NavLink color="inherit" to="/profile" className={classes.link}>
                {user.firstName}
              </NavLink>
              <NavLink
                color="inherit"
                to="/"
                onClick={onLogout}
                className={classes.link}
              >
                Logout
              </NavLink>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
