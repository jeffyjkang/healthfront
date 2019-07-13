import React, { Component } from "react";
//
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
//
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays } from "date-fns/esm";

const styles = () => ({
  container: {
    display: "flex"
  }
});

class CreatePlan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null
    };
  }

  handleChangeStart = e => {
    const startDate = e;
    const endDate = new Date(e);
    Date(endDate.setDate(endDate.getDate() + 6));
    this.setState({ ...this.state, startDate, endDate });
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
            <Typography variant="subtitle2">
              Pick a start day from the calendar
            </Typography>
            <DatePicker
              inline
              selected={this.state.startDate}
              startDate={this.state.startDate}
              endDate={addDays(this.state.startDate, 6)}
              onChange={this.handleChangeStart}
            />
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(CreatePlan);
