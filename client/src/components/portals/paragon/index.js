import React from "react";
import Axios from "axios";
import PropTypes from "prop-types";
import {
  withStyles,
  Button,
  LinearProgress,
  Typography
} from "@material-ui/core";
import FileDownload from "js-file-download";

import styles from "./styles";

class Paragon extends React.Component {
  state = {
    isJAYVisible: false,
    linearJAYProgress: false
  };
  handleJayDownload = () => {
    Axios.get("/paragon/downloadJayData").then(res => {
      FileDownload(res.data, "jay.csv");
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
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.landingMain}>
        <div className={classes.marginTop}>
          {this.state.isJAYVisible && (
            <Button
              color="primary"
              variant="contained"
              className={classes.button}
              onClick={this.handleJayDownload}
            >
              Download Jay Product Data
            </Button>
          )}
          <Button
            color="secondary"
            variant="outlined"
            className={classes.button}
            onClick={this.handleJayScraper}
          >
            Retreive Jay Product Data
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
        </div>
      </div>
    );
  }
}

Paragon.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Paragon);
