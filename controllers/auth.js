const passport = require("passport");

exports.authenticationController = (req, res, next) => {
  passport.authenticate("google", { scope: ["profile", "email"] });
};

exports.authenticationCallbackController = () => {
  passport.authenticate("google");
};
