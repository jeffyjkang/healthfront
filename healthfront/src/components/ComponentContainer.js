import React, { Component } from "react";
import NavBar from "./navbar/NavBar";
import { withStyles } from "@material-ui/core/styles";
//
import CreateGoal from "./goalComponents/CreateGoal";
import EditGoal from "./goalComponents/EditGoal";
import PageContainer from "./pageComponents/PageContainer";
//
import CreatePlan from "./planComponents/CreatePlan";
import PlanView from "./planComponents/PlanView";
import EditPlan from "./planComponents/EditPlan";
//
import EditDay from "./dayComponents/EditDay";
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
      //
      createGoalOpen: false,
      editGoalOpen: false,
      cMonthValue: "",
      userOneGoals: [],
      userTwoGoals: [],
      currentGoal: {},
      //
      createPlanOpen: false,
      editPlanOpen: false,
      cGoalId: "",
      currentPlan: {},
      leftDrawerOpen: false,
      rightDrawerOpen: false,
      //
      editDayOpen: false,
      currentDay: {}
    };
  }
  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      jwt.verify(token, secret, (error, decodedToken) => {
        if (error) {
          return alert("Failed decoding token");
          // console.log(error);
        } else {
          const auth = { headers: { authorization: token } };
          Axios.get("http://localhost:9000/goal", auth).then(res => {
            const goals = res.data;
            const userOneGoals = [];
            const userTwoGoals = [];
            for (let i = goals.length - 1; i >= 0; i--) {
              if (goals[i].userId === 1) {
                userOneGoals.push(goals[i]);
              }
              if (goals[i].userId === 2) {
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
  };
  // create goal
  onMonth = e => {
    let cMonthValue = e.toString().split(" ");
    cMonthValue = `${cMonthValue[1]} ${cMonthValue[3]}`;
    this.setState({ ...this.state, cMonthValue, createGoalOpen: true });
  };
  handleCloseCreateGoal = () => {
    this.setState({ ...this.state, createGoalOpen: false });
  };
  // edit goal
  handleOpenEditGoal = goal => {
    if (this.state.id !== goal.userId) {
      return alert("You are not authorized to modify another user's goals.");
    } else {
      this.setState({
        ...this.state,
        currentGoal: goal,
        editGoalOpen: true
      });
    }
  };
  handleCloseEditGoal = () => {
    this.setState({ ...this.state, editGoalOpen: false });
  };
  // create plan
  handleOpenCreatePlan = goal => {
    if (this.state.id !== goal.userId) {
      return alert("You are not authorized to add another user's weekly plan.");
    } else {
      const cGoalId = goal.id;
      this.setState({ ...this.state, cGoalId, createPlanOpen: true });
    }
  };
  handleCloseCreatePlan = () => {
    this.setState({ ...this.state, createPlanOpen: false });
  };
  // view plan
  handleOpenToggleDrawer = currentPlan => {
    if (currentPlan.userOnePlan) {
      this.setState({ ...this.state, currentPlan, leftDrawerOpen: true });
    }
    if (currentPlan.userTwoPlan) {
      this.setState({ ...this.state, currentPlan, rightDrawerOpen: true });
    }
  };
  handleCloseToggleDrawer = () => {
    this.setState({
      ...this.state,
      leftDrawerOpen: false,
      rightDrawerOpen: false
    });
  };
  // edit plan
  handleOpenEditPlan = plan => {
    if (this.state.id !== plan.userId) {
      return alert("You are not authorized to modify another user's plans.");
    } else {
      this.setState({
        ...this.state,
        currentPlan: plan,
        editPlanOpen: true
      });
    }
  };
  handleCloseEditPlan = () => {
    this.setState({ ...this.state, editPlanOpen: false });
  };
  // edit day
  handleOpenEditDay = day => {
    if (this.state.id !== day.userId) {
      return alert("You are not authorized to modify another user's day log.");
    } else {
      this.setState({
        ...this.state,
        currentDay: day,
        editDayOpen: true
      });
    }
  };
  handleCloseEditDay = () => {
    this.setState({ ...this.state, editDayOpen: false });
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
        <CreateGoal
          cMonthValue={this.state.cMonthValue}
          createGoalOpen={this.state.createGoalOpen}
          handleCloseCreateGoal={this.handleCloseCreateGoal}
          refresh={this.refresh}
        />
        <EditGoal
          currentGoal={this.state.currentGoal}
          editGoalOpen={this.state.editGoalOpen}
          handleCloseEditGoal={this.handleCloseEditGoal}
          refresh={this.refresh}
        />
        <PageContainer
          userOneGoals={this.state.userOneGoals}
          userTwoGoals={this.state.userTwoGoals}
          handleOpenEditGoal={this.handleOpenEditGoal}
          handleOpenCreatePlan={this.handleOpenCreatePlan}
          handleOpenToggleDrawer={this.handleOpenToggleDrawer}
          handleOpenEditPlan={this.handleOpenEditPlan}
          handleOpenEditDay={this.handleOpenEditDay}
        />
        <CreatePlan
          cGoalId={this.state.cGoalId}
          createPlanOpen={this.state.createPlanOpen}
          handleCloseCreatePlan={this.handleCloseCreatePlan}
          refresh={this.refresh}
        />
        <PlanView
          currentPlan={this.state.currentPlan}
          handleOpenToggleDrawer={this.handleOpenToggleDrawer}
          handleCloseToggleDrawer={this.handleCloseToggleDrawer}
          leftDrawerOpen={this.state.leftDrawerOpen}
          rightDrawerOpen={this.state.rightDrawerOpen}
        />
        <EditPlan
          currentPlan={this.state.currentPlan}
          editPlanOpen={this.state.editPlanOpen}
          handleCloseEditPlan={this.handleCloseEditPlan}
          refresh={this.refresh}
        />
        <EditDay
          currentDay={this.state.currentDay}
          editDayOpen={this.state.editDayOpen}
          handleCloseEditDay={this.handleCloseEditDay}
          refresh={this.refresh}
        />
      </div>
    );
  }
}

export default withStyles(styles)(ComponentContainer);
