const express = require("express");
const router = express.Router();

const pepperjamController = require("../controllers/pepperjam");

router.get("/download", pepperjamController.downloadPepperjam);

module.exports = router;
