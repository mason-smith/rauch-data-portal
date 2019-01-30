const styles = theme => ({
  root: {
    flexGrow: 1,
    textAlign: "center"
  },

  landingMain: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100vw",
    height: "100vh"
  },
  link: {
    textDecoration: "none",
    color: "white"
  },
  linkAlt: { textDecoration: "none", color: "black" },
  marginTop: {
    paddingTop: theme.spacing.unit * 10
  },
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  },
  buttonProgress: {
    color: "black",
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12
  },
  wrapper: {
    margin: theme.spacing.unit,
    position: "relative"
  }
});
export default styles;
