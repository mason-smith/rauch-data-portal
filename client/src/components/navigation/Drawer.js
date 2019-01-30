import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import PeopleIcon from "@material-ui/icons/People";
import HomeIcon from "@material-ui/icons/Home";

const AppDrawer = props => {
  const { left, toggleDrawer, classes } = props;
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
              <PeopleIcon />
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
        className={classes.drawer}
        open={left}
        onClose={toggleDrawer("left", false)}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div
          className={classes.toolbar}
          tabIndex={0}
          role="button"
          onClick={toggleDrawer("left", false)}
          onKeyDown={toggleDrawer("left", false)}
        >
          {sideList}
        </div>
      </Drawer>
    </div>
  );
};
AppDrawer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default AppDrawer;
