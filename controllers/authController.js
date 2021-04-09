const User = require("../models/userModel");

const sendEmail = require("./../utils/email");

const login = (req, res) => {
  return res.status(200).json({
    user: {
      id: req.user["_id"],
      email: req.user.email,
      firstName: req.user.firstName,
      lastName: req.user.lastName,
    },
  });
};

//
const facebookLogin = async function (req, res) {
  const { email, first_name: firstName, last_name: lastName } = req.user._json;
  const authProvider = req.user.provider;

  try {
    let user = await User.findOne({ email });

    if (!user) {
      const password = "user@123";
      user = new User({
        firstName,
        lastName,
        email,
        authProvider,
        password,
        passwordConfirm: password,
      });

      const newUser = await user.save();
    }
  } catch (ex) {
    console.log(ex);
    console.log(ex.response);
  }

  //  Send users to home page
  res.writeHead(301, {
    Location: `${process.env.CLIENT_URL}/`,
  });
  return res.end();
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
      const password = "user@123";
      let newUser = new User({
        firstName,
        lastName,
        email,
        authProvider,
        password,
        passwordConfirm: password,
      });

      await newUser.save({ validateBeforeSave: false });
    }
  } catch (ex) {
    console.log(ex);
    console.log(ex.response);
  }

  //  Send users info to client
  res.writeHead(301, {
    Location: `${process.env.CLIENT_URL}/`,
  });
  return res.end();
  // return res.status(200).json({ user: { firstName, lastName, email } });
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
      newUser = await newUser.save();
      req.login(newUser, function (err) {
        if (err) {
          return res.status(500).json({ errors: ["something went wrong"] });
        }

        return res.status(200).json({ msg: "user successfully created" });
      });
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
  res.clearCookie("connect.sid");
  req.session.destroy(function (err) {
    res.status(200).json({ msg: "logged out" });
  });
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
  console.log(req.user);

  if (!req.user)
    return res.status(403).json({ errors: ["Please login update info"] });

  const { firstName, lastName, password, email } = req.body;

  const user = await User.findOne({
    email,
  });

  if (!user) {
    return res
      .status(400)
      .json({ message: "User with provided email does not exist." });
  }

  user.email = email;
  user.firstName = firstName;
  user.lastName = lastName;
  user.password = password;
  user.passwordConfirm = password;

  try {
    const updatedUser = await user.save();
    if (updatedUser) {
      res.status(200).json({
        message: "Updated successfully",
        user: {
          firstName: updatedUser.firstName,
          lastName: updatedUser.lastName,
          email: updatedUser.email,
        },
      });
    }
  } catch (ex) {
    console.log(ex);
    console.log(ex.response);
  }
};

const resetPasswordAfterForget = async (req, res) => {
  if (req.body.password !== req.body.passwordConfirm) {
    return res
      .status(400)
      .json({ message: "Password and Confirm Password are not same." });
  }
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
