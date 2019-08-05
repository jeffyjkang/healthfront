import React from "react";
import { withStyles } from "@material-ui/core/styles";
import UserOneGoal from "./UserOneGoal";

const styles = () => ({
  container: {
    margin: ".25rem"
  }
});

const UserOneGoalsContainer = props => {
  const { classes } = props;
  return (
    <div className={classes.container}>
      {props.userOneGoals
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .map(userOneGoal => (
          <UserOneGoal
            key={Math.random()}
            userOneGoal={userOneGoal}
            handleOpenEditGoal={props.handleOpenEditGoal}
            handleOpenCreatePlan={props.handleOpenCreatePlan}
            handleOpenToggleDrawer={props.handleOpenToggleDrawer}
            handleOpenEditPlan={props.handleOpenEditPlan}
            handleOpenEditDay={props.handleOpenEditDay}
          />
        ))}
    </div>
  );
};

export default withStyles(styles)(UserOneGoalsContainer);
