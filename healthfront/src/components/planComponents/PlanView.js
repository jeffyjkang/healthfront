import React from "react";
//
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
//
import HotelIcon from "@material-ui/icons/Hotel";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import FitnessIcon from "@material-ui/icons/FitnessCenter";
import CategoryIcon from "@material-ui/icons/Category";
import AccessibilityIcon from "@material-ui/icons/Accessibility";

const styles = () => ({
  container: {
    display: "flex"
  },
  header: {
    marginTop: 10
  },
  card: {
    margin: 2
  },
  chip: {
    margin: 2
  },
  avatar: {
    backgroundColor: "#3F51B5"
  }
});

const PlanView = props => {
  const { classes } = props;
  const info = props => (
    <div>
      <Typography className={classes.header} variant="h3">
        Weekly Plan
      </Typography>
      <Divider />
      <Typography variant="subtitle1">
        From Date:
        <Chip
          className={classes.chip}
          variant="outlined"
          color="primary"
          label={
            props.currentPlan.fromDate
              ? `
          ${props.currentPlan.fromDate.split("-")[0]} / 
          ${props.currentPlan.fromDate.split("-")[1]} /
          ${props.currentPlan.fromDate.split("-")[2].substring(0, 2)}
          `
              : ""
          }
        />
        To Date:
        <Chip
          className={classes.chip}
          variant="outlined"
          color="primary"
          label={
            props.currentPlan.toDate
              ? `
          ${props.currentPlan.toDate.split("-")[0]} / 
          ${props.currentPlan.toDate.split("-")[1]} /
          ${props.currentPlan.toDate.split("-")[2].substring(0, 2)}
          `
              : ""
          }
        />
      </Typography>
      <Divider />
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar}>
              <AccessibilityIcon />
            </Avatar>
          }
          title={`Current Weight: ${
            props.currentPlan.weight ? props.currentPlan.weight : "No Input"
          }`}
        />
      </Card>
      <Divider />
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar}>
              <FitnessIcon />
            </Avatar>
          }
          title="Weekly Exercise Plan"
        />
        <CardContent>
          <Typography variant="body2">
            {props.currentPlan.exercisePlan}
          </Typography>
        </CardContent>
      </Card>
      <Divider />
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar}>
              <RestaurantIcon />
            </Avatar>
          }
          title="Weekly Food Plan"
        />
        <CardContent>
          <Typography variant="body2">{props.currentPlan.foodPlan}</Typography>
        </CardContent>
      </Card>
      <Divider />
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar}>
              <HotelIcon />
            </Avatar>
          }
          title="Weekly Sleep Plan"
        />
        <CardContent>
          <Typography variant="body2">{props.currentPlan.sleepPlan}</Typography>
        </CardContent>
      </Card>
      <Divider />
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar}>
              <CategoryIcon />
            </Avatar>
          }
          title="Weekly Miscellaneous Plan"
        />
        <CardContent>
          <Typography variant="body2">{props.currentPlan.miscPlan}</Typography>
        </CardContent>
      </Card>
    </div>
  );
  return (
    <div>
      <Drawer
        anchor="left"
        open={props.leftDrawerOpen}
        onClose={props.handleCloseToggleDrawer}
      >
        {info(props)}
      </Drawer>
      <Drawer
        anchor="right"
        open={props.rightDrawerOpen}
        onClose={props.handleCloseToggleDrawer}
      >
        {info(props)}
      </Drawer>
    </div>
  );
};

export default withStyles(styles)(PlanView);
