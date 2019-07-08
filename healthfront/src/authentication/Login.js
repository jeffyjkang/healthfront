import React, { Component } from "react";
import Axios from "axios";
//
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
//
const styles = () => ({
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  textField: {
    margin: 10
  },
  button: {
    height: 60,
    margin: 10
  }
});

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usernameInput: "",
      passwordInput: ""
    };
  }
  editLoginHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  loginSubmit = e => {
    e.preventDefault();
    const user = {
      username: this.state.usernameInput,
      password: this.state.passwordInput
    };
    Axios.post("http://localhost:9000/user/login", user)
      .then(res => {
        const token = res.data;
        localStorage.setItem("token", token);
        this.props.refresh();
      })
      .catch(error => {
        console.log(error);
        return alert("Bad login Credentials.");
      });
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <form className={classes.container} onSubmit={this.loginSubmit}>
          <h1>Health Logger</h1>
          <h3>Login</h3>
          <TextField
            className={classes.textField}
            name="usernameInput"
            type="text"
            onChange={this.editLoginHandler}
            placeholder="Username"
            value={this.state.usernameInput}
            variant="outlined"
            label="Username"
            required
          />
          <TextField
            className={classes.textField}
            name="passwordInput"
            type="password"
            onChange={this.editLoginHandler}
            placeholder="Password"
            value={this.state.passwordInput}
            variant="outlined"
            label="Password"
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Login
          </Button>
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(Login);
