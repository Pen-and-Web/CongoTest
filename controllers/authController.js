const User = require("../models/userModel");
const sendEmail = require("./../utils/email");

const login = (req, res) => {
  return res.status(200).json({
    user: {
      email: req.user.email,
      firstName: req.user.firstName,
      lastName: req.user.lastName,
    },
  });
  // return res.status(200).json({ msg: "user sucessfully logged in" });
};

//
const facebookLogin = async function (req, res) {
  const { email, first_name: firstName, last_name: lastName } = req.user._json;
  const authProvider = req.user.provider;

  try {
    let user = await User.findOne({ email });
    if (!user) {
      let newUser = new User({
        firstName,
        lastName,
        email,
        authProvider,
      });

      await newUser.save({ validateBeforeSave: false });
    }
  } catch (ex) {
    console.log(ex);
    console.log(ex.response);
  }

  //  Send users info to client
  return res.status(200).json({ user: { firstName, lastName, email } });
};
const googleLogin = async function (req, res) {
  const {
    email,
    given_name: firstName,
    family_name: lastName,
  } = req.user._json;
  const authProvider = req.user.provider;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      let newUser = new User({
        firstName,
        lastName,
        email,
        authProvider,
      });

      await newUser.save({ validateBeforeSave: false });
    }
  } catch (ex) {
    console.log(ex);
    console.log(ex.response);
  }

  //  Send users info to client
  return res.status(200).json({ user: { firstName, lastName, email } });
};

const signup = async (req, res) => {
  const { email, firstName, lastName, passwordConfirm, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      let newUser = new User({
        firstName,
        lastName,
        passwordConfirm,
        email,
        password,
      });
      await newUser.save();

      return res.status(200).json({ msg: "user successfully created" });
    }
    return res
      .status(422)
      .json({ errors: ["User with this email already exists"] });
  } catch (error) {
    console.error(error);

    return res.status(500).json({ errors: ["something went wrong"] });
  }
};

const logout = (req, res) => {
  req.logout();
  res.status(200).json({ msg: "logged out" });
};

const me = async (req, res) => {
  if (!req.user)
    return res.status(403).json({ errors: ["login to get the info"] });

  return res.status(200).json(req.user);
};

const forgotPassword = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });

  if (!user)
    return res
      .status(404)
      .json({ message: "User with given email id does not exist." });

  // Send it to users email
  try {
    const resetCode = user.createPasswordResetCode();

    user.save({ validateBeforeSave: false });

    await sendEmail(user, resetCode);
  } catch (err) {
    console.log(err);

    return res.status(404).json({
      message: "There was an error sending the email! Try again later",
    });
  }
  res.status(200).json({
    status: "success",
    message: "Token sent to email!",
  });
};

const updateMe = async (req, res) => {
  if (!req.user)
    return res.status(403).json({ errors: ["Please login update info"] });

  const { firstName, lastName, password, passwordConfirm, email } = req.body;

  const user = await User.findOne({
    email,
  });

  if (!user) {
    return res
      .status(400)
      .json({ message: "User with provided email does not exist." });
  }

  user.firstName = firstName;
  user.lastName = lastName;
  user.password = password;
  user.passwordConfirm = passwordConfirm;

  await user.save();

  res.status(200).json({ message: "Updated successfully" });
};

const resetPasswordAfterForget = async (req, res) => {
  const resetCode = req.body.resetCode;

  const user = await User.findOne({
    passwordResetCode: resetCode,
    passwordResetCodeExpire: { $gt: Date.now() },
  });

  if (!user) {
    return res
      .status(400)
      .json({ message: "Token is invalid or has expired." });
  }

  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  user.passwordResetCode = undefined;
  user.passwordResetCodeExpire = undefined;
  await user.save();
  res.status(200).json({ message: "Password updated successfully" });
};

module.exports = {
  login,
  signup,
  logout,
  me,
  forgotPassword,
  resetPasswordAfterForget,
  updateMe,
  googleLogin,
  facebookLogin,
};
