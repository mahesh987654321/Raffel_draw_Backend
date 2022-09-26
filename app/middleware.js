const cors = require("cors");
const express = require("express");
const morgan = require("morgan");
const middleware = [morgan("dev"), cors(), express.json()];
module.exports = middleware;
