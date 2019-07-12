import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const styles = () => ({
  container: {
    border: "1px solid blue",
    height: 100
  }
});

const UserTwoGoal = props => {
  const { classes } = props;
  //   console.log(props);
  return (
    <div className={classes.container}>
      <Paper />
    </div>
  );
};

export default withStyles(styles)(UserTwoGoal);
