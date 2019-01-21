const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(proxy("/auth/google", { target: "http://localhost:8081" }));
  app.use(proxy("/pepperjam/download", { target: "http://localhost:8081" }));
};
