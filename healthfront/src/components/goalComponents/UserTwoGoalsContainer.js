import React from "react";
import { withStyles } from "@material-ui/core/styles";
import UserTwoGoal from "./UserTwoGoal";

const styles = () => ({
  container: {
    border: "1px solid #3F51B5"
  }
});

const UserTwoGoalsContainer = props => {
  const { classes } = props;
  return (
    <div className={classes.container}>
      {props.userTwoGoals.map(userTwoGoal => (
        <UserTwoGoal
          key={Math.random()}
          userTwoGoal={userTwoGoal}
          handleOpenEditGoal={props.handleOpenEditGoal}
          handleOpenCreatePlan={props.handleOpenCreatePlan}
        />
      ))}
    </div>
  );
};

export default withStyles(styles)(UserTwoGoalsContainer);
