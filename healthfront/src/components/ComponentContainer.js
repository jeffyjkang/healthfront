import React, { Component } from "react";
import NavBar from "./navbar/NavBar";
import { withStyles } from "@material-ui/core/styles";
//
import CreateGoal from "./goalComponents/CreateGoal";
import PageContainer from "./pageComponents/PageContainer";
//
import jwt from "jsonwebtoken";
import Axios from "axios";
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
      username: "",
      createGoalOpen: false,
      editGoalOpen: false,
      cMonthValue: "",
      userOneGoals: [],
      userTwoGoals: []
    };
  }
  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      jwt.verify(token, secret, (error, decodedToken) => {
        if (error) {
          return alert("Failed decoding token");
        } else {
          const auth = { headers: { authorization: token } };
          Axios.get("http://localhost:9000/goal", auth).then(res => {
            const goals = res.data;
            const userOneGoals = [];
            const userTwoGoals = [];
            for (let i = goals.length - 1; i >= 0; i--) {
              if (goals[i].userId === 3) {
                userOneGoals.push(goals[i]);
              }
              if (goals[i].userId === 4) {
                userTwoGoals.push(goals[i]);
              }
            }
            // console.log("u1g", userOneGoals);
            // console.log("u2g", userTwoGoals);
            this.setState({
              ...this.state,
              id: decodedToken.id,
              username: decodedToken.username,
              userOneGoals,
              userTwoGoals
            });
          });
          //
        }
      });
    }
  }

  refresh = () => {
    this.componentDidMount();
  };

  signOut = e => {
    e.preventDefault();
    localStorage.removeItem("token");
    this.props.logOut();
    this.props.history.push("/login");
  };

  onMonth = e => {
    let cMonthValue = e.toString().split(" ");
    cMonthValue = `${cMonthValue[1]} ${cMonthValue[3]}`;
    this.setState({ ...this.state, cMonthValue, createGoalOpen: true });
  };
  //
  handleCloseCreateGoal = () => {
    this.setState({ ...this.state, createGoalOpen: false });
  };
  //
  handleOpenEditGoal = goal => {
    console.log("goal", goal);
    console.log("fired");
  };
  handleCloseEditGoal = () => {
    this.setState({ ...this.state, editGoalOpen: false });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <NavBar
          signOut={this.signOut}
          id={this.state.id}
          username={this.state.username}
          onMonth={this.onMonth}
        />
        <div>App</div>
        <CreateGoal
          cMonthValue={this.state.cMonthValue}
          createGoalOpen={this.state.createGoalOpen}
          handleCloseCreateGoal={this.handleCloseCreateGoal}
          refresh={this.refresh}
        />
        <PageContainer
          userOneGoals={this.state.userOneGoals}
          userTwoGoals={this.state.userTwoGoals}
          handleOpenEditGoal={this.handleOpenEditGoal}
        />
      </div>
    );
  }
}

export default withStyles(styles)(ComponentContainer);
