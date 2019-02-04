import React from "react";
import PropTypes from "prop-types";
import {
  withStyles,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AppDrawer from "./Drawer";

import styles from "./styles";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Header extends React.Component {
  state = {
    left: false
  };
  render() {
    console.log(this.props);
    const { classes } = this.props;
    const toggleDrawer = (side, open) => () => {
      this.setState({
        [side]: open
      });
    };
    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar} position="fixed">
          <Toolbar>
            <IconButton
              onClick={toggleDrawer("left", true)}
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>

            <Typography variant="h6" color="inherit" className={classes.grow}>
              <Link className={classes.link} to="/">
                Rauch Product Feeds
              </Link>
            </Typography>
            {/* <Button color="inherit">
              <a className={classes.link} href="/pepperjam">
                Pepperjam
              </a>
            </Button>
            <Button color="inherit">
              <a className={classes.link} href="/paragon">
                Paragon
              </a>
            </Button> */}

            <Button color="inherit">
              <a className={classes.link} href="/auth/google">
                Login
              </a>
            </Button>
          </Toolbar>
        </AppBar>
        <AppDrawer
          classes={classes}
          left={this.state.left}
          toggleDrawer={toggleDrawer}
        />
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(
  mapStateToProps,
  {}
)(withStyles(styles)(Header));
