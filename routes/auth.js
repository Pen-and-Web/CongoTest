const express = require("express");
const passport = require("passport");
const { check, validationResult } = require("express-validator");

const {
  login,
  facebookLogin,
  logout,
  signup,
  me,
  forgotPassword,
  resetPasswordAfterForget,
  updateMe,
} = require("./../controllers/authController");

const router = express.Router();

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.send("you reached the redirect URI");
  }
);

router.get("/facebook", passport.authenticate("facebook"));

router.get(
  "/facebook/callback",
  passport.authenticate("facebook", {
    failureRedirect: "/login",
  }),
  facebookLogin
);

// /api/auth/signup
router.post(
  "/signup",
  [
    check("firstName")
      .isLength({ min: 3 })
      .withMessage("First Name must have minimum length of 3")
      .trim(),
    check("lastName")
      .isLength({ min: 3 })
      .withMessage("Last Name must have minimum length of 3")
      .trim(),

    check("email")
      .isEmail()
      .withMessage("invalid email address")
      .normalizeEmail(),

    check("password")
      .isLength({ min: 8, max: 15 })
      .withMessage("your password should have min and max length between 8-15"),
    // .matches(/\d/)
    // .withMessage("your password should have at least one number"),
    // .matches(/[!@#$%^&*(),.?":{}|<>]/)
    // .withMessage("your password should have at least one sepcial character"),

    check("passwordConfirm").custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("confirm password does not match");
      }
      return true;
    }),
  ],
  (req, res, next) => {
    const error = validationResult(req).formatWith(({ msg }) => msg);

    const hasError = !error.isEmpty();

    if (hasError) {
      res.status(422).json({ error: error.array() });
    } else {
      next();
    }
  },
  signup
);

// /api/auth/login
router.post(
  "/login",
  passport.authenticate("local", {
    failureMessage: "Invalid username or password",
  }),
  login
);
// /api/auth/updateMe
router.put("/updateMe", updateMe);

// /api/auth/logout
router.get("/logout", logout);

// /api/auth/me
router.get("/me", me);

router.post("/forgotPassword", forgotPassword);
router.post("/resetPassword", resetPasswordAfterForget);

module.exports = router;
