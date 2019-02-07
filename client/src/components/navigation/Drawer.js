import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import classNames from "classnames";
import {
  withStyles,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  IconButton,
  ListItemText
} from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import PeopleIcon from "@material-ui/icons/People";
import HomeIcon from "@material-ui/icons/Home";
import ParagonIcon from "@material-ui/icons/TrackChanges";

const AppDrawer = props => {
  const { open, handleDrawerClose, classes, theme } = props;
  const sideList = (
    <div className={classes.list}>
      <List>
        <Link className={classes.link} to="/">
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </Link>
        <Link className={classes.link} to="/pepperjam">
          <ListItem button>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Pepperjam" />
          </ListItem>
        </Link>
        <Link className={classes.link} to="/paragon">
          <ListItem button>
            <ListItemIcon>
              <ParagonIcon />
            </ListItemIcon>
            <ListItemText primary="Paragon" />
          </ListItem>
        </Link>
      </List>
      <Divider />
    </div>
  );
  return (
    <div>
      <Drawer
        variant="permanent"
        className={classNames(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })}
        classes={{
          paper: classNames({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })
        }}
        open={open}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        {sideList}
      </Drawer>
    </div>
  );
};
AppDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(null, { withTheme: true })(AppDrawer);
