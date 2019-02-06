const express = require("express");
const router = express.Router();

const paragonController = require("../controllers/paragon");

router.get("/runJayScraper", paragonController.writeJayProducts);

router.get("/downloadJayData", paragonController.downloadJayData);

router.get("/runRadkoScraper", paragonController.writeRadkoProducts);

router.get("/downloadRadkoData", paragonController.downloadRadkoData);

module.exports = router;
