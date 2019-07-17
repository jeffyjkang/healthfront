import React from "react";
import { withStyles } from "@material-ui/core/styles";
import UserTwoDay from "./UserTwoDay";

const styles = () => ({
  container: {
    border: "1px solid #3F51B5",
    display: "flex",
    justifyContent: "space-around"
  }
});

const UserTwoDayContainer = props => {
  const { classes } = props;
  //   console.log(props);
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
