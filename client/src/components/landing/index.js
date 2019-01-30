import React from "react";
import { Link } from "react-router-dom";
import { withStyles, Button, Grid } from "@material-ui/core";
import styles from "./styles";

const Landing = props => {
  const { classes } = props;
  return (
    <div className={classes.landingMain}>
      <Grid container className={classes.root} spacing={16}>
        <Grid item md={6} xs={12}>
          <Button variant="contained" color="primary">
            <Link className={classes.link} to="/pepperjam">
              Peperjam Product Feed Data
            </Link>
          </Button>
        </Grid>
        <Grid item md={6} xs={12}>
          <Button variant="contained" color="secondary">
            <Link className={classes.link} to="/paragon">
              Paragon Product Feed Data
            </Link>
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(Landing);
