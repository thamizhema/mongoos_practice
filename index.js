const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

/// routes
const userRoute = require("./src/routes/user_routes");
const postRoute = require("./src/routes/post_routes");

const app = express();
const PORT = 8000;
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hi I am Working");
});
app.use("/user", userRoute);
app.use("/post", postRoute);

mongoose.connect("mongodb://localhost:27017/practice").then(() => {
  console.log("Mongo DB connection seccessfuly connected");
  app.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`);
  });
});
