import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

const styles = () => ({
  container: {
    display: "flex"
  }
});

const PlanView = props => {
  const { classes } = props;
  console.log(props);
  const info = props => (
    <div>
      <List>something</List>
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
