require("dotenv").config("../.env");
const express = require("express");
const { firstError, secondError } = require("./error");
const app = express();
const myDb = require("../db/db");
myDb.create("user-1", 23);
myDb.create("user-2", 3);
myDb.create("user-3", 13);
myDb.create("user-4", 12);
myDb.create("user-5", 21);
myDb.bulkCreate("test", 23, 1);

// console.log(myDb.create("Mahesh", 23));
const ticket = myDb.find();
console.log("All Tickets:- ", ticket);
const winner = myDb.draw(2);
console.log("Winner", winner);
app.use(require("./middleware"));
app.use(require("./router"));
app.use(firstError);
app.use(secondError);
module.exports = app;
