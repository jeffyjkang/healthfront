import React, { Component } from "react";
import Axios from "axios";
//
import { withStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

const styles = () => ({
  container: {
    display: "flex"
  },
  chip: {
    margin: 10,
    maxWidth: "90%"
  },
  textField: {
    margin: 10
  },
  endGrid: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  button: {
    margin: 20,
    height: 60,
    width: 200
  }
});

class EditPlan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fromDate: "",
      toDate: "",
      exercisePlanInput: "",
      foodPlanInput: "",
      sleepPlanInput: "",
      miscPlanInput: "",
      deletePlanOpen: false
    };
  }

  editFormHandler = e => {
    this.setStaet({});
  };

  submitUpdatedPlan = () => {};

  onEnterPlanEdit = () => {
    this.setState({
      ...this.state,
      fromDate: this.props.currentPlan.fromDate,
      toDate: this.props.currentPlan.toDate,
      exercisePlanInput: this.props.currentPlan.exercisePlan,
      foodPlanInput: this.props.currentPlan.foodPlan,
      sleepPlanInput: this.props.currentPlan.sleepPlan,
      miscPlanInput: this.props.currentPlan.miscPlan
    });
  };

  onExitPlanEdit = () => {
    this.setState({
      fromDate: "",
      toDate: "",
      exercisePlanInput: "",
      foodPlanInput: "",
      sleepPlanInput: "",
      miscPlanInput: ""
    });
  };

  // delete plan
  handleOpenDeletePlan = () => {
    this.setState({
      ...this.state,
      deletePlanOpen: true
    });
  };
  handleCloseDeletePlan = () => {
    this.setState({
      ...this.sate,
      deletePlanOpen: false
    });
  };

  render() {
    const { classes } = this.props;
    console.log(this.props);
    return (
      <div>
        <Dialog
          maxWidth={"md"}
          open={this.props.editPlanOpen}
          onClose={this.props.handleCloseEditPlan}
          onEnter={this.onEnterPlanEdit}
          onExit={this.onExitPlanEdit}
          aria-labelledby="edit-plan-title"
        >
          <DialogTitle id="edit-plan-title">Edit Weekly Plan</DialogTitle>
          <DialogContent>
            <Grid container>
              <Grid item xs={4}>
                <TextField
                  className={classes.textField}
                  type="string"
                  label="Update Exercise Plan"
                  variant="outlined"
                  multiline={true}
                  rows={10}
                  rowsMax={10}
                  margin="dense"
                  name="exercisePlanInput"
                  placeholder={this.props.currentPlan.exerciseGoal}
                  value={this.state.exercisePlanInput}
                  onChange={this.editFormHandler}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  className={classes.textField}
                  type="string"
                  label="Update Food Plan"
                  variant="outlined"
                  multiline={true}
                  rows={10}
                  rowsMax={10}
                  margin="dense"
                  name="foodPlanInput"
                  placeholder={this.props.currentPlan.foodPlan}
                  value={this.state.foodPlanInput}
                  onChange={this.editFormHandler}
                />
              </Grid>
              <Grid className={classes.endGrid} item xs={4}>
                <DialogActions>
                  <Button
                    className={classes.button}
                    variant="contained"
                    color="secondary"
                    onClick={this.handleOpenDeletePlan}
                  >
                    <Typography variant="button">Delete Plan</Typography>
                    {"  "}
                    <DeleteIcon />
                  </Button>
                </DialogActions>
                <Chip
                  className={classes.chip}
                  label={`Start Date: ${this.props.currentPlan.fromDate}`}
                  variant="outlined"
                  color="primary"
                />
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={4}>
                <TextField
                  className={classes.textField}
                  type="string"
                  label="Update Sleep Plan"
                  variant="outlined"
                  multiline={true}
                  rows={10}
                  rowsMax={10}
                  margin="dense"
                  name="sleepPlanInput"
                  placeholder={this.props.currentPlan.sleepPlan}
                  value={this.state.sleepPlanInput}
                  onChange={this.editFormHandler}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  className={classes.textField}
                  type="string"
                  label="Update Misc Plan"
                  variant="outlined"
                  multiline={true}
                  rows={10}
                  rowsMax={10}
                  margin="dense"
                  name="miscPlanInput"
                  placeholder={this.props.currentPlan.miscPlan}
                  value={this.state.miscPlanInput}
                  onChange={this.editFormHandler}
                />
              </Grid>
              <Grid className={classes.endGrid} item xs={4}>
                <Chip
                  className={classes.chip}
                  label={`End Date: ${this.props.currentPlan.toDate}`}
                  variant="outlined"
                  color="primary"
                />
                <DialogActions>
                  <Button
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    onClick={this.submitUpdatedPlan}
                  >
                    <Typography variant="button">Edit Plan</Typography>
                    {"  "}
                    <EditIcon />
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

export default withStyles(styles)(EditPlan);
