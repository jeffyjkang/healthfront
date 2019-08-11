import React from "react";
import { withStyles } from "@material-ui/core/styles";
import UserOneDay from "./UserOneDay";

const styles = theme => ({
  container: {
    display: "flex",
    justifyContent: "space-around",
    [theme.breakpoints.down("lg")]: {
      flexDirection: "column"
    }
  }
});

const UserOneDayContainer = props => {
  const { classes } = props;
  return (
    <div className={classes.container}>
      {props.days
        .sort(
          (a, b) =>
            new Date(a.dailyDate).getTime() - new Date(b.dailyDate).getTime()
        )
        .map(userOneDay => (
          <UserOneDay
            key={Math.random()}
            userOneDay={userOneDay}
            handleOpenEditDay={props.handleOpenEditDay}
          />
        ))}
    </div>
  );
};

export default withStyles(styles)(UserOneDayContainer);
