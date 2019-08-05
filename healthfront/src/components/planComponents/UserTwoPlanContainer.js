import React from "react";
import { withStyles } from "@material-ui/core/styles";
import UserTwoPlan from "./UserTwoPlan";

const styles = () => ({
  container: {
    //
  }
});

const userTwoPlanContainer = props => {
  const { classes } = props;
  return (
    <div className={classes.container}>
      {props.plans
        .sort(
          (a, b) =>
            new Date(a.fromDate).getTime() - new Date(b.fromDate).getTime()
        )
        .map(userTwoPlan => (
          <UserTwoPlan
            key={Math.random()}
            userTwoPlan={userTwoPlan}
            handleOpenToggleDrawer={props.handleOpenToggleDrawer}
            handleOpenEditPlan={props.handleOpenEditPlan}
            handleOpenEditDay={props.handleOpenEditDay}
          />
        ))}
    </div>
  );
};

export default withStyles(styles)(userTwoPlanContainer);
