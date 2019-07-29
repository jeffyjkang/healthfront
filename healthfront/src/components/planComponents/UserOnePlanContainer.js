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
      {props.plans.map(userOnePlan => (
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
