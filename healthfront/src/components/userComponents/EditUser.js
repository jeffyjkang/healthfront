import React, { Component } from "react";
import Axios from "axios";
import ConfirmEditUser from "./ConfirmEditUser";
import { toast } from "react-toastify";
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
//
const url = process.env.REACT_APP_URL;

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
    if (!this.state.usernameInput || !this.state.passwordInput) {
      return toast.error("All Fields Must Be Filled");
    }
    if (this.state.passwordInput !== this.state.confirmPasswordInput) {
      return toast.error("Passwords Do Not Match");
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
    toast.info("Updating user info...");
    const token = localStorage.getItem("token");
    const updatedUser = {
      username: this.state.usernameInput,
      password: this.state.passwordInput
    };
    const auth = { headers: { authorization: token } };
    Axios.put(`${url}/user/edit`, updatedUser, auth)
      .then(res => {
        console.log(res.status);
        toast.success("User Info Sucessfully Updated");
        localStorage.setItem("token", res.data);
        this.setState({
          usernameInput: "",
          passwordInput: "",
          confirmPasswordInput: ""
        });
        this.handleConfirmEditUserClose();
        this.props.handleCloseEditUser();
        this.props.refresh();
      })
      .catch(error => {
        console.log(error);
        toast.error("Error Updating User Info");
      });
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
            Edit User Information of: {this.props.username}
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
        <ConfirmEditUser
          username={this.props.username}
          confirmEditUserOpen={this.state.confirmEditUserOpen}
          handleConfirmEditUserClose={this.handleConfirmEditUserClose}
          submitUpdateUser={this.submitUpdateUser}
        />
      </div>
    );
  }
}

export default withStyles(styles)(EditUser);
