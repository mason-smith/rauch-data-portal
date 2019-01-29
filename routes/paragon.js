const express = require("express");
const router = express.Router();

const paragonController = require("../controllers/paragon");

router.get("/runJayScraper", paragonController.writeJayProducts);

router.get("/downloadJayData", paragonController.downloadJayData);

module.exports = router;
