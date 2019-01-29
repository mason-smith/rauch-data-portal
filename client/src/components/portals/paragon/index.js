import React from "react";
import Axios from "axios";
import PropTypes from "prop-types";
import { withStyles, Typography, Button } from "@material-ui/core";
import FileDownload from "js-file-download";

import styles from "./styles";

const Paragon = props => {
  const { classes } = props;
  const handleJayDownload = () => {
    Axios.get("/paragon/downloadJayData").then(res => {
      FileDownload(res.data, "jay.csv");
    });
  };
  const handleJayScraper = () => {
    Axios.get("/paragon/runJayScraper");
  };
  return (
    <div className={classes.marginTop}>
      <Typography>Paragon</Typography>
      <Button
        color="primary"
        variant="contained"
        className={classes.button}
        onClick={handleJayDownload}
      >
        Download Jay Product Data
      </Button>
      <Button
        color="secondary"
        variant="outlined"
        className={classes.button}
        onClick={handleJayScraper}
      >
        Scrape Jay Product Data
      </Button>
    </div>
  );
};

Paragon.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Paragon);
