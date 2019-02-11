import React from "react";
import Axios from "axios";
import PropTypes from "prop-types";
import {
  withStyles,
  Grid,
  Button,
  LinearProgress,
  Typography
} from "@material-ui/core";
import FileDownload from "js-file-download";

import styles from "./styles";

class Pepperjam extends React.Component {
  state = {
    isCSVVisible: false,
    isTXTVisible: false,
    linearCSVProgress: false,
    linearTXTProgress: false
  };

  handleDownloadCSV = () => {
    Axios.get("/pepperjam/downloadCSV").then(res => {
      FileDownload(res.data, "pepperjam.csv");
    });
  };
  handleScraperCSV = () => {
    this.setState({
      linearCSVProgress: !this.state.linearCSVProgress
    });
    Axios.get("/pepperjam/runScraperCSV");
    setTimeout(() => {
      this.setState({
        isCSVVisible: !this.state.isCSVVisible,
        linearCSVProgress: !this.state.linearCSVProgress
      });
    }, 30000);
  };
  handleDownloadTXT = () => {
    Axios.get("/pepperjam/downloadTXT").then(res => {
      FileDownload(res.data, "pepperjam.txt");
    });
  };
  handleScraperTXT = () => {
    this.setState({
      linearTXTProgress: !this.state.linearTXTProgress
    });
    Axios.get("/pepperjam/runScraperTXT");
    setTimeout(() => {
      this.setState({
        isTXTVisible: !this.state.isTXTVisible,
        linearTXTProgress: !this.state.linearTXTProgress
      });
    }, 30000);
  };
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.landingMain}>
        <Grid container className={classes.root} spacing={16}>
          <Grid item md={6} xs={12}>
            <Button
              color="secondary"
              variant="outlined"
              className={classes.button}
              onClick={this.handleScraperCSV}
            >
              Retreive Jay Strongwater Product Data in CSV format
            </Button>
            {this.state.linearCSVProgress && (
              <div>
                <Typography>
                  Please wait. Data retrieval will take about 30 seconds
                </Typography>
                <LinearProgress />
                <br />
                <LinearProgress color="secondary" />
              </div>
            )}
            {this.state.isCSVVisible && (
              <Button
                color="primary"
                variant="contained"
                className={classes.button}
                onClick={this.handleDownloadCSV}
              >
                Download file in CSV format
              </Button>
            )}
          </Grid>
          <Grid item md={6} xs={12}>
            <Button
              color="secondary"
              variant="outlined"
              className={classes.button}
              onClick={this.handleScraperTXT}
            >
              Retreive Jay Strongwater Product Data in TXT format
            </Button>
            {this.state.linearTXTProgress && (
              <div>
                <Typography>
                  Please wait. Data retrieval will take about 30 seconds
                </Typography>
                <LinearProgress />
                <br />
                <LinearProgress color="secondary" />
              </div>
            )}
            {this.state.isTXTVisible && (
              <Button
                href="text/PepperjamFeed.txt"
                color="primary"
                variant="contained"
                className={classes.button}
                // onClick={this.handleDownloadTXT}
              >
                View file in TXT format
              </Button>
            )}
          </Grid>
          {/* <a href="/data/PepperjamFeed.txt">GO TO TXT PAGE</a> */}
        </Grid>
      </div>
    );
  }
}

Pepperjam.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Pepperjam);
