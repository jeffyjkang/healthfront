import React from "react";
import { withStyles } from "@material-ui/core/styles";
import UserOnePlan from "./UserOnePlan";

const styles = () => ({
  container: {
    //
  }
});

const userOnePlanContainer = props => {
  const { classes } = props;
  return (
    <div className={classes.container}>
      {props.plans
        .sort(
          (a, b) =>
            new Date(a.fromDate).getTime() - new Date(b.fromDate).getTime()
        )
        .map(userOnePlan => (
          <UserOnePlan
            key={Math.random()}
            userOnePlan={userOnePlan}
            handleOpenToggleDrawer={props.handleOpenToggleDrawer}
            handleOpenEditPlan={props.handleOpenEditPlan}
            handleOpenEditDay={props.handleOpenEditDay}
          />
        ))}
    </div>
  );
};

export default withStyles(styles)(userOnePlanContainer);
