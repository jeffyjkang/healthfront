import React, { Component } from "react";

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
      } else {
        this.setState({ loggedIn: false });
      }
    }
    logOut = () => {
      localStorage.removeItem("token");
      this.setState({ loggedIn: false });
    };
    refresh = () => {
      this.componentDidMount();
    };
    render() {
      return (
        <div>
          {this.state.loggedIn ? (
            <ComponentContainer logOut={this.logOut} />
          ) : (
            <Login refresh={this.refresh} />
          )}
        </div>
      );
    }
  };

export default Authenticate;
