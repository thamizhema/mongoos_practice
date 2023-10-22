const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: { type: String, require: true },
  email: { type: String, require: true },
  age: { type: Number, default: 0 },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
