import React, { Component } from "react";
import { CssBaseline } from "@material-ui/core";
import AppRouter from "../AppRouter";
import { connect } from "react-redux";
import { fetchUser } from "../store/actions";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div>
        <CssBaseline />
        <AppRouter />
      </div>
    );
  }
}

export default connect(
  null,
  { fetchUser }
)(App);
