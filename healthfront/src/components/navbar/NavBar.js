import React from "react";
//
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import CreateNewFolderIcon from "@material-ui/icons/CreateNewFolder";
import SettingsIcon from "@material-ui/icons/Settings";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
//
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const styles = theme => ({
  container: {
    minWidth: "98vw",
    marginTop: "1rem",
    marginBottom: "2rem"
  },
  appBar: {
    borderRadius: 4,
    border: "1px solid white"
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column"
    }
  },
  button: {
    height: 50,
    margin: 10,
    color: "white",
    boxShadow:
      "0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12);",
    border: "1px solid white",
    [theme.breakpoints.down("sm")]: {
      width: "50vw"
    },
    [theme.breakpoints.down("xs")]: {
      width: "75vw"
    }
  },
  header: {
    [theme.breakpoints.down("md")]: {
      order: "-1"
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "200px"
    }
  }
});

const NavBar = props => {
  const { classes } = props;
  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);
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
  return (
    <div className={classes.container}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar className={classes.toolbar}>
          <Button
            className={classes.button}
            aria-controls="simple-menu1"
            aria-haspopup="true"
            onClick={handleClick1}
          >
            <Typography variant="button">Calendar</Typography>
          </Button>
          <Menu
            id="simple-menu1"
            anchorEl={anchorEl1}
            keepMounted
            open={Boolean(anchorEl1)}
            onClose={handleClose1}
          >
            <MenuItem>
              <DatePicker inline readOnly={true} selected={new Date()} />
            </MenuItem>
          </Menu>
          <Button
            className={classes.button}
            aria-controls="simple-menu2"
            aria-haspopup="true"
            onClick={handleClick2}
          >
            <Typography variant="button">Create Goal </Typography>
            {"  "} <CreateNewFolderIcon />
          </Button>
          <Menu
            id="simple-menu2"
            anchorEl={anchorEl2}
            keepMounted
            open={Boolean(anchorEl2)}
            onClose={handleClose2}
          >
            <MenuItem>
              <DatePicker showMonthYearPicker inline onChange={props.onMonth} />
            </MenuItem>
          </Menu>
          <Typography className={classes.header} variant="h2">
            Health Logger
          </Typography>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={props.handleOpenEditUser}
          >
            <SettingsIcon />{" "}
            <Typography variant="button">
              Edit user: {props.username}
            </Typography>
          </Button>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={props.signOut}
          >
            <Typography variant="button">Sign Out</Typography>
            {"  "}
            <PersonOutlineIcon />
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(NavBar);
