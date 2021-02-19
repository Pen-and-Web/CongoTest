const User = require("../models/userModel.js");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.serializeUser(function (user, done) {
  done(null, user);
  // fine till here
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

// passport.serializeUser((user, done) => {
//   done(null, user._id);
// });

// passport.deserializeUser(async (id, done) => {
//   try {
//     let user = await User.findById(id, "firstName email lastName");

//     if (!user) return done(new Error("user not found"));

//     return done(null, user);
//   } catch (error) {
//     console.error(error, "error was fired from here");
//     done(error);
//   }
// });

// Local Strategy
passport.use(
  new LocalStrategy(
    { usernameField: "email" },
    async (email, password, done) => {
      try {
        const user = await User.findOne({ email });

        if (!user) return done(null, false);

        const passwordMatch = await user.comparePassword(password);

        if (!passwordMatch) return done(null, false);

        return done(null, user);
      } catch (err) {
        return done(err);
      }
    }
  )
);

// Facebook strategy
passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      callbackURL: "http://localhost:3100/api/auth/facebook/callback",
      profileFields: [
        "email",
        "name",
        "displayName",
        "picture",
        "name_format",
        "short_name",
      ],
    },
    function (accessToken, refreshToken, profile, done) {
      return done(null, profile);
    }
  )
);

// Google strategy

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3100/api/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      console.log("here on line 86");
      done(null, profile);
    }
  )
);

module.exports = passport;
