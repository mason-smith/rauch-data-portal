const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");

// Local dependencies
const authRoutes = require("./routes/auth");
const pepperjamRoutes = require("./routes/pepperjam");
const paragonRoutes = require("./routes/paragon");
const keys = require("./config/keys");
require("./models/User");
require("./services/passport");

// Establish db connection
mongoose.connect(
  keys.mongoURI,
  { useNewUrlParser: true }
);

const app = express();
// Passport initialization
app.use(passport.initialize());
app.use(passport.session());
// body-parser config
app.use(bodyParser.json());
// Cookie setup
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
// body-parser config
app.use(bodyParser.urlencoded({ extended: false }));

// Auth Routes
app.use("/auth/google", authRoutes);
// Download routes
app.use("/pepperjam", pepperjamRoutes);
app.use("/paragon", paragonRoutes);

if (process.env.NODE_ENV === "production") {
  /**
   * Express will serve up prod assets
   */
  app.use(express.static("client/build"));
  /**
   * Express will serve up index.html file if it
   * doesn't recognize the route
   */
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// Server setup + activation
const port = process.env.PORT || 8081;
app.listen(port, () => console.log(`Listening on port ${port}`));
