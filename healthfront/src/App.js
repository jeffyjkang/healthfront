import React, { Component } from "react";
import Authenticate from "./authentication/Authenticate";
import Login from "./authentication/Login";
import ComponentContainer from "./components/ComponentContainer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AuthComponent = Authenticate(ComponentContainer)(Login);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <AuthComponent />
        <ToastContainer
          position="bottom-center"
          autoClose={2000}
          closeOnClick
        />
      </div>
    );
  }
}

export default App;
