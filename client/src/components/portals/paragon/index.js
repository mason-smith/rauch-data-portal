import React from "react";
import Axios from "axios";
import PropTypes from "prop-types";
import {
  withStyles,
  Button,
  LinearProgress,
  Typography,
  Grid
} from "@material-ui/core";
import FileDownload from "js-file-download";

import styles from "./styles";

class Paragon extends React.Component {
  state = {
    isJAYVisible: false,
    linearJAYProgress: false,
    isRADKOVisible: false,
    linearRADKOProgress: false
  };
  handleJayDownload = () => {
    Axios.get("/paragon/downloadJayData").then(res => {
      FileDownload(res.data, "JayStrongwaterProductData.csv");
    });
  };
  handleJayScraper = () => {
    this.setState({
      linearJAYProgress: !this.state.linearJAYProgress
    });
    Axios.get("/paragon/runJayScraper");
    setTimeout(() => {
      this.setState({
        isJAYVisible: !this.state.isJAYVisible,
        linearJAYProgress: !this.state.linearJAYProgress
      });
    }, 30000);
  };
  handleRadkoDownload = () => {
    Axios.get("/paragon/downloadRadkoData").then(res => {
      FileDownload(res.data, "ChristopherRadkoProductData.csv");
    });
  };
  handleRadkoScraper = () => {
    this.setState({
      linearRADKOProgress: !this.state.linearRADKOProgress
    });
    Axios.get("/paragon/runRadkoScraper");
    setTimeout(() => {
      this.setState({
        isRADKOVisible: !this.state.isRADKOVisible,
        linearRADKOProgress: !this.state.linearRADKOProgress
      });
    }, 30000);
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.landingMain}>
        <Grid container className={classes.root} spacing={16}>
          <Grid item md={6} xs={12}>
            {this.state.isJAYVisible && (
              <Button
                color="primary"
                variant="contained"
                className={classes.button}
                onClick={this.handleJayDownload}
              >
                Download Jay Strongwater Product Data
              </Button>
            )}
            <Button
              color="secondary"
              variant="outlined"
              className={classes.button}
              onClick={this.handleJayScraper}
            >
              Retreive Jay Strongwater Product Data
            </Button>
            {this.state.linearJAYProgress && (
              <div>
                <Typography>
                  Please wait. Data retrieval will take about 30 seconds
                </Typography>
                <LinearProgress />
                <br />
                <LinearProgress color="secondary" />
              </div>
            )}
          </Grid>
          <Grid item md={6} xs={12}>
            {this.state.isRADKOVisible && (
              <Button
                color="primary"
                variant="contained"
                className={classes.button}
                onClick={this.handleRadkoDownload}
              >
                Download Christopher Radko Product Data
              </Button>
            )}
            <Button
              color="secondary"
              variant="outlined"
              className={classes.button}
              onClick={this.handleRadkoScraper}
            >
              Retreive Christopher Radko Product Data
            </Button>
            {this.state.linearRADKOProgress && (
              <div>
                <Typography>
                  Please wait. Data retrieval will take about 30 seconds
                </Typography>
                <LinearProgress />
                <br />
                <LinearProgress color="secondary" />
              </div>
            )}
          </Grid>
        </Grid>
      </div>
    );
  }
}

Paragon.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Paragon);
