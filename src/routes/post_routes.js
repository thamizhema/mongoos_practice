const express = require("express");
const { addPosts } = require("../controllers/post_controller");
const Post = require("../models/post_model");
const User = require("../models/user_model");
const mongoose = require("mongoose");
const route = express.Router();

route.get("/", (req, res) => {
  res.send("Post route");
});
route.get("/add/posts/", addPosts);
route.post("/get/:userId", async (req, res) => {
  const userId = req.params.userId;
  const ObjectId = mongoose.Types.ObjectId;
  const allPosts = await User.aggregate([
    {
      $match: { _id: new ObjectId(userId) },
    },
    {
      $lookup: {
        from: "posts",
        localField: "_id",
        foreignField: "userId",
        as: "post",
      },
    },
    { $unwind: "$post" },
    {
      $project: {
        _id: 0,
        username: 1,
        title: "$post.title",
        postId: "$post._id",
      },
    },
  ]);
  console.log(allPosts);
  res.status(200).json(allPosts);
});

module.exports = route;
