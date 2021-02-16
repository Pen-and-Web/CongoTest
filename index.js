const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const mongoose = require("mongoose");
const app = express();
require("dotenv").config({ path: "./config.env" });
require("./models/db");

const userRouter = require("./routes/userRoutes");
const auth = require("./routes/auth");
const passport = require("./passport/setup");

app.use(express.json());

// Express Session
app.use(
  session({
    secret: "superSecretkey",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.use("/api/auth", auth);
app.use("/api/users", userRouter);

app.listen(3100, () => {
  console.log("listening on port 3100");
});
