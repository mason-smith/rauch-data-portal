const fs = require("fs");
const path = require("path");
const writeJayProducts = require("../controllers/api/jay-scrape");
const writeRadkoProducts = require("../controllers/api/rad-scrape");

exports.writeJayProducts = (req, res, next) => {
  writeJayProducts();
};
exports.downloadJayData = (req, res, next) => {
  const dataPath = path.join("data", "JayProductFeed.csv");
  fs.readFile(dataPath, (err, data) => {
    if (err) {
      return next();
    }
    res.send(data);
  });
};

exports.writeRadkoProducts = (req, res, next) => {
  writeRadkoProducts();
};
exports.downloadRadkoData = (req, res, next) => {
  const dataPath = path.join("data", "RadkoProductFeed.csv");
  fs.readFile(dataPath, (err, data) => {
    if (err) {
      return next();
    }
    res.send(data);
  });
};
