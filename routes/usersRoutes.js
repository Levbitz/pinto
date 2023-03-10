const express = require("express");

const { AllPosts, sendPost } = require("../contollers/postsControllers");

const router = express.Router();

router.post("/submit-post", sendPost);
router.get("/all-posts", AllPosts);

module.exports = router;
