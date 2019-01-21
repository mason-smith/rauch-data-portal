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
import InboxIcon from "@material-ui/icons/MoveToInbox";
import PeopleIcon from "@material-ui/icons/People";
import MailIcon from "@material-ui/icons/Mail";

const AppDrawer = props => {
  const { left, toggleDrawer, classes } = props;
  const sideList = (
    <div className={classes.list}>
      <List>
        <Link className={classes.link} to="/pepperjam">
          <ListItem button>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Pepperjam" />
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
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
