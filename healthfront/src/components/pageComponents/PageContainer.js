import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import UserOneGoalsContainer from "../goalComponents/UserOneGoalsContainer";
import UserTwoGoalsContainer from "../goalComponents/UserTwoGoalsContainer";

const styles = () => ({
  container: {
    minWidth: "98vw",
    border: "1px solid #3F51B5"
  }
});

const PageContainer = props => {
  const { classes } = props;

  // console.log(props);

  return (
    <div className={classes.container}>
      <Grid container>
        <Grid item xs={6}>
          <UserOneGoalsContainer
            userOneGoals={props.userOneGoals}
            handleOpenEditGoal={props.handleOpenEditGoal}
            handleOpenCreatePlan={props.handleOpenCreatePlan}
          />
        </Grid>
        <Grid item xs={6}>
          <UserTwoGoalsContainer
            userTwoGoals={props.userTwoGoals}
            handleOpenEditGoal={props.handleOpenEditGoal}
            handleOpenCreatePlan={props.handleOpenCreatePlan}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(PageContainer);
