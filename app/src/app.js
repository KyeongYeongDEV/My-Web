"use-strict";

const express = require("express");
const app = express();
const home = require("./routes/home/route");

app.set("views", "./views");
app.set("view engine","ejs");

app.use("/", home);

app.use(express.static(`${__dirname}/public`));

module.exports = app;