import React, { Component } from "react";
import Axios from "axios";
//
import { withStyles } from "@material-ui/core/styles";
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
  },
  bodyContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  textField: {
    alignSelf: "center"
  }
});

class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usernameInput: "",
      passwordInput: "",
      confirmPasswordInput: "",
      confirmEditUserOpen: false
    };
  }

  editFormHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
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
      confirmPasswordInput: "",
      confirmEditUserOpen: false
    });
  };
  // confirm edit user
  handleConfirmEditUserOpen = () => {
    if (this.state.passwordInput !== this.state.confirmPasswordInput) {
      alert("Passwords do not match");
    } else {
      this.setState({
        ...this.state,
        confirmEditUserOpen: true
      });
    }
  };
  handleConfirmEditUserClose = () => {
    this.setState({
      ...this.state,
      confirmEditUserOpen: false
    });
  };
  //
  submitUpdateUser = () => {
    console.log("fired");
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Dialog
          maxWidth={"sm"}
          open={this.props.editUserOpen}
          onClose={this.props.handleCloseEditUser}
          onEnter={this.onEnterUserEdit}
          onExit={this.onExitUserEdit}
          aria-labelledby="edit-user-title"
        >
          <DialogTitle id="edit-user-title">
            <Typography variant="h6">
              Edit User Information of: {this.props.username}
            </Typography>
          </DialogTitle>
          <Divider />
          <DialogContent className={classes.bodyContainer}>
            <TextField
              className={classes.textField}
              type="string"
              label="Change Username"
              variant="outlined"
              margin="dense"
              name="usernameInput"
              placeholder={this.props.username}
              value={this.state.usernameInput}
              onChange={this.editFormHandler}
              required
            />
            <TextField
              className={classes.textField}
              type="password"
              label="Change Password"
              variant="outlined"
              margin="dense"
              name="passwordInput"
              value={this.state.passwordInput}
              onChange={this.editFormHandler}
            />
            <TextField
              className={classes.textField}
              type="password"
              label="Confirm Change Password"
              variant="outlined"
              margin="dense"
              name="confirmPasswordInput"
              value={this.state.confirmPasswordInput}
              onChange={this.editFormHandler}
            />
            <DialogActions>
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                onClick={this.handleConfirmEditUserOpen}
              >
                <Typography variant="button">
                  Upadte User Infomration
                </Typography>
              </Button>
            </DialogActions>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(EditUser);
