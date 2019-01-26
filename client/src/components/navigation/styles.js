const drawerWidth = 240;
const styles = theme => ({
  root: { display: "flex", flexGrow: 1 },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  list: {
    width: 250
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  toolbar: theme.mixins.toolbar,
  link: {
    textDecoration: "none",
    color: "white"
  }
});

export default styles;
