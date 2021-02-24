const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please tell us your First Name"],
    minlength: 3,
    maxlength: 255,
  },
  lastName: {
    type: String,
    required: [true, "Please tell us your Last Name"],
    minlength: 3,
    maxlength: 255,
  },
  email: {
    type: String,
    required: [true, "Please provide your email address"],
    unique: true,
    maxlength: 255,
    minlength: 5,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  password: {
    type: String,
    minlength: 5,
    required: [true, "Please provide a password"],
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please confirm your password"],
    validate: {
      validator: function (val) {
        return val === this.password;
      },
      message: "Passwords are not the same",
    },
  },
  authProvider: String,
  passwordResetCode: String,
  passwordResetCodeExpire: Date,
});

UserSchema.pre("save", async function (next) {
  const user = this;

  try {
    if (!user.isModified("password")) return next();

    let hash = await bcrypt.hash(user.password, 13);
    user.password = hash;
    this.passwordConfirm = undefined;
    next();
  } catch (error) {
    console.error(error);
    next(error);
  }
});

UserSchema.methods.comparePassword = async function (password) {
  try {
    let result = await bcrypt.compare(password, this.password);

    return result;
  } catch (error) {
    console.error(error);
    return false;
  }
};

UserSchema.methods.createPasswordResetCode = function () {
  const resetCode = Math.floor(100000 + Math.random() * 900000);
  this.passwordResetCode = resetCode;

  this.passwordResetCodeExpire = Date.now() + 10 * 60 * 1000;
  return resetCode;
};

const User = mongoose.model("user", UserSchema);
module.exports = User;
