import React, { Component } from "react";
import Axios from "axios";
//
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const styles = () => ({
  container: {
    display: "flex"
  }
});

class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usernameInput: "",
      passwordInput: "",
      confirmPasswordInput: ""
    };
  }

  editFormHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitUpdateUser = () => {
    console.log("fired");
  };

  onEnterUserEdit = () => {
    this.setState({
      ...this.state,
      usernameInput: this.props.username
    });
  };
  onExitUserEdit = () => {
    this.setState({
      usernameInput: "",
      passwordInput: "",
      confirmPasswordInput: ""
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Dialog
          maxWidth={"md"}
          open={this.props.editUserOpen}
          onClose={this.props.handleCloseEditUser}
          onEnter={this.onEnterUserEdit}
          onExit={this.onExitUserEdit}
          aria-labelledby="edit-user-title"
        >
          <DialogTitle id="edit-user-title">Edit User Information</DialogTitle>
          <Divider />
          <DialogContent />
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(EditUser);
