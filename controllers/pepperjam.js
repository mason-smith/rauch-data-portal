const fs = require("fs");
const path = require("path");
const writeJayPepperjamCSV = require("../controllers/api/pepperjam-scrape-csv");

exports.downloadPepperjam = (req, res, next) => {
  const dataPath = path.join("data", "Download.csv");
  fs.readFile(dataPath, (err, data) => {
    if (err) {
      return next();
    }
    res.send(data);
  });
};

exports.scrapePepperJam = (req, res, next) => {
  writeJayPepperjamCSV();
};
