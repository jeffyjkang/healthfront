import React from "react";
import { withStyles } from "@material-ui/core/styles";
//
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
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

const styles = theme => ({
  container: {
    // display: "flex"
  },
  button: {
    display: "flex",
    justifyContent: "space-around",
    padding: 2,
    minWidth: 106
  },
  mainCard: {
    border: "2px ridge #3F51B5",
    [theme.breakpoints.down("lg")]: {
      marginTop: 5,
      marginBottom: 5,
      display: "flex",
      justifyContent: "space-around"
    },
    [theme.breakpoints.down("md")]: {
      display: "grid",
      gridTemplateColumns: "1fr 0fr 1fr 0fr 1fr 0fr",
      gridTemplateRows: "1fr"
    },
    [theme.breakpoints.down("sm")]: {
      display: "grid",
      gridTemplateColumns: "1fr 0fr 1fr 0fr",
      gridTemplateRows: "1fr"
    }
  }
});

const UserOneDay = props => {
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
  function handleClick2(e) {
    setAnchorEl2(e.currentTarget);
  }
  function handleClose2() {
    setAnchorEl2(null);
  }
  function handleClick3(e) {
    setAnchorEl3(e.currentTarget);
  }
  function handleClose3() {
    setAnchorEl3(null);
  }
  function handleClick4(e) {
    setAnchorEl4(e.currentTarget);
  }
  function handleClose4() {
    setAnchorEl4(null);
  }
  const open1 = Boolean(anchorEl1);
  const open2 = Boolean(anchorEl2);
  const open3 = Boolean(anchorEl3);
  const open4 = Boolean(anchorEl4);
  //
  const id1 = open1 ? "simple-popper1" : undefined;
  const id2 = open2 ? "simple-popper2" : undefined;
  const id3 = open3 ? "simple-popper3" : undefined;
  const id4 = open4 ? "simple-popper4" : undefined;
  //
  return (
    <div className={classes.container}>
      <Card className={classes.mainCard}>
        <Typography variant="subtitle2">
          Date:
          {props.userOneDay.dailyDate
            ? `
          ${props.userOneDay.dailyDate.split("-")[1]} / 
          ${props.userOneDay.dailyDate.split("-")[2].substring(0, 2)}
          `
            : ""}
        </Typography>
        <Divider />
        <Button
          className={classes.button}
          variant="outlined"
          aria-describedby={id1}
          onClick={handleClick1}
        >
          <SearchIcon fontSize="small" />
          <Typography variant="caption">E.Notes</Typography>
          <Badge
            color={props.userOneDay.exerciseComplete ? "primary" : "secondary"}
            variant="dot"
          >
            <FitnessIcon fontSize="small" />
          </Badge>
        </Button>
        <Popover
          id={id1}
          open={open1}
          anchorEl={anchorEl1}
          onClose={handleClose1}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center"
          }}
        >
          <Card className={classes.card}>
            <CardHeader title="Exercise Notes:" />
            <Divider />
            <CardContent>
              <Typography>
                {props.userOneDay.exerciseNotes
                  ? props.userOneDay.exerciseNotes
                  : "No notes have been added"}
              </Typography>
            </CardContent>
          </Card>
        </Popover>
        <Divider />
        <Button
          className={classes.button}
          variant="outlined"
          aria-describedby={id2}
          onClick={handleClick2}
        >
          <SearchIcon fontSize="small" />
          <Typography variant="caption">F.Notes</Typography>
          <Badge
            color={props.userOneDay.foodComplete ? "primary" : "secondary"}
            variant="dot"
          >
            <RestaurantIcon fontSize="small" />
          </Badge>
        </Button>
        <Popover
          id={id2}
          open={open2}
          anchorEl={anchorEl2}
          onClose={handleClose2}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center"
          }}
        >
          <Card className={classes.card}>
            <CardHeader title="Food Notes:" />
            <Divider />
            <CardContent>
              <Typography>
                {props.userOneDay.foodNotes
                  ? props.userOneDay.foodNotes
                  : "No notes have been added"}
              </Typography>
            </CardContent>
          </Card>
        </Popover>
        <Divider />
        <Button
          className={classes.button}
          variant="outlined"
          aria-describedby={id3}
          onClick={handleClick3}
        >
          <SearchIcon fontSize="small" />
          <Typography variant="caption">S.Notes</Typography>
          <Badge
            color={props.userOneDay.sleepComplete ? "primary" : "secondary"}
            variant="dot"
          >
            <HotelIcon fontSize="small" />
          </Badge>
        </Button>
        <Popover
          id={id3}
          open={open3}
          anchorEl={anchorEl3}
          onClose={handleClose3}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center"
          }}
        >
          <Card className={classes.card}>
            <CardHeader title="Sleep Notes:" />
            <Divider />
            <CardContent>
              <Typography>
                {props.userOneDay.sleepNotes
                  ? props.userOneDay.sleepNotes
                  : "No notes have been added"}
              </Typography>
            </CardContent>
          </Card>
        </Popover>
        <Divider />
        <Button
          className={classes.button}
          variant="outlined"
          aria-describedby={id4}
          onClick={handleClick4}
        >
          <SearchIcon fontSize="small" />
          <Typography variant="caption">M.Notes</Typography>
          <Badge
            color={props.userOneDay.miscComplete ? "primary" : "secondary"}
            variant="dot"
          >
            <CategoryIcon fontSize="small" />
          </Badge>
        </Button>
        <Popover
          id={id4}
          open={open4}
          anchorEl={anchorEl4}
          onClose={handleClose4}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center"
          }}
        >
          <Card className={classes.card}>
            <CardHeader title="Miscellaneous Notes:" />
            <Divider />
            <CardContent>
              <Typography>
                {props.userOneDay.miscNotes
                  ? props.userOneDay.miscNotes
                  : "No notes have been added"}
              </Typography>
            </CardContent>
          </Card>
        </Popover>
        <Divider />
        <Button
          className={classes.button}
          variant="outlined"
          color="primary"
          onClick={() => {
            props.handleOpenEditDay({ ...props.userOneDay, userId: 1 });
          }}
        >
          <Typography variant="caption">Update</Typography>
          <BuildIcon fontSize="small" />
        </Button>
      </Card>
    </div>
  );
};

export default withStyles(styles)(UserOneDay);
