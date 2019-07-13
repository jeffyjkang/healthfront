import React from "react";
import { withStyles } from "@material-ui/core/styles";
import UserOneGoal from "./UserOneGoal";

const styles = () => ({
  container: {
    border: "1px solid #3F51B5"
  }
});

const UserOneGoalsContainer = props => {
  const { classes } = props;
  return (
    <div className={classes.container}>
      {props.userOneGoals.map(userOneGoal => (
        <UserOneGoal
          key={Math.random()}
          userOneGoal={userOneGoal}
          handleOpenEditGoal={props.handleOpenEditGoal}
        />
      ))}
    </div>
  );
};

export default withStyles(styles)(UserOneGoalsContainer);
