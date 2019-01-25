const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const bodyParser = require("body-parser");

const app = express();

// passport.use(new GoogleStrategy());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const pepperjamRoutes = require("./routes/pepperjam");

app.use("/pepperjam", pepperjamRoutes);

const port = process.env.PORT || 8081;
app.listen(port, () => console.log(`Listening on port ${port}`));
