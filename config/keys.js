if (process.env.NODE_ENV === "production") {
  // Use production keys
  module.exports = require("./prod");
} else {
  // Use development variables
  module.exports = require("./dev");
}
