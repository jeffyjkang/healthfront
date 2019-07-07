import React, { Component } from "react";
import Axios from "axios";

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
    return (
      <div>
        <h3>Login</h3>
        <form onSubmit={this.loginSubmit}>
          <div className="usernameInputContainer">
            <input
              className="usernameInputValue"
              name="usernameInput"
              type="text"
              onChange={this.editLoginHandler}
              placeholder="Username"
              value={this.state.usernameInput}
              required
            />
          </div>
          <div className="passwordInputContainer">
            <input
              name="passwordInput"
              type="password"
              onChange={this.editLoginHandler}
              placeholder="Password"
              value={this.state.passwordInput}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
