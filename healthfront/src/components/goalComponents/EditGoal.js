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
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

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

  onEnterGoalEdit = () => {
    this.setState({
      exerciseGoalInput: this.props.currentGoal.exerciseGoal,
      foodGoalInput: this.props.currentGoal.foodGoal,
      sleepGoalInput: this.props.currentGoal.sleepGoal,
      miscGoalInput: this.props.currentGoal.miscGoal
    });
  };

  editFormHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitUpdateGoal = () => {
    const token = localStorage.getItem("token");
    const id = this.props.currentGoal.id;
    const updatedGoal = {
      date: this.props.date,
      weight: this.props.weight,
      exerciseGoal: this.state.exerciseGoalInput,
      foodGoal: this.state.foodGoalInput,
      sleepGoal: this.state.sleepGoalInput,
      miscGoal: this.state.miscGoalInput
    };
    const auth = { headers: { authorization: token } };
    Axios.put(`http://localhost:9000/goal/${id}`, updatedGoal, auth)
      .then(res => {
        console.log(res.status);
        this.setState({
          exerciseGoalInput: "",
          foodGoalInput: "",
          sleepGoalInput: "",
          miscGoalInput: ""
        });
        this.props.refresh();
        this.props.handleCloseEditGoal();
      })
      .catch(error => console.log(error));
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
          onEnter={this.onEnterGoalEdit}
        >
          <DialogTitle id="edit-goal-title">Edit Monthly Goal</DialogTitle>
          <DialogContent>
            <Grid container className={classes.headerContainer}>
              <Grid item xs={4}>
                <Chip
                  className={classes.chip}
                  label={
                    this.props.currentGoal.date
                      ? `Year: ${
                          this.props.currentGoal.date.split(" ")[1]
                        }, Month: ${this.props.currentGoal.date.split(" ")[0]}`
                      : ""
                  }
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={4}>
                <Chip
                  className={classes.chip}
                  label={`Initial Weight: ${this.props.currentGoal.weight}`}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={4}>
                <DialogActions>
                  <Button variant="contained" color="secondary">
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
      </div>
    );
  }
}

export default withStyles(styles)(EditGoal);
