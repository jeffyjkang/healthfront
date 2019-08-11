import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import PageViewIcon from "@material-ui/icons/Pageview";
import EditIcon from "@material-ui/icons/Edit";
import UserOneDayContainer from "../dayComponents/UserOneDayContainer";

const styles = theme => ({
  container: {
    borderTop: "1px dashed #3F51B5",
    borderBottom: "1px dashed #3F51B5",
    paddingTop: "1rem",
    paddingBottom: "1rem",
    display: "flex",
    marginBottom: "1rem",
    marginTop: "1rem"
  },
  paperContainer: {
    minWidth: "100%"
  },
  paperHead: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("lg")]: {
      flexDirection: "row",
      justifyContent: "space-around"
    }
  },
  paperTail: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    [theme.breakpoints.down("lg")]: {
      flexDirection: "row",
      justifyContent: "space-around"
    }
  },
  button: {
    margin: 3
  },
  caption: {
    marginLeft: ".5rem",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      display: "none"
    }
  },
  chip: {
    margin: 3
  }
});

const UserOnePlan = props => {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <Paper className={classes.paperContainer}>
        <Grid container>
          <Grid
            className={classes.paperHead}
            item
            xl={1}
            lg={12}
            md={12}
            sm={12}
            xs={12}
          >
            <Chip
              className={classes.chip}
              variant="outlined"
              color="primary"
              label="Plan"
            />
            <Typography className={classes.caption} variant="caption">
              From:
            </Typography>
            <Chip
              className={classes.chip}
              variant="outlined"
              color="primary"
              label={
                props.userOnePlan.fromDate
                  ? `
              ${props.userOnePlan.fromDate.split("-")[1]} / 
              ${props.userOnePlan.fromDate.split("-")[2].substring(0, 2)}
              `
                  : ""
              }
            />
            <Typography className={classes.caption} variant="caption">
              To:
            </Typography>
            <Chip
              className={classes.chip}
              variant="outlined"
              color="primary"
              label={
                props.userOnePlan.toDate
                  ? `
              ${props.userOnePlan.toDate.split("-")[1]} / 
              ${props.userOnePlan.toDate.split("-")[2].substring(0, 2)}
              `
                  : ""
              }
            />
          </Grid>
          <Grid
            className={classes.paperBody}
            item
            xl={10}
            lg={12}
            md={12}
            sm={12}
            xs={12}
          >
            <UserOneDayContainer
              days={props.userOnePlan.days}
              handleOpenEditDay={props.handleOpenEditDay}
            />
          </Grid>
          <Grid
            className={classes.paperTail}
            item
            xl={1}
            lg={12}
            md={12}
            sm={12}
            xs={12}
          >
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={() =>
                props.handleOpenToggleDrawer({
                  ...props.userOnePlan,
                  userOnePlan: true
                })
              }
            >
              <Typography variant="button">View Plan</Typography>
              <PageViewIcon />
            </Button>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={() =>
                props.handleOpenEditPlan({ ...props.userOnePlan, userId: 1 })
              }
            >
              <Typography variant="button">Edit Plan</Typography>
              <EditIcon />
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default withStyles(styles)(UserOnePlan);
