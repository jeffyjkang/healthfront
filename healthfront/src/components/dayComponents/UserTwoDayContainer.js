import React from "react";
import { withStyles } from "@material-ui/core/styles";
import UserTwoDay from "./UserTwoDay";

const styles = theme => ({
  container: {
    display: "flex",
    justifyContent: "space-around",
    [theme.breakpoints.down("lg")]: {
      flexDirection: "column"
    }
  }
});

const UserTwoDayContainer = props => {
  const { classes } = props;
  return (
    <div className={classes.container}>
      {props.days
        .sort(
          (a, b) =>
            new Date(a.dailyDate).getTime() - new Date(b.dailyDate).getTime()
        )
        .map(userTwoDay => (
          <UserTwoDay
            key={Math.random()}
            userTwoDay={userTwoDay}
            handleOpenEditDay={props.handleOpenEditDay}
          />
        ))}
    </div>
  );
};

export default withStyles(styles)(UserTwoDayContainer);
