require("dotenv").config("../.env");
const express = require("express");
const { firstError, secondError } = require("./error");
const app = express();
app.use(require("./middleware"));
app.use(require("./router"));
app.use(firstError);
app.use(secondError);
module.exports = app;
