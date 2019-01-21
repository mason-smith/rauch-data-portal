const fs = require("fs");
const path = require("path");
const rootDir = require("../util/path");

exports.downloadPepperjam = (req, res, next) => {
  const dataPath = path.join("data", "Download.csv");
  fs.readFile(dataPath, (err, data) => {
    if (err) {
      return next();
    }
    res.send(data);
  });
};
