const mongoose = require("mongoose");

let DB;
if (process.env.NODE_ENV === "production") {
  DB = process.env.DATABASE;
} else {
  DB = process.env.DATABASE;
}

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("DB connection Successful");
  })
  .catch(() => {
    console.log("Problem connecting to mongodb...");
  });