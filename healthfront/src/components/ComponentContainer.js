import React, { Component } from "react";
import NavBar from "./navbar/NavBar";
import { withStyles } from "@material-ui/core/styles";

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
    this.state = {};
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
        <NavBar signOut={this.signOut} />
        <div>App</div>
      </div>
    );
  }
}

export default withStyles(styles)(ComponentContainer);
