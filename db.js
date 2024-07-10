// blog_app/config/db.js

import mongoose from "mongoose";

export default function connectDB() {
//   const url = "mongodb://127.0.0.1/blog_db";
  const url = "mongodb+srv://TestTest:TestTest@goldtrade.skpkklp.mongodb.net/";

  try {
    mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }

  const dbConnection = mongoose.connection;

  //connect() has 2 further args
  dbConnection.once("open", (_) => {
    console.log(`Database connected: ${url}`);
  });
  //connect() has 2 further args
  dbConnection.on("error", (err) => {
    console.error(`connection error: ${err}`);
  });
  return;
}
