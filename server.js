const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const pepperjamRoutes = require("./routes/pepperjam");

app.use("/pepperjam", pepperjamRoutes);

const port = process.env.PORT || 8081;
app.listen(port, () => console.log(`Listening on port ${port}`));
