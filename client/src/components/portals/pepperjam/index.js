import React from "react";
import Axios from "axios";
import PropTypes from "prop-types";
import { withStyles, Typography, Button } from "@material-ui/core";
import FileDownload from "js-file-download";

import styles from "./styles";

const Pepperjam = props => {
  const { classes } = props;
  const handleDownloadCSV = () => {
    Axios.get("/pepperjam/downloadCSV").then(res => {
      FileDownload(res.data, "pepperjam.csv");
    });
  };
  const handleScraperCSV = () => {
    Axios.get("/pepperjam/runScraperCSV");
  };
  const handleDownloadTXT = () => {
    Axios.get("/pepperjam/downloadTXT").then(res => {
      FileDownload(res.data, "pepperjam.txt");
    });
  };
  const handleScraperTXT = () => {
    Axios.get("/pepperjam/runScraperTXT");
  };
  return (
    <div className={classes.marginTop}>
      <Typography>Pepperjam</Typography>
      <Button
        color="primary"
        variant="contained"
        className={classes.button}
        onClick={handleDownloadCSV}
      >
        Download file in CSV format
      </Button>
      <Button
        color="secondary"
        variant="outlined"
        className={classes.button}
        onClick={handleScraperCSV}
      >
        Scrape Product Data
      </Button>
      <Button
        color="primary"
        variant="contained"
        className={classes.button}
        onClick={handleDownloadTXT}
      >
        Download file in TXT format
      </Button>
      <Button
        color="secondary"
        variant="outlined"
        className={classes.button}
        onClick={handleScraperTXT}
      >
        Scrape Product Data
      </Button>
    </div>
  );
};

Pepperjam.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Pepperjam);
