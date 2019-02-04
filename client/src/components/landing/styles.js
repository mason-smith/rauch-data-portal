const styles = theme => ({
  root: {
    flexGrow: 1,
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "100vh"
  },
  paper: {
    width: "66.66vw",
    height: "66.66vh",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirecion: "column"
  },
  extendedIcon: {
    marginRight: theme.spacing.unit
  },
  fab: {
    margin: theme.spacing.unit
  },
  link: {
    textDecoration: "none",
    color: "white"
  }
});
export default styles;
