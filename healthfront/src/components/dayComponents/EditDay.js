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
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";
import Divider from "@material-ui/core/Divider";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";
//
const url = process.env.REACT_APP_URL;

const styles = () => ({
  container: {
    display: "flex"
  },
  header: {
    margin: 10,
    marginTop: 20
  },
  textField: {
    margin: 10
  },
  chip: {
    marginTop: 20,
    fontSize: 20
  },
  button: {
    margin: 10,
    marginRight: 20
  }
});

class EditDay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exerciseComplete: false,
      foodComplete: false,
      sleepComplete: false,
      miscComplete: false,
      exerciseNotes: "",
      foodNotes: "",
      sleepNotes: "",
      miscNotes: ""
    };
  }

  editFormHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleChange = name => e => {
    this.setState({ ...this.state, [name]: e.target.checked });
  };

  submitUpdatedDay = () => {
    const token = localStorage.getItem("token");
    const id = this.props.currentDay.id;
    const updatedDay = {
      exerciseComplete: this.state.exerciseComplete,
      foodComplete: this.state.foodComplete,
      sleepComplete: this.state.sleepComplete,
      miscComplete: this.state.miscComplete,
      exerciseNotes: this.state.exerciseNotes,
      foodNotes: this.state.foodNotes,
      sleepNotes: this.state.sleepNotes,
      miscNotes: this.state.miscNotes,
      planId: this.props.currentDay.planId
    };
    const auth = { headers: { authorization: token } };
    Axios.put(`${url}/day/${id}`, updatedDay, auth)
      .then(res => {
        console.log(res.status);
        toast.success("Successfully Edited Day Log");
        this.setState({
          exerciseComplete: false,
          foodComplete: false,
          sleepComplete: false,
          miscComplete: false,
          exerciseNotes: "",
          foodNotes: "",
          sleepNotes: "",
          miscNotes: ""
        });
        this.props.handleCloseEditDay();
        this.props.refresh();
      })
      .catch(error => {
        console.log(error);
        toast.error("Error Editing Day Log");
      });
  };

  onEnterDayEdit = () => {
    this.setState({
      ...this.state,
      exerciseComplete: Boolean(this.props.currentDay.exerciseComplete),
      foodComplete: Boolean(this.props.currentDay.foodComplete),
      sleepComplete: Boolean(this.props.currentDay.sleepComplete),
      miscComplete: Boolean(this.props.currentDay.miscComplete),
      exerciseNotes: this.props.currentDay.exerciseNotes
        ? this.props.currentDay.exerciseNotes
        : "",
      foodNotes: this.props.currentDay.foodNotes
        ? this.props.currentDay.foodNotes
        : "",
      sleepNotes: this.props.currentDay.sleepNotes
        ? this.props.currentDay.sleepNotes
        : "",
      miscNotes: this.props.currentDay.miscNotes
        ? this.props.currentDay.miscNotes
        : ""
    });
  };

  onExitDayEdit = () => {
    this.setState({
      exerciseComplete: false,
      foodComplete: false,
      sleepComplete: false,
      miscComplete: false,
      exerciseNotes: "",
      foodNotes: "",
      sleepNotes: "",
      miscNotes: ""
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Dialog
          maxWidth={"lg"}
          open={this.props.editDayOpen}
          onClose={this.props.handleCloseEditDay}
          onEnter={this.onEnterDayEdit}
          onExit={this.onExitDayEdit}
          aria-labelledby="edit-day-title"
        >
          <Grid container>
            <Grid item xs={4}>
              <Typography className={classes.header} variant="h5">
                Update Daily Health Log
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Chip
                className={classes.chip}
                label={`Date: ${
                  this.props.currentDay.dailyDate
                    ? `
                ${this.props.currentDay.dailyDate.split("-")[0]} / 
                ${this.props.currentDay.dailyDate.split("-")[1]} / 
                ${this.props.currentDay.dailyDate.split("-")[2].substring(0, 2)}
                `
                    : ""
                }`}
                color="primary"
              />
            </Grid>
            <Grid item xs={4}>
              <DialogActions>
                <Button
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  onClick={this.submitUpdatedDay}
                >
                  <Typography variant="button">Update daily log</Typography>
                  <DoneOutlineIcon />
                </Button>
              </DialogActions>
            </Grid>
          </Grid>
          <Divider />
          <DialogContent>
            <Grid container>
              <Grid item xs={3}>
                <Typography variant="subtitle2">
                  Exercise Objective{" "}
                  <Checkbox
                    checked={this.state.exerciseComplete}
                    onChange={this.handleChange("exerciseComplete")}
                    name="exerciseComplete"
                    value={this.state.exerciseComplete}
                    color="primary"
                  />
                </Typography>
                <TextField
                  className={classes.textField}
                  type="string"
                  label="Update Exercise Notes"
                  variant="outlined"
                  multiline={true}
                  rows={10}
                  rowsMax={10}
                  margin="dense"
                  name="exerciseNotes"
                  placeholder={this.props.currentDay.exerciseNotes}
                  value={this.state.exerciseNotes}
                  onChange={this.editFormHandler}
                />
              </Grid>
              <Grid item xs={3}>
                <Typography variant="subtitle2">
                  Food Objective
                  <Checkbox
                    checked={this.state.foodComplete}
                    onChange={this.handleChange("foodComplete")}
                    name="foodComplete"
                    value={this.state.foodComplete}
                    color="primary"
                  />
                </Typography>
                <TextField
                  className={classes.textField}
                  type="string"
                  label="Update Food Notes"
                  variant="outlined"
                  multiline={true}
                  rows={10}
                  rowsMax={10}
                  margin="dense"
                  name="foodNotes"
                  placeholder={this.props.currentDay.foodNotes}
                  value={this.state.foodNotes}
                  onChange={this.editFormHandler}
                />
              </Grid>
              <Grid item xs={3}>
                <Typography variant="subtitle2">
                  Sleep Objective
                  <Checkbox
                    checked={this.state.sleepComplete}
                    onChange={this.handleChange("sleepComplete")}
                    name="sleepComplete"
                    value={this.state.sleepComplete}
                    color="primary"
                  />
                </Typography>
                <TextField
                  className={classes.textField}
                  type="string"
                  label="Update Sleep Notes"
                  variant="outlined"
                  multiline={true}
                  rows={10}
                  rowsMax={10}
                  margin="dense"
                  name="sleepNotes"
                  placeholder={this.props.currentDay.sleepNotes}
                  value={this.state.sleepNotes}
                  onChange={this.editFormHandler}
                />
              </Grid>
              <Grid item xs={3}>
                <Typography variant="subtitle2">
                  Miscellaneous Objective
                  <Checkbox
                    checked={this.state.miscComplete}
                    onChange={this.handleChange("miscComplete")}
                    name="miscComplete"
                    value={this.state.miscComplete}
                    color="primary"
                  />
                </Typography>
                <TextField
                  className={classes.textField}
                  type="string"
                  label="Update Misc Notes"
                  variant="outlined"
                  multiline={true}
                  rows={10}
                  rowsMax={10}
                  margin="dense"
                  name="miscNotes"
                  placeholder={this.props.currentDay.miscNotes}
                  value={this.state.miscNotes}
                  onChange={this.editFormHandler}
                />
              </Grid>
            </Grid>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(EditDay);
