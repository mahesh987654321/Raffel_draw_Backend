var express = require("express");
var router = express.Router();
const db = require("../db/db");
router.get("/t/:ticketId", () => {});
router.patch("/t/:ticketId", () => {});
router.delete("/t/:ticketId", () => {});

router.get("/u/:userName", () => {});
router.patch("/u/:userName", () => {});
router.delete("/u/:userName", () => {});

router.post("/sell", (req, res, next) => {
  const { userName, price } = req.body;
  const ticket = db.create(userName, price);
  res.status(201).json({ message: "User is created successfully", ticket });
});
router.post("/bulk", () => {
  const { userName, price, quantity } = req.body;
  const tickets = db.bulkCreate(userName, price, quantity);
  res
    .status(201)
    .json({ message: "Bulk create user is created successfully", tickets });
});
router.post("/draw", () => {
  const winnerCount = req.query.wc ?? 3;
  const winners = db.draw(winnerCount);
  res.status(200).json(winners);
});
router.get("", () => {});
