import React, { Component } from "react";
import { Route } from "react-router-dom";

const Authenticate = ComponentContainer => Login =>
  class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: false
      };
    }
    componentDidMount() {
      if (localStorage.getItem("token")) {
        this.setState({ loggedIn: true });
        this.props.history.push("/");
      } else {
        this.setState({ loggedIn: false });
        this.props.history.push("/login");
      }
    }
    refresh = () => {
      this.componentDidMount();
    };
    render() {
      return (
        <div>
          {this.state.loggedIn ? (
            <Route
              path="/"
              render={props => <ComponentContainer {...props} />}
            />
          ) : (
            <Route
              path="/login"
              render={props => <Login {...props} refresh={this.refresh} />}
            />
          )}
        </div>
      );
    }
  };

export default Authenticate;
