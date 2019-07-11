import React, { Component } from "react";
import NavBar from "./navbar/NavBar";
import { withStyles } from "@material-ui/core/styles";
//
import CreateGoal from "./goalComponents/CreateGoal";
//
import jwt from "jsonwebtoken";
const secret = process.env.REACT_APP_SECRET;

const styles = () => ({
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
});

class ComponentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      username: ""
    };
  }
  componentDidMount() {
    let token = localStorage.getItem("token");
    if (token) {
      jwt.verify(token, secret, (error, decodedToken) => {
        if (error) {
          return alert("Failed decoding token");
        } else {
          this.setState({
            id: decodedToken.id,
            username: decodedToken.username
          });
        }
      });
    }
  }

  signOut = e => {
    e.preventDefault();
    localStorage.removeItem("token");
    this.props.logOut();
    this.props.history.push("/login");
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <NavBar
          signOut={this.signOut}
          id={this.state.id}
          username={this.state.username}
        />
        <div>App</div>
        <CreateGoal />
      </div>
    );
  }
}

export default withStyles(styles)(ComponentContainer);
