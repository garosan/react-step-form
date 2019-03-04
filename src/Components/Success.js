import React, { Component } from "react";
import MuiThemProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";

class Success extends Component {
  continue = e => {
    e.preventDefault();
    // Process form (send data to API)
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.previousStep();
  };

  render() {
    return (
      <MuiThemProvider>
        <React.Fragment>
          <AppBar title="Success" />
          <h1>Thank you for your submission!</h1>
          <p>You will get an email with further instructions</p>
        </React.Fragment>
      </MuiThemProvider>
    );
  }
}

export default Success;
