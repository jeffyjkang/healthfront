import React from "react";
import { withStyles } from "@material-ui/core/styles";
import UserTwoDay from "./UserTwoDay";

const styles = () => ({
  container: {
    display: "flex",
    justifyContent: "space-around"
  }
});

const UserTwoDayContainer = props => {
  const { classes } = props;
  return (
    <div className={classes.container}>
      {props.days.map(userTwoDay => (
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
