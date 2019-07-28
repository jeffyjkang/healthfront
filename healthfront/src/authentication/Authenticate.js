import React, { Component } from "react";
import jwt from "jsonwebtoken";
const secret = process.env.REACT_APP_SECRET;

const Authenticate = ComponentContainer => Login =>
  class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: false
      };
    }
    componentDidMount() {
      const token = localStorage.getItem("token");
      if (token) {
        jwt.verify(token, secret, (error, decodedToken) => {
          if (decodedToken) {
            this.setState({ loggedIn: true });
          }
          if (error) {
            this.setState({ loggedIn: false });
          }
        });
      } else {
        this.setState({ loggedIn: false });
      }
      // if (localStorage.getItem("token")) {
      //   this.setState({ loggedIn: true });
      // } else {
      //   this.setState({ loggedIn: false });
      // }
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
