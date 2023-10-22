const Post = require("../models/post_model");

function addPosts(req, res) {
  const posts = req.body.posts;
  console.log(posts);
  if (!posts) {
    res.status(400).json({ error: "invalid-data" });
    return;
  }
  const postModel = Post.create(posts);

  res.status(200).json({ postModel });
}

module.exports = { addPosts };
