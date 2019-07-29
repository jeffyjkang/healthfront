import React from "react";
import { withStyles } from "@material-ui/core/styles";
import UserOneDay from "./UserOneDay";

const styles = () => ({
  container: {
    border: "1px solid #3F51B5",
    display: "flex",
    justifyContent: "space-around"
  }
});

const UserOneDayContainer = props => {
  const { classes } = props;
  return (
    <div className={classes.container}>
      {props.days.map(userOneDay => (
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
