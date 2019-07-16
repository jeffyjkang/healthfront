import React from "react";
import { withStyles } from "@material-ui/core/styles";
import UserOnePlan from "./UserOnePlan";

const styles = () => ({
  container: {
    border: "1px solid #3F51B5"
  }
});

const userOnePlanContainer = props => {
  const { classes } = props;
  // console.log(props);
  return (
    <div className={classes.container}>
      {props.plans.map(userOnePlan => (
        <UserOnePlan
          key={Math.random()}
          userOnePlan={userOnePlan}
          handleOpenToggleDrawer={props.handleOpenToggleDrawer}
        />
      ))}
    </div>
  );
};

export default withStyles(styles)(userOnePlanContainer);
