import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import classNames from "classnames";
import AppDrawer from "./Drawer";
import { withStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import { styles } from "./styles";

class MiniDrawer extends React.Component {
  state = {
    open: false
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, children } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: this.state.open
          })}
        >
          <Toolbar disableGutters={!this.state.open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, {
                [classes.hide]: this.state.open
              })}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              <Link className={classes.link} to="/">
                Rauch Product Feeds
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
        <AppDrawer
          classes={classes}
          open={this.state.open}
          handleDrawerClose={this.handleDrawerClose}
        />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {children}
        </main>
      </div>
    );
  }
}

MiniDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(MiniDrawer);

// import React from "react";
// import PropTypes from "prop-types";
// import {
//   withStyles,
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   IconButton
// } from "@material-ui/core";
// import MenuIcon from "@material-ui/icons/Menu";
// import AppDrawer from "./Drawer";

// import { styles } from "./styles";
// import { Link } from "react-router-dom";
// import { connect } from "react-redux";

// class Header extends React.Component {
//   state = {
//     left: false
//   };
//   render() {
//     console.log(this.props);
//     const { classes } = this.props;
//     const toggleDrawer = (side, open) => () => {
//       this.setState({
//         [side]: open
//       });
//     };
//     return (
//       <div className={classes.root}>
//         <AppBar className={classes.appBar} position="fixed">
//           <Toolbar>
//             <IconButton
//               onClick={toggleDrawer("left", true)}
//               className={classes.menuButton}
//               color="inherit"
//               aria-label="Menu"
//             >
//               <MenuIcon />
//             </IconButton>

//             <Typography variant="h6" color="inherit" className={classes.grow}>
//               <Link className={classes.link} to="/">
//                 Rauch Product Feeds
//               </Link>
//             </Typography>
//             <Button color="inherit">
//               <a className={classes.link} href="/pepperjam">
//                 Pepperjam
//               </a>
//             </Button>
//             <Button color="inherit">
//               <a className={classes.link} href="/paragon">
//                 Paragon
//               </a>
//             </Button>

//             {/* <Button color="inherit">
//               <a className={classes.link} href="/auth/google">
//                 Login
//               </a>
//             </Button> */}
//           </Toolbar>
//         </AppBar>
//         <AppDrawer
//           classes={classes}
//           left={this.state.left}
//           toggleDrawer={toggleDrawer}
//         />
//       </div>
//     );
//   }
// }

// Header.propTypes = {
//   classes: PropTypes.object.isRequired
// };

// const mapStateToProps = ({ auth }) => {
//   return { auth };
// };

// export default connect(
//   mapStateToProps,
//   {}
// )(withStyles(styles)(Header));
