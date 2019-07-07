import React, { Component } from "react";
import Authenticate from "./authentication/Authenticate";
import Login from "./authentication/Login";
import ComponentContainer from "./components/ComponentContainer";
import { Route } from "react-router-dom";
import "./App.css";

const AuthComponent = Authenticate(ComponentContainer)(Login);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <h1>Health Logger</h1>
        <Route path="/" component={AuthComponent} />
      </div>
    );
  }
}

export default App;
