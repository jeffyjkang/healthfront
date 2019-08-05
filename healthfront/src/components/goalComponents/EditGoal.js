import React, { Component } from "react";
import Axios from "axios";
import DeleteGoal from "./DeleteGoal";
import { toast } from "react-toastify";
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
import Divider from "@material-ui/core/Divider";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
//
const url = process.env.REACT_APP_URL;

const styles = () => ({
  container: {
    display: "flex"
  },
  headerContainer: {
    marginBottom: 5
  },
  chip: {
    margin: 10
  },
  textField: {
    margin: 10
  },
  weightField: {
    float: "right",
    margin: 10
  },
  button: {
    float: "right",
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
      weightInput: "",
      exerciseGoalInput: "",
      foodGoalInput: "",
      sleepGoalInput: "",
      miscGoalInput: "",
      deleteGoalOpen: false
    };
  }

  editFormHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitUpdateGoal = () => {
    const token = localStorage.getItem("token");
    const id = this.props.currentGoal.id;
    const updatedGoal = {
      date: this.props.currentGoal.date.substring(0, 10),
      weight: this.state.weightInput,
      exerciseGoal: this.state.exerciseGoalInput,
      foodGoal: this.state.foodGoalInput,
      sleepGoal: this.state.sleepGoalInput,
      miscGoal: this.state.miscGoalInput
    };
    const auth = { headers: { authorization: token } };
    Axios.put(`${url}/goal/${id}`, updatedGoal, auth)
      .then(res => {
        console.log(res.status);
        toast.success("Successfully Edited Goal");
        this.setState({
          weightInput: "",
          exerciseGoalInput: "",
          foodGoalInput: "",
          sleepGoalInput: "",
          miscGoalInput: ""
        });
        this.props.handleCloseEditGoal();
        this.props.refresh();
      })
      .catch(error => {
        console.log(error);
        toast.error("Error Editing Goal");
      });
  };

  onEnterGoalEdit = () => {
    this.setState({
      ...this.state,
      weightInput:
        this.props.currentGoal.weight === null
          ? ""
          : this.props.currentGoal.weight,
      exerciseGoalInput: this.props.currentGoal.exerciseGoal,
      foodGoalInput: this.props.currentGoal.foodGoal,
      sleepGoalInput: this.props.currentGoal.sleepGoal,
      miscGoalInput: this.props.currentGoal.miscGoal
    });
  };

  onExitGoalEdit = () => {
    this.setState({
      weightInput: "",
      exerciseGoalInput: "",
      foodGoalInput: "",
      sleepGoalInput: "",
      miscGoalInput: "",
      deleteGoalOpen: false
    });
  };

  // delete goal
  handleOpenDeleteGoal = () => {
    this.setState({
      ...this.state,
      deleteGoalOpen: true
    });
  };
  handleCloseDeleteGoal = () => {
    this.setState({
      ...this.state,
      deleteGoalOpen: false
    });
  };
  submitDeleteGoal = () => {
    const token = localStorage.getItem("token");
    const id = this.props.currentGoal.id;
    const auth = { headers: { authorization: token } };
    Axios.delete(`${url}/goal/${id}`, auth)
      .then(res => {
        console.log(res.status);
        toast.success("Successfully Deleted Goal");
        this.handleCloseDeleteGoal();
        this.props.handleCloseEditGoal();
        this.props.refresh();
      })
      .catch(error => {
        console.log(error);
        toast.error("Error Deleting Goal");
      });
  };
  //
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Dialog
          maxWidth={"md"}
          open={this.props.editGoalOpen}
          onClose={this.props.handleCloseEditGoal}
          onEnter={this.onEnterGoalEdit}
          onExit={this.onExitGoalEdit}
          aria-labelledby="edit-goal-title"
        >
          <DialogTitle id="edit-goal-title">Edit Monthly Goal</DialogTitle>
          <Divider />
          <DialogContent>
            <Grid container className={classes.headerContainer}>
              <Grid item xs={4}>
                <Chip
                  className={classes.chip}
                  label={
                    this.props.currentGoal.date
                      ? `Year: ${
                          this.props.currentGoal.date.split("-")[0]
                        }, Month: ${this.props.currentGoal.date.split("-")[1]}`
                      : ""
                  }
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  className={classes.textField}
                  type="number"
                  label="Update initial weight."
                  variant="outlined"
                  margin="dense"
                  name="weightInput"
                  placeholder={String(this.props.currentGoal.weight)}
                  value={this.state.weightInput}
                  onChange={this.editFormHandler}
                />
              </Grid>
              <Grid item xs={4}>
                <DialogActions>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={this.handleOpenDeleteGoal}
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
                  type="string"
                  label="Update Exercise Goal."
                  variant="outlined"
                  multiline={true}
                  rows={10}
                  rowsMax={10}
                  margin="dense"
                  name="exerciseGoalInput"
                  placeholder={this.props.currentGoal.exerciseGoal}
                  value={this.state.exerciseGoalInput}
                  onChange={this.editFormHandler}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  className={classes.textField}
                  type="string"
                  label="Update Food Goal."
                  variant="outlined"
                  multiline={true}
                  rows={10}
                  rowsMax={10}
                  margin="dense"
                  name="foodGoalInput"
                  placeholder={this.props.currentGoal.foodGoal}
                  value={this.state.foodGoalInput}
                  onChange={this.editFormHandler}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  className={classes.textField}
                  type="string"
                  label="Update Sleep Goal."
                  variant="outlined"
                  multiline={true}
                  rows={10}
                  rowsMax={10}
                  margin="dense"
                  name="sleepGoalInput"
                  placeholder={this.props.currentGoal.sleepGoal}
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
                  type="string"
                  label="Update Miscellaneous Goal."
                  variant="outlined"
                  multiline={true}
                  rows={5}
                  rowsMax={5}
                  name="miscGoalInput"
                  placeholder={this.props.currentGoal.miscGoal}
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
                    <EditIcon />
                  </Button>
                </DialogActions>
              </Grid>
            </Grid>
          </DialogContent>
        </Dialog>
        <DeleteGoal
          deleteGoalOpen={this.state.deleteGoalOpen}
          handleCloseDeleteGoal={this.handleCloseDeleteGoal}
          submitDeleteGoal={this.submitDeleteGoal}
        />
      </div>
    );
  }
}

export default withStyles(styles)(EditGoal);
