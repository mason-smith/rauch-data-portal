const express = require("express");
const router = express.Router();
const passport = require("passport");

router.get(
  "/",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get("/callback", passport.authenticate("google"));

router.get("/api/current_user", (req, res) => {
  res.send(req.user);
});

module.exports = router;
