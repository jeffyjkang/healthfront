import React from "react";
import { withStyles } from "@material-ui/core/styles";
//
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Popover from "@material-ui/core/Popover";
import Divider from "@material-ui/core/Divider";
import Badge from "@material-ui/core/Badge";
//
import HotelIcon from "@material-ui/icons/Hotel";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import FitnessIcon from "@material-ui/icons/FitnessCenter";
import CategoryIcon from "@material-ui/icons/Category";
import SearchIcon from "@material-ui/icons/Search";
import BuildIcon from "@material-ui/icons/Build";

const styles = () => ({
  container: {
    border: "1px solid #3F51B5",
    display: "flex"
  },
  button: {
    display: "flex",
    justifyContent: "space-around",
    padding: 2,
    width: 106
  }
});

const UserTwoDay = props => {
  const { classes } = props;
  //
  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const [anchorEl3, setAnchorEl3] = React.useState(null);
  const [anchorEl4, setAnchorEl4] = React.useState(null);
  //
  function handleClick1(e) {
    setAnchorEl1(e.currentTarget);
  }
  function handleClose1() {
    setAnchorEl1(null);
  }
  console.log(props);
  return (
    <div>
      <Card>
        <Typography variant="subtitle2">
          Date: {"  "} {props.userTwoDay.dailyDate}
        </Typography>
        <Divider />
        <Button className={classes.button} variant="outlined">
          <SearchIcon fontSize="small" />
          <Typography variant="caption">Notes</Typography>
          <Badge
            color={props.userTwoDay.exerciseComplete ? "primary" : "secondary"}
            variant="dot"
          >
            <FitnessIcon fontSize="small" />
          </Badge>
        </Button>
        <Divider />
        <Button className={classes.button} variant="outlined">
          <SearchIcon fontSize="small" />
          <Typography variant="caption">Notes</Typography>
          <Badge
            color={props.userTwoDay.foodComplete ? "primary" : "secondary"}
            variant="dot"
          >
            <RestaurantIcon fontSize="small" />
          </Badge>
        </Button>
        <Divider />
        <Button className={classes.button} variant="outlined">
          <SearchIcon fontSize="small" />
          <Typography variant="caption">Notes</Typography>
          <Badge
            color={props.userTwoDay.sleepComplete ? "primary" : "secondary"}
            variant="dot"
          >
            <HotelIcon fontSize="small" />
          </Badge>
        </Button>
        <Divider />
        <Button className={classes.button} variant="outlined">
          <SearchIcon fontSize="small" />
          <Typography variant="caption">Notes</Typography>
          <Badge
            color={props.userTwoDay.miscComplete ? "primary" : "secondary"}
            variant="dot"
          >
            <CategoryIcon fontSize="small" />
          </Badge>
        </Button>
        <Divider />
        <Button className={classes.button} variant="outlined" color="primary">
          <Typography variant="caption">Update</Typography>
          <BuildIcon fontSize="small" />
        </Button>
      </Card>
    </div>
  );
};

export default withStyles(styles)(UserTwoDay);
