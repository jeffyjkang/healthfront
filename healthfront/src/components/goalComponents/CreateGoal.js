import React, { Component } from "react";
import Axios from "axios";
//
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

const styles = () => ({
  container: {
    display: "flex"
  },
  textField: {
    margin: 10
  },
  dateChip: {
    margin: 10
  },
  weightField: {
    float: "right",
    margin: 10
  },
  button: {
    float: "right",
    margin: 10,
    height: 100,
    width: 150,
    marginTop: 65,
    fontSize: 25
  }
});

class CreateGoal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Dialog
          maxWidth={"md"}
          open={this.props.createGoalOpen}
          onClose={this.props.handleCloseGoal}
          aria-labelledby="create-goal-title"
        >
          <DialogTitle id="create-goal-title">Create Monthly Goal</DialogTitle>
          <DialogContent>
            <Grid container>
              <Grid item xs={6}>
                <Chip
                  className={classes.dateChip}
                  label={`Year: ${
                    this.props.cMonthValue.split(" ")[1]
                  }, Month: ${this.props.cMonthValue.split(" ")[0]}`}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  className={classes.weightField}
                  autoFocus
                  type="number"
                  label="Current Weight"
                  variant="outlined"
                  margin="dense"
                />
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={4}>
                <TextField
                  className={classes.textField}
                  //   fullWidth
                  autoFocus
                  type="string"
                  label="Exercise Goal for the month."
                  variant="outlined"
                  multiline={true}
                  rows={10}
                  rowsMax={10}
                  margin="dense"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  className={classes.textField}
                  //   fullWidth
                  autoFocus
                  type="string"
                  label="Food Goal for the month."
                  variant="outlined"
                  multiline={true}
                  rows={10}
                  rowsMax={10}
                  margin="dense"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  className={classes.textField}
                  //   fullWidth
                  autoFocus
                  type="string"
                  label="Sleep Goal for the month."
                  variant="outlined"
                  multiline={true}
                  rows={10}
                  rowsMax={10}
                  margin="dense"
                />
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={8}>
                <TextField
                  className={classes.textField}
                  fullWidth
                  autoFocus
                  type="string"
                  label="Miscelaneous Goal for the month."
                  variant="outlined"
                  multiline={true}
                  rows={10}
                  rowsMax={10}
                />
              </Grid>
              <Grid item xs={4}>
                <Button
                  className={classes.button}
                  variant="contained"
                  color="primary"
                >
                  Submit Goal
                </Button>
              </Grid>
            </Grid>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(CreateGoal);
