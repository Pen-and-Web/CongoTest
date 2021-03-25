const mongoose = require("mongoose");

let DB;
if (process.env.NODE_ENV === "production") {
  DB = process.env.DATABASE;
} else {
  DB = process.env.DATABASE_DEV;
}

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log(`DB connection Successful ${DB}`);
  })
  .catch((ex) => {
    console.log("Problem connecting to mongodb...", ex);
  });
