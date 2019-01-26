const express = require("express");
const router = express.Router();

const pepperjamController = require("../controllers/pepperjam");

router.get("/download", pepperjamController.downloadPepperjamCSV);

router.get("/runScraperCSV", pepperjamController.scrapePepperJam);

module.exports = router;
