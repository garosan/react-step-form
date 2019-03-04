import React, { Component } from "react";
import MuiThemProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.previousStep();
  };

  render() {
    const { values, handleChange } = this.props;

    return (
      <MuiThemProvider>
        <React.Fragment>
          <AppBar title="Enter Personal Details" />
          <TextField
            hintText="Enter your Occupation"
            floatingLabelText="Occupation"
            onChange={handleChange("occupation")}
            defaultValue={values.occupation}
          />
          <br />
          <TextField
            hintText="Enter your city"
            floatingLabelText="City"
            onChange={handleChange("city")}
            defaultValue={values.city}
          />
          <br />
          <TextField
            hintText="Enter a brief bio"
            floatingLabelText="Bio"
            onChange={handleChange("bio")}
            defaultValue={values.bio}
          />
          <br />
          <RaisedButton
            label="Back"
            primary={false}
            style={styles.button}
            onClick={this.back}
          />
          <RaisedButton
            label="Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
        </React.Fragment>
      </MuiThemProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};

export default FormPersonalDetails;
