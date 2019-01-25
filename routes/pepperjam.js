const express = require("express");
const router = express.Router();

const pepperjamController = require("../controllers/pepperjam");

router.get("/download", pepperjamController.downloadPepperjam);

router.get("/runScraperTXt", pepperjamController.scrapePepperJam);

module.exports = router;
