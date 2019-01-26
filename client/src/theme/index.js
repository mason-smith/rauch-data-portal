import { createMuiTheme } from "@material-ui/core/styles";
import blueGrey from "@material-ui/core/colors/blueGrey";
import pink from "@material-ui/core/colors/pink";

const primary = blueGrey[900];

const theme = createMuiTheme({
  palette: {
    primary: {
      main: primary
    },
    secondary: {
      main: pink["A400"]
    }
  },
  status: {
    danger: "orange"
  }
});

export default theme;
