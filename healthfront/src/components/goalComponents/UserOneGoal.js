import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import UserOnePlanContainer from "../planComponents/UserOnePlanContainer";

const styles = theme => ({
  container: {
    border: "1px solid #3F51B5",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "2rem"
  },
  paper: {
    width: "100%"
  },
  headerContainer: {
    margin: "auto",
    padding: ".5rem",
    borderBottom: "1px solid #3F51B5",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center"
    }
  },
  dateContainer: {
    textAlign: "center"
  },
  weightContainer: {
    textAlign: "center",
    marginTop: ".5rem"
  },
  buttonContainer: {
    textAlign: "end"
  },
  footerContainer: {
    borderTop: "1px solid #3F51B5",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      alignItems: "center"
    }
  }
});

const UserOneGoal = props => {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <Paper className={classes.paper}>
        <Grid className={classes.headerContainer} container>
          <Grid item xl={3} lg={3} md={3} sm={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => props.handleOpenCreatePlan(props.userOneGoal)}
            >
              <AddIcon />
              {"    "}
              <Typography variant="button">Add Plan</Typography>
            </Button>
          </Grid>
          <Grid
            className={classes.dateContainer}
            item
            xl={3}
            lg={3}
            md={3}
            sm={12}
          >
            <Typography variant="h6">
              {props.userOneGoal.date
                ? `Year: ${props.userOneGoal.date.split("-")[0]} / Month: ${
                    props.userOneGoal.date.split("-")[1]
                  }`
                : ""}
            </Typography>
          </Grid>
          <Grid
            className={classes.weightContainer}
            item
            xl={3}
            lg={3}
            md={3}
            sm={12}
          >
            <Typography variant="subtitle2">
              Weight: {props.userOneGoal.weight}
            </Typography>
          </Grid>
          <Grid
            className={classes.buttonContainer}
            item
            xl={3}
            lg={3}
            md={3}
            sm={12}
          >
            <Button
              variant="contained"
              color="primary"
              onClick={() => props.handleOpenEditGoal(props.userOneGoal)}
            >
              <Typography variant="button">Edit Goal</Typography>
              {"    "}
              <EditIcon />
            </Button>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <UserOnePlanContainer
              plans={props.userOneGoal.plans}
              handleOpenToggleDrawer={props.handleOpenToggleDrawer}
              handleOpenEditPlan={props.handleOpenEditPlan}
              handleOpenEditDay={props.handleOpenEditDay}
            />
          </Grid>
        </Grid>
        <Grid className={classes.footerContainer} container>
          <Grid item xl={3} lg={3} md={3} sm={3} xs={12}>
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="subtitle2">Exercise Goal</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography variant="body2">
                  {props.userOneGoal.exerciseGoal}
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Grid>
          <Grid item xl={3} lg={3} md={3} sm={3} xs={12}>
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography variant="subtitle2">Food Goal</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography variant="body2">
                  {props.userOneGoal.foodGoal}
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Grid>
          <Grid item xl={3} lg={3} md={3} sm={3} xs={12}>
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3a-content"
                id="panel3a-header"
              >
                <Typography variant="subtitle2">Sleep Goal</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography variant="body2">
                  {props.userOneGoal.sleepGoal}
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Grid>
          <Grid item xl={3} lg={3} md={3} sm={3} xs={12}>
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4a-content"
                id="panel4a-header"
              >
                <Typography variant="subtitle2">Misc Goal</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography variant="body2">
                  {props.userOneGoal.miscGoal}
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default withStyles(styles)(UserOneGoal);
