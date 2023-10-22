const User = require("../models/user_model");

const userRoot = async (req, res) => {
  const users = await User.find({});
  console.log(users);
  const ids = users.map((i) => i["_id"]);

  res.status(200).json(ids);
};

function addUsers(req, res) {
  const users = req.body.users;
  console.log(users);
  if (!users) {
    res.status(400).json({ error: "invalid-data" });
    return;
  }
  const userModel = User.create(users);

  res.status(200).json({ userModel });
}

module.exports = { userRoot, addUsers };
