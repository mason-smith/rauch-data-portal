const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// Local dependencies
const authRoutes = require("./routes/auth");
const pepperjamRoutes = require("./routes/pepperjam");
require("./services/passport");
const keys = require("./config/keys");

mongoose.connect(
  keys.mongoURI,
  { useNewUrlParser: true }
);

const app = express();

// body-parser config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Auth Routes
app.use("/auth/google", authRoutes);
// Custom routes
app.use("/pepperjam", pepperjamRoutes);

// Server setup + activation
const port = process.env.PORT || 8081;
app.listen(port, () => console.log(`Listening on port ${port}`));
