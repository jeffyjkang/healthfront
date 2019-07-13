import React, { Component } from "react";
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
//
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays } from "date-fns/esm";

const styles = () => ({
  container: {
    display: "flex"
  },
  chip: {
    float: "right",
    marginRight: 10
  },
  textField: {
    margin: 10
  },
  button: {
    margin: 10,
    height: 60,
    width: 140,
    marginTop: 100,
    marginRight: 25,
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
      endDateVal: "No Val"
    };
  }

  handleChangeStart = e => {
    const startDate = e;
    const endDate = new Date(e);
    Date(endDate.setDate(endDate.getDate() + 6));
    let startDateVal = startDate.toString().split(" ");
    startDateVal = `${startDateVal[1]} ${startDateVal[2]}`;
    let endDateVal = endDate.toString().split(" ");
    endDateVal = `${endDateVal[1]} ${endDateVal[2]}`;
    this.setState({
      ...this.state,
      startDate,
      endDate,
      startDateVal,
      endDateVal
    });
  };
  render() {
    const { classes } = this.props;
    console.log(this.props);
    // console.log(this.state);
    return (
      <div>
        <Dialog
          maxWidth={"md"}
          open={this.props.createPlanOpen}
          onClose={this.props.handleCloseCreatePlan}
          aria-labelledby="create-plan-title"
        >
          <DialogTitle id="create-plan-title">Create Weekly Plan</DialogTitle>
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
                />
              </Grid>
              <Grid item xs={4}>
                <DialogActions>
                  <Button
                    className={classes.button}
                    variant="contained"
                    color="primary"
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
