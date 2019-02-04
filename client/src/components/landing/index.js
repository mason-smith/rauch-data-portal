import React from "react";
import { withStyles, Fab, Typography, Grid, Paper } from "@material-ui/core";
import AccountIcon from "@material-ui/icons/AccountCircle";

import styles from "./styles";

const Landing = props => {
  const { classes } = props;
  return (
    <Grid container className={classes.root} spacing={16}>
      <div className={classes.paper}>
        <Grid container>
          <Grid xs={12} item>
            <Typography variant="h2" gutterBottom>
              Please log in to access data feeds
            </Typography>
          </Grid>
          <Grid xs={12} item>
            <Fab className={classes.fab} variant="extended" color="secondary">
              <AccountIcon className={classes.extendedIcon} />
              <a className={classes.link} href="/auth/google">
                Sign in with Google
              </a>
            </Fab>
          </Grid>
        </Grid>
      </div>
    </Grid>
  );
};

export default withStyles(styles)(Landing);
