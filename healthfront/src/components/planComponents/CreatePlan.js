import React, { Component } from "react";
import Axios from "axios";
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
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Divider from "@material-ui/core/Divider";
//
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays } from "date-fns/esm";
//
const url = process.env.REACT_APP_URL;

const styles = () => ({
  container: {
    display: "flex"
  },
  chip: {
    marginLeft: 20
  },
  textField: {
    margin: 20
  },
  button: {
    height: 60,
    width: 140,
    marginTop: 20,
    marginRight: 45,
    fontSize: 15
  }
});

class CreatePlan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      startDateVal: "No Val",
      endDateVal: "No Val",
      exercisePlanInput: "",
      foodPlanInput: "",
      sleepPlanInput: "",
      miscPlanInput: "",
      weightInput: ""
    };
  }

  editFormHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleChangeStart = e => {
    const startDate = e;
    const endDate = new Date(e);
    Date(endDate.setDate(endDate.getDate() + 6));
    let startDateVal = startDate.toString().split(" ");
    startDateVal = `${startDateVal[1]}-${startDateVal[2]}-${startDateVal[3]}`;
    let endDateVal = endDate.toString().split(" ");
    endDateVal = `${endDateVal[1]}-${endDateVal[2]}-${endDateVal[3]}`;
    this.setState({
      ...this.state,
      startDate,
      endDate,
      startDateVal,
      endDateVal
    });
  };

  submitCreatePlan = () => {
    if (this.state.startDateVal === "No Val") {
      return toast.error("You must pick a start date to submit a plan");
    }
    const token = localStorage.getItem("token");
    const newPlan = {
      fromDate: this.state.startDateVal,
      toDate: this.state.endDateVal,
      exercisePlan: this.state.exercisePlanInput,
      foodPlan: this.state.foodPlanInput,
      sleepPlan: this.state.sleepPlanInput,
      miscPlan: this.state.miscPlanInput,
      weight: this.state.weightInput,
      goalId: this.props.cGoalId
    };
    const auth = { headers: { authorization: token } };
    Axios.post(`${url}/plan`, newPlan, auth)
      .then(res => {
        console.log(res.status);
        toast.success("Plan created");
        this.setState({
          startDate: null,
          endDate: null,
          startDateVal: "No Val",
          endDateVal: "No Val",
          exercisePlanInput: "",
          foodPlanInput: "",
          sleepPlanInput: "",
          miscPlanInput: "",
          weightInput: ""
        });
        this.props.handleCloseCreatePlan();
        this.props.refresh();
      })
      .catch(error => {
        console.log(error);
        toast.error("Error Creating Plan");
      });
  };

  onExitPlanCreate = () => {
    this.setState({
      startDate: null,
      endDate: null,
      startDateVal: "No Val",
      endDateVal: "No Val",
      exercisePlanInput: "",
      foodPlanInput: "",
      sleepPlanInput: "",
      miscPlanInput: "",
      weightInput: ""
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Dialog
          maxWidth={"md"}
          open={this.props.createPlanOpen}
          onClose={this.props.handleCloseCreatePlan}
          onExit={this.onExitPlanCreate}
          aria-labelledby="create-plan-title"
        >
          <DialogTitle id="create-plan-title">Create Weekly Plan</DialogTitle>
          <Divider />
          <DialogContent>
            <Grid container>
              <Grid item xs={4}>
                <Typography variant="subtitle2">
                  Pick a start day from the calendar
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Chip
                  className={classes.chip}
                  label={`Start Date: ${this.state.startDateVal}`}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={4}>
                <Chip
                  className={classes.chip}
                  label={`End Date: ${this.state.endDateVal}`}
                  variant="outlined"
                />
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={4}>
                <DatePicker
                  inline
                  selected={this.state.startDate}
                  startDate={this.state.startDate}
                  endDate={addDays(this.state.startDate, 6)}
                  onChange={this.handleChangeStart}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  className={classes.textField}
                  type="string"
                  label="Weekly exercise plan."
                  variant="outlined"
                  multiline={true}
                  rows={10}
                  rowsMax={10}
                  margin="dense"
                  name="exercisePlanInput"
                  value={this.state.exercisePlanInput}
                  onChange={this.editFormHandler}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  className={classes.textField}
                  type="string"
                  label="Weekly food plan."
                  variant="outlined"
                  multiline={true}
                  rows={10}
                  rowsMax={10}
                  margin="dense"
                  name="foodPlanInput"
                  value={this.state.foodPlanInput}
                  onChange={this.editFormHandler}
                />
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={4}>
                <TextField
                  className={classes.textField}
                  type="string"
                  label="Weekly sleep plan."
                  variant="outlined"
                  multiline={true}
                  rows={10}
                  rowsMax={10}
                  margin="dense"
                  name="sleepPlanInput"
                  value={this.state.sleepPlanInput}
                  onChange={this.editFormHandler}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  className={classes.textField}
                  type="string"
                  label="Weekly misc plan."
                  variant="outlined"
                  multiline={true}
                  rows={10}
                  rowsMax={10}
                  margin="dense"
                  name="miscPlanInput"
                  value={this.state.miscPlanInput}
                  onChange={this.editFormHandler}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  className={classes.textField}
                  type="number"
                  label="Current Weight"
                  variant="outlined"
                  margin="dense"
                  name="weightInput"
                  value={this.state.weightInput}
                  onChange={this.editFormHandler}
                />
                <DialogActions>
                  <Button
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    onClick={this.submitCreatePlan}
                  >
                    <Typography variant="button">Submit Plan</Typography>
                    {"  "}
                    <AddCircleIcon />
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

export default withStyles(styles)(CreatePlan);
