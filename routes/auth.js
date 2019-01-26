const express = require("express");
const router = express.Router();
const authConroller = require("../controllers/auth");

router.get("", authConroller.authenticationController);

router.get("/callback", authConroller.authenticationCallbackController);

module.exports = router;
