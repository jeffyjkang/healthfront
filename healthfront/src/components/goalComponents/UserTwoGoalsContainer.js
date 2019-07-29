import React from "react";
import { withStyles } from "@material-ui/core/styles";
import UserTwoGoal from "./UserTwoGoal";

const styles = () => ({
  container: {
    margin: ".25rem"
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
          handleOpenToggleDrawer={props.handleOpenToggleDrawer}
          handleOpenEditPlan={props.handleOpenEditPlan}
          handleOpenEditDay={props.handleOpenEditDay}
        />
      ))}
    </div>
  );
};

export default withStyles(styles)(UserTwoGoalsContainer);
