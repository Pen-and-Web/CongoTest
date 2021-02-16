const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please tell us your username"],
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
});

UserSchema.pre("save", async function (next) {
  const user = this;

  try {
    if (!user.isModified("password")) next();

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

const User = mongoose.model("user", UserSchema);
module.exports = User;
