const express = require("express");
const router = express.Router();

const pepperjamController = require("../controllers/pepperjam");

router.get("/downloadCSV", pepperjamController.downloadPepperjamCSV);

router.get("/runScraperCSV", pepperjamController.scrapePepperJamCSV);

router.get("/runScraperTXT", pepperjamController.scrapePepperJamTXT);

router.get("/downloadTXT", pepperjamController.downloadPepperjamTXT);

module.exports = router;
