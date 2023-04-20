// const express = require("express");
// const bodyParser = require("body-parser");
// const router = require("./routes/usersRoutes");
import express from "express";
import bodyParser from "body-parser";
import cors  from 'cors'
import mongoose from 'mongoose'
import { dbUrl } from "./dbConn/dbConn.js";
import { SingleProduct, getAllproducts, myproducts } from "./routes/ProductsRoutes/ProductRoutes.js";

const app = express();
const port = 5000;

app.use(cors())

//get

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("working");
});
app.use("/api", myproducts, getAllproducts ,SingleProduct);

mongoose.set("strictQuery", true);

mongoose
  .connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
  })
  .then(() => {
    console.log("our db is connected");
  })
  .catch((err) => console.log(err.message));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

