const express = require("express");

const router = express.Router();

const postUser = router.post("/submit-form", (req, res) => {
  const { name, email } = req.body;
  //array destructure

  console.log(req.body);
  // Do something with name and email
  res.send(`Received POST request with name=${name} and email=${email}`);
});

module.exports = { postUser };

//modal === show the structure of the data we are requesting or recieving
//controller ===  a function which controlles the modal content
// routes  ===  determines the api routes /endpoints
