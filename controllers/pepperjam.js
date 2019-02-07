const fs = require("fs");
const path = require("path");
const writeJayPepperjamCSV = require("../controllers/api/pepperjam-scrape-csv");
const writeJayPepperjamTXT = require("../controllers/api/pepperjam-scrape-txt");

exports.downloadPepperjamCSV = (req, res, next) => {
  const dataPath = path.join("data", "PepperjamFeed.csv");
  fs.readFile(dataPath, (err, data) => {
    if (err) {
      return next();
    }
    res.send(data);
  });
};

exports.scrapePepperJamCSV = (req, res, next) => {
  writeJayPepperjamCSV();
};

exports.downloadPepperjamTXT = (req, res, next) => {
  const dataPath = path.join("data", "PepperjamFeed.txt");
  fs.readFile(dataPath, (err, data) => {
    if (err) {
      return next();
    }
    res.send(data);
  });
};

exports.scrapePepperJamTXT = (req, res, next) => {
  writeJayPepperjamTXT();
};

exports.viewPepperjamTXT = (req, res, next) => {
  res.sendFile(path.join(rootDir, "data", "PepperjamFeed.txt"));
};
