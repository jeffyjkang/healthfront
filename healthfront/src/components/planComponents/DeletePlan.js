import React from "react";
//
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";

const styles = () => ({
  container: {
    display: "flex"
  },
  dialogActions: {
    justifyContent: "center"
  },
  button: {
    margin: 10
  }
});

const DeletePlan = props => {
  const { classes } = props;
  return (
    <div>
      <Dialog
        maxWidth={"sm"}
        open={props.deletePlanOpen}
        onClose={props.handleCloseDeletePlan}
        aria-labelledby="delete-plan-title"
      >
        <DialogTitle id="delete-plan-title">Delete Plan</DialogTitle>
        <DialogContent>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h6">
                Are you sure you want to delete this Plan?
              </Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={6}>
              <DialogActions className={classes.dialogActions}>
                <Button
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  onClick={props.handleCloseDeletePlan}
                >
                  <Typography variant="button">Cancel</Typography>
                </Button>
              </DialogActions>
            </Grid>
            <Grid item xs={6}>
              <DialogActions className={classes.dialogActions}>
                <Button
                  className={classes.button}
                  variant="contained"
                  color="secondary"
                  onClick={props.submitDeletePlan}
                >
                  <Typography variant="button">Confirm </Typography>
                </Button>
              </DialogActions>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default withStyles(styles)(DeletePlan);
