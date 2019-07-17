import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import PageViewIcon from "@material-ui/icons/Pageview";
import EditIcon from "@material-ui/icons/Edit";

const styles = () => ({
  container: {
    border: "1px solid #3F51B5",
    // height: 150,
    display: "flex"
  },
  paperContainer: {
    minWidth: "100%"
  },
  paperHead: {
    display: "flex",
    flexDirection: "column"
  },
  paperTail: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  button: {
    margin: 2
  },
  chip: {
    margin: 2
  }
});

const UserOnePlan = props => {
  const { classes } = props;
  //   console.log(props);
  return (
    <div className={classes.container}>
      <Paper className={classes.paperContainer}>
        <Grid container>
          <Grid className={classes.paperHead} item xs={1}>
            <Chip
              className={classes.chip}
              variant="outlined"
              color="primary"
              label="Plan"
            />
            <Typography variant="caption">From:</Typography>
            <Chip
              className={classes.chip}
              variant="outlined"
              color="primary"
              label={props.userOnePlan.fromDate}
            />
            <Typography variant="caption">To:</Typography>
            <Chip
              className={classes.chip}
              variant="outlined"
              color="primary"
              label={props.userOnePlan.toDate}
            />
          </Grid>
          <Grid item xs={10}>
            <div>something</div>
          </Grid>
          <Grid className={classes.paperTail} item xs={1}>
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
