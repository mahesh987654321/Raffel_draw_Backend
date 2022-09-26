var express = require("express");
var router = express.Router();

router.get("/health", (req, res, next) => {
  res.status(200).json({ message: "This is a Haha" });
});
module.exports = router;
 