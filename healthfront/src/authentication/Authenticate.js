import React, { Component } from "react";
import jwt from "jsonwebtoken";
import { toast } from "react-toastify";
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
            localStorage.removeItem("token");
            this.setState({ loggedIn: false });
          }
        });
      } else {
        this.setState({ loggedIn: false });
      }
    }
    logOut = () => {
      toast.info("Logout Successful");
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
