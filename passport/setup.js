const passport = require("passport");
const User = require("../models/userModel.js");
const LocalStrategy = require("passport-local").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.serializeUser(function (user, done) {
  if (user.provider) return done(null, user);
  done(null, user._id);
});

passport.deserializeUser(async function (user, done) {
  if (user.provider) return done(null, user);
  try {
    // The user variable here contains users id
    let userFound = await User.findById(user, "firstName email lastName");
    if (!userFound) return done(new Error("User not found"));

    return done(null, userFound);
  } catch (error) {
    console.error(error);
    done(error);
  }
});

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

      callbackURL: `${process.env.HOST}/api/auth/facebook/callback`,
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
      callbackURL: `${process.env.HOST}/api/auth/google/callback`,
    },
    (accessToken, refreshToken, profile, done) => {
      done(null, profile);
    }
  )
);

module.exports = passport;
