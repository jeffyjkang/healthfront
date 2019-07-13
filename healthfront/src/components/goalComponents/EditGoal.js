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
import Typography from "@material-ui/core/Typography";
import AddBoxIcon from "@material-ui/icons/AddBox";
import DeleteIcon from "@material-ui/icons/Delete";

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
    height: 60,
    width: 140,
    marginTop: 40,
    marginRight: 25,
    fontSize: 15
  }
});

class EditGoal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exerciseGoalInput: "",
      foodGoalInput: "",
      sleepGoalInput: "",
      miscGoalInput: ""
    };
  }

  editFormHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Dialog
          maxWidth={"md"}
          open={this.props.editGoalOpen}
          onClose={this.props.handleCloseEditGoal}
          aria-labelledby="edit-goal-title"
        >
          <DialogTitle id="edit-goal-title">Edit Monthly Goal</DialogTitle>
          <DialogContent>
            <Grid container>
              <Grid item xs={4}>
                <Chip
                  className={classes.dateChip}
                  label={`Year: ${this.props.date.split(" ")[1]}, Month: ${
                    this.props.date.split(" ")[0]
                  }`}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={4}>
                <Chip
                  className={classes.dateChip}
                  label={`Initial Weight: ${this.props.weight}`}
                />
              </Grid>
              <Grid item xs={4}>
                <DialogActions>
                  <Button
                    className={classes.button}
                    variant="contained"
                    color="secondary"
                  >
                    <Typography variant="button">Delete Goal</Typography>
                    {"  "}
                    <DeleteIcon />
                  </Button>
                </DialogActions>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={4}>
                <TextField
                  className={classes.textField}
                  //   fullWidth
                  autoFocus
                  type="string"
                  label="Update Exercise Goal."
                  variant="outlined"
                  multiline={true}
                  rows={10}
                  rowsMax={10}
                  margin="dense"
                  name="exerciseGoalInput"
                  value={this.state.exerciseGoalInput}
                  onChange={this.editFormHandler}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  className={classes.textField}
                  //   fullWidth
                  autoFocus
                  type="string"
                  label="Update Food Goal."
                  variant="outlined"
                  multiline={true}
                  rows={10}
                  rowsMax={10}
                  margin="dense"
                  name="foodGoalInput"
                  value={this.state.foodGoalInput}
                  onChange={this.editFormHandler}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  className={classes.textField}
                  //   fullWidth
                  autoFocus
                  type="string"
                  label="Update Sleep Goal."
                  variant="outlined"
                  multiline={true}
                  rows={10}
                  rowsMax={10}
                  margin="dense"
                  name="sleepGoalInput"
                  value={this.state.sleepGoalInput}
                  onChange={this.editFormHandler}
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
                  label="Update Miscellaneous Goal."
                  variant="outlined"
                  multiline={true}
                  rows={5}
                  rowsMax={5}
                  name="miscGoalInput"
                  value={this.state.miscGoalInput}
                  onChange={this.editFormHandler}
                />
              </Grid>
              <Grid item xs={4}>
                <DialogActions>
                  <Button
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    onClick={this.submitUpdateGoal}
                  >
                    <Typography variant="button">Update Goal</Typography>
                    {"  "}
                    <AddBoxIcon />
                  </Button>
                </DialogActions>
              </Grid>
            </Grid>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(EditGoal);
