import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Calendar from "react-calendar";

const styles = () => ({
  container: {
    minWidth: "95vw",
    margin: 10
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between"
  },
  button: {
    height: 50,
    margin: 10,
    color: "white",
    boxShadow:
      "0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12);"
  }
});

const NavBar = props => {
  const { classes } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  function handleClick(e) {
    setAnchorEl(e.currentTarget);
  }
  function handleClose() {
    setAnchorEl(null);
  }
  return (
    <div className={classes.container}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Button
            className={classes.button}
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            Calendar
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem>
              <Calendar />
            </MenuItem>
          </Menu>
          <h1>Health Logger</h1>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={props.signOut}
          >
            Sign Out
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

// export default NavBar;

export default withStyles(styles)(NavBar);
