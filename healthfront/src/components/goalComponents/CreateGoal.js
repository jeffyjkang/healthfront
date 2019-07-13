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

class CreateGoal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weightInput: "",
      exerciseGoalInput: "",
      foodGoalInput: "",
      sleepGoalInput: "",
      miscGoalInput: ""
    };
  }

  editFormHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitCreateGoal = () => {
    const token = localStorage.getItem("token");
    const newGoal = {
      date: this.props.cMonthValue,
      weight: this.state.weightInput,
      exerciseGoal: this.state.exerciseGoalInput,
      foodGoal: this.state.foodGoalInput,
      sleepGoal: this.state.sleepGoalInput,
      miscGoal: this.state.miscGoalInput
    };
    const auth = { headers: { authorization: token } };
    Axios.post("http://localhost:9000/goal", newGoal, auth)
      .then(res => {
        console.log(res.status);
        this.setState({
          weightInput: "",
          exerciseGoalInput: "",
          foodGoalInput: "",
          sleepGoalInput: "",
          miscGoalInput: ""
        });
        this.props.refresh();
        this.props.handleCloseCreateGoal();
      })
      .catch(error => console.log(error));
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Dialog
          maxWidth={"md"}
          open={this.props.createGoalOpen}
          onClose={this.props.handleCloseCreateGoal}
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
                  type="number"
                  label="Current Weight"
                  variant="outlined"
                  margin="dense"
                  name="weightInput"
                  value={this.state.weightInput}
                  onChange={this.editFormHandler}
                />
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={4}>
                <TextField
                  className={classes.textField}
                  type="string"
                  label="Exercise Goal for the month."
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
                  type="string"
                  label="Food Goal for the month."
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
                  type="string"
                  label="Sleep Goal for the month."
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
                  type="string"
                  label="Miscellaneous Goal for the month."
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
                    onClick={this.submitCreateGoal}
                  >
                    <Typography variant="button">Submit Goal</Typography>
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

export default withStyles(styles)(CreateGoal);
