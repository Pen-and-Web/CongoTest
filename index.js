const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const path = require("path");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
require("./models/db");

const userRouter = require("./routes/userRoutes");
const auth = require("./routes/auth");
const passport = require("./passport/setup");

app.use(express.json());
app.use(cookieParser());
app.use(cors());

// Express Session
app.use(
  session({
    secret: "superSecretkey",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Logs cookie info and requested URL
app.all("*", (req, res, next) => {
  var origin = req.protocol + "://" + req.get("host") + req.originalUrl;
  console.log(origin);
  console.log("cookies", JSON.parse(JSON.stringify(req.cookies)));
  next();
});

app.use("/api/auth", auth);
app.use("/api/users", userRouter);

app.use(express.static("client/build"));
app.all("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
