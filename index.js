const express = require("express");
const bodyParser = require("body-parser");
const router = require("./routes/usersRoutes");

const app = express();
const port = 3000;

//get

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("working");
});

app.use("/api", router);

app.listen(port, () => {
  console.log(`server running at http://localhost/${port}`);
});
