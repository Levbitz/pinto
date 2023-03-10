const express = require("express");
const posts = require("../data/data");

const AllPosts = (req, res) => {
  res.send(posts);
};

const sendPost = (req, res) => {
  console.log(req.body);
  // if (req.body) {
  //   //save data to database
  // }
  res.send("post created successfully");
};

module.exports = {
  AllPosts,
  sendPost,
};
