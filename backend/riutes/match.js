const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const { team1, team2 } = req.body;

  const result = Math.random() > 0.5 ? "Team 1 Wins!" : "Team 2 Wins!";
  res.json({ result });
});

module.exports = router;
