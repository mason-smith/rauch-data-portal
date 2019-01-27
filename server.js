const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");

// Local dependencies
const authRoutes = require("./routes/auth");
const pepperjamRoutes = require("./routes/pepperjam");
const keys = require("./config/keys");
require("./models/User");
require("./services/passport");

mongoose.connect(
  keys.mongoURI,
  { useNewUrlParser: true }
);

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());
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
